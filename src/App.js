import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servise" element={<Services />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
