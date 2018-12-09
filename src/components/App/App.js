import React, { Component } from 'react';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Content from '../Content/Content';
import Supported from '../Supported/Supported';
import Comment from '../Comment/Comment';

import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={Feeling}></Route>
          <Route path="/2" component={Content}></Route>
          <Route path="/3" component={Supported}></Route>
          <Route path="/4" component={Comment}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
