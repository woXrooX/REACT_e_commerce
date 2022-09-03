import React from 'react';

// Components
import Cover from 'js/components/Cover';

// SVGs
import cart from 'svg/cart.svg';

export default class CartOverlay extends React.Component{
  static #selectorButton = "body > div#root > header > section > cart-overlay > span > img";
  static #selectorPopUp = "body > div#root > header > section > cart-overlay > cart-pop-up";

  #elementButton = null;
  #elementPopUp = null;

  componentDidMount(){
    this.#elementButton = document.querySelector(CartOverlay.#selectorButton);
    this.#elementPopUp = document.querySelector(CartOverlay.#selectorPopUp);

    // Init Event Listener For Outside Click Detection
    this.#outsideClick();

  }

  render(){
    return(
      <cart-overlay>
        <span>
          <img onClick={this.#toggleCartPop} src={cart} alt="cart" />
          <span style={{display: this.props.getCartItemsCount === 0? "none": "grid"}}>{this.props.getCartItemsCount}</span>
        </span>
        <cart-pop-up>
          Dummy Text
        </cart-pop-up>
      </cart-overlay>
    );
  }

  //////////// Methods
  // Cart Pop Up Toggler
  #toggleCartPop = ()=> {
    this.#elementPopUp.classList.toggle("active");

    // Toggle Cover
    document.querySelector(Cover.selector).classList.toggle("active");

  }

  // Close Currencies Pop Up
  #closePopUp = ()=> {
    this.#elementPopUp.classList.remove("active");

    // Deactivate Cover
    document.querySelector(Cover.selector).classList.remove("active");

  }

  // Close Pop Up When Clicked Outside
  #outsideClick = ()=>{
    window.addEventListener("click", (event)=>{
      // Check If Pop Up Is Active
      if(!this.#elementPopUp.classList.contains("active")) return;

      // Button Funtionality Already Established No Need To Proceed.
      if(event.target === this.#elementButton) return;

      if(!this.#elementPopUp.contains(event.target)) this.#closePopUp();

    });

  }

}
