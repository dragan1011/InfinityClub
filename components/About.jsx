import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariantLeft = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, scale: 0, x: -200 },
};

const boxVariantRight = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, scale: 0, x: 200 },
};

function About() {
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
    <div id="about">
      <motion.h2
        ref={ref}
        variants={boxVariantLeft}
        initial="hidden"
        animate={control}
        className="text-6xl mx-[18rem] max-sm:text-4xl max-w-[50px] uppercase text-[50px] text-[#EAD185] font-tacs tracking-custom max-[800px]:ml-[10rem] max-[350px]:ml-[3rem] max-phone:ml-[1rem]"
      >
        About Infinity
      </motion.h2>
      <div className="my-[5rem] mx-[15rem] grid grid-cols-2 gap-4 text-[#E5E5E5] max-[1250px]:grid-cols-1 max-[1250px]:text-left max-[1250px]:justify-center max-[1250px]:mx-[10rem] max-[1250px]:flex max-[1250px]:flex-col-reverse max-[1250px]:items-center max-[305px]:m-0 ">
        <motion.div
          ref={ref}
          variants={boxVariantLeft}
          initial="hidden"
          animate={control}
          className="max-[1250px]:flex max-[1250px]:flex-col max-[1250px]:w-[520px] max-[520px]:w-[300px] max-[270px]:w-[200px]"
        >
          <div className="ml-[40px] max-[270px]:ml-[0]">
            <div className="max-w-[450px] text-[#959595] max-[1250px]:ml-[0rem] max-[305px]:w-[200px]">
              <p className="mt-[30px] max-[1250px]:w-[w-screen]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                faucibus faucibus mi tortor massa in vestibulum duis lacus.
                Pellentesque ultrices integer porta augue purus faucibus mus.
                Diam et volutpat
              </p>
              <p className="mt-10">
                etiam faucibus neque, aliquet hendrerit. Elementum eget enim
                lorem turpis consectetur fringilla. Sodales egestas luctus
                posuere commodo sit mattis etiam dignissim. Maecenas iaculis
                arcu praesent est. Vulputate.
              </p>
            </div>
          </div>
          <img
            src="/utilities/dance.png"
            className="mt-[90px] max-[1250px]:mt-[30px] max-[520px]:max-w-[300px] max-[520px]:relative max-[520px]:ml-auto max-[520px]:mr-auto max-[305px]:max-w-[200px]"
            alt="Dance"
          />
        </motion.div>
        <motion.div
          ref={ref}
          variants={boxVariantRight}
          initial="hidden"
          animate={control}
          className="max-[1250px]:flex max-[1250px]:flex-col-reverse max-[1250px]:w-[520px] max-[520px]:w-[300px] max-[270px]:w-[200px]"
        >
          <img
            src="/utilities/club.png"
            alt="Club"
            className="max-[1250px]:mt-[30px] max-[520px]:max-w-[300px] max-[520px]:relative max-[520px]:ml-auto max-[520px]:mr-auto max-[305px]:max-w-[200px]"
          />
          <div className="max-w-[450px] text-[#959595] ml-[40px] max-[305px]:w-[200px] max-[270px]:ml-[0]">
            <p className="mt-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
              faucibus faucibus mi tortor massa in vestibulum duis lacus.
              Pellentesque ultrices integer porta augue purus faucibus mus. Diam
              et volutpat
            </p>
            <p className="mt-10">
              etiam faucibus neque, aliquet hendrerit. Elementum eget enim lorem
              turpis consectetur fringilla. Sodales egestas luctus posuere
              commodo sit mattis etiam dignissim. Maecenas iaculis arcu praesent
              est. Vulputate.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
