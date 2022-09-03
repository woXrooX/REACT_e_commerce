import React from 'react';

export default class Cover extends React.Component{
  static selector = "body > div#root > cover-element";
  #element = null;

  componentDidMount(){
    this.#element = document.querySelector(Cover.selector);
    this.#onClickCover();

  }

  render(){return <cover-element></cover-element>;}

  //////////// Methods
  // On Cover Click Handler
  #onClickCover = ()=>{this.#element.onclick = ()=> this.#element.classList.remove("active");}

}
