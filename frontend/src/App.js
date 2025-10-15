import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import Services from './pages/Services';
import Promote from './pages/Promote';
import Login from './pages/Login';
import { UserProvider } from './components/UserContext';

function App() {
  return(
    <UserProvider>
      <BrowserRouter>
        <Routes>
          {/*static routes*/}
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Promote" element={<Promote />} />
          <Route path="/Login" element={<Login />} />
          {/*dynamic route for services*/}
          <Route path = "*" element = { <Home /> }/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )    
}

export default App;
