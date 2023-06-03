
import "./App.scss";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import logo from "../src/assets/logo/6.png"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout logo={logo}  />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="contact" element={<Contact />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
