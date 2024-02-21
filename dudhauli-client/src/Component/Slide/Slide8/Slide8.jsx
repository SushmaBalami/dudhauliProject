import React from 'react'

const Slide8 = (props) => {
  return (
    <>
     <div className="main-container">
        <p id="slide-header"style={{ padding: props.header ? "10px" : "0" }} >{props.header}</p>
        <div className="main-slide">
            <div className="left-slide">
            <div className="left-list">
            <p id="left-slide-under-header">आवश्यक पर्ने कागजातहरु</p>
            <ul typeof="disc" id="bulleted-list">
                <li>व्यहोरा खुलेको निवेदन  </li>
                <li>संस्था भाडामा बस्ने भए सम्झौता पत्र र चालु आ.व. सम्मतको बहाल </li>
                <li>कर तिरेको रसिद </li>
                <li>संस्थाका पदाधिकारीहरुको चालु आ.व. सम्मको मालपोत र घर जग्गा  </li>
                <li>कर वा एकीकृत सम्पति कर तिरेको रसिद </li>
                <li>संस्थाको प्रगति प्रतिवेदन </li>
                <li>वडा कार्यालयको सिफारिस </li>
                <li>नगरकार्यपालिकाको कार्यालयको अनुगमन प्रतिवेदन </li>
                <li>संस्थाको विगत तीन आ.व.को लेखापरीक्षण प्रतिवेदन </li>
                
              </ul>
            </div>

            </div>
            <div className="right-slide">
                <p id="right-slide-header"> जिम्मेवारी अधिकारी शाखा</p>
                <p id="right-slide-content1"> सामाजिक विकास शाखा </p>
                <p id="right-slide-header"> लाग्ने समय</p>
                <p id="right-slide-content2">३  दिन भित्र </p>
                <p id="right-slide-header"> दस्तुर</p>
                <p id="right-slide-content3">१५००/-</p>

            </div>
        </div>
    </div>
    </>
  )
}

export default Slide8