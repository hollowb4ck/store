import React from 'react'
import { browserHistory } from 'react-router';


export default React.createClass({
  handleRedirect(){
      browserHistory.push('/products/:id');
  },

  render() {
    const newsData = this.props.route.data;
    const name = this.props.params.name;
    const newsMass = newsData.filter(function( item ){
                if( item.name == name ){
                  return item;
                }
    });
    return (
      <div>
          <button onClick={this.handleRedirect.bind(this)}>back</button>
          <img className="img" src={newsMass[0].urlB}/>
          <h3>{newsMass[0].title}</h3>
          <div className="discr" >{newsMass[0].description}</div>
      </div>
    )
  }
})
