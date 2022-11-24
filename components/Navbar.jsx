import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [nav, setnav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [display, setDisplay] = useState("none");
  const [shadow, setShadow] = useState("none");
  const [navChange, setNavChange] = useState(false);

  const handleNav = () => {
    setnav(!nav);
    setNavChange(!navChange);
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
        <a href="#hero">
          <img
            src="/utilities/logo.png"
            className="max-sm:scale-75 max-phone:hidden"
            alt="logo"
          />
        </a>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 hover:text-[#EAD185] transition-all">
            <a
              href="#hero"
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
            </a>
          </li>
          <li className="p-4 hover:text-[#EAD185] duration-300">
            <a
              href="#about"
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
            </a>
          </li>
          <li className="p-4 hover:text-[#EAD185] duration-300">
            <a
              href="#find_us"
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
            </a>
          </li>
          <li className="p-4 hover:text-[#EAD185] duration-300">
            <a
              href="#menu"
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
            </a>
          </li>
        </ul>

        {/*Mobile Button*/}
        <div
          className="sm:hidden z-10 cursor-pointer relative flex justify-center items-center w-[80px] h-[80px] transition ease-in-out delay-500"
          style={{ color: `${textColor}` }}
          onClick={handleNav}
        >
          {!navChange && (
            <div
              className="w-[50px] h-[6px] bg-[#EAD185] rounded-[5px] shadow-[0 2px 5px rgba(255,101,47 , .2)] transition ease-in-out delay-500
          before:content-['']
          before:absolute
          before:w-[50px]
          before:h-[6px]
          before:rounded-[5px]
          before:bg-[#EAD185]
          before:shadow-[0 2px 5px rgba(255,101,47 , .2)]
          before:transition 
          before:ease-in-out 
          before:delay-500
          before:translate-y-[-16px]
          after:content-['']
          after:absolute
          after:w-[50px]
          after:rounded-[5px]
          after:h-[6px]
          after:bg-[#EAD185]
          after:shadow-[0 2px 5px rgba(255,101,47 , .2)]
          after:transition 
          after:ease-in-out 
          after:delay-500
          after:translate-y-[16px]
          transition ease-in-out delay-150"
            ></div>
          )}
          {navChange && (
            <div className="transition ease-in-out delay-150">
              <div className="w-[50px] h-[6px] bg-[#EAD185]  rounded-[5px] shadow-[0 2px 5px rgba(255,101,47 , .2)] transition ease-in-out delay-500 rotate-45 absolute top-2/4 left-3"></div>
              <div className="w-[50px] h-[6px] bg-[#EAD185]  rounded-[5px] shadow-[0 2px 5px rgba(255,101,47 , .2)] transition ease-in-out delay-500 rotate-[-45deg] absolute top-2/4 left-3"></div>
            </div>
          )}
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
              <a
                href="#hero"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                Home
              </a>
            </li>
            <li className="p-4 text-4xl hover:text-[#EAD185]">
              <a
                href="#about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                About
              </a>
            </li>
            <li className="p-4 text-4xl hover:text-[#EAD185]">
              <a
                href="#about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                Location
              </a>
            </li>
            <li className="p-4 text-4xl hover:text-[#EAD185]">
              <a
                href="#about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                Menu
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a style={{ display: `${display}` }} href="#hero">
        <div className="absolute right-10 top-[90vh] cursor-pointer border-solid border-2 border-[#EAD185] rounded-full text-[#EAD185] rotate-90 pr-2 pl-2 pt-0 pb-[2px]">
          &lt;
        </div>
      </a>
    </div>
  );
}

export default Navbar;
