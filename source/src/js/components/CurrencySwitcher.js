import React from 'react';

// Globals
import {GLOBALS} from 'js/Globals';

// SVGs
import currenciesButton from 'svg/currenciesButton.svg';

export default class CurrencySwitcher extends React.Component{
  static #selectorPopUp = "body > div#root > header > section > currency-switcher > currencies-pop";
  static #selectorCurrenciesButtonp = "body > div#root > header > section > currency-switcher > img";

  render(){
    return(
      <currency-switcher>
        <span>{GLOBALS.currencies[this.props.getCurrentCurrency].symbol}</span>
        <img onClick={this.#toggleCurrenciesPop} src={currenciesButton} alt="Currencies Toggle Button" />
        <currencies-pop>
          {Object.entries(GLOBALS.currencies).map(([key, currency])=><button key={key} onClick={()=>this.#currencyButtonOnClick(currency.code)}>{currency.symbol} {currency.code}</button>)}
        </currencies-pop>
      </currency-switcher>
    );
  }

  //////////// Methods
  // Toggle Currencies Pop Up & Opening Button
  #toggleCurrenciesPop = ()=>{
    document.querySelector(CurrencySwitcher.#selectorPopUp).classList.toggle("active");

    // Rotate Back Currencies Button
    this.#currenciesButtonRotateBack();

  }

  #currencyButtonOnClick(currency){
    // Close Currencies Pop Up
    document.querySelector(CurrencySwitcher.#selectorPopUp).classList.remove("active");

    // Set The New Currency
    // No Validation! Back End Must Validate Before Updating Database.
    this.props.setCurrentCurrency(currency);

    // Rotate Back Currencies Button
    this.#currenciesButtonRotateBack();

  }

  // Rotate Back Currencies Button
  #currenciesButtonRotateBack = ()=>document.querySelector(CurrencySwitcher.#selectorCurrenciesButtonp).classList.remove("active");

  // #currencyButtonOnClick = (event)=>{
  //   this.#close();
  //   console.log(event.target.getAttribute("currency"));
  //
  // }

}
