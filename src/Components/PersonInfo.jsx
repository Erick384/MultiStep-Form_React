import React from 'react'

function PersonInfo() {
  return (
    <div className="right">
        <div className="right-txt">
          <div className="header">
            <h1>Personal info</h1>
            <br />
            <p>Please provide your name, email address, and phone number.</p>
          </div>
          <div className="form">
            <div className="inputs">
              <label htmlFor="text">NAME</label>
              <input type="text" placeholder="e.g.Stephen King" required />
            </div>
            <div className="inputs">
              <label htmlFor="text">Email Address</label>
              <input
                type="email"
                name="text"
                id="email"
                placeholder="e.g.stephenking@lorem.com"
                required
              />
            </div>
            <div class="inputs">
              <label for="number">Phone Number</label>
              <input
                type="tel"
                id="phonenumber"
                placeholder="e.g. +1 243 567 890"
                required
              />
            </div>
          </div>
        </div>
        <div className="button">
          <button><a href="#">Next Step</a></button>
        </div>
      </div>
  )
}

export default PersonInfo