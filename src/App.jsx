import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Footer from "./components/Footer";

function App() {
  const [showalert, setShowalert] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowalert(true);
    }, 5000);
    const hideTimer = setTimeout(() => {
      setShowalert(false);
    }, 10000);

    return () => {
      clearTimeout(showalert);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* <Footer /> */}
      {showalert && (
        <div className="w-[25%] py-5 px-4 bg-green-950 fixed bottom-2 left-1 border-2 rounded-3xl text-gray-300 border-black">
          <p>
            Site is in working - Any Query contact us- muneebkhan9569@gmail.com
          </p>
        </div>
      )}
    </>
  );
}

export default App;
