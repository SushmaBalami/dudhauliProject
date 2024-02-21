// import React, { useState , useEffect} from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../../Component/carousal/Carousel.css";

// import image1 from "../../assets/images/nepal.jpg";
// import image2 from "../../assets/images/temple.jpg";
// import image3 from "../../assets/images/village.jpg";
// import image4 from "../../assets/images/himal1.jpg";
// import image5 from "../../assets/images/boy.jpg";
// import image6 from "../../assets/images/girl.jpg";
// import image7 from "../../assets/images/men.jpg";
// import dashainVideo from "../../assets/videos/video.mp4"; // Rename the import

// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const carouselSettings = {
//     dots: true,
//       infinite: true,
//       speed: 1000,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     autoplay: true,
 
//     fade:true,
//     beforeChange: (oldIndex, newIndex) => {
//       setCurrentSlide(newIndex);
//     },
//   };

//   const images1 = [
//     { image: image1, text: "Beautiful Nepal" },
//     { image: image2, text: "Ancient Temple" },
//     { image: image3, text: "Picturesque Village" },
//     { image: image4, text: "Majestic Himalayas" },
//   ];

//   const images2 = [
//     { image: image5, text: "Cute Dog" },
//     { image: image6, text: "Adorable Girl" },
//     { image: image7, text: "Stylish Men" },
//   ];

//   const videos = [{ source: dashainVideo, alt: "dashain video" }];

//   useEffect(() => {
//     const videoElement = document.getElementById("carouselVideo");

//     videoElement.play();

//     return () => {
//       videoElement.pause();
//       videoElement.currentTime = 0; 
//     };
//   }, []); 

//   return (
//     <>
//     {/* <div className="container"> 
//       <div className="carousel-container ">
//         <Slider arrows={false} {...carouselSettings} initialSlide={currentSlide}>
//           {images1.map((item, index) => (
//             <div key={index}>
//               <img src={item.image} alt={`Carousel 1 - Slide ${index + 1}`} />
//               <p className="carousel-text">{item.text}</p>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       <div className="second-carousel-container">
//         <h5 style={{ textAlign: "center", color:"white" }}>प्रतिनिधि</h5>
//         <Slider arrows={false}{...carouselSettings} initialSlide={currentSlide}>
//           {images2.map((item, index) => (
//             <div key={index}>
//               <img src={item.image} alt={`Carousel 2 - Slide ${index + 1}`} />
//               <div className="overlay">
//                 <p className="carousel-text">{item.text}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//       <div className="third-carousel-container">
//         <h5 style={{ textAlign: "center", color:"white" }}>कर्मचारी</h5>
//         <Slider arrows={false} {...carouselSettings} initialSlide={currentSlide}>
//           {images2.map((item, index) => (
//             <div key={index}>
//               <img src={item.image} alt={`Carousel 3 - Slide ${index + 1}`} />
//               <p className="carousel-text">{item.text}</p>
//             </div>
//           ))}
//         </Slider>
//       </div>
//       <div className="video-container">
//         <video
//           id="carouselVideo"
//           controls
//           autoPlay
//           loop
//           playsInline
          
//         >
//           <source src={videos[0].source} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//       </div> */}
//     </>
//   );
// };

// export default Carousel;