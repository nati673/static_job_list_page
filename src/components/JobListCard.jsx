import React from "react";
import photosnapProfile from "../assets/images/photosnap.svg";

function JobListCard({
  company,
  job_title,
  is_new,
  is_featured,
  logo,
  posted_at,
  contract,
  location,
  role,
  level,
  languages,
  tools,
  onFilter,
}) {
  return (
    <div className="bg-white w-[74%] mb-6 p-8 border-l-4 border-[#88b4b2] shadow-xl shadow-[#bbd1d2] rounded-[5px]">
      <div className="flex flex-row align-center justify-between">
        <div className="flex flex-row gap-6 items-center">
          <div className="">
            <img src={logo} alt="" />
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex flex-flex items-center align-center gap-3 ">
              <h3 className="text-[#6B9E9A] font-[700] text-[18px]">
                {company}
              </h3>
              {is_new && (
                <span class="inline-flex items-center rounded-full bg-[#5CA6A2] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-600/20">
                  NEW!
                </span>
              )}
              {is_featured && (
                <span class="inline-flex items-center rounded-full bg-[#2D3B38] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-600/20">
                  FEATURED
                </span>
              )}
            </div>

            <h1 className="text-black font-[700] text-[20px] hover:text-[#639F98] cursor-pointer">
              {job_title}
            </h1>

            <div className="flex flex-flex items-center align-center gap-[16px] text-[#848A8A]">
              <p className="font-[500]">{posted_at}</p>
              <h1>•</h1>
              <p className="font-[500]">{contract}</p>
              <h1>•</h1>
              <p className="font-[500]">{location}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-4 items-center">
          <a
            onClick={() => onFilter(role)}
            class="inline-flex hover:bg-[#60A5A5] hover:text-white cursor-pointer items-center rounded-[5px] bg-[#EFF7F4] px-2 py-1 text-[16px] font-[700] text-[#6B9E9A]  "
          >
            {role}
          </a>
          <a
            onClick={() => onFilter(level)}
            class="inline-flex hover:bg-[#60A5A5] hover:text-white cursor-pointer items-center rounded-[5px] bg-[#EFF7F4] px-2 py-1 text-[16px] font-[700] text-[#6B9E9A]  "
          >
            {level}
          </a>
          {languages.map((languages, index) => (
            <a
              key={index}
              onClick={() => onFilter(languages)}
              class="inline-flex hover:bg-[#60A5A5] hover:text-white cursor-pointer items-center rounded-[5px] bg-[#EFF7F4] px-2 py-1 text-[16px] font-[700] text-[#6B9E9A]  "
            >
              {languages}
            </a>
          ))}
          {tools.map((tool, index) => (
            <a
              key={index}
              onClick={() => onFilter(tool)}
              class="inline-flex hover:bg-[#60A5A5] hover:text-white cursor-pointer items-center rounded-[5px] bg-[#EFF7F4] px-2 py-1 text-[16px] font-[700] text-[#6B9E9A]  "
            >
              {tool}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobListCard;
