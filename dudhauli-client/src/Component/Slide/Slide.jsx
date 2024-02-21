import React from "react";
import Layout from "../Layouts/Layout";
import { Carousel } from "antd";
import "../Slide/Slide.css";
import Slide1 from "./Slide1/Slide1";
import Slide2 from "./Slide2/Slide2";
import Slide3 from "./Slide3/Slide3";
import Slide4 from "./Slide4/Slide4";
import Slide6 from "./Slide6/Slide6";
import Slide7 from "./Slide7/Slide7";
import Slide8 from "./Slide8/Slide8";
import Slide5 from "./Slide5/Slide5";
import Slide9 from "./Slide9/Slide9";
import Slide10 from "./Slide10/Slide10";

const Slide = () => {
  return (
    <>
      <Layout>
        <div className="slideShow">
          <Carousel autoplay
          dots={false}>
            <div >
              <Slide1 header={"जेष्ठ नागरिक परिचय पत्र बितरण "} />
            </div>
            <div>
              <Slide2 header={"उपभोक्ता समिति बैंक खाता बन्द गर्ने सिफारिश"}/>
            </div>
            <div>
              <Slide3 header={"विधालयमा कर्मचारी र शिक्षक ( अस्थाई र करार ) पदपूर्तिको समर्थन "}/>
            </div>
            <div>
              <Slide4 header={"संस्था दर्ता"} />
            </div>
            <div>
              <Slide5 header={"योजनाहरुको सम्झौता "}/>
            </div>
            <div>
              <Slide6 header={"योजनाहरुको रकम भुक्तानी "} />
            </div>
            <div>
              <Slide7 header={"व्यक्तिगत घटना दर्ताका सक्कल कगजात प्रमाणीकरण "}/>
            </div>
            <div>
              <Slide8 header ={"संघ संस्था नवीकरण "} />
            </div>
            <div>
              <Slide9 header ={"नयाँ बिद्यालय स्थापना/ संचालन स्वीकृति "} />
            </div>
            <div>
              <Slide10 header ={"व्यवसाय दर्ता  "} />
            </div>
          </Carousel>
        </div>
      </Layout>
    </>
  );
};

export default Slide;
