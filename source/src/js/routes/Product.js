// Problem With URL Parametrs!
// Since Hooks Won't Work With Class Based Components.
// I Am Lacking Of Knowledge/Experience To Find Pure React Way To Solve This Problem
// They Literally Do Not Provide Any Examples For Class Based Components
// v6.x -> https://reactrouter.com/en/v6.3.0/

// Option 1: Can Wrap It In A Function And Pass The Properties Along.
// Note! Only Class Components Allowed: https://docs.scandipwa.com/developing-with-scandi/override-mechanism/extending-javascript

// Option 2: Detect & Extract URL Parametrs From The Raw URL
// For Now I Am Sticking To This Option Till I Get Better Option OR Knowledge
// React Handles Most Of The Buggy Parts (Like No Params etc.) So IMO Safe To Use Little Custom Methods Here
// In Any Case (My Custom Solution Or Reacts Solution). Back-End Must Check Incoming Data Before Using It To Quering (More Than Only Quering) Database

// (Not) Option 3: Sit In "Update Waiting Room" From "react-router-dom" Team

// (Not) Option 4: Downgrading The "react-router-dom" To Use Working Solutions. Will Produce More Problems

import React from 'react';
import {Navigate} from 'react-router-dom';

// Tools
import fetchProduct from 'js/tools/fetchProduct';
import showPrice from 'js/tools/showPrice';

// Components
import GalleryBig from 'js/components/GalleryBig';

export default class Product extends React.Component{
  constructor(props){
    super(props);

    this.id = this.#extractIdFromURL();
    this.state = {
      product: undefined
    };

  }

  async componentDidMount(){
    this.setState({product: await fetchProduct(this.id)});

  }

  render(){
    return(
      <product-full>
        {this.state.product === null ? <Navigate to="/all" replace /> : ""}
        <GalleryBig gallery={this.state.product?.gallery} />
        <section className="details">
          <b className="brand">{this.state.product?.brand}</b>
          <section className="name">{this.state.product?.name}</section>
          <section className="size"></section>
          <section className="color"></section>
          <section className="price">{showPrice(this.state.product?.prices, this.props.getCurrentCurrency)}</section>
          <button className="addToCart">Add To Cart</button>
          <section className="description" dangerouslySetInnerHTML={{__html: this.state.product?.description}}></section>
        </section>
      </product-full>
    );
  }

  #extractIdFromURL(){
    const urlPathName = window.location.pathname;
    const forwardSlashIndex = urlPathName.lastIndexOf('/');

    // + 1 Is For Skipping Forward Slash Symbol
    const id = urlPathName.substring(forwardSlashIndex + 1);

    return id;

  }
}
