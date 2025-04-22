import React from 'react'
import './Landingpage.css'
const Landingpage = () => {
  return (
    <div>
        <div className="nav-bar">
            <div className="right-nav">FireSafe</div>
            <div className="left-nav">
                <div className="about">About</div>
                <div className="contact">Contact</div>
                <div className="login">Login</div>
            </div>
        </div>
        <br></br>

        <div className="container">
          <div className="heading">
            <h1>Fire Safety <br></br> Inspection & NOC <br></br> Management</h1>
            <br></br>
            <p>Streamlined process for fire safety compliance and certification</p>
            <div className="btn-container">
              <button className='get-started'>Get Started</button>
              <button className='learn-more'>Learn More</button>
            </div>
          </div>
          <div className="image">
            <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/cdb5383947-b7428da826d32d2c2479.png" alt="" />
          </div>
        </div>

      <div className="mid-body">
        Choose Your Role 
        <div className='role-container'>
          <div className="applicant">
            <h3>Applicant</h3>
            <br />
            <p>Apply for NOC, track applications, and manage renewals</p>
            <br />
            <button>Continue as Applicant</button>
          </div>
          <div className="officer">
            <h3>Officer</h3>
            <br />
            <p>Review applications, schedule inspections, and issue NOCs</p>
            <br />
            <button>Continue as Officer</button>
          </div>
          <div className="admin">
            <h3>Admin</h3>
            <br />
            <p>Manage system, generate reports, and oversee operations</p>
            <br />
            <button>Continue as Admin</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="mission-container">
        <div className="mission-head">
          <h1>Our Mission</h1>
          <p>Ensuring safety through transparency, speed, and compliance</p>
        </div>
        <div className="usp">
          <div className='transparency'>
            Transparency
            <p>Real-time tracking and clear communication throughout the process</p>
          </div>
          <div className="speed">
            Speed
            <p>Efficient processing and quick turnaround times</p>
          </div>
          <div className="safety">
            Safety
            <p>Maintaining highest standards of fire safety compliance</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className='firesafe'>
          <h3>FireSafe NOC</h3>
          <p>Making fire safety compliance simple and efficient</p>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        
        <div className="resources">
          <h3>
            Resources
          </h3>
          <ul>
            <li>Help Center</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Landingpage