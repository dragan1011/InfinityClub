import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Span, P } from "./UI/Text";

import "swiper/css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariantLeft = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, scale: 0, x: -400 },
};

const boxVariantRight = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, scale: 0, x: 400 },
};

const boxVariant = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, scale: 0, x: 0 },
};

function Menu() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div id="menu">
      <motion.h2
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="text-6xl mx-[18rem] max-sm:text-4xl uppercase text-[50px] text-[#EAD185] font-tacs tracking-custom max-md:ml-[10rem] max-phone:ml-[1rem]"
      >
        Our Menu
      </motion.h2>
      <div className="my-[5rem]">
        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          className="max-w-[1000px] relative ml-auto mr-auto "
        >
          <Swiper spaceBetween={0} slidesPerView={"auto"} loop={true}>
            <SwiperSlide className="max-w-[200px] text-center items-center justify-center border-x border-[#FFFFFF10] bg-[#EAD18596] py-5 px-10 max-h-[100px] hover:bg-[#EAD18596] duration-300">
              <img
                src="/utilities/Champaigns.png"
                alt="Champaigns"
                className="realtive ml-auto mr-auto"
              />
              <span>Champaigns</span>
            </SwiperSlide>
            <SwiperSlide className="max-w-[200px] text-center items-center justify-center border-x border-[#FFFFFF10] bg-[#2A2A2A] py-6 px-10 max-h-[100px] hover:bg-[#EAD18596] duration-300">
              <img
                src="/utilities/Wine.png"
                alt="Wine"
                className="realtive ml-auto mr-auto"
              />
              <span>Wine</span>
            </SwiperSlide>
            <SwiperSlide className="max-w-[200px] text-center items-center justify-center border-x border-[#FFFFFF10] bg-[#2A2A2A] py-5 px-10 max-h-[100px] hover:bg-[#EAD18596] duration-300">
              <img
                src="/utilities/Coctails.png"
                alt="Coctails"
                className="realtive ml-auto mr-auto"
              />
              <span>Coctails</span>
            </SwiperSlide>
            <SwiperSlide className="max-w-[200px] text-center items-center justify-center border-x border-[#FFFFFF10] bg-[#2A2A2A] py-6 px-5 max-h-[100px] hover:bg-[#EAD18596] duration-300">
              <img
                src="/utilities/Non-alcoholic.png"
                alt="Non-alcoholic"
                className="realtive ml-auto mr-auto"
              />
              <span>Non-alcoholic</span>
            </SwiperSlide>
            <SwiperSlide className="max-w-[200px] text-center items-center justify-center border-x border-[#FFFFFF10] bg-[#2A2A2A] py-6 px-10] max-h-[100px] hover:bg-[#EAD18596] duration-300">
              <img
                src="/utilities/Food.png"
                alt="Food"
                className="realtive ml-auto mr-auto"
              />
              <span>Food</span>
            </SwiperSlide>
          </Swiper>
        </motion.div>
        <div className="ml-[15rem] grid grid-cols-2 max-[1250px]:grid-cols-1 max-md:ml-[6rem] max-small-tablet:ml-[5rem] max-big-phone:ml-[3rem] max-small-phone:ml-[1rem] ">
          <motion.div
            ref={ref}
            variants={boxVariantLeft}
            initial="hidden"
            animate={control}
            className="grid grid-cols-2 gap-4"
          >
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
          </motion.div>
          <motion.div
            ref={ref}
            variants={boxVariantRight}
            initial="hidden"
            animate={control}
            className="grid grid-cols-2 gap-4 "
          >
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
          </motion.div>
          <motion.div
            ref={ref}
            variants={boxVariantLeft}
            initial="hidden"
            animate={control}
            className="grid grid-cols-2 gap-4 mt-10"
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
