import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Register from './pages/Authentication/Signup';
import Login from './pages/Authentication/login.js';
import PageNotFound from './pages/PageNoteFound';
import Dashboard from './pages/user/Dashboard.js';
import PrivateRoute from './components/Routes/Private.js';
import ForgotPasssword from "./pages/Authentication/ForgetPassword.js";
import Category from './pages/category.js';

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/dashboard' element={<PrivateRoute/>}>
      <Route path="" element={<Dashboard/>}/>
      </Route>
      <Route path='/category' element={<Category/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/policy' element={<Policy/>} />
      <Route path='/Register' element={<Register/>}/>
      <Route path="/forgot-password" element={<ForgotPasssword />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
  </>
  );
}

export default App;
