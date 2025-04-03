import React, { useState } from 'react'



const Calculator = () => {

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [activity, setActivity] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState('');
  const [need, setNeed] = useState('');



  const handleHeightChange = event => {
    setHeight(event.target.value);
  }

  const handleWeightChange = event => {
    setWeight(event.target.value);
  }

  const handleAgeChange = event => {
    setAge(event.target.value);
  }

  const handleGenderChange = event => {
    setGender(event.target.value);
  }

  const handleActivityChange = event => {
    setActivity(event.target.value);
  }




  function calculateBMR() {
    // if (age == '' || gender == '' || height == '' || weight == '' || activity == '') {
    //   setError("All fields are required");
    //   return;
    // } else {
    //   setError('');
    // }

    if (gender == 1) {
      let almost = '';
      almost = (66.5 + 13.75 * weight + 5.003 * height - 6.755 * age);
      setNeed(almost);

    } else if (gender == 2) {
      let almost = '';

      almost = (655.1 + 9.563 * weight + 1.85 * height - 4.676 * age);
      setNeed(almost);

    }
  }

  function calculateCalories() {
    if (age == '' || gender == '' || height == '' || weight == '' || activity == '') {
      setError("All fields are required");
      return;
    } else {
      setError('');
    }

    if (gender == 1) {
      let almost = '';
      almost = (66.5 + 13.75 * weight + 5.003 * height - 6.755 * age);
      setNeed(almost);
      setResult(almost * activity);
    } else if (gender == 2) {
      let almost = '';

      almost = (655.1 + 9.563 * weight + 1.85 * height - 4.676 * age);
      setNeed(almost);
      setResult(almost * activity);
    }
  }


  let err;
  if (error) {
    err = <div className='error' >{error}</div>
  }

  return (
    <div  >


      <div className='bmrcalc'>

        <div className='form' >
          <h2 className='titlu-calculator' >Daily Calorie Calculator</h2>
          {err}
          <div className='inputwrap'>
            <h4>Gender</h4>
            <label ><input onChange={handleGenderChange} checked={gender === "1"} type='radio' className='label-calc' name='gender' value='1' />Male</label>
            <label ><input onChange={handleGenderChange} checked={gender === "2"} type='radio' className='label-calc' name='gender' value='2' />Female</label>
          </div>
          <div className='inputwrap'>
            <label className='label-calc'>Weight in kg</label>
            <input onChange={handleWeightChange} type='number' name='weight' value={weight} className='weight' min='0' max='999' />
          </div>
          <div className='inputwrap'>
            <label className='label-calc'>Height in cm</label>
            <input onChange={handleHeightChange} type='number' name='height' value={height} className='height' min='0' max='400' />
            {/* <input type='number' name='height' min='0' max='400' /> */}
          </div>
          <div className='inputwrap'>
            <label className='label-calc'>Age in years</label>
            <input onChange={handleAgeChange} type='number' name='age' value={age} className='age' min='0' max='199' />
          </div>
          <button class="btn-cal" type='button' onClick={() => calculateBMR()} >Calculate BMR</button>
          <div className='result' >
            Calories = {need}
          </div>
          <div className='workout'>
            <div className='inputwrap'>
              <label className='label-calc'>Activity in a Week</label>
              <select className='activity' value={activity} onChange={handleActivityChange} name='activity'>
                <option value='1.2' >Sedentary</option>
                <option value='1.37'>A little active</option>
                <option value='1.55'>Moderate active</option>
                <option value='1.72' >Very active</option>
                <option value='1.9'>Extremely active</option>
              </select>
            </div>
          </div>
          <button class="btn-cal" type='button' onClick={() => calculateCalories()} >Calculate calories</button>
          <div className='result' >
            Calories = {result}

          </div>
        </div>
      </div>
    </div>
  )

}
export default Calculator