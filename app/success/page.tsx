"use client";
import useCartStore from "@/store";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const sessionId = searchParams.get("session_id");
  const router = useRouter();
  const { resetCart } = useCartStore();
  useEffect(() => {
    if (!orderNumber && !sessionId) {
      router.push("/");
    } else {
      resetCart();
    }
  }, [orderNumber, sessionId, resetCart]);
  return (
    <div className="py-10 bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl px-8 py-12 max-w-xl w-full text-center"
      >
        <motion.div>
          <Check />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
