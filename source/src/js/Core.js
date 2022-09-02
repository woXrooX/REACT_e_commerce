import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// Globals
import {GLOBALS} from 'js/Globals';

// Components
import Header from 'js/components/Header';

// Routes
import All from 'js/routes/All';
import Tech from 'js/routes/Tech';
import Clothes from 'js/routes/Clothes';
import Cart from 'js/routes/Cart';
import Product from 'js/routes/Product';

export default class Core extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentCurrency: GLOBALS.currencies["USD"].code,
      products: null

    }

  }

  render(){
    return(
      <BrowserRouter>
        <Header
          setCurrentCurrency={this.setCurrentCurrency}
          getCurrentCurrency={this.#getCurrentCurrency}
        />
        <main>
          <Routes>
            <Route path="*" element={
              <Navigate to="/All" replace />
            }/>
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

  //////////// Core APIs
  /// Setters
  setCurrentCurrency = currency => this.setState({currentCurrency: currency});

  /// Getters
  // getCurrentCurrency = ()=> this.state.currentCurrency;
  get #getCurrentCurrency(){return this.state.currentCurrency;}


}
