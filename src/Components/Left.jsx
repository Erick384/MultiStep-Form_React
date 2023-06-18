import React from "react";
import { Link, NavLink } from "react-router-dom";

function Left() {
  return (
    <div className="left">
        <div className="left1">
      <NavLink to="/" className="steps">
          <div className="circle">
            <h3>1</h3>
          </div>
      </NavLink>

          <div className="content">
            <span>Step 1</span>
            <p>YOUR INFO</p>
          </div>
        </div>
        <div className="left1">
      <NavLink to="/Plans" className="steps">
          <div className="circle">
            <h3>2</h3>
          </div>
      </NavLink>
          <div className="content">
            <span>Step 2</span>
            <p>SELECT PLAN</p>
          </div>
        </div>
      <div className="left1">
        <NavLink to="/Adds" className="steps">
          <div className="circle">
            <h3>3</h3>
          </div>
        </NavLink>
        <div className="content">
          <span>Step 3</span>
          <p>ADDS-ON</p>
        </div>
      </div>
        <div className="left1">
      <NavLink to="/Summary" className="steps">
          <div className="circle">
            <h3>4</h3>
          </div>
      </NavLink>
          <div className="content">
            <span>Step 4</span>
            <p>SUMMARY</p>
          </div>
        </div>
    </div>
  );
}

export default Left;
