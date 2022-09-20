import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// Globals
// Tools
import fetchCurrencies from 'js/tools/fetchCurrencies';

// SVGs
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

    this.state = {
      // Initing With USD & $
      currentCurrency: {
        label: "USD",
        symbol: "$"
      },
      currencies: null,
      cart: [],
      cartItemsCount: 12

    };

  }

  async componentDidMount(){
    this.setState({currencies: await fetchCurrencies()});

  }

  render(){
    return(
      <BrowserRouter>

        <Header
          getCurrentCurrency={this.#getCurrentCurrency}
          getCurrencies={this.#getCurrencies}
          getCartItemsCount={this.#getCartItemsCount}
          setCurrentCurrency={this.#setCurrentCurrency}
        />

        <Cover />

        <Routes>

          <Route path="*" element={
            <Navigate to="/all" replace />
          }/>

          <Route path="/all" element={<All getCurrentCurrency={this.#getCurrentCurrency} />} />
          <Route path="/tech" element={<Tech getCurrentCurrency={this.#getCurrentCurrency} />} />
          <Route path="/clothes" element={<Clothes getCurrentCurrency={this.#getCurrentCurrency} />} />

          <Route path="/Cart" element={<Cart />} />
          <Route path="/Product/:id" element={<Product getCurrentCurrency={this.#getCurrentCurrency} />} />

        </Routes>

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

  get #getCurrencies(){return this.state.currencies;}

  get #getCartItemsCount(){return this.state.cartItemsCount;}


}
