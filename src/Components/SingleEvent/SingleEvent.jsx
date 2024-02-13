/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const SingleEvent = ({ event }) => {
  const imageRef = useRef(null);
  const [timer, setTimer] = useState("00:00:00");

  const handleMouseEnter = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = "scale(1.1)";
      imageRef.current.style.transition = "transform 1s";
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = "scale(1)";
      imageRef.current.style.transition = "transform 1s";
    }
  };
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // const date = new Date(event.date);

  const getDate = (date) => {
    const modifiedDate = new Date(date);
    return (
      modifiedDate.getDate() +
      " " +
      months[modifiedDate.getMonth()] +
      " " +
      modifiedDate.getFullYear()
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const eventTime = new Date(event.date).getTime();
      const timeLeft = eventTime - currentTime;

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setTimer(
        `${days.toString().padStart(2, "0")} days ${hours
          .toString()
          .padStart(2, "0")} hrs ${minutes
          .toString()
          .padStart(2, "0")} mins ${seconds.toString().padStart(2, "0")} secs`
      );

      if (timeLeft <= 0) {
        clearInterval(intervalId);
        setTimer("00:00:00");
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [event.date]);
  return (
    <div
      className="md:w-9/12 w-11/12 mx-auto h-72 bg-white rounded-md shadow-[0px_0px_7px_3px] shadow-slate-200 hover:shadow-slate-400 transition-all ease-in duration-500 overflow-hidden relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {event.photos ? (
        <img
          src={event.photos}
          className="object-cover w-full h-1/2 rounded-t-md "
          alt=""
          ref={imageRef}
        />
      ) : (
        ""
      )}
      <h2 className="text-lg font-serif mt-4 ms-3 hover:text-[#004ea2]">
        {event.title}
      </h2>

      {event.description ? (
        <p className="text-sm mt-2 ms-3 me-3 text-slate-500 font-mono">
          {event.description}
        </p>
      ) : (
        <p className="text-sm mt-2 ms-3 me-3 text-slate-500 font-mono">
          {event.teaser}
        </p>
      )}

      <div className={event.photos ? "" : "mt-20"}>
        {event.key_takeaways ? (
          <p className="text-xs mt-1 ms-3 me-3 text-slate-500 font-mono">
            {/* {console.log(event.key_takeaways)} */}
            <span className="font-bold text-[#004ea2]">
              Key Takeaways:{" "}
              <span className="text-slate-500">
                {event.key_takeaways.map(
                  (item) =>
                    item +
                    `${
                      item ===
                      event.key_takeaways[event.key_takeaways.length - 1]
                        ? ""
                        : ", "
                    }`
                )}
              </span>
            </span>
          </p>
        ) : (
          ""
        )}
        {event.countdown_timer ? (
          <p className="text-sm ms-3 mt-5">
            <span className="font-bold">Time left:</span> {timer}
          </p>
        ) : (
          ""
        )}
        <p
          className={` text-sm leading-5 ${
            event.photos
              ? "text-center absolute top-1 right-1 bg-blue-500 text-white md:w-1/6 w-1/4 opacity-90 shadow-[0px_0px_7px_3px] shadow-white py-2"
              : "ms-2 mt-3 "
          } px-1`}
        >
          <span className="font-bold">{event.photos ? "" : "Date:"}</span>{" "}
          <span className={`${event.photos ? "font-bold" : ""} opacity-100 `}>
            {getDate(event.date)}
          </span>
        </p>
        {event.speaker_profiles ? (
          <p className="ms-3 mt-3 text-sm font-bold">
            Speakers:{" "}
            {event.speaker_profiles.map((speaker) => (
              <span className="font-normal" key={speaker.name}>
                {speaker.name +
                  `${
                    speaker.name ===
                    event.speaker_profiles[event.speaker_profiles.length - 1]
                      .name
                      ? " "
                      : ", "
                  }`}
              </span>
            ))}
          </p>
        ) : (
          ""
        )}
        {event.registration_deadline ? (
          <p className="text-sm ms-3 mt-3 font-bold">
            Deadline:{" "}
            <span className="text-red-500 font-normal">
              {getDate(event.registration_deadline)}
            </span>
          </p>
        ) : (
          ""
        )}
        {event.registration_link ? (
          <p
            className={`bg-red-500 text-white px-1 py-2 rounded-lg me-3 hover:bg-red-700 absolute bottom-3 right-3 transition-colors duration-500`}
          >
            <Link to="register">Register</Link>
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SingleEvent;
