import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import BodyCont from "./Components/BodyCont/BodyCont"



//Class App statefull, smart, important, main component class App in the App

class App extends Component {

  handleKeyPress(target) {

    if(target.charCode === 13){
        console.log('radi ajde sad!!!!!!!!!!!!!!')
     // alert('Enter clicked!!!');    
    } else {console.log('nije')}
  }

  render() {

    return (
      <div className="App">
        <Header />
        <BodyCont handleKeyPress={this.handleKeyPress}
        />
      </div>
    )
  }
}




export default App;
