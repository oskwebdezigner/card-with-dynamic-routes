import React ,{useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Views/Home';
import SingleProduct from './Views/SingleProduct';
import ScrollToTop from './Components/ScrollTop/ScrollTop';

const App = () => {

  return (
    <BrowserRouter basename='card-with-dynamic-routes'>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<SingleProduct  />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App