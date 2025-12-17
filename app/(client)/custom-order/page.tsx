"use client";

import React, { useState } from "react";
import Container from "@/components/Container";
import STLViewer from "@/components/STLViewer";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  materialOptions,
  colorOptions,
  surfaceFinishOptions,
} from "@/constants";
import { Separator } from "@/components/ui/separator";

export default function CustomOrderPage() {
  const [material, setMaterial] = useState<string>(materialOptions[0].value);
  const [color, setColor] = useState<string>(colorOptions[0].value);
  const [infillPercentage, setInfillPercentage] = useState<number[]>([25]);
  const [surfaceFinish, setSurfaceFinish] = useState<string>(
    surfaceFinishOptions[0].value
  );
  const [modelVolume, setModelVolume] = useState<number>(0);

  const selectedColorHex =
    colorOptions.find((c) => c.value === color)?.hex || colorOptions[0].hex;

  // Material densities in g/cm³
  const materialDensities: { [key: string]: number } = {
    pla: 1.24,
    "hyper-pla": 1.22,
    "matte-pla": 1.25,
  };

  // Calculate estimated weight based on volume and infill
  const calculateWeight = () => {
    if (modelVolume === 0) return 0;
    const density = materialDensities[material] || 1.24;

    // Simple estimate:
    // At 100% infill = full volume
    // At lower infill = shells (walls + top/bottom) + infill interior
    // Assuming shells take ~15% of volume (2-3 perimeters + top/bottom layers)
    const shellFraction = 0.15;
    const infillFraction = infillPercentage[0] / 100;
    const effectiveVolumeFraction = shellFraction + (1 - shellFraction) * infillFraction;

    return (modelVolume * density * effectiveVolumeFraction).toFixed(1);
  };


  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <Container>
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Custom 3D Printing Orders
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Transform your ideas into reality with our custom 3D printing
            service. Upload your STL file, choose your preferred material and
            color, and customize the print settings to get exactly what you
            need. We use high-quality filaments and precision printing to ensure
            your custom designs come out perfect every time.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* 3D Viewer - Left side on desktop, top on mobile */}
          <div className="order-1 lg:order-1">
            <div className="bg-white rounded-lg border shadow-sm p-4 h-[400px] md:h-[600px]">
              <STLViewer
                color={selectedColorHex}
                surfaceFinish={surfaceFinish}
                onVolumeCalculated={setModelVolume}
              />
            </div>
          </div>

          {/* Configuration Form - Right side on desktop, bottom on mobile */}
          <div className="order-2 lg:order-2">
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-6">
                Configure Your Print
              </h2>

              <div className="space-y-6">
                {/* Material Selection */}
                <div className="space-y-2">
                  <Label htmlFor="material" className="text-base font-semibold">
                    Material
                  </Label>
                  <Select value={material} onValueChange={setMaterial}>
                    <SelectTrigger id="material">
                      <SelectValue placeholder="Select material" />
                    </SelectTrigger>
                    <SelectContent>
                      {materialOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-500">
                    Choose the filament material for your print
                  </p>
                </div>

                <Separator />

                {/* Color Selection */}
                <div className="space-y-2">
                  <Label htmlFor="color" className="text-base font-semibold">
                    Color
                  </Label>
                  <Select value={color} onValueChange={setColor}>
                    <SelectTrigger id="color">
                      <SelectValue placeholder="Select color" />
                    </SelectTrigger>
                    <SelectContent>
                      {colorOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div className="flex items-center gap-2">
                            <div
                              className="w-4 h-4 rounded-full border"
                              style={{ backgroundColor: option.hex }}
                            />
                            {option.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-500">
                    Select your preferred color
                  </p>
                </div>

                <Separator />

                {/* Infill Percentage */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center gap-4">
                    <Label className="text-base font-semibold">
                      Infill Percentage
                    </Label>
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        min={10}
                        max={100}
                        value={infillPercentage[0]}
                        onChange={(e) => {
                          const value = parseInt(e.target.value) || 10;
                          const clampedValue = Math.min(100, Math.max(10, value));
                          setInfillPercentage([clampedValue]);
                        }}
                        className="w-16 h-8 text-center"
                      />
                      <span className="text-lg font-bold text-primary">
                        %
                        {infillPercentage[0] === 25 && (
                          <span className="text-xs text-green-600 ml-2">
                            (Recommended)
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                  <Slider
                    value={infillPercentage}
                    onValueChange={setInfillPercentage}
                    min={10}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">
                      Higher infill = more strength but more material
                    </span>
                    {modelVolume > 0 && (
                      <span className="font-semibold text-gray-700">
                        Est. Weight: {calculateWeight()}g
                      </span>
                    )}
                  </div>
                </div>

                <Separator />

                {/* Surface Finish */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">
                    Surface Finish
                  </Label>
                  <RadioGroup
                    value={surfaceFinish}
                    onValueChange={setSurfaceFinish}
                  >
                    {surfaceFinishOptions.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-2"
                      >
                        <RadioGroupItem value={option.value} id={option.value} />
                        <label
                          htmlFor={option.value}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                  <p className="text-sm text-gray-500">
                    Select your desired surface finish
                  </p>
                </div>

                <Separator className="my-6" />

                {/* Submit Button */}
                <Button className="w-full" size="lg">
                  Request Quote
                </Button>
                <p className="text-xs text-center text-gray-500 mt-2">
                  We'll review your specifications and get back to you with a
                  quote
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
