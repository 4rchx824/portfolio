import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string
};

const IconContainer = ({ children, className, style, href }: Props) => {
  return (
    <a href={href ?? "#"} target="_blank" style={style} className={cn(["px-2 py-2 rounded-full hover:bg-white text-white hover:text-black transition-all duration-500 cursor-pointer", className])}>
      {children}
    </a>
  );
};

export default IconContainer;
