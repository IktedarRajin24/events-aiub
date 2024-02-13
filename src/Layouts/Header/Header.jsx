/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Bars3Icon,
  CalendarIcon,
  EnvelopeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="md:flex justify-between items-center hidden">
        <div className="2xl:w-1/4 w-1/3 my-2 cursor-pointer">
          <Link to="/">
            <img src="/Logo/aiub-logo.png" alt="aiub-logo" />
          </Link>
        </div>
        <div className="2xl:w-1/5 w-1/3 my-2 px-5 font-semibold text-[#004ea2] ">
          <ul className="flex items-center justify-end gap-5">
            <Link to="/calendar">
              <li className="flex items-center gap-1 hover:text-[#007bff] transition-colors duration-500 ease-in-out cursor-pointer">
                <CalendarIcon className="w-5" />
                <span>Calendar</span>
              </li>
            </Link>
            <Link to="/login">
              <li className="flex items-center gap-1 hover:text-[#007bff] transition-colors duration-500 ease-in-out cursor-pointer">
                <UserIcon className="w-5" />
                <span>Login</span>
              </li>
            </Link>
            <li className="flex items-center gap-1 hover:text-[#007bff] transition-colors duration-500 ease-in-out cursor-pointer">
              <EnvelopeIcon className="w-5" />
              <span>Contact Us</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center px-3 py-2 md:hidden">
        <Link to="/">
          <div className="w-4/5 flex items-center gap-3 ">
            <img
              src="/Logo/aiub-logo-round.svg"
              className="w-24"
              alt="aiub-logo"
            />
            <p className="text-[#004ea2] font-bold leading-5 text-xl">
              American International University-Bangladesh
              <br />
              <span className="font-normal text-xs text-black">
                Where leaders are created
              </span>
            </p>
          </div>
        </Link>

        <Bars3Icon
          className="w-10"
          fill="#004ea2"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div className={`md:hidden  bg-[#007bff] ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center justify-center gap-4 py-3 text-white">
          <Link to="/calendar">
            <li className="flex items-center gap-1">
              <CalendarIcon className="w-5" />
              <span>Calendar</span>
            </li>
          </Link>
          <Link to="/login">
            <li className="flex items-center gap-1">
              <UserIcon className="w-5" />
              <span>Login</span>
            </li>
          </Link>
          <li className="flex items-center gap-1">
            <EnvelopeIcon className="w-5" />
            <span>Contact Us</span>
          </li>
        </ul>
      </div>
      <div className="w-full md:flex justify-center items-center text-center h-10 bg-[#004ea2] ">
        <Link className="/">
          <img
            src="/Logo/aiub-logo-round.svg"
            className=" w-32 mt-5 md:inline-block hidden align-middle rounded-full shadow-[0px_0px_7px_3px] shadow-white hover:shadow-[#004ea2] transition-all ease-in duration-500"
            alt="aiub-logo"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
