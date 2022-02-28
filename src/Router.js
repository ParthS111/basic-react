import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Screen/Home'
import About from './Screen/About'
import Contact from './Screen/Contact'
import Service from './Screen/Service'
import Profile from './Screen/Profile';
import Error from './Screen/Error';
function Router() {
  return (
    <div>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="service" element={<Service />} />
        <Route path="home/:clientId" element={<Profile />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default Router