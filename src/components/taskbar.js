import React from 'react';
import { Link } from 'react-router-dom';

const Taskbar = () => {
  return (
    <div className="taskbar">
        <Link to='/'>
        <button className="taskbar-button">
        <i className="fas fa-home"></i>
        {/* <span className='taskbar-span'>Add</span> */}
      </button>
        </Link>
     <Link to='/event'>
     <button className="taskbar-button">
     <i class="fa-solid fa-bell"></i>
        {/* <span className='taskbar-span'>Events</span> */}
      </button>
     </Link>
     <Link to='/calendar'>
     <button className="taskbar-button">
     <i className="fa-regular fa-calendar"></i>
        {/* <span className='taskbar-span'>CAL</span> */}
      </button>
     </Link>
    </div>
  );
};
export default Taskbar;


