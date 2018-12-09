import React, { Component } from 'react';
import Stars from '@material-ui/icons/Stars';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="container">
          <Stars className="star-header" />
          <h1 className="App-title">Feedback</h1>
        </div>
      </header>
    );
  }
}

export default Header;