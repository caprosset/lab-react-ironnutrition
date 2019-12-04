import React, { Component } from 'react';

class AddFood extends Component {
    state = {
        name: '',
        calories: 0,
        image: '',
        quantity: 0
    }

    handleInput = e => {
        let { name, value } = e.target;
        // console.log(name, value);
        this.setState( { [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();

        // call the function from the parent that will add the new food object to the food array (that lives inside the parent state)
        this.props.addOneFood(this.state);

        // once it has been passed, clear the form by emptying the state:
         this.setState({
            name: '',
            calories: 0,
            image: '',
            quantity: 0
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label></label>
                    <input 
                        onChange={this.handleInput} 
                        type="text" 
                        name="name" 
                        value={this.state.name} 
                    />

                    <label></label>
                    <input 
                        onChange={this.handleInput} 
                        type="number" 
                        name="calories" 
                        value={this.state.calories} 
                    />

                    <label></label>
                    <input 
                        onChange={this.handleInput} 
                        type="text" 
                        name="image" 
                        value={this.state.image} 
                    />

                    <label></label>
                    <input 
                        onChange={this.handleInput} 
                        type="number" 
                        name="quantity" 
                        value={this.state.quantity} 
                    />

                    <button>Submit</button>
                </form>
            </div>
        )
    }

}

export default AddFood;