import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const[MobileMenu,setMobileView] = useState(false);
  return (
   <>
    <header className='header'>
          <div className='container d_flex'>
            <div className='categories d_flex'>
              <span className='fa-solid fa-border-all'></span>
              <h4>
                Categories <i className='fa fa-chebron-down'></i>
              </h4>
            </div>
            <div className='navlink'>
              <ul className={MobileMenu? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileView(false)}>
                <li>
                  <Link to='/'>home</Link>
                </li>
                <li>
                  <Link to='/pages'>pages</Link>
                </li>
                <li>
                  <Link to='/user'>user account</Link>
                </li>
                <li>
                  <Link to='/track'>track order</Link>
                </li>
                <li>
                  <Link to='/contact'>contact</Link>
                </li>
              </ul>
              <button className='toggle' onClick={() => setMobileView(!MobileMenu)}>
                {
                  MobileMenu? <i className='fas fa-times close home-btn'></i> :
                  <i className='fas fa-bars open'></i>
                }
              </button>
            </div>
          </div>
    </header>
   </>
  )
}

export default Navbar