import React , {useState}from "react";
import Layout from "../../Layouts/Layout";
import "../Home.css";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Collapse, Space } from "antd";
import Slide10 from "../../Slide/Slide10/Slide10";
import Slide8 from "../../Slide/Slide8/Slide8";
import Slide7 from "../../Slide/Slide7/Slide7";
import Slide1 from "../../Slide/Slide1/Slide1";
import Slide6 from "../../Slide/Slide6/Slide6";
import Slide5 from "../../Slide/Slide5/Slide5";

const Business = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleCollapseChange = (key) => {
    setActiveKey((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <>
      <Layout>
        <div className="main-container">
          <div className="header-home">
          <div className="title-home">व्यापार</div>
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
                  label: "व्यवसाय दर्ता  ",
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
                  label: "व्यवसाय नवीकरण  ",
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
                  label: "१०० ओटा सम्मको एफ. एम रेडियो संचालन अनुमति ",
                  children: <p>{<Slide1/>}</p>,
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
                  label: "१०० ओटा सम्मको एफ. एम रेडियो संचालन अनुमतिको नवीकरण  ",
                  children: <p>{<Slide7/>}</p>,
                },
              ]}
            />
             <Collapse
              activeKey={activeKey}
              onChange={() => handleCollapseChange("5")}
              collapsible="header"
              items={[
                {
                  key: "5",
                  label: "१०० ओटा सम्मको एफ. एम रेडियो संचालन अनुमति  खारेजी ",
                  children: <p>{<Slide7/>}</p>,
                },
              ]}
            />
             <Collapse
              activeKey={activeKey}
              onChange={() => handleCollapseChange("6")}
              collapsible="header"
              items={[
                {
                  key: "6",
                  label: "व्यापारिक फिर्मको संचालन अनुमति  ",
                  children: <p>{<Slide6/>}</p>,
                },
              ]}
            />
             <Collapse
              activeKey={activeKey}
              onChange={() => handleCollapseChange("7")}
              collapsible="header"
              items={[
                {
                  key: "7",
                  label: "सार्बजनिक यातायातको रुट निर्धारण अनुमति  ",
                  children: <p>{<Slide5/>}</p>,
                },
              ]}
            />
             <Collapse
              activeKey={activeKey}
              onChange={() => handleCollapseChange("8")}
              collapsible="header"
              items={[
                {
                  key: "8",
                  label: "सार्बजनिक यातायातको रुट निर्धारण अनुमति खारेजी  ",
                  children: <p>{<Slide5/>}</p>,
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

export default Business;
