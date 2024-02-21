import React from 'react'
import { Routes, Route } from 'react-router-dom'
import News from './News'
import Home from './Home'
import RegisteredUser from './RegisteredUser'
import Update from './Update'
import Create from './Create'
import FullNews from './FullNews'
import Calculator from './Calculator'
import Main from './Resume/Main'
import AgeCalculator from './AgeCalculator'
import Check from './Check'
import JSON from './JSON'
import Texteditor from './Texteditor'
import PixelImage from './Resume/pixelimage/PixelImage'

import ShopHome from './shopping/ShopHome'
import AdminLayout from './shopping/admin/AdminLayout'
import UpdateProduct from './shopping/admin/UpdateProduct'
import ShopCart from './shopping/ShopCart'
import ShoppingWrapper from './shopping/ShoppingWrapper'
import PdfToWord from './page-converter/PdfToWord'
import WordtoPdf from './page-converter/WordtoPdf'


function Router() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Create />} />
      <Route path='/news' element={<News />} />
      <Route path='/pixelImage' element={<PixelImage />} />
      <Route path='/registeredUser' element={<RegisteredUser />} />
      <Route path='/edit/:id' element={<Update />} />
      <Route path='/detail/:id' element={<FullNews />} />
      <Route path='/calculator' element={<Calculator />} />
      <Route path='/resume' element={<Main />} />
      <Route path='/ageCalculator' element={<AgeCalculator />} />
      <Route path='/check' element={<Check />} />
      <Route path='/json' element={<JSON />} />
      <Route path='/editor' element={<Texteditor />} />
      <Route path='/shopping' element={<ShoppingWrapper />} />
      <Route path='/shophome' element={<ShopHome />} />
      <Route path='/admin' element={<AdminLayout />} />
      <Route path='/editPro/:id' element={<UpdateProduct/>}/>
      <Route path='/pdfToWord' element={<PdfToWord/>}/>
      <Route path='/wordToPdf' element={<WordtoPdf/>} />
     
      
    </Routes>

  )
}

export default Router
