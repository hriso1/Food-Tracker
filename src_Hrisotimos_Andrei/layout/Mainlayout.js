import React from 'react'
import Navbar from '../components/Navbar'



function Mainlayout({ children }) {


  return (

    <div >
      <Navbar />
      {/* <Toolbar /> */}

      <div>{children}</div>

    </div>
  );
}

export default Mainlayout