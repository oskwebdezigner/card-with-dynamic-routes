import React ,{useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Views/Home';
import SingleProduct from './Views/SingleProduct';
import ScrollToTop from './Components/ScrollTop/ScrollTop';

const App = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="card-with-dynamic-routes/" element={<Home />} />
        <Route path="card-with-dynamic-routes/products/:id" element={<SingleProduct  />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App