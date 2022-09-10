import React from 'react';

export default class ProductCard extends React.Component{
  render(){
    return(
      <>
        <product-card>
          <img src={this.props.product.gallery[0]} />
          <span className="description">{this.props.product.name}</span>
          <b className="price">{this.#showPrice()}</b>
        </product-card>
      </>
    );
  }

  //////////// Methods
  #showPrice(){
    let symbol;
    let amount;
    let found = false;

    // Looking Match For Current Currency
    for(const price of this.props.product.prices){
      if(price.currency.label == this.props.getCurrentCurrency){
        symbol = price.currency.symbol;
        amount = price.amount;
        found = true;
        break;

      }

    }

    // ? No Match For Current Currency
    // Fallback To The First Currency In The Product Prices Array
    if(found == false){
      symbol = this.props.product.prices[0].currency.symbol;
      amount = this.props.product.prices[0].amount;

    }

    return `${symbol}${amount}`;

  }

}
