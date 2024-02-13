/* eslint-disable no-unused-vars */
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full ">
      <div className="flex w-full h-1">
        <div className="bg-[#0072bc] w-1/4"></div>
        <div className="bg-[#008c44] w-1/4"></div>
        <div className="bg-[#f7951e] w-1/4"></div>
        <div className="bg-[#cb3e33] w-1/4"></div>
      </div>
      <div className="bg-[#181818] py-10">
        <div className="md:w-full w-11/12 mx-auto text-[#ababab] flex md:flex-row flex-col items-center justify-center gap-5">
          <img src="/Logo/aiub-logo-round.svg" alt="" className=" w-36 mt-5" />
          <div>
            <h1 className="font-bold md:text-xl text-lg mb-2">
              American International University-Bangladesh (AIUB)
            </h1>
            <div className="leading-6">
              <p className="flex items-start gap-1">
                <MapPinIcon className="w-5" fill="#ababab" />
                408/1 (Old KA 66/1), Kuratoli, Khikhet, <br /> Dhaka 1229,
                Bangladesh <br />
              </p>
              <p className="flex gap-1">
                <EnvelopeIcon className="w-5" fill="#ababab" /> info@aiub.edu
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#202020] h-10 text-center py-2">
        <p className="text-[#ababab] text-xs">Copyright &copy; AIUB 2022</p>
      </div>
    </div>
  );
};

export default Footer;
