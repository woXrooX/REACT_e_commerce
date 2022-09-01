import React from 'react';

import Nav from 'js/components/Nav';
import CurrencySwitcher from 'js/components/CurrencySwitcher';
import CartOverlay from 'js/components/CartOverlay';

import brand from 'svg/brand.svg';

export default class Header extends React.Component{
  render(){
    return(
        <header>
          <Nav />
          <img src={brand} alt="Brand" />
          <section>
            <CurrencySwitcher />
            <CartOverlay />
          </section>
        </header>
    );
  }
}
