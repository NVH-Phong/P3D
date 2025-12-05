import React from "react";
import PriceFormatter from "./PriceFormatter";
import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

interface Props {
  price: number | undefined;
  discount: number | undefined;
  className?: string;
}
const PriceView = ({ price, discount, className }: Props) => {
  const realDiscount = discount || 0;
  return (
    <div className="flex items-center gap-2">
      <PriceFormatter amount={price} className={className} />
      {price && realDiscount > 0 && (
        <PriceFormatter
          amount={price + (realDiscount * price) / 100}
          className={cn(
            "text-xs line-through font-medium text-zinc-500",
            className
          )}
        />
      )}
    </div>
  );
};

export default PriceView;
