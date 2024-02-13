/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import AllEvents from "../AllEvents/AllEvents";
import "./Main.css";
import Loading from "../Loading/Loading";

const Main = () => {
  const [presentEvents, setPresentEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [nextEvents, setNextEvents] = useState([]);
  const [event, setEvent] = useState("present_event");
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    event === "upcoming_event"
      ? setEvents(nextEvents)
      : event === "past_event"
      ? setEvents(pastEvents)
      : setEvents(presentEvents);
  }, [event, nextEvents, pastEvents, presentEvents]);

  const handleEvent = (event) => {
    setEvent(event);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("/Data/events.json")
      .then((res) => res.json())
      .then((data) => {
        setPresentEvents(data.current_events);
        setPastEvents(data.past_events);
        setNextEvents(data.upcoming_events);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="bg-slate-100 mt-12 flex md:flex-row flex-col main overflow-hidden">
      <Sidebar onSetEvent={handleEvent} event={event} />
      {isLoading ? <Loading /> : <AllEvents events={events} />}
    </div>
  );
};

export default Main;
