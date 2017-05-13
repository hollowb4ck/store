import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <ul role="nav" className="menu">
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contacts">Contacts</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
