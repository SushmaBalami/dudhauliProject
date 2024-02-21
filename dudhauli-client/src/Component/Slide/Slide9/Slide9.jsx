import React from 'react'

const Slide9 = (props) => {
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
              <li>विद्यालय स्थापना तथा सञ्चालन सम्बन्धी विस्तृत विवरण खुलेको </li>
              <li>निवेदन फाराम </li>
              <li> विद्यालय दर्ता प्रमाण पत्रको प्रतिलिपि </li>
              <li>स्थायी लेखा नम्बरप्रमाण पत्रको प्रतिलिपि </li>
              <li>विद्यालय स्थापना सम्बन्धी प्रस्तावना पत्र </li>
              <li>सामुदायिक विद्यालयका बाहेकको हकमा व्यवसाय दर्ता प्रमाण पत्र </li>
              <li>सामुदायिक बाहेकका विद्यालयका हकमा चालु आ.व. सम्मको </li>
              <li>मालपोत र घर जग्गा कर वा एकीकृत सम्पति  कर तिरेको रसिद </li>
              <li>बहालमा भए सम्झौता पत्रको प्रतिलिपि र बहाल कर तिरेको रसिद </li>
              <li>वडा कार्यालयको विद्यालय स्थापना तथा सञ्चालन गर्ने सम्बन्धी सिफारिस </li>
              </ul>
            </div>

            </div>
            <div className="right-slide">
                <p id="right-slide-header"> जिम्मेवारी अधिकारी शाखा</p>
                <p id="right-slide-content1">सामाजिक विकास शाखा </p>
                <p id="right-slide-header"> लाग्ने समय</p>
                <p id="right-slide-content2">७ दिन भित्र </p>
                <p id="right-slide-header"> दस्तुर</p>
                <p id="right-slide-content4">आर्थिक एनले तोके बमोजिम </p>

            </div>
        </div>
    </div>
    </>
  )
}

export default Slide9