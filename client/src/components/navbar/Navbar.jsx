import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navigation">
        <div className="navigation-container">
            <div className="nav-left">
                <h3>Project Manager</h3>
            </div>
            <div className="nav-right">
                <a href="#">About</a>
                <a href="#">Github</a>
                <a href="#">Wiki</a>
                <button className='get_started_btn'>Get Started</button>
            </div>
        </div>
    </nav>
  )
}

const btn = document.querySelector('.get_started_btn');
btn.preventDefault();

export default Navbar