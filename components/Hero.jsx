import Link from "next/link";
import React from "react";
import Button from "./UI/Button";
/* import "animate.css"; */

const Hero = () => {
  return (
    <div
      id="hero"
      className='flex items-center text-center justify-center h-screen bg-fixed bg-center bg-cover bg-[url("/utilities/hero-background.png")]'
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-[65%] bg-gradient-to-b from-[#202020] z-20" />
      <div className="absolute top-0 left-0 right-0 bottom-0  bg-black/30 z-[2]" />
      <div className="p-5 text-[#EAD185] text-heading z-[2] mt-[-10rem]">
        <img
          className="w-[274px] h-[115px] inline-block max-sm:mt-20 max-sm:scale-75 animate__animated animate__fadeInUp"
          src="/utilities/infinity_logo_2.png"
          alt="logo"
        />
        <h2 className="text-6xl max-sm:text-4xl font-tacs animate__animated animate__fadeInUp">
          Bar & Restaurant
        </h2>
        <p className="pb-24 pt-6 text-[#E5E5E5] animate__animated animate__fadeInUp">
          Welcome to the best clubbing experience in Graz
        </p>
        <Button className="max-sm:mt-5">Find Us</Button>
        <Button>Our Menu</Button>
      </div>

      <div className="absolute top-[65%] left-0 right-0 bottom-0 bg-gradient-to-t from-[#202020] z-20 " />
      <div className="absolute text-[#E5E5E5] left-0 right-2/4 bottom-32 text-lg z-20 max-md:bottom-[8%]">
        <div>Follow Us On</div>
      </div>
      <div className="absolute left-1/4 right-0 bottom-24 text-lg mt-10 z-20 max-md:bottom-[5%] max-phone:bottom-[3%]">
        <div className="flex">
          <Link href="https://www.facebook.com">
            <img
              src="/utilities/facebook.png"
              className="w-[25px] h-[25px] mr-2 -ml-14 cursor-pointer"
              alt="Facebook"
            />
          </Link>
          <a href="https://www.instagram.com">
            <img
              src="/utilities/instagram.png"
              className="w-[25px] h-[25px] cursor-pointer"
              alt="Intagram"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
