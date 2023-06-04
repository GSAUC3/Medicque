import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import logo from "../src/assets/logo/6.png";
import Appointment from "./Components/Pages/Appoinment";
import Contact from "./Components/Pages/Contact";
import Services from "./Components/Pages/Services";
import Benefit from "./Components/Pages/Benefit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout logo={logo} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="benefit" element={<Benefit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
