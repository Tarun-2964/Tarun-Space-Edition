import type { PropsWithChildren } from "react";

export const Card = ({ children, className = "" }: PropsWithChildren<{ className?: string }>) => (
  <div
    className={`rounded-lg border border-[#2A0E61] bg-[rgba(3,0,20,0.55)] backdrop-blur-sm shadow-lg p-6 ${className}`}
  >
    {children}
  </div>
);

export const Tag = ({ children }: PropsWithChildren) => (
  <span className="text-xs px-3 py-1 rounded-full border border-[#7042f88b] bg-[rgba(113,47,255,0.12)] text-gray-200">
    {children}
  </span>
);
