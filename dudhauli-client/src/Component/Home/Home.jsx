import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Component/carousal/Carousel.css";
import Layout from "../Layouts/Layout";
import { LuHelpingHand } from "react-icons/lu";
import { GoLaw } from "react-icons/go";
import { MdBusiness } from "react-icons/md";
import { FaRoad } from "react-icons/fa6";
import { GiEngagementRing } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { MdDevicesOther } from "react-icons/md";
import { SiOnlyoffice } from "react-icons/si";
import "../Home/Home.css";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="home-links">
          <div className="items">
            <a href="/sewa" className="help">
              <LuHelpingHand size={25} color="rgb(35, 35, 131)" />
              <h4>सेवा/सुविधा</h4>
            </a>
          </div>
          <div className="items">
            <a href="/law" className="law">
              <GoLaw size={25} color="rgb(35, 35, 131)" />
              <h4>कर/ कानुन </h4>
            </a>
          </div>
          <div className="items">
            <a href="/business" className="business">
              <MdBusiness size={25} color="rgb(35, 35, 131)" />
              <h4> व्यापार</h4>
            </a>
          </div>
          <div className="items">
            <a href="/road" className="road">
              <FaRoad size={25} color="rgb(35, 35, 131)" />
              <h4>जग्गा/बाटो</h4>
            </a>
          </div>
          <div className="items">
            <a href="/people" className="people">
              <GiEngagementRing size={25} color="rgb(35, 35, 131)" />
              <h4> पञ्जिकरण</h4>
            </a>
          </div>
          {/* <div className="items">
            <a href="/resident" className="resident">
              <FaHome size={25} color="rgb(35, 35, 131)" />
              <h4> बसाइसराइ</h4>
            </a>
          </div> */}
          <div className="items">
            <a href="/others" className="others">
              <MdDevicesOther size={25} color="rgb(35, 35, 131)" />
              <h4> अन्य</h4>
            </a>
          </div>
          {/* <div className="items">
            <a href="/office" className="office">
              <SiOnlyoffice size={25} color="rgb(35, 35, 131)" />
              <h4> कार्यालय</h4>
            </a>
          </div> */}
        </div>
      </Layout>
    </>
  );
};

export default Home;
