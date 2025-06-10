import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Speakers from "./pages/Speakers";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Registration from "./components/Registration";
import Events from "./pages/Events";
import EventDetail from "./components/EventDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
