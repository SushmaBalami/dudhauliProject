import React from 'react'

const Slide5 = (props) => {
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
                <li>व्यहोरा खुलेको निवेदन  </li>
                <li>नगरसभाबाट स्वीकृत भएको योजना हुनुपर्ने</li>
                <li>उपभोक्ता समिति गठन भएको आमभेलाको निर्णयको प्रतिलिपी</li>
                <li>उपभोक्ता समिकिा सदस्यहरुको नेपाली नागरिकता प्रमाणपत्रको प्रतिलिपी</li>
                <li>उपभोक्ता समिति दर्ता प्रमाणपत्रको प्रतिलिपी</li>
                <li>वडा कार्यालयको सिफारिस</li>
                <li>सम्बन्धित प्राविधिकबाट योजनाको सम्बन्धमा तयार गरेको लागत </li>
                <li>अनुमान एवं डिजाईन</li>
                <li>योजना सञ्चालनको लागि उपभोक्ता समितिले व्यहोर्नुपर्ने २० प्रतिशत बराबरको रकम बैंकमा जम्मा गरेको भौचर </li>
                <li>योजना सञ्चालन गर्नुपूर्वको अवस्थाको फोटो</li>

              </ul>
            </div>

            </div>
            <div className="right-slide">
                <p id="right-slide-header"> जिम्मेवारी अधिकारी/शाखा</p>
                <p id="right-slide-content1">योजना, अनुगमन तथा तत्थ्यङ्क शाखा </p>
                <p id="right-slide-header"> लाग्ने समय</p>
                <p id="right-slide-content2"> ३ दिन भित्र </p>
                <p id="right-slide-header"> दस्तुर</p>
                <p id="right-slide-content3">निशुल्क</p>

            </div>
        </div>
    </div>
    </>
  )
}

export default Slide5