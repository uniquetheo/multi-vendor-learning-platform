
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./Components/NavBar/Navbar";
import { Courses } from "./Components/Courses";
import { About } from "./Components/About";
import { LandingPage } from "./Components/LandingPage";
import { Footer } from "./Components/Footer";
import { Login } from "./Components/Login";
import { ContactPage } from "./Components/ContactPage";



function App() {
  return (
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} /> 
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    
  );
}

export default App;
