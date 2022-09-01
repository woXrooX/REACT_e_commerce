import React from 'react';

import cart from 'svg/cart.svg';

export default class CartOverlay extends React.Component{
  render(){
    return(
      <cart-overlay>
        <img src={cart} alt="cart" />
        <cart-pop>
        </cart-pop>
      </cart-overlay>
    );
  }
}
