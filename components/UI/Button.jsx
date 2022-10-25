import React from "react";

function Button({ children, type, onClick, className }) {
  return (
    <button
      className="px-14 py-3 border border-[#EAD185] mr-3 w-[200px] bg-black/30
       hover:bg-black duration-300 max-sm:max-w-10 max-sm:mt-5 max-[440px]:mr-0"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
