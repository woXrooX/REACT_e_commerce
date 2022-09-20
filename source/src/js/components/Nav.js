import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends React.Component{
  render(){
    return(
        <nav>
          <NavLink className={this.#isLinkActive()} to="/all">All</NavLink>
          <NavLink className={this.#isLinkActive()} to="/tech">Tech</NavLink>
          <NavLink className={this.#isLinkActive()} to="/clothes">Clothes</NavLink>
        </nav>
    );
  }


  //////////// Methods
  // <NavLink className={({isActive})=>(isActive?"active":"")} to="/clothes">Clothes</NavLink>
  #isLinkActive(isActive){
    return isActive ? "active" : "";
  }

}
