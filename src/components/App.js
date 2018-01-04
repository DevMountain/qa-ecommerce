import React, { Component } from 'react';
import './App.css';

// Routing
import router from '../utils/router';

// Header
import Header from './Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App__parent">
        <Header />

        <div className="App__content-container">
          <section className="App__content">
            { router }
          </section>
        </div>
      </div>
    );
  }
}

export default App;
