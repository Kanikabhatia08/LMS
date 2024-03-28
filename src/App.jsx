import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
import Footer from './components/Footer';
import PrivateLink from './components/PrivateLink';
import Error from './pages/Error';
import Cart from './pages/Cart';
import FAQs from './pages/FAQs';
import ContactUs from './pages/ContactUs';
import Blogs from './pages/Blogs';
import FirebaseLogin from './pages/Auth/FirebaseLogin'
import FirebaseRegister from './pages/Auth/FirebaseRegister'

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
