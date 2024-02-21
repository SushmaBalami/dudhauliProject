import React , {useState}from "react";
import Layout from '../../Layouts/Layout'
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Collapse, Space } from "antd";
import Slide10 from '../../Slide/Slide10/Slide10';
import Slide8 from '../../Slide/Slide8/Slide8';
import Slide6 from '../../Slide/Slide6/Slide6';
const Others = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleCollapseChange = (key) => {
    setActiveKey((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <>
      <Layout>
        <div className="main-container">
          <div className="header-home">
          <div className="title-home">अन्य</div>
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
                  label: "सार्बजनिक निर्माण कार्यको घ वर्गको इजाजत पत्र जार  ",
                  children: <p>{<Slide10/>}</p>,
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
                  label: "शहरी स्वास्थ्य सेवा संचालन अनुमति ",
                  children: <p>{<Slide8/>}</p>,
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
                  label: "माथि उल्लेख नभएका सबै कार्य ",
                  children: <p>{<Slide6/>}</p>,
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

export default Others