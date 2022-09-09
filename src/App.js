import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Islamabad from "./Components/Islamabad/Islamabad";
import Google from "./Components/Google/Google";
import Feedback from "./Components/Feedback/Feedback";
import Careers from "./Components/Careers/Careers";
import Contact from "./Components/Contact/Contact";
import Reserve from "./Components/Reserve/Reserve";
import Menuala from "./Components/Menuala/Menuala";
import Munebuffet from "./Components/Menubuffet/Menubuffet";
import Aboutus from "./Components/Aboutus/Aboutus";
import Facilitles from "./Components/Facilitles/Facilitles";
import Test from "./Components/Test/Test";
import Home from "./Components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feedbackmain from "./Components/Feedbackmain";
import Menualamain from "./Components/Menualamain";
import Reservemain from "./Components/Reservemain";
import Careersmain from "./Components/Footer/Careersmain";
import Contactmain from "./Components/Contactmain";
import Menubuffetmain from "./Components/Menubuffetmain";
import Homemain from "./Components/Homemain";
import Mainpage from "./Components/Mainpage";
import Aboutmain from "./Components/Aboutmain";
import Moments from "./Components/Moments/Moments";
import Mainheader from "./Components/Mainheader/Mainheader";
import Momentsmain from "./Components/Momentsmain";
import Servingmain from "./Components/Servingmain";

function App() {
  return (
    <div className="App">
      <Router>
      {/* <Mainheader /> */}
        <Routes>
          {/* <Route  exact path="/Homemain" element={<Mainheader />}></Route> */}
          <Route path="/" element={<Homemain />} />
          <Route  exact path="/Homemain" element={<Homemain />}></Route>
          <Route exact path="/Feedbackmain" element={<Feedbackmain />} />
          <Route exact path="/Menualamain" element={<Menualamain />}></Route>
          <Route exact path="/Aboutmain" element={<Aboutmain />}></Route>

          <Route exact path="/Reservemain" element={<Reservemain/>}></Route>
          <Route exact path="/Careersmain" element={<Careersmain/>}></Route>
          <Route exact path="/Mainpage" element={<Mainpage />}></Route>
          <Route exact path="/Contactmain" element={<Contactmain />}></Route>
          <Route exact path="/Menubuffetmain" element={<Menubuffetmain />}></Route>
          <Route exact path="/Momentsmain" element={<Momentsmain />}></Route>
          <Route exact path="/Servingmain" element={<Servingmain />}></Route>

        </Routes>
      </Router>
      
      {/* <Moments /> */}
    <Footer />
    </div>
  );
}

export default App;
