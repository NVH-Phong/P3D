import { cn } from "@/lib/utils";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  amount: number | undefined;
  className?: string;
}
const PriceFormatter = ({ amount, className }: Props) => {
  const formattedPrice = new Number(amount).toLocaleString("en-US", {
    currency: "AUD",
    style: "currency",
    minimumFractionDigits: 2,
  });
  return (
    <div className={cn("font-semibold text-darkColor", className)}>
      {formattedPrice}
    </div>
  );
};

export default PriceFormatter;
