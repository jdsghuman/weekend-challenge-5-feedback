import React, { Component } from 'react';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Content from '../Content/Content';
import Supported from '../Supported/Supported';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import Confirmation from '../Confirmation/Confirmation';
import Admin from '../Admin/Admin';

import { HashRouter as Router, Route } from 'react-router-dom';
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
          <Route path="/review" component={Review}></Route>
          <Route path="/confirmation" component={Confirmation}></Route>
          <Route path="/admin" component={Admin}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
