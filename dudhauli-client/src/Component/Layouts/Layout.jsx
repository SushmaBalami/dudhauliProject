import React, { useState , useEffect} from "react";
import Nav from '../NavBar/Nav'
import Footer from '../Footer/Footer'
import "../../Component/carousal/Carousel.css";
import Sidebar from "../carousal/Sidebar";

const Layout = ({children}) => {
  
  
  return (
    <>
    <Nav/>
   <Sidebar/>
   <div className="container">

   <div className="carousel-container">
    {children}
   </div>
   </div>
    <Footer/>
    </>
  )
}

export default Layout