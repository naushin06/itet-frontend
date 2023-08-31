import React,{useState,useEffect} from 'react'
import {Calendar ,dateFnsLocalizer,datefnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/format";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css"
import DatePicker from "react-datepicker"
import axios from 'axios';

    const CalendarPage = () => {
const locales={
    "en-US":require("date-fns/locale/en-US")
}

    const localizer= dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales
    })

const events=[
    {
        title:"webinar",
        start:new Date(2023,6,6),
        end:new Date(2023,6,8)
  }
]


const fdateconversion=(item)=>{
    const dateString = item;
    // Split the string into an array using comma as the delimiter
    const fruitsArray = dateString.split('-');
    const month =parseInt(fruitsArray[1])-1
    const m=month.toString()
    const fdate=new Date(fruitsArray[0],m,fruitsArray[2])
    return fdate
}


const tdateconversion=(item)=>{
    const dateString = item;
// Split the string into an array using comma as the delimiter
const fruitsArray = dateString.split('-');
const month =parseInt(fruitsArray[1])-1
const m=month.toString()
console.log(fruitsArray);
const date=parseInt(fruitsArray[2])+1
const d=date.toString()
const tdate=new Date(fruitsArray[0],m,d)
return tdate
}

const [eventName, setEventName] = useState([]);

const eventHandler = (event) => {
    console.log(event);
  event.forEach((item) => {
    const name = item.name;
    console.log(item);
    const fdate = fdateconversion(item.fdate);
    const tdate= tdateconversion(item.tdate);
    console.log(fdate);
    console.log(tdate);

    const newEvent = {
      title: name,
      start:fdate,
      end: tdate,
    };

    // Check for an event with the same title and start date
    const eventExists = eventName.some(
      (existingEvent) =>
        existingEvent.title === newEvent.title &&
        existingEvent.start.getTime() === newEvent.start.getTime()
    );

    if (eventExists) {
      console.log('Event already exists.');
    } else {
      setEventName((prevEvents) => [...prevEvents, newEvent]);
    }
  });
};

console.log(eventName);

const [data, setData] = useState([{ name: '', fdate: '', ftime: '', tdate: '', ttime: '', tname: '', desc: '' }]);
useEffect(() => {
    axios.get('https://itet-backend-em.onrender.com/userData').then((res) => {
  setData(res.data);
eventHandler(res.data)
  });
},[]);



  return (
    <>
    <Calendar localizer={localizer} events={eventName} startAccessor="start" endAccessor="end" style={{height:500,margin:"50px" }} ></Calendar>
    </>
  )
}

export default CalendarPage