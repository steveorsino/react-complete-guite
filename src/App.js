import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {name: 'Steve', age: 96},
      {name: 'fjksf', age: 22},
      {name: 'ajy', age: 852}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('wasClicked');
    //DONT DO THISthis.state.persons[0].name = 'STEVE';
    this.setState({
      persons: [
        {name: 'STEVE', age: 96},
        {name: 'fjksf', age: 22},
        {name: 'AAAA', age: 852}
      ] 
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi Im a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: none</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
