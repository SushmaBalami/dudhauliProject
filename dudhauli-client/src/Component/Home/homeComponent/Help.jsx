import React, {useState} from 'react'
import Layout from '../../Layouts/Layout'
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Collapse, Space } from "antd";
import Slide2 from '../../Slide/Slide2/Slide2';
import Slide10 from '../../Slide/Slide10/Slide10';
import Slide5 from '../../Slide/Slide5/Slide5';
import Slide6 from '../../Slide/Slide6/Slide6';
import Slide4 from '../../Slide/Slide4/Slide4';
import Slide9 from '../../Slide/Slide9/Slide9';

const Help = () => {
  const[activeKey,setactiveKey]= useState(null);

  const handleCollapseChange=(key)=>{
    setactiveKey((prevKey)=>(prevKey===key? null : key));
  };

  return (
    <>
      <Layout>
        <div className="main-container">
          <div className="header-home">
          <div className="title-home">सेवा/सुविधा</div>
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
                  label: "उपभोक्ता समिति दर्ता  ",
                  children: <p>{<Slide2/>}</p>,
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
                  label: "उपभोक्ता समितिको बैंक खाता खोल्ने सिफारिस  ",
                  children: <p>{<Slide10/>}</p>,
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
                  label: "योजनाहरुको सम्झौता  ",
                  children: <p>{<Slide5/>}</p>,
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
                  label: "योजनाहरुको रकम भुक्तानी  ",
                  children: <p>{<Slide6/>}</p>,
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
                  label: "उपभोक्ता समितिको बैंक खाता बन्द गर्ने सिफारिस ",
                  children: <p>{<Slide2/>}</p>,
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
                  label: "संस्था दर्ता  ",
                  children: <p>{<Slide4/>}</p>,
                },
              ]}
            />
             <Collapse
              activeKey={activeKey}
              onChange={()=>handleCollapseChange("7")}
              collapsible="header"
              items={[
                {
                  key: "7",
                  label: "संघ संस्था नवीकरण ",
                  children: <p>{<Slide4/>}</p>,
                },
              ]}
            />
             <Collapse
              activeKey={activeKey}
              onChange={()=>handleCollapseChange("8")}
              collapsible="header"
              items={[
                {
                  key: "8",
                  label: "नयाँ बिद्यालय स्थापना/ संचालन स्वीकृति ",
                  children: <p>{<Slide9/>}</p>,
                },
              ]}
            />
             <Collapse
              activeKey={activeKey}
              onChange={()=>handleCollapseChange("9")}
              collapsible="header"
              items={[
                {
                  key: "9",
                  label: "सहकारी दर्ता ",
                  children: <p>{<Slide10/>}</p>,
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

export default Help