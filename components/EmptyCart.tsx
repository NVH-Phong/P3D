'use client';

import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function EmptyCart() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-lg w-full text-center space-y-8"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mx-auto w-48 h-48 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-darkColor/5 rounded-full" />
          <ShoppingBag
            size={80}
            className="text-darkColor/30 relative z-10"
            strokeWidth={1.5}
          />
        </motion.div>

        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-darkColor"
          >
            Your Cart is Empty
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lightColor text-base md:text-lg max-w-md mx-auto"
          >
            Looks like you haven&apos;t added anything to your cart yet. Start
            shopping to fill it up!
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <Link
            href="/"
            className="px-8 py-3 bg-darkColor text-white rounded-md font-semibold hover:bg-darkColor/90 hoverEffect text-sm"
          >
            Discover Products
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
