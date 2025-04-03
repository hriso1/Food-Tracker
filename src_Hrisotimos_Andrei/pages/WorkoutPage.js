import React, { useState } from 'react';
import { FaHome, FaDumbbell } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillCalculatorFill } from 'react-icons/bs';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { GoGraph } from 'react-icons/go';
import { Link } from "react-router-dom";
// import './Navbar.css';
import Toolbar from '../components/Toolbar';
// import 'bootstrap/dist/css/bootstrap.min.css';



function WorkoutPage() {
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
        <div className='content-wk' >
          <div ><h1 className='titlu-wk'  >Workouts depending on how much free time you have:</h1></div>
          <div className="lista1-wk">
            <ui >
              <li style={{ fontFamily: 'barlow semi condensed', textTransform: "uppercase" }} >1 to 2 day free per week</li>
              <li style={{ fontFamily: 'barlow semi condensed', textTransform: "uppercase" }}> 4 free days per week </li>
              <li style={{ fontFamily: 'barlow semi condensed', textTransform: "uppercase" }}> 5-7 free days per week</li>
            </ui>
          </div>
          <p style={{ marginRight: "200px", textIndent: '40px', fontSize: '20px', marginLeft: '40px' }} >Since we've had to impose restrictions on how long each of you can spend in the gym, it's
            made it more difficult to make sure you're getting the greatest benefit from each session.
            That's why we've come up with a selection of 3 different workouts that allows you use your full potential.</p>

          <h3 style={{ marginTop: '60px', display: 'flex', justifyContent: 'center', fontSize: '30px', fontFamily: 'barlow semi condensed', textTransform: "uppercase" }}> 1 to 2 day free per week</h3>

          <div className='content-wk1' >
            <h2 >Full body workout</h2>
            <p>A full body workout trains all the muscles you need to have a healty and beautiful body.
              Because of the large number of muscles and the limited time, the training focuses on compound exercises.</p>
            <h2 >Warm up 5-10 Minutes</h2>
            <p >Warming up before any workout is really important.
              Not only will it help you avoid injury by getting your body ready for exercise, but it will also help you get the most out of your workout.
              For these workouts, you don't want to be doing anything too strenuous for your warm up. Just start with some stretches.
              Make sure to include those muscle groups you'll be focusing on during your workout.
              Then just do some gentle cardio to get your heart rate up a little bit and you're ready to go!</p>

            <h2>1.Flat fumbbell press</h2>
            <p>The dumbbell bench press, also known as the dumbbell flat bench press and the dumbbell chest press, is an upper-body exercise that activates your arm, shoulder, and chest muscles.
              Perform the dumbbell bench press exercise by lying flat on your back on a bench.
              Grab a pair of dumbbells and hold them on your hips.
              While engaging your core and glutes, lift the dumbbells above your chest.
              Squeeze your shoulder blades as you lower them again until your upper and lower arms form a 90-degree angle.</p>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/QsYre__-aro" title="YouTube video" allowfullscreen></iframe>
            </div>
            <h2 style={{ marginTop: '450px' }} >2.Dumbbell romanian deadlift</h2>
            <p>Begin by standing with your feet hip-width apart and knees slightly bent.
              Hold one dumbbell in each hand, and place them in front of hips with palms facing thighs.
              Keeping your spine in a neutral position and squeezing the shoulder blades, start sending the hips back.</p>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/_oyxCn2iSjU" title="YouTube video" allowfullscreen></iframe>
            </div>
            <h2 style={{ marginTop: '450px' }}>3.Lateral pulldowns</h2>
            <p>Stand up and grab the straight bar with an overhand grip and with hand wider than your shoulder width.
              Slowly lower yourself into the seat with arms extended above your head.
              Squeeze your lats and drive your elbows down to pull the bar towards the top of your chest.
              You may have to lean slightly back as you do this.
            </p>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/OcFCHdQHjVU" title="YouTube video" allowfullscreen></iframe>
            </div>
            <h2 style={{ marginTop: '450px' }}>4.Bulgarian split squat</h2>
            <p>Stand half a meter in front of a knee-high platform. Extend your right leg back and rest your toes on the platform. Toes can be flat or tucked in, depending on personal preference. Square the hips and shoulders.
              Keep the torso upright, slowly lower the right knee toward the floor. The front knee will form an angle of approximately 90 degrees (you can go further, depending on your mobility; just make sure your knee doesn't sink inward).
              Tip: Keep your weight evenly distributed over the entire foot. Don't scoot forward on your toes or exaggerate the push through your heel.
              Reverse the movement and return to the starting position.</p>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/JLEyaXRMv8o" title="YouTube video" allowfullscreen></iframe>
            </div>
            <h2 style={{ marginTop: '450px' }}>5.Overhead cable tricep extension</h2>
            <p>Lie face up on a flat bench with your head near a cable machine.
              Attach a tricep rope to the high pulley and grasp the rope with both hands.
              Extend your arms straight overhead, keeping your elbows close to your ears.
              Keeping your elbows locked, slowly lower the rope behind your head.
              Repeat for desired reps.</p>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/GzmlxvSFE7A" title="YouTube video" allowfullscreen></iframe>
            </div>
            <h2 style={{ marginTop: '450px' }} >6.Lateral raises</h2>
            <p>The dumbbell lateral raise is a good exercise for building width in your upper body which gives you the "V" shape. Grab a set of dumbbells and stand straight up with the dumbbells at your sides.
              Your palms should be facing your body. You should be holding the dumbbells slightly off your body, as this keeps the tension on the side delts. This is your starting position for the exercise.
              To execute, slowly raise the dumbbells up to around shoulder height. It's important that you do not let your wrists go above your elbows while raising the weight, as this will take the work off the side delts and put it on the front delts.
              Pause at the top of the movement, and then slowly lower the weight back to the starting position.
              Do not let the dumbbells touch your body, and then raise them for the next rep.</p>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/v_ZkxWzYnMc" title="YouTube video" allowfullscreen></iframe>
            </div>
          </div>

          <h3 style={{ marginTop: '500px', display: 'flex', justifyContent: 'center', fontSize: '30px', fontFamily: 'barlow semi condensed', textTransform: "uppercase" }}> 4 FREE DAYS PER WEEK</h3>

          <div className='content-wk2' >
            <h2>Upper-lower split</h2>
            <p>This type of training is divided into 2 different workouts.
              The first type focuses on the upper part of the body and the other on the lower part of the body.</p>
            <h3> This is an example on how you can choose your workout days:</h3>
            <div className='lista2-wk' >
              <ul>
                <li><b>Monday:</b> Upperbody </li>
                <li><b>Tuesday:</b> Lowerbody </li>
                <li><b>Wednesday:</b> Rest day </li>
                <li><b>Thursday:</b> Upperbody </li>
                <li><b>Friday:</b> Lowerbody </li>
                <li><b>Saturday:</b> Rest day </li>
                <li><b>Sunday:</b> Rest day </li>
              </ul>
            </div>
            <h2 >Warm up 5-10 Minutes</h2>
            <p >Warming up before any workout is really important.
              Not only will it help you avoid injury by getting your body ready for exercise, but it will also help you get the most out of your workout.
              For these workouts, you don't want to be doing anything too strenuous for your warm up. Just start with some stretches.
              Make sure to include those muscle groups you'll be focusing on during your workout.
              Then just do some gentle cardio to get your heart rate up a little bit and you're ready to go!</p>
            <h3 style={{ marginTop: "60px", display: "flex", justifyContent: "center", fontFamily: "barlow semi condensed", fontSize: "30px" }} >UPPERBODY</h3>
            <h2>1.Barbell overhead press</h2>
            <p>Perform barbell overhead presses by standing in front of a weighted barbell.
              Unrack the barbell and hold it on your upper chest and front shoulders.
              Lift the bar overhead and slowly lower it again.
              Repeat this movement for the desired amount of repetitions.</p>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/3IQVNjWH60A?start=228&amp;clip=UgkxBX1OkSlcOmFNy2kcJXd24qPpxaWpq9_z&amp;clipt=EOjiAxjItwc" title="YouTube video" allowfullscreen></iframe>
            </div>
            <h2 style={{ marginTop: '450px' }}>2.Wide grip pull-ups</h2>
            <p>Stand with feet hip-width apart, and knees slightly bent.
              Shift your hips back, so your torso is parallel to the floor.
              Grab the bar with a grip slightly wider than shoulder-width, bend elbows, and bring the bar towards your chest.
              Pause and lower down to starting position.</p>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/3IQVNjWH60A?start=228&amp;clip=Ugkxnws4iAPVte9JvXwvfSK1kwH1_j7Ql0W9&amp;clipt=EO_PBxiHnws" title="YouTube video" allowfullscreen></iframe>
            </div>
            <h2 style={{ marginTop: '450px' }}>3.Close grip bench press</h2>
            <p>Lie flat on the bench and grip the bar with your hands shoulder-width apart.
              Lift the bar with assistance from the rack, arms locked, and hold the bar straight over you.
              Inhale and slowly bring the bar down toward your chest, keeping your elbows close to your body for the entire exercise.</p>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/3IQVNjWH60A?start=228&amp;clip=Ugkx_krY3Fur9ukToHnF_2995i7zUNml18zi&amp;clipt=EJutDRi3jxA" title="YouTube video" allowfullscreen></iframe>
            </div>
            <h2 style={{ marginTop: '450px' }}>4.Wide grip seated cable row</h2>
            <p>Bend your knees and hold the bar with an overhand grip, wider than shoulder-width apart.
              Lean back slightly, keeping your back straight, then use your back muscle to pull the bar towards your belly button.
              Return the bar to starting position and repeat</p>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/3IQVNjWH60A?start=228&amp;clip=Ugkxf-e1PPnofVNdP_UQYzjkklmCsw8QlaFI&amp;clipt=EMqUEBif4xM" title="YouTube video" allowfullscreen></iframe>
            </div>
            <h2 style={{ marginTop: '450px' }}>5.Incline dumbbell lateral raise</h2>
            <p>Sit on an incline bench and hold a dumbbell in each hand by your side.
              Raise both dumbbells to your side until they're shoulder height, then lower under control and repeat</p>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/3IQVNjWH60A?start=228&amp;clip=Ugkx87sLebfY4NDIJQBdWHOxuwRosktr_p2L&amp;clipt=EJDtExjwwRc" title="YouTube video" allowfullscreen></iframe>
            </div>
            <h3 style={{ marginTop: "450px", display: "flex", justifyContent: "center", fontFamily: "barlow semi condensed", fontSize: "30px" }} >LOWERBODY</h3>
            <h2 >Warm up 5-10 Minutes</h2>
            <p >Warming up before any workout is really important.
              Not only will it help you avoid injury by getting your body ready for exercise, but it will also help you get the most out of your workout.
              For these workouts, you don't want to be doing anything too strenuous for your warm up. Just start with some stretches.
              Make sure to include those muscle groups you'll be focusing on during your workout.
              Then just do some gentle cardio to get your heart rate up a little bit and you're ready to go!</p>
            <h2>1.Squats</h2>
            <p> Stand with feet a little wider than hip width, toes facing front.

              Drive your hips back—bending at the knees and ankles and pressing your knees slightly open—as you…

              Sit into a squat position while still keeping your heels and toes on the ground, chest up and shoulders back.

              Strive to eventually reach parallel, meaning knees are bent to a 90-degree angle.

              Press into your heels and straighten legs to return to a standing upright position.</p>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/bEv6CCg2BC8" title="YouTube video" allowfullscreen></iframe>
            </div>
            <h2 style={{ marginTop: '450px' }} >2.Romanian Deadlift</h2>
            <p>Use an overhand grip to hold the bar at hip level.
              Draw your shoulders back and keep your spine straight.
              Push your hips back as you slowly lower the bar toward your feet.
              Press your hips forward to come into a standing position with the barbell in front of your thighs.</p>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/_oyxCn2iSjU" title="YouTube video" allowfullscreen></iframe>
            </div>
            <h2 style={{ marginTop: '450px' }} >3.Walking lunge</h2>
            <p>Step forward with your right leg, putting your weight into your heel.
              As your right foot strikes the floor and stabilizes, bend the right knee, lowering down parallel to the floor into a lunge position.
              Without moving the right leg, move your left foot forward, repeating the same movement on the left leg.</p>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/H6mRkx1x77k?clip=UgkxlWhN0LpSVHh39HD_4paC_KrTLUtB8jw_&amp;clipt=EPXQEhjVpRY" title="YouTube video" allowfullscreen></iframe>
            </div>
            <h2 style={{ marginTop: '450px' }} >4.Seated leg curl</h2>
            <p>Press down the bar with your legs. Raise your legs until your knees are almost straight but not completely back to the starting position. You'll feel tension in the muscles in the back of your legs. When you're doing a seated hamstring curl, remember to keep your movements smooth and controlled.</p>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/H6mRkx1x77k?clip=UgkxgNzC7VIsoE-CO5h-BEGFDmBFh1cWDkR6&amp;clipt=EMbmFximuxs" title="YouTube video" allowfullscreen></iframe>
            </div>
            <h2 style={{ marginTop: '450px' }} >5.Leg press toe press</h2>
            <p>Sit down at the leg press machine and rest your feet so just your toes are resting at the bottom of the platform.
              Push back as far as you can while keeping your feet against the platform.
              Return under control to the start position and repeat.</p>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/H6mRkx1x77k?clip=UgkxyvfNqBop880SK0muDmKcPc3MonZRXXWA&amp;clipt=EMDUHhigqSI" title="YouTube video" allowfullscreen></iframe>
            </div>
            <h3 style={{ marginTop: '500px', display: 'flex', justifyContent: 'center', fontSize: '30px', fontFamily: 'barlow semi condensed', textTransform: "uppercase" }}> 5-7 FREE DAYS PER WEEK</h3>

            <div className='content-wk2' >
              <h2>PUSH-PULL-LEGS split</h2>
              <p>This type of training is divided into 2 different workouts.
                The first type focuses on the upper part of the body and the other on the lower part of the body.</p>
              <h3> This is an example on how you can choose your workout days:</h3>
              <div className='lista2-wk' >
                <ul>
                  <li><b>Monday:</b> Push </li>
                  <li><b>Tuesday:</b> Pull </li>
                  <li><b>Wednesday:</b> Legs </li>
                  <li><b>Thursday:</b> Push</li>
                  <li><b>Friday:</b> Pull </li>
                  <li><b>Saturday:</b> Rest day/Legs </li>
                  <li><b>Sunday:</b> Rest day </li>
                </ul>
              </div>
              <h2 >Warm up 5-10 Minutes</h2>
              <p >Warming up before any workout is really important.
                Not only will it help you avoid injury by getting your body ready for exercise, but it will also help you get the most out of your workout.
                For these workouts, you don't want to be doing anything too strenuous for your warm up. Just start with some stretches.
                Make sure to include those muscle groups you'll be focusing on during your workout.
                Then just do some gentle cardio to get your heart rate up a little bit and you're ready to go!</p>
              <h3 style={{ marginTop: "60px", display: "flex", justifyContent: "center", fontFamily: "barlow semi condensed", fontSize: "30px" }} >PUSH</h3>
              <h2 >1.Bench press</h2>
              <p>Lie on your back on a flat bench. Grip a barbell with hands slightly wider than shoulder width. The bar should be directly over the shoulders.
                Press your feet firmly into the ground and keep your hips on the bench throughout the entire movement.
                Keep your core engaged and maintain a neutral spine position throughout the movement. Avoid arching your back.
                Slowly lift the bar or dumbbells off the rack, if using. Lower the bar to the chest, about nipple level, allowing elbows to bend out to the side, about 45 degrees away from the body.
                Stop lowering when your elbows are just below the bench. Press feet into the floor as you push the bar back up to return to starting position.</p>
              <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4Y2ZdHCOXok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <h2 style={{ marginTop: '450px' }}>2.Dumbell shoulder press</h2>
              <p>Hold the dumbbells by your shoulders with your palms facing forwards and your elbows out to the sides and bent at a 90° angle.
                Without leaning back, extend through your elbows to press the weights above your head.
                Then slowly return to the starting position.</p>
              <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/qEwKCR5JCog?start=10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <h2 style={{ marginTop: '450px' }}>3.Cable flyes</h2>
              <p>Cable flyes use adduction to challenge the pectorals, deltoids, and triceps.
                The core is also engaged. Unlike most chest exercises, which use pressing movements, chest flyes challenge the chest muscles when they are in a stretched position which can engage more muscle fibres</p>
              <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/-EIhKMDSjBY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>





            </div>










          </div>



        </div>
      </div>
    </div>


  )
}

export default WorkoutPage