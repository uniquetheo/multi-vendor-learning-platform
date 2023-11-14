
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./Components/NavBar/Navbar";
import { Courses } from "./Components/Courses";
import { About } from "./Components/About";
import { LandingPage } from "./Components/LandingPage";
import { Footer } from "./Components/Footer";
import { Login } from "./Components/Login";
import { ContactPage } from "./Components/ContactPage";
import { Signup } from "./Components/Signup";



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
          <Route path="/signup" element={<Signup /> } />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer />
      </Router>
    
  );
}

export default App;
