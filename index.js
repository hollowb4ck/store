import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Products from './modules/Products/Products'
import ProductDetail from './modules/Products/products-detail'
import ProductParam from './modules/Products/products-param'
import About from './modules/About/About'
import SportsDetail from './modules/About/sports-detail'
import Contacts from './modules/Contacts/Contacts'
import WorldDetail from './modules/Contacts/world-detail'


const dataNews = [
  {
    id:"veno",
    title:"Lorem ipsum dolor sit amet",
    name:"Lorem",
    urlS:"http://savepic.ru/13777430.jpg",
    urlB:"http://savepic.ru/13811241.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id:2,
    title:"Lorem ipsum dolor sit amet",
    name:"Lorem",
    urlS:"http://savepic.ru/13777430.jpg",
    urlB:"http://savepic.ru/13811241.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id:3,
    title:"Lorem ipsum dolor sit amet",
    name:"Lorem",
    urlS:"http://savepic.ru/13777430.jpg",
    urlB:"http://savepic.ru/13811241.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id:4,
    title:"Lorem ipsum dolor sit amet",
    name:"Lorem",
    urlS:"http://savepic.ru/13777430.jpg",
    urlB:"http://savepic.ru/13811241.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },

]


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      <Route path="/products" component={Products} data={dataNews} />
      <Route path="/about" component={About}/>
     <Route path="/contacts" component={Contacts} />
     <Route path="/products/:id" component={ProductDetail} data={dataNews}/>
    </Route>

        <Route path="/products/:id/:name" component={ProductParam} data={dataNews}/>
  </Router>
), document.getElementById('app'))
