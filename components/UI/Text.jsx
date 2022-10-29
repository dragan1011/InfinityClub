import React from "react";

export function Span({ children, className }) {
  return (
    <span className="text-[#E5E5E5] font-semibold text-[21px] max-small-tablet:text-[18px] max-big-phone:text-[16px] mt-10">
      {children}
    </span>
  );
}

export function P({ children }) {
  return (
    <span className="text-[#E5E5E5] mt-5 text-[19px] max-small-tablet:text-[16px] max-big-phone:text-[14px] max-small-phone:[12px]">
      {" "}
      {children}
    </span>
  );
}

export function SP({ children }) {
  return (
    <span className="text-[#E5E5E5] mt-1 text-[16px] max-phone:text-[12px]">
      {" "}
      {children}
    </span>
  );
}
export function SPB({ children }) {
  return (
    <span className="text-[000] mt-1 text-[16px] font-medium	max-phone:text-[12px]">
      {" "}
      {children}
    </span>
  );
}
