import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbar";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import Features from "../pages/Features";
import AboutUs from '../pages/AboutUs';
import Login from '../pages/Login';
import Home2 from '../Enterprise/Home2';
import Products from '../Enterprise/Products';
import Sales from '../Enterprise/Sales';
import Shoopings from '../Enterprise/Shoopings';
import Register from '../pages/Register'
import EnterpriseLayout from '../components/EnterpriseLayout';

function App() {
  return (
    <div className='my-0'>
      
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path='about' element={<AboutUs />} />
          <Route path='contact' element={<ContactUs />} />
          <Route path='features' element={<Features />} />
          <Route path='/' element={<Home />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<EnterpriseLayout />}>
              
          <Route path='' element={<Home2 />} />

        </Route>

       <Route path="/sale" element={<EnterpriseLayout />}>
              
          <Route path='' element={<Sales />} />

       </Route>

        <Route path="/shop" element={<EnterpriseLayout />}>
              
          <Route path='' element={<Shoopings />} />

        </Route>

        <Route path="/product" element={<EnterpriseLayout />}>
              
          <Route path='' element={<Products />} />

        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
