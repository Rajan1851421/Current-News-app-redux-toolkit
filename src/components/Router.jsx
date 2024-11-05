import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import RegisteredUser from "./RegisteredUser";
import Update from "./Update";
import Create from "./Create";
import Calculator from "./Calculator";
import AgeCalculator from "./AgeCalculator";
import Check from "./Check";
import Texteditor from "./Texteditor";
import ShopHome from "./shopping/ShopHome";
import AdminLayout from "./shopping/admin/AdminLayout";
import UpdateProduct from "./shopping/admin/UpdateProduct";
import ShoppingWrapper from "./shopping/ShoppingWrapper";
import Game from "./Game"
import Gemini from "./Gemini";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Create />} />
      <Route path="/registeredUser" element={<RegisteredUser />} />
      <Route path="/edit/:id" element={<Update />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/ageCalculator" element={<AgeCalculator />} />
      <Route path="/check" element={<Check />} />
      <Route path="/editor" element={<Texteditor />} />
      <Route path="/shopping" element={<ShoppingWrapper />} />
      <Route path="/shophome" element={<ShopHome />} />
      <Route path="/admin" element={<AdminLayout />} />
      <Route path="/editPro/:id" element={<UpdateProduct />} />
      <Route path="/gemini" element={<Gemini />} />
      <Route path="/game" element={<Game/>}/>
    </Routes>
  );
}

export default Router;
