import React, { useEffect } from "react";
import { Link } from "react-scroll";

/* import Aos from "aos";
import "aos/dist/aos.css";
 */
function Footer() {
  /* useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []); */
  return (
    <div>
      <div
        /* data-aos="fade-up" */
        className=" my-[5rem] mx-[10rem] grid grid-cols-6 gap-4 text-[#E5E5E5] max-md:grid-cols-1 max-md:text-center max-md:justify-center max-small-tablet:mx-[2rem]"
      >
        <div>
          <Link href="hero">
            <img
              src="/utilities/logo.png"
              className=" relative ml-auto mr-auto"
              alt="logo"
            />
          </Link>
          <p className="text-[#E5E5E5] mt-[10px] mb-[15px] w-[100%]">
            The best clubbing experience in Graz
          </p>
          <div className="">
            <p className="text-[#EAD18559] underline">infinity@email.com</p>
            <img
              src="/utilities/dot.png"
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
            src="/utilities/dot.png"
            className="md:hidden relative ml-auto mr-auto mt-10 "
            alt="dot"
          />
        </div>
        <div className="max-md:hidden">
          <a
            href="#about"
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            About
          </a>
          <p></p>
          <a
            href="#about"
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            Menu
          </a>
          <p></p>
          <a
            href="#about"
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            Find Us
          </a>
        </div>
        <div className="max-md:flex justify-center max-md:text-[#E5E5E550] max-md:underline">
          <p>Privacy Policy</p>
          <p className="max-md:ml-5">Imprint</p>
        </div>
        <img
          src="/utilities/dot.png"
          className="md:hidden relative ml-auto mr-auto mt-10 "
          alt="dot"
        />
      </div>
      <div className="flex max-md:block text-center">
        <p className="text-[#E5E5E550] mr-[auto] ml-[10rem] max-md:ml-[0] max-md:text-[#E5E5E550] max-md:underline">
          Copyright © 2021 Infinity All Rights Reserved
        </p>
        <p className="text-[#E5E5E550] ml-[auto] mr-10 max-md:invisible">
          Designed and developed by
          <span className="text-[#EAD18559] underline ml-3">Blueduck</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
