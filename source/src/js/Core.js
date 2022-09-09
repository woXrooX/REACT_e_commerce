import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// Globals
import {GLOBALS} from 'js/Globals';

// Components
import Header from 'js/components/Header';
import Cover from 'js/components/Cover';

// Routes
import All from 'js/routes/All';
import Tech from 'js/routes/Tech';
import Clothes from 'js/routes/Clothes';
import Cart from 'js/routes/Cart';
import Product from 'js/routes/Product';

export default class Core extends React.Component{
  constructor(props){
    super(props);

    // In Production "this.state" Will Be Changed To Real Back-End Data And Will Be Kept Alive Using Sessions.
    // Followings Are All Mock Data!
    this.state = {
      currentCurrency: GLOBALS.currencies["USD"].code,
      cart: [],
      cartItemsCount: 12

    };

  }

  render(){
    return(
      <BrowserRouter>
        <Header
          setCurrentCurrency={this.#setCurrentCurrency}
          getCurrentCurrency={this.#getCurrentCurrency}
          getCartItemsCount={this.#getCartItemsCount}
        />
        <Cover />
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
  #setCurrentCurrency = currency => this.setState({currentCurrency: currency});

  #setCartItemsCount = count => this.setState({cartItemsCount: count});

  /// Getters
  // getCurrentCurrency = ()=> this.state.currentCurrency;
  get #getCurrentCurrency(){return this.state.currentCurrency;}

  get #getCartItemsCount(){return this.state.cartItemsCount;}


}
