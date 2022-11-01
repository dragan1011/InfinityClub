import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [nav, setnav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setnav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#555555");
        setTextColor("#ffffff");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full ease-in duration-300 z-30"
    >
      <div className="max-w-[1240px] m-auto text-xl flex justify-between items-center p-4 text-[#AFAFAF]">
        <Link href="hero">
          <img src="/utilities/logo.png" className="max-sm:scale-75" />
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 hover:text-[#EAD185] duration-300">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li className="p-4 hover:text-[#EAD185] duration-300">
            <Link
              to="about"
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              About
            </Link>
          </li>
          <li className="p-4 hover:text-[#EAD185] duration-300">
            <Link
              to="find_us"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              Location
            </Link>
          </li>
          <li className="p-4 hover:text-[#EAD185] duration-300">
            <Link
              to="menu"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              Menu
            </Link>
          </li>
        </ul>

        {/*Mobile Button*/}
        <div
          className="block sm:hidden z-10 cursor-pointer"
          style={{ color: `${textColor}` }}
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
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-[#EAD185]">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                About
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-[#EAD185]">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                Location
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-[#EAD185]">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                Menu
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
