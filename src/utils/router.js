import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from '../components/Products/Products';
import Cart from '../components/Cart/Cart';
import AboutUs from '../components/AboutUs/AboutUs';

export default (
  <Switch>
    <Route exact path="/" component={ Products } />
    <Route path="/cart" component={ Cart } />
    <Route path="/about-us" component={ AboutUs } />
  </Switch>
)