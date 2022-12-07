import React, { useEffect } from "react";
/* import Aos from "aos"; */
/* import "aos/dist/aos.css"; */

function About() {
  /*   useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []); */
  return (
    <div id="about">
      <h2
        /* data-aos="fade-up" */
        className="text-6xl mx-[18rem] max-sm:text-4xl max-w-[50px] uppercase text-[50px] text-[#EAD185] font-tacs tracking-custom max-[800px]:ml-[6rem] max-phone:ml-[1rem]"
      >
        About Infinity
      </h2>
      <div className="my-[5rem] mx-[15rem] grid grid-cols-2 gap-4 text-[#E5E5E5] max-[1250px]:grid-cols-1 max-[1250px]:text-left max-[1250px]:justify-center max-[1250px]:mx-[10rem] max-[1250px]:flex max-[1250px]:flex-col-reverse max-[1250px]:items-center max-[305px]:m-0 ">
        <div className="max-[1250px]:flex max-[1250px]:flex-col max-[1250px]:w-[520px] max-[520px]:w-[300px] max-[270px]:w-[200px]">
          <div className="ml-[40px] max-[270px]:ml-[0]">
            <div className="max-w-[450px] text-[#959595] max-[1250px]:ml-[0rem] max-[305px]:w-[200px]">
              <p
                /* data-aos="fade-up" */
                className="mt-[30px] max-[1250px]:w-[w-screen]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                faucibus faucibus mi tortor massa in vestibulum duis lacus.
                Pellentesque ultrices integer porta augue purus faucibus mus.
                Diam et volutpat
              </p>
              <p /* data-aos="fade-up" */ className="mt-10">
                etiam faucibus neque, aliquet hendrerit. Elementum eget enim
                lorem turpis consectetur fringilla. Sodales egestas luctus
                posuere commodo sit mattis etiam dignissim. Maecenas iaculis
                arcu praesent est. Vulputate.
              </p>
            </div>
          </div>
          <img
            /* data-aos="fade-up" */
            src="/utilities/dance.png"
            className="mt-[90px] max-[1250px]:mt-[30px] max-[520px]:max-w-[300px] max-[520px]:relative max-[520px]:ml-auto max-[520px]:mr-auto max-[305px]:max-w-[200px]"
            alt="Dance"
          />
        </div>
        <div
          /*  data-aos="fade-up" */
          className="max-[1250px]:flex max-[1250px]:flex-col-reverse max-[1250px]:w-[520px] max-[520px]:w-[300px] max-[270px]:w-[200px]"
        >
          <img
            src="/utilities/club.png"
            alt="Club"
            className="max-[1250px]:mt-[30px] max-[520px]:max-w-[300px] max-[520px]:relative max-[520px]:ml-auto max-[520px]:mr-auto max-[305px]:max-w-[200px]"
          />
          <div className="max-w-[450px] text-[#959595] ml-[40px] max-[305px]:w-[200px] max-[270px]:ml-[0]">
            <p /* data-aos="fade-up"  */ className="mt-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
              faucibus faucibus mi tortor massa in vestibulum duis lacus.
              Pellentesque ultrices integer porta augue purus faucibus mus. Diam
              et volutpat
            </p>
            <p /* data-aos="fade-up" */ className="mt-10">
              etiam faucibus neque, aliquet hendrerit. Elementum eget enim lorem
              turpis consectetur fringilla. Sodales egestas luctus posuere
              commodo sit mattis etiam dignissim. Maecenas iaculis arcu praesent
              est. Vulputate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
