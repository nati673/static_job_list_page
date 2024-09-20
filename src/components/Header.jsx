import React from "react";
import HeaderImage from "../assets/images/bg-header-desktop.svg";
import closeIcon from "../assets/images/icon-remove.svg";
function Header({ filters, onRemoveFilter, onClearFilters }) {
  return (
    <div>
      <div className="bg-cover bg-[#5DA5A4] bg-center bg-no-repeat h-full w-full">
        <img src={HeaderImage} className="w-full" alt="" />
      </div>

      {filters.length > 0 && (
        <div className="flex flex-col justify-center items-center w-full mt-[-2.5%]">
          <div className="flex align-center bg-white w-[74%] mb-6 p-5 rounded-[5px] relative">
            <div className="flex flex-row align-center justify-between">
              <div className="flex flex-row gap-4 items-center">
                {filters.map((filter, index) => (
                  <a
                    key={index}
                    class="inline-flex cursor-pointer items-center rounded-[5px] bg-[#EFF7F4]  text-[16px] font-[700] text-[#6B9E9A]"
                  >
                    <span className="px-2">{filter}</span>

                    <img
                      src={closeIcon}
                      onClick={() => onRemoveFilter(filter)}
                      class="ml-3 bg-[#60A9A7] px-2 py-2 rounded-r-[5px] hover:bg-black"
                      alt="close"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
