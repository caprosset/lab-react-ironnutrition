import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import Foodbox from './components/FoodBox';
import shortid from 'shortid';
import AddFood from './components/AddFood';
import Search from './components/Search';


class App extends Component {

  state = {
    foods: foods,
    foodsFiltered: foods,
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

  filterFoods = searchTerm => {
    console.log('search term', searchTerm);

    // apply lower case to the search term
    const lowerSearchTerm = searchTerm.toLowerCase();
    
    const filteredFoods = this.state.foods.filter( food => {
      // apply lower case to the food name
      const foodName = food.name.toLowerCase();
      // filter only the foods that include the search term in their name
      return foodName.includes(lowerSearchTerm);
    })
    this.setState({ foodsFiltered: filteredFoods })
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

        <Search filterByTerm={this.filterFoods} />

        {
          this.state.showForm ? 
            <AddFood addOneFood={this.addFood} />
          :
            null
        }
        
        {
          this.state.foodsFiltered.map( (food) => {
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
