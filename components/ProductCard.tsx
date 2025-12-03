import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group text-sm rounded-lg overflow-hidden">
      <div className="bg-linear-to-r from-zinc-200 via-zinc-300 to-zinc-200 overflow-hidden">
        {product?.images && (
          <Link href={"/product"}>
            <Image
              src={urlFor(product?.images[0]).url()}
              width={500}
              height={500}
              alt="productImage"
              priority
              className={`w-full h-72 object-contain overflow-hidden group-hover:scale-105 hoverEffect`}
            />
          </Link>
        )}
      </div>
      <div>
        <h2 className="font-semibold line-clamp-1">{product?.n}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
