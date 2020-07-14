import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./styling/css/header.css"
import AddArticle from './components/addArticle.component';
import AddImage from './components/addImage.component';
import Home from './components/home.component';






class App extends Component {
  render() {
    return (
    <div>
        

        <nav class="nav">
                    <div class="container">
                        <div class="logo">
                            <a href="https://www.chantier.tn">Chantier.tn</a>
                        </div>
                        <div id="mainListDiv" class="main_list">
                            <ul class="navlinks">
                                <li>
                                  <a>
                                  <button onClick={() => scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500})}>Add a new article</button>
                                  </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        <section class="home" ></section>
        
        <Home/>
        <section className='violet' ref={(section) => { this.Violet = section; }}><AddArticle/></section>
        
    </div>
    );
  }
}

export default App;