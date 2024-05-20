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

  function extractEventDetails(events) {
    const allEvents = [];

    const formatEvent = (event) => {
      const startDate = new Date(event.date);
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 1);

      return {
        title: event.title,
        start: startDate,
        end: endDate,
      };
    };

    events.past_events.forEach((event) => {
      allEvents.push(formatEvent(event));
    });
    events.current_events.forEach((event) => {
      allEvents.push(formatEvent(event));
    });
    events.upcoming_events.forEach((event) => {
      allEvents.push(formatEvent(event));
    });

    return allEvents;
  }

  const eventsArray = extractEventDetails(events);

  return (
    <div className="w-full md:calendar calendar-mobile">
      <Calendar
        localizer={localizer}
        events={eventsArray}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: "80vh",
          width: "50%",
          margin: "80px auto 20px",
        }}
      />
    </div>
  );
};

export default EventCalendar;
