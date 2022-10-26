import React from "react";
import MenuCard from "./UI/MenuCard";

function Menu() {
  return (
    <div id="menu">
      <h2
        className="uppercase text-[50px] text-[#EAD185] font-tacs tracking-custom
           absolute left-[25%] top-[250%] max-xl:left-[15%] max-lg:left-[25%] max-md:left-[20%] max-[850px]:left-[15%] max-[285px]:left-[10%] max-sm:text-4xl"
      >
        Our Menu
      </h2>
      <div className="flex absolute left-[20%] top-[260%]">
        <MenuCard className="text-[#475251]">
          <img
            className="relative ml-auto mr-auto top-1/4"
            src="/utilities/Champaigns.png"
            alt=""
          />
          <h3 className="mt-[2rem] absolute left-[5%]">Champaigns</h3>
        </MenuCard>
        <MenuCard className="text-[#475251]">
          <img
            className="relative ml-auto mr-auto top-1/4"
            src="/utilities/Wine.png"
            alt=""
          />
          <h3 className="mt-[2rem] absolute left-[28%]">Wine</h3>
        </MenuCard>
        <MenuCard className="text-[#475251]">
          <img
            className="relative ml-auto mr-auto top-1/4"
            src="/utilities/Coctails.png"
            alt=""
          />
          <h3 className="mt-[2rem] absolute left-[47.5%]">Coctails</h3>
        </MenuCard>
        <MenuCard className="text-[#475251]">
          <img
            className="relative ml-auto mr-auto top-1/4"
            src="/utilities/Non-alcoholic.png"
            alt=""
          />
          <h3 className="mt-[2rem] absolute left-[66%]">Non-alcoholic</h3>
        </MenuCard>
        <MenuCard className="text-[#475251]">
          <img
            className="relative ml-auto mr-auto top-1/4"
            src="/utilities/Food.png"
            alt=""
          />
          <h3 className="mt-[2rem] absolute left-[88.3%]">Food</h3>
        </MenuCard>
      </div>
    </div>
  );
}

export default Menu;
