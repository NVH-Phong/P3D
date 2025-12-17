"use client";

import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid, GizmoHelper, GizmoViewport, Text } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import * as THREE from "three";
import { Upload } from "lucide-react";
import { Button } from "./ui/button";

// Calculate volume of a mesh using the divergence theorem
function calculateVolume(geometry: THREE.BufferGeometry): number {
  const positions = geometry.attributes.position;
  let volume = 0;

  for (let i = 0; i < positions.count; i += 3) {
    const v1 = new THREE.Vector3(
      positions.getX(i),
      positions.getY(i),
      positions.getZ(i)
    );
    const v2 = new THREE.Vector3(
      positions.getX(i + 1),
      positions.getY(i + 1),
      positions.getZ(i + 1)
    );
    const v3 = new THREE.Vector3(
      positions.getX(i + 2),
      positions.getY(i + 2),
      positions.getZ(i + 2)
    );

    // Calculate signed volume of tetrahedron formed by triangle and origin
    volume += v1.dot(new THREE.Vector3().crossVectors(v2, v3)) / 6;
  }

  return Math.abs(volume);
}

interface STLViewerProps {
  color?: string;
  surfaceFinish?: string;
  onVolumeCalculated?: (volume: number) => void;
}

function Model({ url, color, surfaceFinish, onVolumeCalculated }: { url: string; color: string; surfaceFinish?: string; onVolumeCalculated?: (volume: number) => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);
  const [baseGeometry, setBaseGeometry] = useState<THREE.BufferGeometry | null>(null);

  React.useEffect(() => {
    const loader = new STLLoader();
    loader.load(
      url,
      (loadedGeometry) => {
        // Find the largest flat surface by grouping coplanar triangles
        const positionAttribute = loadedGeometry.attributes.position;
        const normalGroups = new Map<string, { normal: THREE.Vector3; totalArea: number }>();
        const tolerance = 0.01; // Tolerance for considering normals as same direction

        // Analyze each triangle and group by normal direction
        for (let i = 0; i < positionAttribute.count; i += 3) {
          const v1 = new THREE.Vector3().fromBufferAttribute(positionAttribute, i);
          const v2 = new THREE.Vector3().fromBufferAttribute(positionAttribute, i + 1);
          const v3 = new THREE.Vector3().fromBufferAttribute(positionAttribute, i + 2);

          // Calculate triangle area and normal
          const edge1 = new THREE.Vector3().subVectors(v2, v1);
          const edge2 = new THREE.Vector3().subVectors(v3, v1);
          const cross = new THREE.Vector3().crossVectors(edge1, edge2);
          const area = cross.length() / 2;
          const normal = cross.normalize();

          // Round normal components to group similar normals
          const key = `${normal.x.toFixed(2)}_${normal.y.toFixed(2)}_${normal.z.toFixed(2)}`;

          if (normalGroups.has(key)) {
            normalGroups.get(key)!.totalArea += area;
          } else {
            normalGroups.set(key, { normal: normal.clone(), totalArea: area });
          }
        }

        // Find the normal with the largest total area
        let maxArea = 0;
        let largestFaceNormal = new THREE.Vector3(0, 1, 0);

        normalGroups.forEach((group) => {
          if (group.totalArea > maxArea) {
            maxArea = group.totalArea;
            largestFaceNormal = group.normal;
          }
        });

        // Create rotation to align largest flat surface with XY plane (normal pointing down)
        const targetNormal = new THREE.Vector3(0, -1, 0); // Point down so surface faces up
        const quaternion = new THREE.Quaternion();
        quaternion.setFromUnitVectors(largestFaceNormal, targetNormal);

        // Apply rotation
        loadedGeometry.applyQuaternion(quaternion);

        // Scale from mm to cm (STL files are typically in mm, our scene is in cm)
        loadedGeometry.scale(0.1, 0.1, 0.1);

        // Center the geometry
        loadedGeometry.center();

        // Compute bounding box to place on the build plate
        loadedGeometry.computeBoundingBox();
        const boundingBox = loadedGeometry.boundingBox!;
        const offset = -boundingBox.min.y; // Offset to place bottom on Y=0
        loadedGeometry.translate(0, offset, 0);

        // Calculate volume of the model
        const volume = calculateVolume(loadedGeometry);
        if (onVolumeCalculated) {
          onVolumeCalculated(volume);
        }

        // Store both base geometry and current geometry
        setBaseGeometry(loadedGeometry.clone());
        setGeometry(loadedGeometry);
      },
      undefined,
      (error) => {
        console.error("Error loading STL:", error);
      }
    );
  }, [url]);

  // Apply fuzzy skin effect when surface finish changes
  React.useEffect(() => {
    if (!baseGeometry) return;

    if (surfaceFinish === "fuzzy-skin") {
      // Clone the base geometry and apply fuzzy skin effect
      const fuzzyGeometry = baseGeometry.clone();
      const positions = fuzzyGeometry.attributes.position;
      const normals = fuzzyGeometry.attributes.normal;

      // Create a more pronounced fuzzy texture
      // Use Perlin-like noise for organic appearance
      const seed = Math.random() * 1000;

      // Add random displacement to vertices (fuzzy skin effect)
      for (let i = 0; i < positions.count; i++) {
        const normal = new THREE.Vector3(
          normals.getX(i),
          normals.getY(i),
          normals.getZ(i)
        );

        const x = positions.getX(i);
        const y = positions.getY(i);
        const z = positions.getZ(i);

        // Create pseudo-random but continuous noise pattern
        const noise = (
          Math.sin(x * 10 + seed) *
          Math.cos(y * 10 + seed) *
          Math.sin(z * 10 + seed)
        ) * 0.5 + 0.5;

        // Random displacement with noise-based variation (0.2 to 0.5 mm)
        const baseDisplacement = Math.random() * 0.03 + 0.02;
        const displacementAmount = baseDisplacement * (0.5 + noise * 0.5);

        positions.setX(i, x + normal.x * displacementAmount);
        positions.setY(i, y + normal.y * displacementAmount);
        positions.setZ(i, z + normal.z * displacementAmount);
      }

      positions.needsUpdate = true;
      fuzzyGeometry.computeVertexNormals();
      setGeometry(fuzzyGeometry);
    } else {
      // Use original geometry for normal finish
      setGeometry(baseGeometry.clone());
    }
  }, [surfaceFinish, baseGeometry]);

  if (!geometry) return null;

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial
        color={color}
        roughness={surfaceFinish === "fuzzy-skin" ? 1.0 : 0.5}
        metalness={0.0}
        flatShading={surfaceFinish === "fuzzy-skin"}
      />
    </mesh>
  );
}

function GridWithLabels() {
  const gridSize = 30; // 300mm = 30cm
  const gridStep = 5; // Labels every 5cm
  const labels = [];

  // Create labels for X axis
  for (let i = -gridSize / 2; i <= gridSize / 2; i += gridStep) {
    if (i === 0) continue;
    labels.push(
      <Text
        key={`x-${i}`}
        position={[i, 0, -gridSize / 2 - 2]}
        fontSize={0.8}
        color="#374151"
        anchorX="center"
        anchorY="middle"
      >
        {i * 10}mm
      </Text>
    );
  }

  // Create labels for Z axis
  for (let i = -gridSize / 2; i <= gridSize / 2; i += gridStep) {
    if (i === 0) continue;
    labels.push(
      <Text
        key={`z-${i}`}
        position={[-gridSize / 2 - 2, 0, i]}
        fontSize={0.8}
        color="#374151"
        anchorX="center"
        anchorY="middle"
        rotation={[0, Math.PI / 2, 0]}
      >
        {i * 10}mm
      </Text>
    );
  }

  return (
    <group>
      <Grid
        args={[gridSize, gridSize]}
        cellSize={1}
        cellThickness={0.5}
        cellColor="#9ca3af"
        sectionSize={gridStep}
        sectionThickness={1.5}
        sectionColor="#374151"
        fadeDistance={100}
        fadeStrength={1}
        followCamera={false}
        infiniteGrid={false}
      />
      {labels}
      {/* Border box to show 300mm x 300mm build area */}
      <lineSegments>
        <edgesGeometry
          attach="geometry"
          args={[
            new THREE.BoxGeometry(gridSize, 0.1, gridSize),
          ]}
        />
        <lineBasicMaterial attach="material" color="#374151" linewidth={2} />
      </lineSegments>
    </group>
  );
}

export default function STLViewer({ color = "#3b82f6", surfaceFinish = "normal", onVolumeCalculated }: STLViewerProps) {
  const [stlFile, setStlFile] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = (file: File) => {
    if (!file) return;

    // Check file extension (case-insensitive)
    const fileName = file.name.toLowerCase();
    if (!fileName.endsWith(".stl")) {
      alert("Please upload a valid STL file");
      return;
    }

    try {
      const url = URL.createObjectURL(file);
      setStlFile(url);
    } catch (error) {
      console.error("Error creating file URL:", error);
      alert("Failed to load the file. Please try again.");
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  return (
    <div className="w-full h-full flex flex-col">
      {!stlFile ? (
        <div
          className={`w-full h-full flex flex-col items-center justify-center border-2 border-dashed rounded-lg transition-colors ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-gray-300 bg-gray-50"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="w-16 h-16 text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Upload Your 3D Model
          </h3>
          <p className="text-sm text-gray-500 mb-4 text-center px-4">
            Drag and drop an STL file here, or click to browse
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".stl,.STL"
            onChange={handleFileUpload}
            className="hidden"
          />
          <Button onClick={() => fileInputRef.current?.click()}>
            Choose STL File
          </Button>
        </div>
      ) : (
        <div className="w-full h-full relative">
          <Canvas camera={{ position: [30, 30, 30], fov: 50 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Model url={stlFile} color={color} surfaceFinish={surfaceFinish} onVolumeCalculated={onVolumeCalculated} />
              <GridWithLabels />
              <OrbitControls makeDefault />
              <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
                <GizmoViewport
                  axisColors={["#ef4444", "#22c55e", "#3b82f6"]}
                  labelColor="white"
                />
              </GizmoHelper>
            </Suspense>
          </Canvas>
          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded-md text-xs">
            Build area: 300mm × 300mm
          </div>
          <Button
            onClick={() => {
              setStlFile(null);
              if (fileInputRef.current) {
                fileInputRef.current.value = "";
              }
            }}
            variant="outline"
            className="absolute top-4 right-4"
          >
            Change File
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".stl,.STL"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
      )}
    </div>
  );
}
