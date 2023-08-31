// import React from "react";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const TASKPAGE = () => {

//   console.log('TASKPAGE rendered');
//   const navigate = useNavigate();
//   // const [events, setEvents] = useState([{ name: '', fdate: '', ftime: '', tdate: '', ttime: '', tname: '', desc: '' }]);
//   const [details, setDetails] = useState({
//     name: "",
//     fdate: "",
//     ftime: "",
//     tdate: "",
//     ttime: "",
//     tname: "",
//     desc: "",
//   });

//   // useEffect(() => {
//   //   axios.get('http://localhost:3001/events').then((res) => {
//   //     setEvents(res.data);
//   //   });
//   // });

//   function submitHandler() {
//     if (
//       details.name &&
//       details.fdate &&
//       details.tdate &&
//       details.ttime &&
//       details.ftime &&
//       details.desc &&
//       details.tname !== ""
//     ) {
//       console.log(details);

//       axios.post("http://localhost:3001/create", details);
//     }
//   }

//   return (
//     <div className="task-page">
//       <form className="task-form">
//         <h1>Task List</h1>
//         <div className="form-group">
//           <label>Event Name</label>
//           <input
//             type="text"
//             name="name"
//             value={details.name}
//             onChange={(e) =>
//               setDetails({ ...details, [e.target.name]: e.target.value })
//             }
//             placeholder="Enter event name"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Date From</label>
//           <input
//             type="date"
//             name="fdate"
//             value={details.fdate}
//             onChange={(e) =>
//               setDetails({ ...details, [e.target.name]: e.target.value })
//             }
//             required
//           />
//           <input
//             type="time"
//             name="ftime"
//             value={details.ftime}
//             onChange={(e) =>
//               setDetails({ ...details, [e.target.name]: e.target.value })
//             }
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Date To</label>
//           <input
//             type="date"
//             name="tdate"
//             value={details.tdate}
//             onChange={(e) =>
//               setDetails({ ...details, [e.target.name]: e.target.value })
//             }
//             required
//           />
//           <input
//             type="time"
//             name="ttime"
//             value={details.ttime}
//             onChange={(e) =>
//               setDetails({ ...details, [e.target.name]: e.target.value })
//             }
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Trainer Name</label>
//           <input
//             type="text"
//             name="tname"
//             value={details.tname}
//             onChange={(e) =>
//               setDetails({ ...details, [e.target.name]: e.target.value })
//             }
//             placeholder="Enter trainer name"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Description</label>
//           <textarea
//             name="desc"
//             value={details.desc}
//             onChange={(e) =>
//               setDetails({ ...details, [e.target.name]: e.target.value })
//             }
//             placeholder="Enter event description"
//             required
//           ></textarea>
//         </div>

//         <button type="submit" onClick={submitHandler}>
//           Submit
//         </button>
//       </form>

//       {/* <div className="event-list">
//         {events.map((data, index) => (
//           <Link to="/event1" state={{ event: data }} key={index}>
//             <p>{data.name} (Trainer: {data.tname})</p>
//           </Link>
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export default TASKPAGE;

import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const TASKPAGE = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([
    {
      name: "",
      fdate: "",
      ftime: "",
      tdate: "",
      ttime: "",
      tname: "",
      desc: "",
    },
  ]);
  const [details, setDetails] = useState({
    name: "",
    fdate: "",
    ftime: "",
    tdate: "",
    ttime: "",
    tname: "",
    desc: "",
    mode:""
  });


    const selectHandler = (event) => {
console.log(event.target.value);
console.log(event.target.name);
     
    };
  

  function submitHandler() {
    if (
      details.name &&
      details.fdate &&
      details.tdate &&
      details.ttime &&
      details.ftime &&
      details.desc &&
      details.tname &&
      details.mode !== ""
    ) {
      console.log(details);

      try {
        axios
          .post("https://itet-backend-em.onrender.com/create", details)
          .then(() => {
            console.log("event added");
            alert("event added");
            console.log(details);
          });
      } catch (err) {
        console.log(err.message);
      }
    }
  }
  return (
    <>
      <form className="container">
        <label className="form-label">EVENT-NAME</label>
        <input
          className="form-input"
          onChange={(e) =>
            setDetails({ ...details, [e.target.name]: e.target.value })
          }
          type="name"
          name="name"
          value={details.name}
          required
          placeholder="name"
        />

        <label className="form-label">DATE-FROM</label>

        <input
          className="form-input"
          onChange={(e) =>
            setDetails({ ...details, [e.target.name]: e.target.value })
          }
          type="date"
          name="fdate"
          value={details.fdate}
          required
          placeholder="from-date"
        />

        <input
          className="form-input"
          onChange={(e) =>
            setDetails({ ...details, [e.target.name]: e.target.value })
          }
          type="time"
          name="ftime"
          value={details.ftime}
          required
          placeholder="from-time"
        />

        <label className="form-label">DATE-TO</label>

        <input
          className="form-input"
          onChange={(e) =>
            setDetails({ ...details, [e.target.name]: e.target.value })
          }
          type="date"
          name="tdate"
          value={details.tdate}
          required
          placeholder="to-date"
        />

        <input
          className="form-input"
          onChange={(e) =>
            setDetails({ ...details, [e.target.name]: e.target.value })
          }
          type="time"
          name="ttime"
          value={details.ttime}
          required
          placeholder="to-time"
        />

        <label className="form-label">Trainer-Name</label>
        <input
          className="form-input"
          onChange={(e) =>
            setDetails({ ...details, [e.target.name]: e.target.value })
          }
          type="text"
          name="tname"
          value={details.tname}
          required
          placeholder="trainer-name"
        />
        <label className="form-label">DESC</label>
        <input
          className="form-input"
          onChange={(e) =>
            setDetails({ ...details, [e.target.name]: e.target.value })
          }
          type="text"
          name="desc"
          value={details.desc}
          required
          placeholder="EVENT-DESC"
        />

        <select name="mode" 
        onChange={(e)=>{setDetails({ ...details, [e.target.name]: e.target.value });selectHandler(e)}}
        required>
          <option value="">Please Select</option>
          <option value="Event">Event</option>
          <option value="Office">Office</option>
        </select>

        <button className="form-button" type="submit" onClick={submitHandler}>
          SUBMIT-BUTTON
        </button>
      </form>

      {/* <div>
            {
              events.map((data)=>{

              return(
                <Link   to='/event1' state={{event:data}}>
                <p>{data.name} trainername {data.tname} </p>
                </Link>
              )
              })
            }
           </div> */}
    </>
  );
};
export default TASKPAGE;
