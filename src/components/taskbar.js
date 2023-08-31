import React from 'react';
import { Link } from 'react-router-dom';

const Taskbar = () => {
  return (
    <div className="taskbar">
        <Link to='/'>
        <button className="taskbar-button">
        <i className="fas fa-home"></i>
        <span className='taskbar-span'>Add-Events</span>
      </button>
        </Link>
     <Link to='/event'>
     <button className="taskbar-button">
        <i className="fas fa-bell"></i>
        <span className='taskbar-span'>EVENTS</span>
      </button>
     </Link>
     <Link to='/calendar'>
     <button className="taskbar-button">
     <i className="fa-regular fa-calendar"></i>
        <span className='taskbar-span'>CALENDAR</span>
      </button>
     </Link>
    </div>
  );
};
export default Taskbar;


