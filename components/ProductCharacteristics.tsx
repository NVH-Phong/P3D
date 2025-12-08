import { Product } from "@/sanity.types";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const ProductCharacteristics = ({ product }: { product: Product }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{product?.title}:Characteristics</AccordionTrigger>
        <AccordionContent>
          <p>
            Brand: <span>Unknown</span>
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductCharacteristics;
