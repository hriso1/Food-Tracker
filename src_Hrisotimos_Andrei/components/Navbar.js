import React, { useState } from 'react';
import { FaHome, FaDumbbell } from 'react-icons/fa';
import { AiOutlineUserAdd, AiOutlineMenu } from 'react-icons/ai';
import { BsFillCalculatorFill } from 'react-icons/bs';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { GoGraph } from 'react-icons/go';
import { Link } from "react-router-dom";
// import './Navbar.css';
import Toolbar from './Toolbar';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    document.body.classList.toggle('sidebar--open'); // add/remove sidebar--open class to body
  }

  return (
    <div>
      <AiOutlineMenu
        className={`menu-icon ${sidebarOpen ? 'menu-icon--open' : ''}`}
        onClick={toggleSidebar}
      />
      <div className={`sidebar ${sidebarOpen ? 'sidebar--open' : ''}`}>
        <ul className='sidebar-menu'>
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/profile"><AiOutlineUserAdd /> Profile</Link></li>
          <li><Link to="/calculator"><BsFillCalculatorFill /> Calculator</Link></li>
          <li><Link to="/workouts"><FaDumbbell /> Workouts</Link></li>
          <li><Link to="/nutrition"><GiForkKnifeSpoon /> Nutrition</Link></li>
          <li><Link to="/tracker"><GoGraph /> Tracker</Link></li>
        </ul>
      </div>
      <div className={`main-content ${sidebarOpen ? 'main-content--shifted' : ''}`}>
        <Toolbar />
      </div>
    </div>
  );
}

export default Navbar;
