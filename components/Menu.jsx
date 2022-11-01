import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Span, P } from "./UI/Text";
/* import Aos from "aos";
import "aos/dist/aos.css"; */

import "swiper/css";

function Menu() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  /*  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []); */

  return (
    <div id="menu">
      <h2
        /*   data-aos="fade-up"
        data-aos-duration="3000" */
        className="text-6xl mx-[18rem] max-sm:text-4xl uppercase text-[50px] text-[#EAD185] font-tacs tracking-custom max-md:ml-[10rem] max-phone:ml-[1rem]"
      >
        Our Menu
      </h2>
      <div className="my-[5rem]">
        <div className="max-w-[1000px] relative ml-auto mr-auto ">
          <Swiper spaceBetween={0} slidesPerView={"auto"}>
            <SwiperSlide
              /* data-aos="fade-up" */
              className="max-w-[200px] text-center items-center justify-center border-x border-[#FFFFFF10] bg-[#EAD18596] py-5 px-10 max-h-[100px] hover:bg-[#EAD18596] duration-300 cursor-pointer"
            >
              <img
                src="/utilities/Champaigns.png"
                alt="Champaigns"
                className="realtive ml-auto mr-auto"
              />
              <span>Champaigns</span>
            </SwiperSlide>
            <SwiperSlide
              onClick={handleMenu}
              /* data-aos="fade-up"
              data-aos-delay="100" */
              className="max-w-[200px] text-center items-center justify-center border-x border-[#FFFFFF10] bg-[#555555] py-6 px-10 max-h-[100px] hover:bg-[#EAD18596] duration-300 cursor-pointer"
            >
              <img
                src="/utilities/Wine.png"
                alt="Wine"
                className="realtive ml-auto mr-auto"
              />
              <span>Wine</span>
            </SwiperSlide>
            <SwiperSlide
              /* data-aos="fade-up"
              data-aos-delay="200" */
              className="max-w-[200px] text-center items-center justify-center border-x border-[#FFFFFF10] bg-[#555555] py-5 px-10 max-h-[100px] hover:bg-[#EAD18596] duration-300 cursor-pointer"
            >
              <img
                src="/utilities/Coctails.png"
                alt="Coctails"
                className="realtive ml-auto mr-auto"
              />
              <span>Coctails</span>
            </SwiperSlide>
            <SwiperSlide
              /* data-aos="fade-up"
              data-aos-delay="300" */
              className="max-w-[200px] text-center items-center justify-center border-x border-[#FFFFFF10] bg-[#555555] py-6 px-5 max-h-[100px] hover:bg-[#EAD18596] duration-300 cursor-pointer"
            >
              <img
                src="/utilities/Non-alcoholic.png"
                alt="Non-alcoholic"
                className="realtive ml-auto mr-auto"
              />
              <span>Non-alcoholic</span>
            </SwiperSlide>
            <SwiperSlide
              /*  data-aos="fade-up"
              data-aos-delay="400" */
              className="max-w-[200px] text-center items-center justify-center border-x border-[#FFFFFF10] bg-[#555555] py-6 px-10] max-h-[100px] hover:bg-[#EAD18596] duration-300 cursor-pointer"
            >
              <img
                src="/utilities/Food.png"
                alt="Food"
                className="realtive ml-auto mr-auto"
              />
              <span>Food</span>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="ml-[15rem] grid grid-cols-2 max-[1250px]:grid-cols-1 max-md:ml-[6rem] max-small-tablet:ml-[5rem] max-big-phone:ml-[3rem] max-small-phone:ml-[1rem] ">
          <div /* data-aos="fade-up" */ className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <Span>Heißgetränke</Span>
              <P>Verlängerter</P>
              <P>Cappuccino</P>
              <P>Caffe Latte</P>
              <P>Kleiner Brauner</P>
              <P>Großer Brauner</P>
              <P>Espresso</P>
              <P>Tee div, Sorten</P>
            </div>
            <div className="flex flex-col max-md:ml-[7rem] max-small-tablet:ml-[5rem] max-phone:ml-[3rem]">
              <P></P>
              <P></P>
              <div className="mt-[1.5rem] max-mid-phone:mt-[2rem]"></div>
              <P>2,90 €</P>
              <P>3.20 €</P>
              <P>3.50 €</P>
              <P>2.60 €</P>
              <P>3.90 €</P>
              <P>2.60 €</P>
              <P>2.60 €</P>
            </div>
          </div>
          <div /* data-aos="fade-up" */ className="grid grid-cols-2 gap-4 ">
            <div className="flex flex-col">
              <Span>Bio-Limonaden</Span>
              <P>Lemon Prickelnd</P>
              <P>Lemon Still</P>
              <P>Kirsche Prickelnd</P>
              <P>Kirsche Still</P>
              <P>Gruntee-Kaktusfeige Prickelnd</P>
              <P>Gruntee-Kaktusfeige Still</P>
            </div>
            <div className="flex flex-col max-md:ml-[7rem] max-small-tablet:ml-[5rem] max-phone:ml-[3rem]">
              <P></P>
              <P></P>
              <div className="mt-[1.5rem]"></div>
              <P>4.20€</P>
              <P>3.90 €</P>
              <P>4.20 €</P>
              <P>3.90 €</P>
              <P>4.20 €</P>
              <P>3.90 €</P>
            </div>
          </div>
          <div
            /* data-aos="fade-up" */ className="grid grid-cols-2 gap-4 mt-10"
          >
            <div className="flex flex-col">
              <Span>Soda, Mineral</Span>
              <P>Römerquelle Prickelnd</P>
              <P>Römerquelle Still</P>
              <P>Soda Zitrone</P>
            </div>
            <div className="flex flex-col max-md:ml-[7rem] max-small-tablet:ml-[5rem] max-phone:ml-[3rem]">
              <P></P>
              <P></P>
              <div className="mt-[1.5rem]"></div>
              <P>2,90 €</P>
              <P>2,90 €</P>
              <P>2,90 €</P>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        {setMenu && <P>We don't have any data in this moment.</P>}
      </div>
    </div>
  );
}

export default Menu;
