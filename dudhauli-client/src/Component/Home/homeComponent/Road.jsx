import React,{useState} from 'react'
import Layout from '../../Layouts/Layout'
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Collapse, Space } from "antd";
import Slide9 from '../../Slide/Slide9/Slide9';
import Slide3 from '../../Slide/Slide3/Slide3';
import Slide6 from '../../Slide/Slide6/Slide6';
import Slide5 from '../../Slide/Slide5/Slide5';
const Road = () => {
  const[activeKey,setactiveKey]=useState(null);
  const handleCollapseChange=(key)=>{
    setactiveKey((prevKey)=>(prevKey===key ? null : key));

  };
  return (
    <>
      <Layout>
        <div className="main-container">
          <div className="header-home">
          <div className="title-home">जग्गा/बाटो</div>
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
          onChange={() => handleCollapseChange("1")}
              collapsible="header"
              items={[
                {
                  key: "1",
                  label: "भवन निर्माण नक्शा पास  ",
                  children: <p>{<Slide9/>}</p>,
                },
              ]}
            />
             <Collapse
             activeKey={activeKey}
             onChange={() => handleCollapseChange("2")}
              collapsible="header"
              items={[
                {
                  key: "2",
                  label: "भवन अभिलेखीकरण  ",
                  children: <p>{<Slide3/>}</p>,
                },
              ]}
            />
            
             <Collapse
             activeKey={activeKey}
             onChange={() => handleCollapseChange("3")}
              collapsible="header"
              items={[
                {
                  key: "3",
                  label: "अनाधिकृत निर्माण रोक्न ",
                  children: <p>{<Slide6/>}</p>,
                },
              ]}
            />
             <Collapse
             activeKey={activeKey}
             onChange={() => handleCollapseChange("4")}
              collapsible="header"
              items={[
                {
                  key: "4",
                  label: "सार्वजनिक सम्पतिको अतिक्रमण रोक्न ",
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

export default Road