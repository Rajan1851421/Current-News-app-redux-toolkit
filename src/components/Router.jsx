import React from 'react'
import { Routes, Route } from 'react-router-dom'
import News from './News'
import Home from './Home'
import AboutUs from './AboutUs'
import RegisteredUser from './RegisteredUser'
import Update from './Update'
import Create from './Create'
import FullNews from './FullNews'
import Calculator from './Calculator'
import Main from './Resume/Main'


function Router() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />  
      <Route path='/register' element={<Create/>}/>    
      <Route path='/news' element={<News />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/registeredUser' element={<RegisteredUser />} />
      <Route path ='/edit/:id' element={<Update />} />
      <Route path='/detail/:id' element ={<FullNews/> }/>
      <Route path='/calculator' element={<Calculator/>}/>
      <Route path='/resume' element={<Main/>}/>
    </Routes>

  )
}

export default Router
