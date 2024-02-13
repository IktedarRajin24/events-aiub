/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Menubar = ({ onSetQuery, onSetSortBy }) => {
  return (
    <div className="w-11/12 mx-auto flex justify-end items-center gap-5 py-10 text-slate-600">
      <div className="md:w-1/6 w-1/3">
        <input
          type="text"
          className="shadow-lg rounded-full px-2 w-full"
          placeholder="Search"
          onChange={(e) => onSetQuery(e.target.value)}
        />
      </div>
      <div className="flex gap-2 md:w-1/5 w-9/12">
        <span>Sort By</span>
        <select
          className="rounded-full w-1/2 px-2 text-sm shadow-lg"
          onChange={(e) => onSetSortBy(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="date">Date</option>
          <option value="alphabetical">A-Z</option>
        </select>
      </div>
    </div>
  );
};

export default Menubar;
