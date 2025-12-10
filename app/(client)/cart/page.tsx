"use client";
import Loading from "@/components/Loading";
import useCartStore from "@/store";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [isClient, setIsClient] = useState(false);
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    getSubTotalPrice,
    resetCart,
  } = useCartStore();
  const user = useUser();
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return <Loading />;
  }
  return <div>CartPage</div>;
};

export default CartPage;
