import React from "react";

interface Props {
  amount: number | undefined;
  className?: string;
}
const PriceFormatter = ({ amount, className }: Props) => {
  return <div>PriceFormatter</div>;
};

export default PriceFormatter;
