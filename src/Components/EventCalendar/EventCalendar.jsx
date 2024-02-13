/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import React from "react";
const localizer = momentLocalizer(moment);
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./EventCalendar.css";
import { useLoaderData } from "react-router-dom";

const EventCalendar = () => {
  const events = useLoaderData();
  const date = new Date(events.current_events.date);
  const presentEvents = events.current_events;
  console.log(events.current_events[0].date);
  return (
    <div className="w-full md:calendar calendar-mobile">
      <Calendar
        localizer={localizer}
        events={events.current_events}
        style={{
          height: "80%",
          width: "80%",
          margin: "80px auto 20px",
        }}
      />
    </div>
  );
};

export default EventCalendar;
