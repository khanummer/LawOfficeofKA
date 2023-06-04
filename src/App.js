import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header"
import Services from './Services/Services';
import Splash from './Splash/Splash';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Splash/>
        <Services/>
        
      </div>
    )
  }
}

export default App;
