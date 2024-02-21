import React, { useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Component/Footer/Footer.css";

const Footer = () => {
  const staticTitle = "ताजा खबर ";
  const initialData = [
    "सोही अनुसार गत असारमा बर्षे अधिवेशन गरेको नगरपालिकाले पुस महिनामा नगर सभा अधिवेशन गर्नुपर्ने हो, तर हुन सकेको छैन ।मेयर रानाले हालसम्म नगर सभाको आह्वान नगरेको भन्दै उपप्रमुख मसलीमाया थोकरले असन्तुष्टि जनाइन् । ‘मेयरसाबले आह्वान नै नगरेकाले नगरसभा हुन नसकेको हो’, उनले भनिन्, ‘उहाँ बहुमत कार्यपालिका सदस्यको अस्तित्व स्वीकार्न सक्नुहुन्न । सबैसंग समन्वय र सहकार्य गर्नुपर्छ भन्ने मानसिकता नहुँदा उहाँ कार्यपालिका बैठक डाक्न पनि सक्नुहुन्न, नगरसभा आह्वान गर्न पनि सक्नुहुन्न ।",
    "सोही अनुसार गत असारमा बर्षे अधिवेशन गरेको नगरपालिकाले पुस महिनामा नगर सभा अधिवेशन गर्नुपर्ने हो, तर हुन सकेको छैन मेयर रानाले हालसम्म नगर सभाको आह्वान नगरेको भन्दै उपप्रमुख मसलीमाया थोकरले असन्तुष्टि जनाइन् । ‘मेयरसाबले आह्वान नै नगरेकाले नगरसभा हुन नसकेको हो’, उनले भनिन्, ‘उहाँ बहुमत कार्यपालिका सदस्यको अस्तित्व स्वीकार्न सक्नुहुन्न । सबैसंग समन्वय र सहकार्य गर्नुपर्छ भन्ने मानसिकता नहुँदा उहाँ कार्यपालिका बैठक डाक्न पनि सक्नुहुन्न, नगरसभा आह्वान गर्न पनि सक्नुहुन्न ।’ ",
  ];

  const [newsItems, setNewsItems] = useState([...initialData]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 100000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: "linear",
    pauseOnHover: false,
    variableWidth: true,
    adaptiveHeight: true,
  };

  return (
    <div className="bottom-carousel">
       <h2 className="title">{staticTitle}</h2>
      <Slider {...settings} slickGoTo={currentSlide}>
        {newsItems.map((item, index) => (
          <div key={index} className="carousel-item">
            
            {item}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Footer;
