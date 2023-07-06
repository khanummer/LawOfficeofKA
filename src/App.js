import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header"
import Services from './Services/Services';
import Splash from './Splash/Splash';
import MTT from './MTT/MTT';
import Footer from './Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Splash/>
        <Services/>
        {/* <MTT/> */}
        <Footer/>
      </div>
    )
  }
}

export default App;
