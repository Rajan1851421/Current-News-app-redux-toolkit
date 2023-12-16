import React from 'react'
import { Routes,Route } from 'react-router-dom'
import General from './General'
import Sport from './Sport'
import Health from './Health'
import Business from './Business'
import Technology from './Technology'
import Form from './Create'

function Router() {
  return (
    
      <Routes>
        <Route path='/' element={<General />} />
        <Route path='/form' element={<Form />} />
        <Route path='/sport' element={<Sport />} />
        <Route path='/health' element={<Health />} />
        <Route path='/business' element={<Business />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
   
  )
}

export default Router
