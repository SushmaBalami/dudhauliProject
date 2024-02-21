import React from 'react'
import Layout from '../../Layouts/Layout'
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Resident = () => {
  return (
    <>
    <Layout>
      <div className="main-container">
        <div className="header-home">
        <div className="title-home">बसाइसराइ</div>
        <div className="button">
        <NavLink to={"/home"}>
          <button id="button1">
            <MdClose size={20} color="white"/>
          </button>
        </NavLink>
        </div>
        </div>
        <div className="content">hellooooooo</div>
      </div>
    </Layout>
  </>
  )
}

export default Resident