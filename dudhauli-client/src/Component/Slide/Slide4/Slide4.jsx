import React from 'react'
import "../../Slide/Slide.css"
const Slide4= (props) => {
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
                <li>व्यहोरा खुलेको निवेदन </li>
                <li>संस्थाका पदाधिकारीहरुकोविवरण </li>
                <li> संस्थाको विधान वा नियमावली ३ प्रति </li>
                <li> संस्थाका सदस्यहरुको नेपाली नागरिकता प्रमाणपत्रको प्रतिलिपी </li>
                <li> संस्था भाडामा बस्ने भए सम्झौता पत्र र बहाल कर तिरेको रसिद </li>
                <li>संस्थाका पदाधिकारीहरुको चालु आ.व. सम्मको मालपोत र घर जग्गा  </li>
                <li>कर वा एकीकृत सम्पति कर तिरेको रसिद </li>
                <li> संस्थाका पदाधिकारीहरुको हालको चालचलन सम्बन्धी वडा सर्जमिन मुचुल्का </li>
                <li>  वडा कार्यालयको सिफारिस </li>
              </ul>
            </div>

            </div>
            <div className="right-slide">
                <p id="right-slide-header"> जिम्मेवारी अधिकारी शाखा</p>
                <p id="right-slide-content1">सामाजिक विकास शाखा</p>
                <p id="right-slide-header"> लाग्ने समय</p>
                <p id="right-slide-content2">७ दिन भित्र </p>
                <p id="right-slide-header"> दस्तुर</p>
                <p id="right-slide-content4">आर्थिक ऐनले तोके बमोजिम </p>

            </div>
        </div>
    </div>
    </>
  )
}

export default Slide4