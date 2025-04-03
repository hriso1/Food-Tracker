import React, { useState } from 'react';
// import Mainlayout from '../layout/Mainlayout'
import Calculator from '../components/Calculator'
import { FaHome, FaDumbbell } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillCalculatorFill } from 'react-icons/bs';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { GoGraph } from 'react-icons/go';
import { Link } from "react-router-dom";
// import './Navbar.css';
import Toolbar from '../components/Toolbar';

const CalculatorPage = () => {
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
          <li className='linie' ><Link to="/"><FaHome /> Home</Link></li>
          {/* <li className='linie' ><Link to="/profile"><AiOutlineUserAdd /> Profile</Link></li> */}
          <li className='linie' ><Link to="/calculator"><BsFillCalculatorFill /> Calculator</Link></li>
          <li className='linie' ><Link to="/workouts"><FaDumbbell /> Workouts</Link></li>
          <li className='linie' ><Link to="/nutrition"><GiForkKnifeSpoon /> Nutrition</Link></li>
          <li className='linie' ><Link to="/tracker"><GoGraph /> Tracker</Link></li>
        </ul>
      </div>
      <div className={`main-content ${sidebarOpen ? 'main-content--shifted' : ''}`}>
        <Toolbar />
        {/* <h2 style={{ marginBottom: "60px", display: 'flex', marginLeft: '450px', marginTop: '10px', fontSize: '36px' }} >Calorie Calculator</h2> */}
        <div className="text-calculator">
          <div className="calculator-wrapper">
            <Calculator />
          </div>
          <div className='text'>

            <p>The Calorie Calculator can be used to estimate the number of calories a person needs to consume each day. This calculator can also provide some simple guidelines for gaining or losing weight.</p>
            <h2 style={{ marginTop: "50px", marginLeft: "450px" }} >Legend</h2>
            <h4 style={{ marginTop: "20px", marginBottom: "10px" }} >BMR:</h4>
            <p style={{ textIndent: "40px" }} className='card-calc'>Your Basal Metabolic Rate (BMR) is the number of calories you burn as your body performs basic (basal) life-sustaining function</p>
            <h4 style={{ marginTop: "20px", marginBottom: "10px" }}>Calories:</h4>
            <p style={{ textIndent: "40px" }} className='card-calc'>Calories are the amount of energy released when your body breaks down (digests and absorbs) food. The more calories a food has, the more energy it can provide to your body.</p>
            <h4 style={{ marginTop: "20px", marginBottom: "10px" }}>Activity in a week:</h4>
            <div className='card-calc' >
              <ul>
                <li style={{ textIndent: "40px" }}><b>Sedentary:</b> Almost no activity at all</li>
                <li style={{ textIndent: "40px" }}><b>A little active:</b> Doing sport 1-3 days per week</li>
                <li style={{ textIndent: "40px" }}><b>Moderate active:</b> Doing sport 3-5 days per week</li>
                <li style={{ textIndent: "40px" }}><b>Very Active:</b> Doing sport 6-7 days per week</li>
                <li style={{ textIndent: "40px" }}><b>Extremely active:</b> Having a job that requires phisycal labor and doing sport everyday</li>
              </ul>
            </div>
            <div>

            </div>
          </div>
        </div>


      </div>
    </div>


  )

}
export default CalculatorPage