import React from "react";

function About() {
  return (
    <div id="about">
      <div>
        <h2
          className="uppercase max-w-xs text-[50px] text-[#EAD185] font-tacs tracking-custom
           absolute left-[25%] top-[115%] max-xl:left-[15%] max-lg:left-[25%] max-md:left-[20%] max-[850px]:left-[15%] max-[285px]:left-[10%] max-sm:text-4xl"
        >
          About Infinity
        </h2>
        <div className="text-[#959595] max-w-sm absolute left-[25%] top-[135%] max-xl:left-[15%] max-lg:left-[25%] max-lg:max-w-xl max-lg:mt-[5rem] max-md:left-[15%] max-[285px]:left-[10%] max-[850px]:left-[15%] max-[285px]:max-w-6xl max-[650px]:left-[5%]max-[215px]:text-[12px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id faucibus
            faucibus mi tortor massa in vestibulum duis lacus. Pellentesque
            ultrices integer porta augue purus faucibus mus. Diam et volutpat
            etiam faucibus neque, aliquet hendrerit.
          </p>

          <p className="mt-[3%]">
            Elementum eget enim lorem turpis consectetur fringilla. Sodales
            egestas luctus posuere commodo sit mattis etiam dignissim. Maecenas
            iaculis arcu praesent est. Vulputate.
          </p>
        </div>
        <img
          src="/utilities/club.png"
          className="absolute left-[58%] top-[105%] max-xl:scale-75  max-lg:left-[23%]  max-lg:top-[160%] max-lg:mt-[2rem] max-md:left-[10%] max-[455px]:mt-[10rem] max-[850px]:left-[15%] max-[285px]:scale-[109%] max-[285px]:mt-[20rem] max-[650px]:left-[5%] "
        />
      </div>
      <div>
        <img
          src="/utilities/dance.png"
          className="absolute left-[20%] top-[165%] mt-10 max-[1450px]:left-[15%] max-xl:left-[10%] max-xl:scale-[90%] max-lg:left-[25%]  max-lg:top-[260%] max-[455px]:mt-[10rem] max-[285px]:mt-[15rem] max-[850px]:left-[17%] max-[285px]:scale-[109%] max-md:left-[15%] max-[650px]:left-[10%]
          max-[580px]:left-[0%] max-[500px]:scale-[80%]"
        />
        <div className="text-[#959595] max-w-sm absolute left-[57%] top-[185%] mt-16 max-xl:left-[60%] max-lg:left-[25%] max-md:left-[10%] max-lg:max-w-xl max-lg:top-[230%] max-[850px]:left-[15%] max-[285px]:left-[10%] max-[650px]:left-[5%] max-[215px]:text-[12px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id faucibus
            faucibus mi tortor massa in vestibulum duis lacus. Pellentesque
            ultrices integer porta augue purus faucibus mus. Diam et volutpat
            etiam faucibus neque, aliquet hendrerit.
          </p>

          <p className="mt-[3%]">
            Elementum eget enim lorem turpis consectetur fringilla. Sodales
            egestas luctus posuere commodo sit mattis etiam dignissim. Maecenas
            iaculis arcu praesent est. Vulputate.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
