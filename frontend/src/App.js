import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import Services from './pages/Services';
import Promote from './pages/Promote';
import Login from './pages/Login';
import { UserProvider } from './components/UserContext';
import ServiceDetail from './pages/ServicePage';

function App() {
  return(
    <UserProvider>
      <BrowserRouter>
        <Routes>
          {/*static routes*/}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/promote" element={<Promote />} />
          <Route path="/login" element={<Login />} />
          {/*dynamic route for services*/}
          <Route path = "*" element = { <Home /> }/>
          <Route path="/service/:serviceName" element={<ServiceDetail />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )    
}

export default App;
