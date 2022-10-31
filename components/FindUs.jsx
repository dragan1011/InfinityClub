import React, { useEffect } from "react";

import { SP, SPB } from "./UI/Text";

import Aos from "aos";
import "aos/dist/aos.css";

function FindUs() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="find_us">
      <div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="text-6xl ml-[18rem] max-sm:text-4xl text-[50px] text-[#EAD185] font-tacs tracking-custom max-[800px]:ml-[10rem] max-[450px]:ml-[3rem] max-phone:ml-[1rem]"
        >
          <h2>FIND US</h2>
          <p className="text-[#E5E5E5] text-[20px] mt-5">
            In the heart of the Graz
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000" className="my-[5rem]">
          <div className="bg-[#2A2A2A] max-w-[1000px] relative ml-auto mr-auto grid grid-cols-2 max-[1250px]:grid-cols-1 max-[1250px]:text-left max-[1250px]:justify-center">
            <div
              data-aos="fade-right"
              className="mt-5 max-[1250px]:relative max-[1250px]:mr-auto max-[1250px]:ml-auto"
            >
              <p className="text-[20px] text-[#EAD185] ml-[5rem] max-phone:ml-[2rem]">
                WORKING HOURS
              </p>
              <div className="grid grid-cols-2 pl-2">
                <div className="flex flex-col">
                  <SP>Monday</SP>
                  <SP>Tuesday</SP>
                  <SP>Wednseday</SP>
                  <SP>Thursday</SP>
                  <SP>Friday</SP>

                  <div className="flex flex-col bg-[#EAD18559] -ml-2 pl-2 p-1">
                    <SPB>Saturday</SPB>
                    <SPB>Sunday</SPB>
                  </div>
                </div>
                <div className="flex flex-col">
                  <SP>3:00 pM - 12:00 AM</SP>
                  <SP>3:00 pM - 12:00 AM</SP>
                  <SP>3:00 pM - 12:00 AM</SP>
                  <SP>3:00 pM - 12:00 AM</SP>
                  <SP>3:00 pM - 05:00 AM</SP>

                  <div className="flex flex-col bg-[#EAD18559] pb-2 text-black max-w-[150px]">
                    <SPB>3:00 pM - 05:00 AM</SPB>
                    <SPB>3:00 pM - 12:00 AM</SPB>
                  </div>
                </div>
              </div>
              <p className="text-[20px] text-[#EAD185] text-center mt-5">
                LOCATION
              </p>
              <div className="flex justify-self-start items-start flex-1 min-w-0 min-h-0 ml-[7rem] mt-5 max-[1250px]:relative max-[1250px]:mr-auto max-[1250px]:ml-auto">
                <img src="/utilities/marker.png" className="mr-1 mt-1" alt="" />
                <SP>Alte poststraße 460-462 8055 Graz</SP>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="p-3 max-[1250px]:relative max-[1250px]:mr-auto max-[1250px]:ml-auto"
            >
              <img src="/utilities/map.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindUs;
