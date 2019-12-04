import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import Foodbox from './components/FoodBox';
import shortid from 'shortid';


class App extends Component {

  state = {
    foods: foods
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        
        
        {
          this.state.foods.map( (food) => {
            return <Foodbox key={shortid.generate()} {...food} />
          })
        }
      </div>
    );
  }
}

export default App;
