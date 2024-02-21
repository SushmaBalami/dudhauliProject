import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from "./Component/NavBar/Nav";
import Home from "./Component/Home/home";
import Program from "./Component/Program/Program";
import Help from "./Component/Home/homeComponent/help";
import Business from "./Component/Home/homeComponent/Business";
import Law from "./Component/Home/homeComponent/law";
import Office from "./Component/Home/homeComponent/office";
import Others from "./Component/Home/homeComponent/others";
import People from "./Component/Home/homeComponent/people";
import Resident from "./Component/Home/homeComponent/resident";
import Road from "./Component/Home/homeComponent/road";
import Slide from "./Component/Slide/Slide";
// import DateandTime from "./Component/Date/DateandTime";

function App() {

  return (
    <>
    
    <Router>

      <Routes>
      <Route path="/" element={<Program/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/slide" element={<Slide/>} />
      <Route path="/Sewa" element={<Help/>} />
      <Route path="/business" element={<Business/>} />
      <Route path="/law" element={<Law/>} />
      <Route path="/office" element={<Office/>} />
      <Route path="/others" element={<Others/>} />
      <Route path="/people" element={<People/>} />
      <Route path="/resident" element={<Resident/>} />
      <Route path="/road" element={<Road/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
