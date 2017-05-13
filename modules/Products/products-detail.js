import React from 'react'
import { browserHistory } from 'react-router'
import NavLink from '../NavLink'


export default React.createClass({
  handleRedirect(){
      browserHistory.push('/products');
  },

  render() {
    const newsData = this.props.route.data;
    const id = this.props.params.id;
    const newsMass = newsData.filter(function( item ){
                if( item.id == id ){
                  return item;
                }
    });
    const dataMass = newsData.map(function(item){
          return (
            <div className="content">

              <NavLink className="link" to={"/products/"+item.id+"/"+item.name} key={item.id}>{item.name}</NavLink>

            </div>
          )
    });
    return (
      <div>
        <button onClick={this.handleRedirect.bind(this)}>back</button>
          {dataMass}
      </div>
    )
  }
})
