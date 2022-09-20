import React from 'react';
import {NavLink} from 'react-router-dom';

// SVGs
import addToCart from 'svg/addToCart.svg';

// Tools
import showPrice from 'js/tools/showPrice';



export default class ProductCard extends React.Component{
  render(){
    return(
      <NavLink to={"/product/" + this.props.product.id}>
        <div>
          <img className="addToCart" onClick={this.#addToCart()} src={addToCart} alt="Add To Cart" />
          <img className="gallery" src={this.props.product.gallery[0]} alt="Product" />
        </div>
        <span className="description">{this.props.product.name}</span>
        <b className="price">{showPrice(this.props.product.prices, this.props.getCurrentCurrency)}</b>
      </NavLink>
    );
  }

  //////////// Methods
  #addToCart = ()=> (event)=>{
    event.preventDefault();

  }

}
