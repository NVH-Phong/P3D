'use client';
import { Product } from '@/sanity.types';
import React from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import QuantityButton from './QuantityButtons';
import PriceFormatter from './PriceFormatter';
import useCartStore from '@/store';
import { toast } from 'react-hot-toast';
interface Props {
  product: Product;
  className?: string;
}
const AddToCartButton = ({ product, className }: Props) => {
  const { addItem, getItemCount } = useCartStore();
  const itemCount = getItemCount(product?._id);
  const isOutOfStock = product?.stock === 0;

  return (
    <div className="w-full h-12 flex items-center">
      {itemCount ? (
        <div className="w-full text-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Quantity</span>
            <QuantityButton product={product} />
          </div>
          <div className="flex items-center justify-between border-t pt-1">
            <span className="text-xs font-semibold">Subtotal</span>
            <PriceFormatter
              amount={product?.price ? product.price * itemCount : 0}
            />
          </div>
        </div>
      ) : (
        <Button
          onClick={() => {
            addItem(product);
            toast.success(
              `${product?.title?.substring(0, 12)}... added successfully!`
            );
          }}
          disabled={isOutOfStock}
          className={cn(
            'w-full bg-transparent text-deepPurple shadow-none border-2 border-deepPurple/40 font-semibold tracking-wide hover:bg-gradient-to-r hover:from-trapperGreen hover:to-modernPink hover:text-white hover:border-transparent hoverEffect',
            className
          )}
        >
          Add to cart
        </Button>
      )}
    </div>
  );
};

export default AddToCartButton;
