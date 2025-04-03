import React, { useState } from 'react';

import { FaHome, FaDumbbell } from 'react-icons/fa';
import {  AiOutlineMenu } from 'react-icons/ai';
import { BsFillCalculatorFill } from 'react-icons/bs';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { GoGraph } from 'react-icons/go';
import { Link } from "react-router-dom";
// import './Navbar.css';
import Toolbar from '../components/Toolbar';


function TrackerPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    document.body.classList.toggle('sidebar--open'); // add/remove sidebar--open class to body
  }
  const [foods, setFoods] = useState([{ name: '', servingSize: 0, caloriesPerServing: 0, fats: 0, carbs: 0, protein: 0 }]);

  const calculateTotalCalories = () => {
    let totalCalories = 0;
    for (let i = 0; i < foods.length; i++) {
      totalCalories += foods[i].servingSize * foods[i].caloriesPerServing;
    }
    return totalCalories;
  };

  const calculateTotalMacros = () => {
    let totalFats = 0;
    let totalCarbs = 0;
    let totalProtein = 0;
    for (let i = 0; i < foods.length; i++) {
      totalFats += foods[i].servingSize * foods[i].fats;
      totalCarbs += foods[i].servingSize * foods[i].carbs;
      totalProtein += foods[i].servingSize * foods[i].protein;
    }
    return { totalFats, totalCarbs, totalProtein };
  };

  const handleAddFood = () => {
    setFoods([...foods, { name: '', servingSize: 0, caloriesPerServing: 0, fats: 0, carbs: 0, protein: 0 }]);
  };

  const handleDeleteFood = (index) => {
    const newFoods = [...foods];
    newFoods.splice(index, 1);
    setFoods(newFoods);
  };

  const handleFoodChange = (event, index) => {
    const { name, value } = event.target;
    const newFoods = [...foods];
    newFoods[index][name] = value;
    setFoods(newFoods);
  };

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
        <div>
          <h1 className='titlu-tracker' >Food Calories and Macros Calculator</h1>
          <button onClick={handleAddFood} className="btn-tracker1" >Add Food</button>
          {foods.map((food, index) => (
            <div key={index}>
              <button onClick={() => handleDeleteFood(index)} className="btn-tracker2" >Delete Food</button>

              <form className='form-tracker' >

                <label htmlFor={`food${index}`} className="label-tracker" >Food:</label>
                <input className="input-mancare" type="text" id={`food${index}`} name="name" value={food.name} onChange={e => handleFoodChange(e, index)} />


                <label htmlFor={`servingSize${index}`} className="label-tracker">Serving Size (g):</label>
                <input className="input-altele" type="number" id={`servingSize${index}`} name="servingSize" value={food.servingSize} onChange={e => handleFoodChange(e, index)} />

                <label htmlFor={`caloriesPerServing${index}`} className="label-tracker">Calories per Serving:</label>
                <input className="input-altele" type="number" id={`caloriesPerServing${index}`} name="caloriesPerServing" value={food.caloriesPerServing} onChange={e => handleFoodChange(e, index)} />

                <label htmlFor={`fats${index}`} className="label-tracker">Fats (g):</label>
                <input className="input-altele" type="number" id={`fats${index}`} name="fats" value={food.fats} onChange={e => handleFoodChange(e, index)} />

                <label htmlFor={`carbs${index}`} className="label-tracker">Carbohydrates (g):</label>
                <input className="input-altele" type="number" id={`carbs${index}`} name="carbs" value={food.carbs} onChange={(e) => handleFoodChange(e, index)} />
                <label htmlFor={`protein${index}`} className="label-tracker">Protein (g):</label>
                <input
                  className="input-altele" type="number" id={`protein${index}`} name="protein" value={food.protein} onChange={(e) => handleFoodChange(e, index)} />
              </form>

              <hr />
            </div>
          ))}
          <div className='macro'>
            <h2 className='macro1' >Total Calories: </h2>
            <p className='macro4' >{calculateTotalCalories()}</p>
            <h2 className='macro2' >Total Macros:</h2>
            <div >
              <ul className='macro2' >
                <li className='macro3' >Fats: {calculateTotalMacros().totalFats} g </li>
                <li className='macro3' >Carbs: {calculateTotalMacros().totalCarbs} g </li>
                <li className='macro3' >Protein: {calculateTotalMacros().totalProtein} g </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default TrackerPage;
