import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FilesUploadComponent from './components/file-upp.component';
import AddArticle from './components/addArticle.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilesUploadComponent />
        <AddArticle/>
      </div>
    );
  }
}

export default App;