import React, { Component } from 'react';
import './App.css';

// Routing
import router from '../utils/router';

// Header
import Header from './Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        { router }
      </div>
    );
  }
}

export default App;
