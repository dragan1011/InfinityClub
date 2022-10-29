import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div>
      <div className=" my-[5rem] mx-[10rem] grid grid-cols-4 gap-4 text-[#E5E5E5] max-[800px]:grid-cols-1 max-[800px]:text-center max-[800px]:justify-center">
        <div>
          <Link href="hero">
            <img src="/utilities/logo.png" className=" ml-[-5px]" />
          </Link>
          <p className="text-[#E5E5E5] mt-[10px] mb-[15px]">
            The best clubbing experience in Graz
          </p>
          <div className="">
            <p className="text-[#EAD18559] underline">infinity@email.com</p>
            <img
              src="/Utilities/dot.png"
              className="min-[800px]:invisible relative ml-auto mr-auto mt-10 "
              alt="dot"
            />
          </div>
        </div>
        <div></div>
        {/*   <div>
          <p className="text-[#E5E5E5] ml-[auto] min-[800px]:block">
            Designed and developed by
            <span className="text-[#EAD18559] underline">Blueduck</span>
          </p>
        </div> */}
        <div className="max-[800px]:invisible">
          <Link
            to="about"
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            About
          </Link>
          <p></p>
          <Link
            to="about"
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            Menu
          </Link>
          <p></p>
          <Link
            to="about"
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            Find Us
          </Link>
        </div>
        <div className="max-[800px]:flex justify-center max-[800px]:text-[#E5E5E550] max-[800px]:underline">
          <p>Privacy Policy</p>
          <p className="max-[800px]:ml-5">Imprint</p>
        </div>
      </div>
      <div className="flex max-[800px]:block text-center">
        <p className="text-[#E5E5E550] mr-[auto] ml-[10rem] max-[800px]:ml-[0] max-[800px]:text-[#E5E5E550] max-[800px]:underline">
          Copyright © 2021 Infinity All Rights Reserved
        </p>
        <p className="text-[#E5E5E550] ml-[auto] mr-5 max-[800px]:invisible">
          Designed and developed by
          <span className="text-[#EAD18559] underline ml-1">Blueduck</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
