import React from 'react'
import "../../Slide/Slide.css"
const Slide10= (props) => {
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
                <li> नेपाली नागरिकता प्रमाणपत्रको प्रतिलिपी </li>
                <li> विदेशीको हकमा राहादनीको प्रमाणित प्रतिलिपि वा सम्बन्धित </li>
                <li>दुतावासको निजको परिचय खुल्ने सिफारिस </li>
                <li>व्यवसायीको २ प्रति पासपोर्ट साईजको फोटो</li>
                <li>घर बहाल सम्झौता र बहाल कर तिरेको रसिद </li>
                <li> चा.लु आ.व. सम्मको मालपोत र घरजग्गा कर वा एकीकृत सम्पति कर तिरेको रसिद </li>
                <li>स्थानीय तहको नाममा दर्ता नगरी प्यान वा अन्य निकायमा दर्ता गरी व्यवसाय </li>
                <li>दर्ता गरेको हकमा प्यान दर्ता तथा व्यवसाय दर्ताको प्रमाणपत्रको प्रमाणित प्रतिलिपी </li>
              </ul>
            </div>

            </div>
            <div className="right-slide">
                <p id="right-slide-header"> जिम्मेवारी अधिकारी शाखा</p>
                <p id="right-slide-content1"> राजस्व तथा आर्थिक प्रशासक शाखा  </p>
                <p id="right-slide-header"> लाग्ने समय</p>
                <p id="right-slide-content2">३ दिन भित्र </p>
                <p id="right-slide-header"> दस्तुर</p>
                <p id="right-slide-content3">आर्थिक एनले तोके बमोजिम </p>

            </div>
        </div>
    </div>
    </>
  )
}

export default Slide10