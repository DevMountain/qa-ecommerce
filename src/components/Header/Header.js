import React from 'react';
import './Header.css';

import iconPng from '../../assets/icon.png';

export default () => (
  <section className="Header__parent">
    <img src={ iconPng } />
    <span>Header</span>
  </section>
)