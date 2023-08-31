import React, { useState, useEffect } from "react";
import {
  Calendar,
  dateFnsLocalizer,
  datefnsLocalizer,
} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/format";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import axios from "axios";

const CalendarPage = () => {
  const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  //   const [color, setColor] = useState("");
  let bgcolor = "";
  let color = "";
  const fdateconversion = (item, time) => {
    let timeformat = time.split(":");
    const dateString = item;
    console.log(timeformat[0], timeformat[1]);
    // Split the string into an array using comma as the delimiter
    const fruitsArray = dateString.split("-");
    const month = parseInt(fruitsArray[1]) - 1;
    const m = month.toString();
    const fdate = new Date(
      fruitsArray[0],
      m,
      fruitsArray[2],
      parseInt(timeformat[0]),
      parseInt(timeformat[1])
    );
    return fdate;
  };

  const tdateconversion = (item, time) => {
    console.log(time);
    let timeformat = time.split(":");

    const dateString = item;
    // Split the string into an array using comma as the delimiter
    const fruitsArray = dateString.split("-");
    const month = parseInt(fruitsArray[1]) - 1;
    const m = month.toString();
    const date = parseInt(fruitsArray[2]);
    const d = date.toString();
    const tdate = new Date(
      fruitsArray[0],
      m,
      d,
      parseInt(timeformat[0]),
      parseInt(timeformat[1])
    );
    return tdate;
  };

  const [eventName, setEventName] = useState([]);

  const eventHandler = (event) => {
    event.forEach((item) => {
      const name = item.name;
    

      const fdate = fdateconversion(item.fdate, item.ftime);
      const tdate = tdateconversion(item.tdate, item.ttime);

      if (item.mode === 'Event') {
        bgcolor = "#FFB7B7";
        color = "crimson";
      }
      if (item.mode === 'Office') {
        color = "#301E67";
        bgcolor = "#C4B0FF";
      }


      const newEvent = {
        title: name,
        start: fdate,
        end: tdate,
        background: bgcolor,
        color: color,
      };

      // Check for an event with the same title and start date
      const eventExists = eventName.some(
        (existingEvent) =>
          existingEvent.title === newEvent.title &&
          existingEvent.start.getTime() === newEvent.start.getTime()
      );

      if (eventExists) {
        console.log("Event already exists.");
      } else {
        setEventName((prevEvents) => [...prevEvents, newEvent]);
      }
    });
  };

  console.log(eventName);

  const [data, setData] = useState([
    {
      name: "",
      fdate: "",
      ftime: "",
      tdate: "",
      ttime: "",
      mode:"",
      tname: "",
      desc: "",
    },
  ]);
  useEffect(() => {
    axios.get("https://itet-backend-em.onrender.com/userData").then((res) => {
      setData(res.data);
      eventHandler(res.data);
    });
  }, []);

  return (
    <>
      <Calendar
        // defaultDate = {defaultDate}
        localizer={localizer}
        events={eventName}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, marginTop: 50 }}
        BackgroundWrapper="red"
        eventPropGetter={(eventName) => {
          const backgroundColor = eventName.background;
          const textColor = eventName.color;
          console.log(textColor);
          return { style: { backgroundColor,color:textColor } };
        }}
      />
    </>
  );
};

export default CalendarPage;
