import React from 'react';

// Components
import ProductCard from 'js/components/ProductCard';

// Tools
import fetchProducts from 'js/tools/fetchProducts';
import productCards from 'js/tools/productCards';

export default class Tech extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      products: null
    };
  }

  async componentDidMount(){
    this.setState({products: await fetchProducts("tech")});

  }

  render(){
    return(
      <products-tech>
        <h1>Tech</h1>
        {productCards(this.state.products, this.props.getCurrentCurrency)}
      </products-tech>
    );
  }
}
