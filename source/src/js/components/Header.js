import React from 'react';

import Nav from './Nav';
import CurrencySwitcher from './CurrencySwitcher';
import CartOverlay from './CartOverlay';

export default class Header extends React.Component{
  render(){
    return(
        <header>
          <Nav />
          <CurrencySwitcher />
          <CartOverlay />
        </header>
    );
  }
}
