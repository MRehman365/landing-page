import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactForm from "./Components/ContactForm";
import AppDevelopment from "./pages/AppDevelopment";
import SMO from "./pages/SMO";
import SEO from "./pages/SEO";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servise" element={<Services />} />
        <Route path="/app" element={<AppDevelopment />} />
        <Route path="/smo" element={<SMO />} />
        <Route path="/seo" element={<SEO />} />
      </Routes>
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
