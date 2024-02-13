/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SingleEvent from "../SingleEvent/SingleEvent";
import Menubar from "../Menubar/Menubar";

const AllEvents = ({ events }) => {
  const [sortBy, setSortBy] = useState("default");
  const [query, setQuery] = useState("");
  const [sortedEvents, setSortedEvents] = useState([...events]);

  useEffect(() => {
    let newSortedEvents = [...events];

    if (query.trim() !== "") {
      newSortedEvents = newSortedEvents.filter((event) =>
        event.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Sorting
    if (sortBy === "default") {
      setSortedEvents(newSortedEvents.slice());
    } else if (sortBy === "alphabetical") {
      newSortedEvents.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "date") {
      newSortedEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setSortedEvents(newSortedEvents);
  }, [events, sortBy, query]);
  return (
    <>
      <div className="w-full">
        <Menubar onSetQuery={setQuery} onSetSortBy={setSortBy} />
        <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-11/12 mx-auto py-10">
          {sortedEvents &&
            sortedEvents.map((event) => (
              <SingleEvent key={event.title} event={event} />
            ))}
        </div>
      </div>
    </>
  );
};

export default AllEvents;
