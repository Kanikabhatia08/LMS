import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateLink from './components/PrivateLink';
import Error from './pages/Error';
import FAQs from './pages/FAQs';
import ContactUs from './pages/ContactUs';
import Blogs from './pages/Blogs';
import Footer from './components/Footer';
import FirebaseLogin from './pages/Auth/FirebaseLogin'
import FirebaseRegister from './pages/Auth/FirebaseRegister'
// const Navbar = lazy(() => import('./components/Navbar'));
// const Home = lazy(() => import('./pages/Home'));
// const Courses = lazy(() => import('./pages/Courses'));
// const Cart = lazy(() => import('./pages/Cart'));
// const Footer = lazy(() => import('./components/Footer'));
// const PrivateLink = lazy(() => import('./components/PrivateLink'));
// const Blogs = lazy(() => import('./pages/Blogs'));
// const ContactUs = lazy(() => import('./pages/ContactUs'));
// const FAQs = lazy(() => import('./pages/FAQs'));
// const Error = lazy(() => import('./pages/Error'));
// const FirebaseLogin = lazy(() => import('./pages/Auth/FirebaseLogin'));
// const FirebaseRegister = lazy(() => import('./pages/Auth/FirebaseRegister'));




function App() {

  // const authenticated = () => {
  //   const loggedInUser = localStorage.getItem('setIsLoggedIn');
  //   if (loggedInUser === 'true') {
  //     return true
  //   }
  //   return (false)
  // }
  // const dispatch = useDispatch()
  
  // const [isLoggedIn, setIsLoggedIn] = useState();
  // console.log(isLoggedIn, "appppppppppp1")
  // const {loggedInUser:isLoggedIn} = useSelector((state) => state)

  // console.log(isLoggedIn,"appppppppppp2")

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem('setIsLoggedIn');
  //   console.log(loggedInUser, "logeed in")
  //   loggedInUser ? (setIsLoggedIn(true)) : (setIsLoggedIn(false))
  // }, [])


  return (
    <div>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={
          <PrivateLink >
            <Courses />
          </PrivateLink>
        } />
        <Route path="/cart" element={
          <PrivateLink  >
            <Cart />
          </PrivateLink>
        } />
        <Route path="/login" element={<FirebaseLogin/>} />
        <Route path="/signup" element={<FirebaseRegister />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
