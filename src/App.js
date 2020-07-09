import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddImage from './components/addImage.component';
import AddArticle from './components/addArticle.component';
import Home from './components/home.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddArticle/>
      </div>
    );
  }
}

export default App;