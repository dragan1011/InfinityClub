import React from "react";

export function Span({ children, className }) {
  return (
    <span className="text-[#E5E5E5] font-semibold text-[21px] mt-10">
      {children}
    </span>
  );
}

export function P({ children }) {
  return <span className="text-[#E5E5E5] mt-5 text-[19px] "> {children}</span>;
}

export function SP({ children }) {
  return <span className="text-[#E5E5E5] mt-1 text-[16px]"> {children}</span>;
}
export function SPB({ children }) {
  return (
    <span className="text-[000] mt-1 text-[16px] font-medium	"> {children}</span>
  );
}
