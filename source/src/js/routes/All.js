import React from 'react';

// Tools
import {fetchProducts} from 'js/tools/database';

export default class All extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      products: null
    };
  }

  async componentDidMount(){
    // Fetching Data And Triggering Re-Render
    this.setState({products: await fetchProducts("all")});

  }

  render(){
    return(
      <section>
        <div>{this.state.products === null? "No Data Yet" : this.state.products[0].brand}</div>
      </section>
    );
  }

  //////////// Methods
  

}
