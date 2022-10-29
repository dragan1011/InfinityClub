import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div>
      <div className=" my-[5rem] mx-[10rem] grid grid-cols-6 gap-4 text-[#E5E5E5] max-md:grid-cols-1 max-md:text-center max-md:justify-center max-small-tablet:mx-[2rem]">
        <div>
          <Link href="hero">
            <img
              src="/utilities/logo.png"
              className=" relative ml-auto mr-auto"
            />
          </Link>
          <p className="text-[#E5E5E5] mt-[10px] mb-[15px] w-[100%]">
            The best clubbing experience in Graz
          </p>
          <div className="">
            <p className="text-[#EAD18559] underline">infinity@email.com</p>
            <img
              src="/Utilities/dot.png"
              className="md:hidden relative ml-auto mr-auto mt-10 "
              alt="dot"
            />
          </div>
        </div>
        <div></div>
        <div>
          <p className="text-[#E5E5E5] md:hidden">
            Designed and developed by
            <span className="text-[#EAD18559] underline">Blueduck</span>
          </p>
          <img
            src="/Utilities/dot.png"
            className="md:hidden relative ml-auto mr-auto mt-10 "
            alt="dot"
          />
        </div>
        <div className="max-md:hidden">
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
        <div className="max-md:flex justify-center max-md:text-[#E5E5E550] max-md:underline">
          <p>Privacy Policy</p>
          <p className="max-md:ml-5">Imprint</p>
        </div>
        <img
          src="/Utilities/dot.png"
          className="md:hidden relative ml-auto mr-auto mt-10 "
          alt="dot"
        />
      </div>
      <div className="flex max-md:block text-center">
        <p className="text-[#E5E5E550] mr-[auto] ml-[10rem] max-md:ml-[0] max-md:text-[#E5E5E550] max-md:underline">
          Copyright © 2021 Infinity All Rights Reserved
        </p>
        <p className="text-[#E5E5E550] ml-[auto] mr-5 max-md:invisible">
          Designed and developed by
          <span className="text-[#EAD18559] underline ml-1">Blueduck</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;