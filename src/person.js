import React, { Component } from 'react';
import Person from './person.js';

class Person extends Component {
  constructor(props){
    super(props);
    this.state ={
      age:0
    }
    this.onInputChange= this.onInputChange.bind(this);
    this.increment= this.increment.bind(this);
    this.decrement= this.decrement.bind(this);

  }
  onInputChange(event){
    const newAge = Number(event.target.value);
    this.setState({
      age:newAge
    })
  }
  increment(event){
    const newAge= this.state.age +1;
    this.setState({
      age:newAge
    })
    console.log(newAge);
  }
  decrement(event){
    const newAge= this.state.age -1;
    this.setState({
      age:newAge
    })
    console.log("Decrement age:" + newAge);
  }
  render() {
    return (
      <div className="PersonInfo">
        <label>Person's Age</label>

        <input type="number" name="page" id="page" onChange={this.onInputChange}/>
         <br/>
        <button id="inc" onClick={this.increment}>Increment</button>
        <button id="dec" onClick={this.decrement}>Decrement</button>
        <p>Age is : {this.state.age}</p>
      </div>
    );
  }
}

export default Person;
