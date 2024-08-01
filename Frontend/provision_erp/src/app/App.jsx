import React from 'react';
import { Routes, Route} from 'react-router-dom';
import  Navbar  from "../components/Navbar";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home"
import Features from "../pages/Features";
import AboutUs from '../pages/AboutUs';
import Login from '../pages/Login';
import Home2 from '../Enterprise/Home2';


function App() {
  return (
    <div className='my-0'>

      <Routes>
        <Route path="/" element={<Navbar/>}>
            <Route path='about' element={<AboutUs />}/>
            <Route path='contact' element={<ContactUs />}/>
            <Route path='features' element={<Features />}/>
            <Route path='/' element={<Home />}/>
        </Route>

        <Route path="login" element={<Login />} />
          
        <Route path="inicio" element={<Home2 />} />

      </Routes>

    </div>
  );
}

export default App;
