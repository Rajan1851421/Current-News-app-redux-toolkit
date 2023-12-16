import React from 'react'
import { Routes, Route } from 'react-router-dom'
import General from './General'
import Sport from './Sport'
import Health from './Health'
import Business from './Business'
import Technology from './Technology'
import Register from './Create'
import Home from './Home'
import AboutUs from './AboutUs'
import RegisteredUser from './RegisteredUser'

function Router() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/general' element={<General />} />
      <Route path='/register' element={<Register />} />
      <Route path='/sport' element={<Sport />} />
      <Route path='/health' element={<Health />} />
      <Route path='/business' element={<Business />} />
      <Route path='/technology' element={<Technology />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/registeredUser' element={<RegisteredUser />} />
    </Routes>

  )
}

export default Router
