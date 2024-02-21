import React from 'react'
import "../../Slide/Slide.css"
const Slide2 = (props) => {
  return (
    <>
    <div className="main-container">
        <p id="slide-header" style={{ padding: props.header ? "10px" : "0" }}>{props.header}</p>
        <div className="main-slide">
            <div className="left-slide">
            <p id="left-slide-header">आबश्यक कागजात तथा प्रमान</p>
            <div className="left-list">
            <p id="left-slide-under-header">आवश्यक पर्ने कागजातहरु</p>
            <ul typeof="disc" id="bulleted-list">
                <li> उपभोक्ता समितिको निवेदन</li>
                <li>बैंक खाता बन्द गर्ने सम्बन्धमा उपभोक्ता समितिबाट भएको निर्णयको प्रतिलिपी</li>
                
              </ul>
            </div>

            </div>
            <div className="right-slide">
                <p id="right-slide-header"> जिम्मेवारी अधिकारी शाखा</p>
                <p id="right-slide-content1"> योजना, अनुगमन तथा तत्थ्यङ्क शाखा</p>
                <p id="right-slide-header"> लाग्ने समय</p>
                <p id="right-slide-content2"> सोही दिन</p>
                <p id="right-slide-header"> दस्तुर(रु.)</p>
                <p id="right-slide-content3">३००० </p>
                <p id="right-slide-header"> कोठा नम्बर</p>
                <p id="right-slide-content4">सामाजिक विकास शाखाको कार्यकक्ष</p>

            </div>
        </div>
    </div>
    </>
  )
}

export default Slide2