import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [nav, setnav] = useState(false);

  const handleNav = () => {
    setnav(!nav);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto text-xl flex justify-between items-center p-4 text-[#AFAFAF]">
        <Link href="/">
          <img src="/utilities/logo.png" className="max-sm:scale-75" />
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4 hover:text-[#EAD185] duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:text-[#EAD185] duration-300">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4 hover:text-[#EAD185] duration-300">
            <Link href="/location">Location</Link>
          </li>
          <li className="p-4 hover:text-[#EAD185] duration-300">
            <Link href="/menu">Menu</Link>
          </li>
        </ul>

        {/*Mobile Button*/}
        <div
          className="block sm:hidden z-10 cursor-pointer"
          onClick={handleNav}
        >
          <img src="/utilities/menu-bar.png" sizes={20} alt="" />
        </div>
        {/*Mobile Menu*/}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-[+100%] bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-[#EAD185]">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-[#EAD185]">
              <Link href="/about">About</Link>
            </li>
            <li className="p-4 text-4xl hover:text-[#EAD185]">
              <Link href="/location">Location</Link>
            </li>
            <li className="p-4 text-4xl hover:text-[#EAD185]">
              <Link href="/menu">Menu</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
