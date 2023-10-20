import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { Login } from './Components/Login'
import { LandingPage } from './Components/LandingPage'

function App() {
  

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing-page" element={<LandingPage />} />
        {/* <Route path="/get-started" element={<GetStarted />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
      </Routes>
    </Router>
      
    </>
  )
}

export default App
