import React from 'react'

const Slide7 = (props) => {
  return (
    <>
    <div className="main-container">
        <p id="slide-header" style={{padding:props.header ? "10px" :"0"}}>{props.header}</p>
        <div className="main-slide">
            <div className="left-slide">
            <div className="left-list">
            <p id="left-slide-under-header">आवश्यक पर्ने कागजातहरु</p>
            <ul typeof="disc" id="bulleted-list">
              <li>निवेदन </li>
              <li>प्रमाणीकरण गर्नुपर्ने सक्कल कागजातहरु</li>
              </ul>
            </div>

            </div>
            <div className="right-slide">
                <p id="right-slide-header"> जिम्मेवारी अधिकारी शाखा</p>
                <p id="right-slide-content1"> प्रमुख प्रशासकीय अधिकृत </p>
                <p id="right-slide-header"> लाग्ने समय</p>
                <p id="right-slide-content2"> ३ दिन भित्र </p>
                <p id="right-slide-header"> दस्तुर(रु.)</p>
                <p id="right-slide-content3">५००  </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Slide7