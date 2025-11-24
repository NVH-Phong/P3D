import React from "react";
import { TooltipProvider } from "./ui/tooltip";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import { title } from "process";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/hoang.phonh.2025/",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/_phonn_/",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com/@phonghoang3444",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/nvhphong/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://github.com/NVH-Phong",
    icon: <Github className="w-5 h-5" />,
  },
];
const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                href={item?.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-white hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-blue-600 border-0 rounded-lg px-3 py-2 font-semibold shadow-lg",
                //"text-white bg- box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
