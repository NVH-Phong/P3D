import React from "react";
import Title from "./Title";

const HomeBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 relative py-8">
      <div className="absolute inset-0 bg-gradient-to-r from-deepPurple/5 via-trapperGreen/5 to-modernPink/5 rounded-2xl blur-3xl -z-10"></div>
      <Title
        className="text-3xl md:text-5xl uppercase font-bold text-center bg-gradient-to-r from-deepPurple via-trapperGreen to-modernPink bg-clip-text text-transparent drop-shadow-sm"
      >
        Best 3D Printing site
      </Title>
      <p
        className="text-base text-center text-muted-foreground font-medium max-w-[480px] leading-relaxed"
      >
        Everything You Need. Every Model You Want
      </p>
    </div>
  );
};

export default HomeBanner;
