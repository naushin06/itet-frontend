import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TASKPAGE from './components/TASKPAGE';
import EventPages from './components/eventpage';
import Eventspage from './components/event2page';
import Taskbar from './components/taskbar';
import './App.css';

const App = () => {
 useEffect(()=>{
  console.log('heyy');
 },[])
  // This line logs 'heyy' to the console once, during the initial render
  return (
    <>
      <BrowserRouter>
        <Taskbar />
        <Routes>
          <Route exact path="/" element={<TASKPAGE />} />
          <Route exact path="/event" element={<Eventspage/>} />
          <Route exact path="/event2" element={<EventPages/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

// // import {BrowserRouter,Routes,Route} from "react-router-dom"
// // import TASKPAGE from './components/TASKPAGE';
// // import EventPages from "./components/eventpage";
// // import Event2page from "./components/event2page"
// // import Taskbar from "./components/taskbar";
// // import './App.css'
// // function App() {
// //   return (
// // <BrowserRouter>
// // <Taskbar></Taskbar>
// // <Routes>
// // <Route exact path='/' element={<TASKPAGE />}></Route>
// // <Route exact path='/event' element={<Event2page/>}></Route>
// // <Route exact path='/event2' element={<EventPages/>}></Route>
// // </Routes>
// // </BrowserRouter>        
// //   );
// // }

// // export default App;


// import React, { useEffect } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import TASKPAGE from './components/TASKPAGE';
// import EventPages from './components/eventpage';
// import Eventspage from './components/event2page';
// import Taskbar from './components/taskbar';
// import './App.css';

// // function App() {
// //   return (
// //    <>
  
// //     <BrowserRouter>
// //     <Taskbar />
// //       <Routes>
// //         <Route exact path="/" element={<TASKPAGE />} />
// //         <Route exact path="/event" element={<Event2page />} />
// //         <Route exact path="/event2" element={<EventPages />} />
// //       </Routes>
// //     </BrowserRouter>
// //    </>
// //   );
// // }
// const App = () => {
//     useEffect(() => {
//       console.log('heyy'); // This line logs 'heyy' to the console once, after the initial render
//     }, []);
//       return (
//     <>
//       <BrowserRouter>
//         <Taskbar />
//         <Routes>
//           <Route exact path="/" element={<TASKPAGE />} />
//           <Route exact path="/event" element={<Eventspage/>} />
//           <Route exact path="/event2" element={<EventPages/>} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };
// export default App;
