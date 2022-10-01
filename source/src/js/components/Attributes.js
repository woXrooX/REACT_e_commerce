import React from 'react';

export default class Attributes extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      sizes: undefined,
      capacities: undefined,
      colors: undefined
    };

  }

  componentDidMount(){
    this.#arrangeAttributes();

  }

  componentDidUpdate(prevProps){
    if(this.props.attributes !== prevProps.attributes) this.#arrangeAttributes();

  }

  render(){
    return(
      <product-attributes>
        {this.#sizeButtons()}
        {this.#capacityButtons()}
        {this.#colorButtons()}
      </product-attributes>
    );
  }

  #arrangeAttributes(){
    if(this.props.attributes === null || this.props.attributes === undefined) return;

    console.log(this.props.attributes);

    for(const attribute of this.props.attributes){
      if(attribute.id === "Size")     this.setState({sizes: attribute});
      if(attribute.id === "Capacity") this.setState({capacities: attribute});
      if(attribute.id === "Color")    this.setState({colors: attribute});

    }


  }

  // Sizes
  #sizeButtons(){
    if(this.state.sizes === null || this.state.sizes === undefined) return;

    let buttons = [];

    for(const value of this.state.sizes.items){
      buttons.push(<button key={value.id}>{value.displayValue}</button>);

    }

    return (
      <>
        <b className="size">SIZE:</b>
        <attribute-sizes>{buttons}</attribute-sizes>
      </>
    );

  }

  // Capacities
  #capacityButtons(){
    if(this.state.capacities === null || this.state.capacities === undefined) return;

    let buttons = [];

    for(const value of this.state.capacities.items){
      buttons.push(
        <button key={value.id}>{value.displayValue}</button>
      );

    }

    return (
      <>
        <b className="size">CAPACITY:</b>
        <attribute-capacities>{buttons}</attribute-capacities>
      </>
    );

  }

  // Colors
  #colorButtons(){
    if(this.state.colors === null || this.state.colors === undefined) return;

    let buttons = [];

    for(const value of this.state.colors.items){
      const style = {
        backgroundColor: value.value,
        borderColor: value.value === "#FFFFFF"?"black" : value.value

      }

      buttons.push(<button style={style} key={value.id}></button>);

    }

    return (
      <>
        <b className="size">COLOR:</b>
        <attribute-colors>{buttons}</attribute-colors>
      </>
    );

  }

}
