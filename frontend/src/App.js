import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import Services from './pages/Services';
import Hire from './pages/Hire';
import Promote from './pages/Promote';
import Login from './pages/Login';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Hire" element={<Hire />} />
        <Route path="/Promote" element={<Promote />} />
        <Route path="/Login" element={<Login />} />
        <Route path = "*" element = { <Home /> }/>
      </Routes>
    </BrowserRouter>
  )    
}

export default App;
