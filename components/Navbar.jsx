import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [nav, setnav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [display, setDisplay] = useState("none");
  const [shadow, setShadow] = useState("none");

  const handleNav = () => {
    setnav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#2A2A2A");
        setTextColor("#ffffff");
        setDisplay("block");
        setShadow(
          "0 10px 15px -3px rgb(255 255 255 / 0.1), 0 4px 6px -4px rgb(255 255 255 / 0.1)"
        );
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
        setDisplay("none");
        setShadow("none");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}`, boxShadow: `${shadow}` }}
      className="fixed left-0 top-0 w-full ease-in duration-300 z-30"
    >
      <div className="max-w-[1240px] m-auto text-xl flex justify-between items-center p-4 text-[#AFAFAF]">
        <Link to="hero">
          <img
            src="/utilities/logo.png"
            className="max-sm:scale-75 max-phone:hidden"
          />
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 hover:text-[#EAD185] transition-all">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className=" inline-block
              relative
              cursor-pointer
              transition-all
              duration-300
              before:content-['']
              before:absolute
              before:-bottom-1
              before:left-0
              before:w-0
              before:h-[0.2rem]
              before:opacity-0
              before:transition-all
              before:duration-500
              before:bg-gradient-to-l
              before:from-[#EAD185]
              hover:before:w-full
              hover:before:opacity-100"
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
              className="inline-block
              relative
              cursor-pointer
              transition-all
              duration-300
              before:content-['']
              before:absolute
              before:-bottom-1
              before:left-0
              before:w-0
              before:h-[0.2rem]
              before:opacity-0
              before:transition-all
              before:duration-500
              before:bg-gradient-to-l
              before:from-[#EAD185]
              hover:before:w-full
              hover:before:opacity-100"
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
              className="inline-block
              relative
              cursor-pointer
              transition-all
              duration-300
              before:content-['']
              before:absolute
              before:-bottom-1
              before:left-0
              before:w-0
              before:h-[0.2rem]
              before:opacity-0
              before:transition-all
              before:duration-500
              before:bg-gradient-to-l
              before:from-[#EAD185]
              hover:before:w-full
              hover:before:opacity-100"
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
              className="inline-block
              relative
              cursor-pointer
              transition-all
              duration-300
              before:content-['']
              before:absolute
              before:-bottom-1
              before:left-0
              before:w-0
              before:h-[0.2rem]
              before:opacity-0
              before:transition-all
              before:duration-300
              before:bg-gradient-to-l
              before:from-[#EAD185]
              hover:before:w-full
              hover:before:opacity-100"
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
          <img src="/utilities/menu-bar.png" sizes={20} alt="menu_bar" />
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
      <Link style={{ display: `${display}` }} to="hero">
        <div className="absolute right-10 top-[90vh] cursor-pointer border-solid border-2 border-[#EAD185] rounded-full text-[#EAD185] rotate-90 pr-2 pl-2 pt-0 pb-[2px]">
          &lt;
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
