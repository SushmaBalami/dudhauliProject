import React, { useEffect, useState } from "react";
import "../../Slide/Slide.css";

const Slide1 = (props) => {
  const [hasScrollbar, setHasScrollbar] = useState(false);

  useEffect(() => {
    const leftList = document.querySelector(".left-list");
    const leftListContent = document.querySelector("#bulleted-list");

    if (leftListContent.scrollHeight > leftList.clientHeight) {
      setHasScrollbar(true);
    } else {
      setHasScrollbar(false);
    }
  }, []);

  return (
    <>
      <div className={`main-container ${hasScrollbar ? "" : "no-scroll"}`}>
        <p id="slide-header" style={{ padding: props.header ? "10px" : "0" }}>
          {props.header}
        </p>
        <div className="main-slide">
          <div className="left-slide">
            <p id="left-slide-header">आबश्यक कागजात तथा प्रमान</p>
            <div className="left-list">
              <p id="left-slide-under-header">आवश्यक पर्ने कागजातहरु</p>
              <ul typeof="disc" id="bulleted-list">
                <li>
                  व्यहोरा खुलेको निवेदन नगरसभाबाट स्वीकृत भएको योजना हुनुपर्ने
                </li>
                <li>
                  उपभोक्ता समिति गठन भएको आमभेलाको निर्णयको प्रतिलिपी उपभोक्ता
                </li>
                <li>
                  समिकिा सदस्यहरुको नेपाली नागरिकता प्रमाणपत्रको प्रतिलिपी
                  उपभोक्ता
                </li>
                <li>
                  समिति दर्ता प्रमाणपत्रको प्रतिलिपी वडा कार्यालयको सिफारिस
                </li>
                <li>
                  सम्बन्धित प्राविधिकबाट योजनाको सम्बन्धमा तयार गरेको लागत
                  अनुमान
                </li>
                <li>
                  एवं डिजाईन योजना सञ्चालनको लागि उपभोक्ता समितिले
                  व्यहोर्नुपर्ने
                </li>
                <li>
                  प्रतिशत बराबरको रकम बैंकमा जम्मा गरेको भौचर योजना सञ्चालन
                </li>
                <li> गर्नुपूर्वको अवस्थाको फोटो</li>
              </ul>
            </div>
          </div>
          <div className="right-slide">
            <p id="right-slide-header"> जिम्मेवारी अधिकारी शाखा</p>
            <p id="right-slide-content1"> योजना, अनुगमन तथा तत्थ्यङ्क शाखा</p>
            <p id="right-slide-header"> लाग्ने समय</p>
            <p id="right-slide-content2"> ३ दिन भित्र</p>
            <p id="right-slide-header"> दस्तुर</p>
            <p id="right-slide-content3">निशुल्क</p>
            <p id="right-slide-header"> कोठा नम्बर</p>
            <p id="right-slide-content4">सामाजिक विकास शाखाको कार्यकक्ष</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide1;
