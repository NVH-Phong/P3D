"use client";

import React, { useState, useEffect } from "react";
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
  const [scrollOpacity, setScrollOpacity] = useState<number>(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 500; // Fade completes after 500px of scrolling
      // Calculate how far up the fade should reach (0% = bottom, 100% = fully faded)
      const fadeProgress = Math.min(100, (scrollPosition / maxScroll) * 100);
      setScrollOpacity(fadeProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    const effectiveVolumeFraction =
      shellFraction + (1 - shellFraction) * infillFraction;

    return (modelVolume * density * effectiveVolumeFraction).toFixed(1);
  };

  return (
    <div className="bg-gradient-to-br from-[#edb7b7]/10 via-white to-[#edb7b7]/20 min-h-screen">
      {/* Hero Section with Background Pattern */}
      <div
        className="relative transition-all duration-700 ease-out"
        style={{
          background: `linear-gradient(to top, white 0%, white ${scrollOpacity}%, #1d1145 ${scrollOpacity}%, #1d1145 100%)`
        }}
      >
        <Container>
          <div className="relative py-16 md:py-20">
            <div className="max-w-4xl">
              <div
                className="inline-block mb-4 px-5 py-2.5 border-2 rounded-xl transition-all duration-300 ease-out"
                style={{
                  backgroundColor: scrollOpacity < 20 ? '#1d1145' : `rgba(29, 17, 69, ${1 - scrollOpacity / 100})`,
                  borderColor: scrollOpacity < 20 ? '#6b5b95' : `rgba(107, 91, 149, ${1 - scrollOpacity / 100})`
                }}
              >
                <span
                  className="text-xs font-bold tracking-wider uppercase transition-colors duration-300 ease-out"
                  style={{
                    color: scrollOpacity < 20 ? 'white' : `rgb(${Math.round(255 - scrollOpacity * 2)}, ${Math.round(255 - scrollOpacity * 2)}, ${Math.round(255 - scrollOpacity * 2)})`
                  }}
                >
                  Professional 3D Printing Service
                </span>
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-colors duration-300 ease-out"
                style={{
                  color: scrollOpacity < 20
                    ? 'white'
                    : `rgb(${Math.round(255 - scrollOpacity * 2.35)}, ${Math.round(255 - scrollOpacity * 2.35)}, ${Math.round(255 - scrollOpacity * 2.35)})`
                }}
              >
                Custom 3D Printing
                <span
                  className="block text-transparent bg-clip-text transition-all duration-300 ease-out"
                  style={{
                    backgroundImage: scrollOpacity < 20
                      ? 'linear-gradient(to right, #0db4b9, #e76d89)'
                      : `linear-gradient(to right, rgb(${Math.round(13 + scrollOpacity * 0.3)}, ${Math.round(180 - scrollOpacity * 1.5)}, ${Math.round(185 - scrollOpacity * 1.6)}), rgb(${Math.round(231 - scrollOpacity * 1.8)}, ${Math.round(109 - scrollOpacity * 0.2)}, ${Math.round(137 - scrollOpacity * 0.8)}))`
                  }}
                >
                  Made to Order
                </span>
              </h1>
              <p
                className="text-lg md:text-xl max-w-3xl leading-relaxed transition-colors duration-300 ease-out"
                style={{
                  color: scrollOpacity < 20
                    ? `rgb(237, 183, 183)`
                    : `rgb(${Math.round(237 - scrollOpacity * 1.9)}, ${Math.round(183 - scrollOpacity * 1.3)}, ${Math.round(183 - scrollOpacity * 1.3)})`
                }}
              >
                Transform your ideas into reality with precision engineering.
                Upload your STL file, select premium materials, and customize
                every aspect of your print. Our advanced manufacturing ensures
                exceptional quality and accuracy for your custom designs.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            {/* 3D Viewer - Left side */}
            <div className="lg:col-span-7 order-1">
              <div className="sticky top-8">
                <div className="bg-white rounded-3xl border border-[#edb7b7]/40 shadow-xl shadow-[#1d1145]/10 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#1d1145] to-[#1d1145]/90 px-6 py-4 border-b border-[#e76d89]/30">
                    <h3 className="text-lg font-semibold text-white">
                      3D Model Preview
                    </h3>
                    <p className="text-sm text-[#edb7b7] mt-1">
                      Real-time visualization of your design
                    </p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-[#edb7b7]/5 to-white">
                    <div className="bg-white rounded-xl border-2 border-[#edb7b7]/50 shadow-inner h-[400px] md:h-[550px] overflow-hidden">
                      <STLViewer
                        color={selectedColorHex}
                        surfaceFinish={surfaceFinish}
                        onVolumeCalculated={setModelVolume}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Configuration Form - Right side */}
            <div className="lg:col-span-5 order-2">
              <div className="bg-white rounded-3xl border border-[#edb7b7]/40 shadow-xl shadow-[#1d1145]/10 overflow-hidden">
                <div className="bg-gradient-to-r from-[#1d1145] to-[#1d1145]/90 px-6 py-4 border-b border-[#e76d89]/30">
                  <h2 className="text-lg font-semibold text-white">
                    Print Configuration
                  </h2>
                  <p className="text-sm text-[#edb7b7] mt-1">
                    Customize your specifications
                  </p>
                </div>

                <div className="p-6 md:p-8 space-y-8">
                  {/* Material Selection */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-5 bg-gradient-to-b from-[#0db4b9] to-[#e76d89] rounded-full"></div>
                      <Label
                        htmlFor="material"
                        className="text-base font-bold text-[#1d1145] tracking-tight"
                      >
                        Material Type
                      </Label>
                    </div>
                    <Select value={material} onValueChange={setMaterial}>
                      <SelectTrigger
                        id="material"
                        className="h-12 rounded-xl bg-[#edb7b7]/5 border-[#edb7b7]/40 hover:border-[#0db4b9]/60 transition-colors"
                      >
                        <SelectValue placeholder="Select material" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        {materialOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-[#1d1145]/70 leading-relaxed">
                      Choose the filament material for your print
                    </p>
                  </div>

                  <Separator className="bg-[#edb7b7]/30" />

                  {/* Color Selection */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-5 bg-gradient-to-b from-[#0db4b9] to-[#e76d89] rounded-full"></div>
                      <Label
                        htmlFor="color"
                        className="text-base font-bold text-[#1d1145] tracking-tight"
                      >
                        Color Selection
                      </Label>
                    </div>
                    <Select value={color} onValueChange={setColor}>
                      <SelectTrigger
                        id="color"
                        className="h-12 rounded-xl bg-[#edb7b7]/5 border-[#edb7b7]/40 hover:border-[#0db4b9]/60 transition-colors"
                      >
                        <SelectValue placeholder="Select color" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        {colorOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            <div className="flex items-center gap-2">
                              <div
                                className="w-5 h-5 rounded-full border-2 border-[#edb7b7]/50 shadow-sm"
                                style={{ backgroundColor: option.hex }}
                              />
                              {option.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-[#1d1145]/70 leading-relaxed">
                      Select your preferred color finish
                    </p>
                  </div>

                  <Separator className="bg-[#edb7b7]/30" />

                  {/* Infill Percentage */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-5 bg-gradient-to-b from-[#0db4b9] to-[#e76d89] rounded-full"></div>
                      <Label className="text-base font-bold text-[#1d1145] tracking-tight">
                        Infill Density
                      </Label>
                    </div>
                    <div className="flex justify-between items-center gap-4 mb-3">
                      <span className="text-sm font-medium text-[#1d1145]/80">
                        Structural density
                      </span>
                      <div className="flex items-center gap-3 bg-[#edb7b7]/10 border border-[#edb7b7]/40 rounded-xl px-4 py-2">
                        <Input
                          type="number"
                          min={10}
                          max={100}
                          value={infillPercentage[0]}
                          onChange={(e) => {
                            const value = parseInt(e.target.value) || 10;
                            const clampedValue = Math.min(
                              100,
                              Math.max(10, value)
                            );
                            setInfillPercentage([clampedValue]);
                          }}
                          className="w-16 h-9 text-center font-bold border-none bg-transparent shadow-none focus-visible:ring-0 text-[#1d1145]"
                        />
                        <span className="text-lg font-bold text-[#1d1145]">
                          %
                        </span>
                      </div>
                    </div>
                    <div className="bg-[#edb7b7]/10 rounded-xl p-4 border border-[#edb7b7]/30">
                      <Slider
                        value={infillPercentage}
                        onValueChange={setInfillPercentage}
                        min={10}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between items-center mt-3 text-xs">
                        <span className="text-[#1d1145]/60 font-medium">
                          10% Light
                        </span>
                        <span className="text-[#1d1145]/60 font-medium">
                          100% Solid
                        </span>
                      </div>
                    </div>
                    {infillPercentage[0] === 25 && (
                      <div className="flex items-center gap-2 bg-[#0db4b9]/10 border border-[#0db4b9]/30 rounded-xl px-3 py-2">
                        <div className="w-1.5 h-1.5 bg-[#0db4b9] rounded-full"></div>
                        <span className="text-xs font-semibold text-[#1d1145]">
                          Recommended for optimal strength-to-weight ratio
                        </span>
                      </div>
                    )}
                    <div className="flex flex-col gap-2 text-sm">
                      <p className="text-[#1d1145]/70">
                        Higher infill increases strength and weight
                      </p>
                      {modelVolume > 0 && (
                        <div className="flex items-center justify-between bg-[#0db4b9]/10 border border-[#0db4b9]/30 rounded-xl px-4 py-2.5">
                          <span className="text-[#1d1145] font-medium">
                            Estimated Weight
                          </span>
                          <span className="text-lg font-bold text-[#1d1145]">
                            {calculateWeight()}g
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <Separator className="bg-[#edb7b7]/30" />

                  {/* Surface Finish */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-5 bg-gradient-to-b from-[#0db4b9] to-[#e76d89] rounded-full"></div>
                      <Label className="text-base font-bold text-[#1d1145] tracking-tight">
                        Surface Finish
                      </Label>
                    </div>
                    <RadioGroup
                      value={surfaceFinish}
                      onValueChange={setSurfaceFinish}
                      className="space-y-3"
                    >
                      {surfaceFinishOptions.map((option) => (
                        <div
                          key={option.value}
                          className="flex items-center space-x-3 bg-[#edb7b7]/5 border border-[#edb7b7]/40 rounded-xl px-4 py-3 hover:bg-[#edb7b7]/10 hover:border-[#0db4b9]/50 transition-colors cursor-pointer"
                        >
                          <RadioGroupItem
                            value={option.value}
                            id={option.value}
                          />
                          <label
                            htmlFor={option.value}
                            className="text-sm font-semibold text-[#1d1145] leading-none cursor-pointer flex-1"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </RadioGroup>
                    <p className="text-sm text-[#1d1145]/70 leading-relaxed">
                      Select your desired surface finish quality
                    </p>
                  </div>

                  <Separator className="bg-[#edb7b7]/30 my-8" />

                  {/* Submit Button */}
                  <div className="space-y-3">
                    <Button
                      className="w-full h-14 text-base font-bold rounded-xl bg-gradient-to-r from-[#e76d89] to-[#0db4b9] hover:from-[#e76d89]/90 hover:to-[#0db4b9]/90 text-white shadow-lg shadow-[#e76d89]/30 hover:shadow-xl hover:shadow-[#e76d89]/40 transition-all duration-200"
                      size="lg"
                    >
                      Request Professional Quote
                    </Button>
                    <p className="text-xs text-center text-[#1d1145]/60 leading-relaxed px-4">
                      Our team will review your specifications and provide a
                      detailed quote within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
