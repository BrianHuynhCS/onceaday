import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Goal from './components/Goal';
import Food from './components/Food';
import Quote from './components/Quote';

function App() {

  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(
    localStorage.getItem("showNavbar") === true
  );

  const handleGetStartedClick = () => {
    setShowNavbar(true);
    localStorage.setItem("showNavbar", true);
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      setShowNavbar(true);
    }
  }, [location.pathname])


  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={<Home handleGetStartedClick={handleGetStartedClick} />}
        />
        <Route path="/goal" element={<Goal />} />
        <Route path="/food" element={<Food />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
