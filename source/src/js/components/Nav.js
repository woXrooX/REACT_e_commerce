import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends React.Component{
  render(){
    return(
        <nav>
          <NavLink className={({isActive})=>(isActive?"active":"")} to="/all">All</NavLink>
          <NavLink className={({isActive})=>(isActive?"active":"")} to="/tech">Tech</NavLink>
          <NavLink className={({isActive})=>(isActive?"active":"")} to="/clothes">Clothes</NavLink>
        </nav>
    );
  }
}
