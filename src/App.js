import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Login from './auth/Login';
import Register from './auth/Register';
import BottomNavbar from './components/modules/BottomNavbar';
import CategoriesPage from './components/Products/CategoriesPage';
import QuickOrder from './components/Cart/QuickOrder';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* صفحه اصلی */}
          <Route 
            path="/" 
            element={
              <>
                <Navbar />
                <Hero />
                <Features />
                <Products />
                <Testimonials />
                <Footer />
                <BottomNavbar />
              </>
            } 
          />
          {/* صفحه دسته‌بندی محصولات */}
          <Route 
            path="/categories" 
            element={
              <>
                <Navbar />
                <CategoriesPage />
                <Footer />
                <BottomNavbar />
              </>
            } 
          />
          {/* صفحه ثبت سفارش سریع */}
          <Route 
            path="/quick-order" 
            element={
              <>
                <Navbar />
                <QuickOrder />
                <Footer />
                <BottomNavbar />
              </>
            } 
          />
          {/* صفحه لاگین */}
          <Route path="/login" element={<Login />} />
          
          {/* صفحه ثبت نام */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;