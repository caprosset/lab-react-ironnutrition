import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import Foodbox from './components/FoodBox';
import shortid from 'shortid';
import AddFood from './components/AddFood';


class App extends Component {

  state = {
    foods: foods,
    showForm: false
  }

  toggleButton = () => {
    this.setState({ showForm: !this.state.showForm });
  }

  addFood = foodObj => {
    // add the new food to the foods array
    const updatedFoods = [foodObj, ...this.state.foods];

    // and set the new state
    this.setState({ foods: updatedFoods });

    // once food has been updated, hide the form
    this.state.showForm = false;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <button onClick={this.toggleButton}>
        Add Food
        </button>

        {
          this.state.showForm ? 
            <AddFood addOneFood={this.addFood} />
          :
            null
        }
        
        {
          this.state.foods.map( (food) => {
            return <Foodbox 
              key={shortid.generate()}  
              {...food}  
            /> 
            //{...food} is the same than foodObj={food} and then destructuring inside the child component doing {foodObj} = props
          })
        }
      </div>
    );
  }
}

export default App;
