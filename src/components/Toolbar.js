import React from 'react'
import img1 from './Logo-ontrack1.png';


function Toolbar({ openSidebar }) {
  return (
    <div className="tool-bar" >


      <div className="title">
        <img className='logo' src={img1} />
      </div>
    </div>
  )
}

export default Toolbar