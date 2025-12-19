import { Product } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PriceView from './PriceView';
import AddToCartButton from './AddToCartButton';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group text-sm rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-gradient-to-br from-muted via-background to-muted overflow-hidden relative">
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product?.images[0]).url()}
              width={500}
              height={500}
              alt="productImage"
              priority
              className={`w-full h-72 object-contain overflow-hidden hoverEffect ${product?.stock !== 0 && 'group-hover:scale-105'}`}
            />
          </Link>
        )}
        {product?.stock === 0 && (
          <div className="absolute top-0 left-0 w-full h-full bg-deepPurple/50 flex items-center justify-center">
            <p className="text-base text-white font-semibold text-center">
              Out of Stock
            </p>
          </div>
        )}
      </div>
      <div className="py-3 px-2 flex flex-col gap-1.5 bg-card border border-border border-t-0 rounded-lg rounded-tl-none rounded-tr-none">
        <h2 className="font-semibold line-clamp-1 text-foreground">
          {product?.title}
        </h2>
        <p className="text-muted-foreground text-xs">{product?.intro}</p>
        <PriceView
          className="text-lg"
          price={product?.price}
          discount={product?.discount}
        />
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
