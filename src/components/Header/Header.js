import React from 'react';
import './Header.css';

import iconPng from '../../assets/icon.png';

export default () => (
  <section className="Header__parent">
    <div className="Header__left">
      <img src={ iconPng } width="28px" alt="" />
      <h2>Marble</h2>
    </div>

    <div className="Header__right">
      <button>Products</button>
      <button>Cart</button>
      <button id="Header__btn-about-us">About Us</button>
    </div>
  </section>
)