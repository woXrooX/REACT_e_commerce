import React from 'react';

// Globals
import {GLOBALS} from 'js/Globals';

// SVGs
import currenciesButton from 'svg/currenciesButton.svg';

export default class CurrencySwitcher extends React.Component{
  static #selectorPopUp = "body > div#root > header > section > currency-switcher > currencies-pop-up";
  static #selectorArrowButton = "body > div#root > header > section > currency-switcher > img";

  // Avoiding DOM Build Race
  componentDidMount(){
    this.elementArrowButton = document.querySelector(CurrencySwitcher.#selectorArrowButton);
    this.elementPopUp = document.querySelector(CurrencySwitcher.#selectorPopUp);

  }

  render(){
    return(
      <currency-switcher>
        <span>{GLOBALS.currencies[this.props.getCurrentCurrency].symbol}</span>
        <img onClick={this.#toggleCurrenciesPop} src={currenciesButton} alt="Currencies Toggle Button" />
        <currencies-pop-up>
          {
            Object.entries(GLOBALS.currencies).map(([key, currency])=>
              <button
                key={key}
                onClick={()=>this.#currencyButtonOnClick(currency.code)}
                className={this.props.getCurrentCurrency === currency.code?"active":""}
              >
                {currency.symbol} {currency.code}
              </button>)
          }
        </currencies-pop-up>
      </currency-switcher>
    );
  }

  //////////// Methods
  // Toggle Currencies Pop Up & Opening Button
  #toggleCurrenciesPop = ()=>{
    this.elementPopUp.classList.toggle("active");

    this.#rotateArrowButton();

    // Init Event Listener For Outside Click Detection
    this.#outsideClick();

  }

  // On Click Currency Button
  #currencyButtonOnClick = (currency)=>{
    this.#closePopUp();
    this.#rotateArrowButton();

    // Set The New Currency
    // No Validation! Back End Must Validate Before Updating Database.
    this.props.setCurrentCurrency(currency);

  }

  // Close Currencies Pop Up
  #closePopUp = ()=> this.elementPopUp.classList.remove("active");

  // Rotate Arrow Button
  #rotateArrowButton = ()=> this.elementArrowButton.classList.toggle("active");

  // Close Pop Up When Clicked Outside
  #outsideClick = ()=>{
    window.onclick = (event)=>{
      // Check If Pop Up Is Active
      if(!this.elementPopUp.classList.contains("active")) return;

      // Arrow Button Funtionality Already Established No Need To Proceed.
      if(event.target === this.elementArrowButton) return;

      if(!this.elementPopUp.contains(event.target)){
        this.#rotateArrowButton();
        this.#closePopUp();

      }

    };
  }

}
