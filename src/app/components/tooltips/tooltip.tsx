"use client";

import { useState } from "react";

const HoverTooltip = ({ text, children }: { text: string, children: React.ReactNode }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
        <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {isHovered && (
                <div className="absolute top-full left-0 bg-zinc-950 text-white p-4 rounded-xl z-50  max-w-72">
                    {text}
                </div>
            )}
        </div>
    );
  };

export default HoverTooltip;