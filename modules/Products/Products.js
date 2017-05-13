import React from 'react'
import NavLink from '../NavLink'

export default React.createClass({

  render() {

    const data = this.props.route.data;
    const mass = data.map(function( item ){
          return (
            <div className="content">

              <NavLink className="link" to={"/products/"+item.id} key={item.id}>{item.title}</NavLink>

            </div>
          )
    })
    return (

            <div>
                <h1>Products</h1>
                {mass}
            </div>
    )
  }
})
