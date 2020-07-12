import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./styling/css/header.css"
import AddArticle from './components/addArticle.component';
import AddImage from './components/addImage.component';
import Home from './components/home.component';

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };




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
        <AddImage/>
    </div>
    );
  }
}

export default App;