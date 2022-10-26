import React from "react";

function MenuCard({ children, onClick }) {
  return (
    <div
      className="h-[7.8rem] max-w-[14.4rem] min-w-[14.4rem] border-x border-[#3F3F3F]  bg-[#2A2A2A]"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default MenuCard;
