import React,{useState} from 'react'
import Layout from '../../Layouts/Layout'
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Collapse, Space } from "antd";
import Slide10 from "../../Slide/Slide10/Slide10";
import Slide8 from "../../Slide/Slide8/Slide8";
import Slide6 from "../../Slide/Slide6/Slide6";
import Slide5 from "../../Slide/Slide5/Slide5";
const Law = () => {
  const[activeKey,setactiveKey]=useState(null);

  const handleCollapseChange=(key)=>{
    setactiveKey((prevKey)=>(prevKey===key ? null :key));

  };

  return (
    <>
      <Layout>
        <div className="main-container">
          <div className="header-home">
          <div className="title-home">कर/ कानुन </div>
          <div className="button">
          <NavLink to={"/home"}>
            <button id="button1">
              <MdClose size={20} color="white"/>
            </button>
          </NavLink>
          </div>
          </div>
          <div className="collapse-content" >
          <Space direction="vertical">
          <Collapse
          activeKey={activeKey}
          onChange={()=>handleCollapseChange("1")}
              collapsible="header"
              items={[
                {
                  key: "1",
                  label: "छाडा पशु चौपायको  ",
                  children: <p>{<Slide10/>}</p>,
                },
              ]}
            />
             <Collapse
               activeKey={activeKey}
               onChange={()=>handleCollapseChange("2")}
              collapsible="header"
              items={[
                {
                  key: "2",
                  label: "झगडियाहरुबिच मध्यस्थता  ",
                  children: <p>{<Slide8/>}</p>,
                },
              ]}
            />
            
             <Collapse
               activeKey={activeKey}
               onChange={()=>handleCollapseChange("3")}
              collapsible="header"
              items={[
                {
                  key: "3",
                  label: "झगडियाहरुबिच मेलमिलाप ",
                  children: <p>{<Slide6/>}</p>,
                },
              ]}
            />
             <Collapse
               activeKey={activeKey}
               onChange={()=>handleCollapseChange("4")}
              collapsible="header"
              items={[
                {
                  key: "4",
                  label: "विभिन्न कर दस्तुर र शुल्क संकलन ",
                  children: <p>{<Slide5/>}</p>,
                },
              ]}
            />
             <Collapse
               activeKey={activeKey}
               onChange={()=>handleCollapseChange("5")}
              collapsible="header"
              items={[
                {
                  key: "5",
                  label: "सार्बजनिक निर्माण कार्यको घ वर्गको इजाजत पत्र जार  ",
                  children: <p>{<Slide5/>}</p>,
                },
              ]}
            />
             <Collapse
               activeKey={activeKey}
               onChange={()=>handleCollapseChange("6")}
              collapsible="header"
              items={[
                {
                  key: "6",
                  label: "निर्माण कार्यको घ वर्गको इजाजत नवीकरण पत्र  ",
                  children: <p>{<Slide5/>}</p>,
                },
              ]}
            />
          </Space>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Law