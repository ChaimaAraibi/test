import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddArticle from './components/addArticle.component';
import Home from './components/home.component';
import AddImage from './components/addImage.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button>add a new article</button>
        <Home/>
        <AddArticle/>
        <AddImage/>
      </div>
    );
  }
}

export default App;