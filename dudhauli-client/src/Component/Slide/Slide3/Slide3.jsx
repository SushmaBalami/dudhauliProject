import React from 'react'
import "../../Slide/Slide.css"
const Slide3= (props) => {
  return (
    <>
    <div className="main-container">
        <p id="slide-header" style={{ padding: props.header ? "10px" : "0" }}>
        {props.header}
         </p>
        <div className="main-slide">
            <div className="left-slide">
            <div className="left-list">
            <p id="left-slide-under-header">आवश्यक पर्ने कागजातहरु</p>
            <ul typeof="disc" id="bulleted-list">
                <li> विद्यालयको पत्र </li>
                <li>कर्मचारी वा शिक्षकको नियुक्ति पत्र</li>
                <li>शिक्षक तथा कर्मचारी छनौट समितिले गरेको सिफारिस </li>
                <li> विद्यालय व्यवस्थापन समितिको निर्णय  </li>
                <li>पदपूति गर्ने सम्बन्धमा तयार गरिएका सबै कागजातहरुको प्रतिलिपी </li>
                
              </ul>
            </div>

            </div>
            <div className="right-slide">
                <p id="right-slide-header"> जिम्मेवारी अधिकारी शाखा</p>
                <p id="right-slide-content1"> सामाजिक विकास शाखा </p>
                <p id="right-slide-header"> लाग्ने समय</p>
                <p id="right-slide-content2">७ दिन भित्र </p>
                <p id="right-slide-header"> दस्तुर</p>
                <p id="right-slide-content3">निशुल्क</p>

            </div>
        </div>
    </div>
    </>
  )
}

export default Slide3