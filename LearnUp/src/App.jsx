import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./Components/NavBar/Navbar";
import { Courses } from "./Components/Pages/Courses";
import { About } from "./Components/Pages/About";
import { LandingPage } from "./Components/Pages/LandingPage";
import { Footer } from "./Components/Sections/Footer";
import { Login } from "./Components/Pages/Login";
import { ContactPage } from "./Components/Pages/ContactPage";
import { Signup } from "./Components/Pages/Signup";

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
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
