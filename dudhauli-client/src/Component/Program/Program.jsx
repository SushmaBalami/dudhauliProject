import React, { useState , useEffect} from 'react'
import Layout from '../Layouts/Layout'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Component/carousal/Carousel.css";


import image1 from "../../assets/images/nepal.jpg";
import image2 from "../../assets/images/temple.jpg";
import image3 from "../../assets/images/village.jpg";
import image4 from "../../assets/images/himal1.jpg";

const Program = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSettings = {
    dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    autoplay: true,
 
    fade:true,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  const images1 = [
    { image: image1, text: "Beautiful Nepal" },
    { image: image2, text: "Ancient Temple" },
    { image: image3, text: "Picturesque Village" },
    { image: image4, text: "Majestic Himalayas" },
  ];
  return (
    <>
    <Layout>
        <Slider arrows={false} {...carouselSettings} initialSlide={currentSlide}>
          {images1.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={`Carousel 1 - Slide ${index + 1}`} />
              <p className="carousel-text">{item.text}</p>
            </div>
          ))}
        </Slider>

   

    </Layout>
    </>
  )
}

export default Program