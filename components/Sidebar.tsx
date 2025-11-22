import React, { FC } from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { headerData } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 bg-darkColor/50
    shadow-xl hoverEffect w-full ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="min-w-72 max-w-96 bg-darkColor *:text-white/60 h-full p-10 border-r border-r-white flex flex-col gap-6"
      >
        <div className="flex items-center justify-between">
          <button onClick={onClose}>
            <Logo className="text-white">Phong 3D</Logo>
          </button>
          <button className="hover:text-red-500 hoverEffect" onClick={onClose}>
            <X />
          </button>
        </div>
        <div
          className="flex flex-col gap-3.5 text-base font-semibold tracking-wide" //whitespace-nowrap for ko bi nhay chu
        >
          {headerData?.map((item) => (
            <Link
              onClick={onClose}
              key={item?.title}
              href={item?.href}
              className={`hover:text-white hoverEffect ${
                pathname === item?.href && "text-white"
              }`}
            >
              {item?.title}
              {/* Doan nay de co cai gach duoi chan chu /*}
              {/* <span
                className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-white hoverEffect 
          group-hover:w-1/2 group-hover:left-0 ${
            pathname === item?.href && "w-1/2"
          }`}
              />
              <span
                className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-white hoverEffect 
          group-hover:w-1/2 group-hover:right-0 ${
            pathname === item?.href && "w-1/2"
          }`}
              /> */}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
