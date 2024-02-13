/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Sidebar = ({ onSetEvent, event }) => {
  return (
    <div className=" bg-[#004ea2] 2xl:w-1/6 md:w-1/5 md:max-h-full h-30 text-slate-50 md:py-5">
      <ul className="md:block flex md:flex-col justify-between md:gap-0 gap-5 md:w-full w-11/12 md:mx-0 mx-auto md:text-lg text-sm">
        <li
          className={`md:px-5 px-1 py-5 hover:bg-[#007bff] transition-colors duration-500 ease-in md:border-b-2 md:border-[#007bff] cursor-pointer ${
            event === "present_event" ? "bg-[#007bff]" : ""
          }`}
          onClick={() => onSetEvent("present_event")}
        >
          Current Events
        </li>
        <li
          className={`md:px-5 px-1 py-5 hover:bg-[#007bff] transition-colors duration-500 ease-in md:border-b-2 md:border-[#007bff] cursor-pointer ${
            event === "upcoming_event" ? "bg-[#007bff]" : ""
          }`}
          onClick={() => onSetEvent("upcoming_event")}
        >
          Upcoming Events
        </li>
        <li
          className={`md:px-5 px-1 py-5 hover:bg-[#007bff] transition-colors duration-500 ease-in md:border-b-2 md:border-[#007bff] cursor-pointer ${
            event === "past_event" ? "bg-[#007bff]" : ""
          }`}
          onClick={() => onSetEvent("past_event")}
        >
          Past Events
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
