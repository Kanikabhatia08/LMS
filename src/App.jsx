import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Courses/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path= "/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path= "/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
