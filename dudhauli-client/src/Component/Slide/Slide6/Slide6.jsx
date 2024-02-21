import React from 'react'

const Slide6 = (props) => {
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
                <li>उपभोक्ता समितिको निवेदन</li>
                <li>योजना सम्पन्न भएको भनी उपभोक्ता समितिको बैठकबाट भएको निर्णयको प्रतिलिपी </li>
                <li>सम्बन्धित प्राविधिकबाट तयार पारेको मूल्यांकन प्रतिवेदन र कार्यसम्पन्न प्रतिवेदन </li>
                <li>योजना सञ्चालन पूर्व, सञ्चालनको अवस्था र सम्पन्न पश्चातको फोटो</li>
                <li> सार्वजनिक परिक्षण फाराम  </li>
                <li>आयोजनाको भौतिक तथा वित्तिय प्रगति प्रतिवेदन  </li>
                <li>अनुगमन तथा मूल्यांकन समितिको सिफारिस </li>
                <li> वडा कार्यालयको सिफारिस </li>
                <li> योजना सम्झौता तथा कार्यादेश</li>
                <li>रकम खर्च गरिएका बील भरपाईहरु </li>
              </ul>
            </div>

            </div>
            <div className="right-slide">
                <p id="right-slide-header"> जिम्मेवारी अधिकारी शाखा</p>
                <p id="right-slide-content1">योजना, अनुगमन तथा तत्थ्यङ्क शाखा </p>
                <p id="right-slide-header"> लाग्ने समय</p>
                <p id="right-slide-content2">३ दिन भित्र </p>
                <p id="right-slide-header"> दस्तुर</p>
                <p id="right-slide-content4">निशुल्क </p>

            </div>
        </div>
    </div>
    </>
  )
}

export default Slide6