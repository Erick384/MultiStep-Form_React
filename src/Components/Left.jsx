import React from 'react'
import { Link } from 'react-router-dom'


function Left() {
  return (
    <div className="left">
      <Link to="/">
      <div className="left1">
      <div className="circle"><h3>1</h3></div>
      
      <div className="content">
        <span><a href="index.html">Step 1</a></span>
        <p>YOUR INFO</p>
      </div>
    </div>

      </Link>
      <Link to="/Plans">
      <div className="left1">
      <div className="circle"><h3>2</h3></div>
      <div className="content">
        <span> <a href="./step2/step2.html">Step 2</a></span>
        <p>SELECT PLAN</p>
      </div>
    </div>
      </Link>
      <Link to="/Adds">
      <div className="left1">
      <div className="circle"><h3>3</h3></div>
      <div className="content">
        <span><a href="./step3/step3.html">Step 3</a></span>
        <p>ADDS-ON</p>
      </div>
    </div>
      </Link>
      <Link to="/Summary">
      <div className="left1">
      <div className="circle"><h3>4</h3></div>
      <div className="content">
        <span> <a href="./step4/step4.html">Step 4</a></span>
        <p>SUMMARY</p>
      </div>
    </div>
      </Link>
    
    
    
    
  </div>
  )
}

export default Left