import React, { useState, useEffect } from "react";
import logo from "../../../src/assets/images/small-logo.png";
import "../NavBar/Nav.css";
import { FaBars, FaCalendar, FaImages, FaHome } from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  const [currentDateTime, setcurrentDateTime] = useState(new Date());
  const [isMobile, setisMobile] = useState(false);
  
  const updateDateTime = () => {
    setcurrentDateTime(new Date());
  };
  useEffect(() => {
    const intervalId = setInterval(updateDateTime, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Options for formatting the date and time
  const timeOptions = { hour: "numeric", minute: "numeric", second: "numeric" };
  const dateOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  // Format the date and time strings
  const formattedTime = currentDateTime.toLocaleString(undefined, timeOptions);
  const formattedDate = currentDateTime.toLocaleString(undefined, dateOptions);

 
  return (
    <>
      <div className="container " >
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-3">
          <div className="logo">
            <a
              href="/"
              className="logo d-flex align-items-center col-md-5 mb-2 mb-md-0 text-dark text-decoration-none"
            >
              <img src={logo} alt="Logo" width="70px" height="auto" />
             <div className="dname">
              <p>दुधौली नगरपालिका </p>
              <div className="dname-address">
                <p>नगर कार्यपालिकाको कार्यालय</p>
              </div>
             </div>
            </a>
          </div>
          <div className="dsewa">
            <p>सेवा प्रवाह बडा पत्र</p>
          </div>
          <div className="navlinks">
            <ul className={isMobile ? "navlinks-ul-mobile" : "navlinks-ul"}
            onClick={()=>setisMobile(false)}>
             
              <li>
                <NavLink
                  to="/"
                  className="program"
                >
                  <FaCalendar /> कार्यक्रम
                </NavLink>
              </li>
              <li>
                <NavLink to="/slide" className="slide">
                  <FaImages /> स्लाइड शो
                </NavLink>
              </li>
              <li>
                <NavLink to="/home" className="home">
                  <FaHome /> गृह पृष्ट
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="time">
            <h5>{formattedTime}</h5>
            <p>{formattedDate}</p>
          </div>
         
          <button className="mobile-menu-icon"  onClick={()=>setisMobile(!isMobile)}>
                 {isMobile ? <FaBars /> : <FaBars />}
                </button>
        </header>
      </div>
    </>
  );
};

export default Nav;
