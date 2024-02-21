import React , {useState}from "react";
import Layout from "../../Layouts/Layout";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Collapse, Space } from "antd";
import Slide1 from "../../Slide/Slide1/Slide1";
import Slide2 from "../../Slide/Slide2/Slide2";
import Slide7 from "../../Slide/Slide7/Slide7";

const People = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleCollapseChange = (key) => {
    setActiveKey((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <>
      <Layout>
        <div className="main-container">
          <div className="header-home">
            <div className="title-home">पञ्जिकरण</div>
            <div className="button">
              <NavLink to={"/home"}>
                <button id="button1">
                  <MdClose size={20} color="white" />
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
                  label: "जेष्ठ नागरिक परिचय पत्र वितरण ",
                  children: <p>{<Slide1 />}</p>,
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
                  label: "व्यक्तिगत घटना दर्ताका सक्कल कगजात प्रमाणीकरण ",
                  children: <p>{<Slide2/>}</p>,
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
                  label: "अपाङ्ग परिचय पत्र वितरण ",
                  children: <p>{<Slide7/>}</p>,
                },
              ]}
            />
          </Space>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default People;

