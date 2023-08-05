import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Eventspage = () => {
  const [events, setEvents] = useState([{ name: '', fdate: '', ftime: '', tdate: '', ttime: '', tname: '', desc: '' }]);
    useEffect(() => {
      axios.get('https://itet-backend-em.onrender.com/userData').then((res) => {
    setEvents(res.data);
    });
  },[]);
    const dateHandler=(fdate)=>{
      const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];
let name=''

    if(fdate<formattedToday){
      name=false  
  }
  else{
    name=true
  }
  return name;  
  }

  return (
    <div className="event-list">
      {events.map((data, index) => {
        let id=data._id
        const someVariable = "Hello"; // Declare the variable inside the map function
        // You can use the variable here or do any other processing
       let datecolor=dateHandler(data.fdate)
let deleteHandler=(id)=>{
axios.post('https://itet-backend-em.onrender.com/delete',{id:id}).then(()=>{
  axios.get('https://itet-backend-em.onrender.com/userData').then((res) => {
    setEvents(res.data);
    });
})

}
        
//         return (
//          <>
//          <div className="link-container">
//          <Link  className={datecolor === true ? 'event-link' : 'event-link-false'} to="/event2" state={{ event: data }} key={index}>
//             <p className='event-p' >{data.name} (Trainer: {data.tname}) {someVariable}</p>
//           </Link>
// <div className='delete-container'>
// <button className='delete-btn' onClick={() => deleteHandler(id)}>
//           <i class="fa-solid fa-trash"></i>
//           </button>
// </div>
//          </div>
//           </>
//         );
return (
  <>
    <div className="link-container">
      <Link
        className={datecolor === true ? 'event-link' : 'event-link-false'}
        to="/event2"
        state={{ event: data }}
        key={index}
      >
        <p className='event-p'>{data.name} (Trainer: {data.tname}) {someVariable}</p>
      </Link>
      <div className='delete-container'>
        <button className='delete-btn' onClick={() => deleteHandler(id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  </>
);

      })}
    </div>
  );
  

}
export default Eventspage
     // return (
  //   <div className="event-list">
  //   {events.map((data, index) => (
  //     <Link className='event-link' to="/event2" state={{ event: data }} key={index}>
  //       <p className='event-p' >{data.name} (Trainer: {data.tname})</p>
  //     </Link>
  //   ))}
   
  // </div>
  // )