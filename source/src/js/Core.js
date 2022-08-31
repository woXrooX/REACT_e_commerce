import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


// Components
import Header from './components/Header';

// Routes
import All from './routes/All';
import Tech from './routes/Tech';
import Clothes from './routes/Clothes';
import Cart from './routes/Cart';
import Product from './routes/Product';


export default class Core extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="/all" element={<All />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Product" element={<Product />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}
