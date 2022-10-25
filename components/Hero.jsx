import React from "react";
import Button from "./UI/Button";

const Hero = () => {
  return (
    <div className='flex items-center text-center justify-center h-screen bg-fixed bg-center bg-cover bg-[url("/utilities/hero-background.png")]'>
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]" />
      <div className="p-5 text-[#EAD185] text-heading z-[2] mt-[-10rem]">
        <img
          className="inline-block max-sm:mt-20 max-sm:scale-75"
          src="/utilities/infinity_logo_2.png"
        />
        <h2 className="text-6xl max-sm:text-xl">Bar & Restaurant</h2>
        <p className="pb-24 pt-6 text-[#E5E5E5]">
          Welcome to the best clubbing experience in Graz
        </p>
        <Button className="max-sm:mt-5">Find Us</Button>
        <Button>Our Menu</Button>
      </div>

      <div className="absolute top-3/4 left-0 right-0 bottom-0 bg-gradient-to-t from-[#202020]" />
      <div className="absolute text-[#E5E5E5] left-0 right-2/4 bottom-32 text-lg">
        <div>Follow Us On</div>
      </div>
      <div className="absolute left-1/4 right-0 bottom-24 text-lg">
        <div className="flex">
          <img
            src="/utilities/facebook.png"
            className="mr-2 -ml-14"
            alt="Facebook"
          />
          <img src="/utilities/instagram.png" alt="Intagram" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
