import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import PrivateLink from './components/PrivateLink';
import Error from './pages/Error';
import Cart from './pages/Cart';

function App() {

  const authenticated = () => {
    const loggedInUser = localStorage.getItem('setIsLoggedIn');
    if (loggedInUser === 'true') {
      return true
    }
    return (false)
  }
  
  const [isLoggedIn, setIsLoggedIn] = useState(authenticated());
  console.log(isLoggedIn, "appppppppppp1")

  // console.log(isLoggedIn,"appppppppppp2")

  

  // useEffect(() => {
  // const loggedInUser = localStorage.getItem('setIsLoggedIn');

  //   console.log(loggedInUser, "logeed in")
  //   loggedInUser ? (setIsLoggedIn(true)) : (setIsLoggedIn(false))
  // }, [])


  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={
          <PrivateLink isLoggedIn={isLoggedIn}>
            <Courses />
          </PrivateLink>
        } />
        <Route path="/cart" element={
          <PrivateLink isLoggedIn={isLoggedIn} >
            <Cart />
          </PrivateLink>
        } />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/blogs" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/faqs" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/contactUs" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />

        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
