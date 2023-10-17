import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header'
// import { auth } from './Components/auth'
import { Login } from './Components/Login'

function App() {
  

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/get-started" element={<GetStarted />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
      </Routes>
    </Router>
      
    </>
  )
}

export default App
