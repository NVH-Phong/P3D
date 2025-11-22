import React from "react";
import { TooltipProvider } from "./ui/tooltip";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="github.com">
              <Github />
            </Link>
          </TooltipTrigger>
          <TooltipContent
            className={cn(
              "text-darkColor bg-white font-semibold",
              tooltipClassName
            )}
          >
            Github
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
