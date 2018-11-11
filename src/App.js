import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    persons: [
      {name: 'Steve', age: 96},
      {name: 'fjksf', age: 22},
      {name: 'ajy', age: 852}
    ],
    otherState: 'some other value',
    username: 'defult-username'
  }

  switchNameHandler = (newName) => {
    // console.log('wasClicked');
    //DONT DO THISthis.state.persons[0].name = 'STEVE';
    this.setState({
      persons: [
        {name: newName, age: 96},
        {name: 'fjksf', age: 22},
        {name: 'AAAA', age: 852}
      ] 
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'STEVEOO', age: 96},
        {name: event.target.value, age: 22},
        {name: 'AAAA', age: 852}
      ] 
    })
  }

  userHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer'
};


    return (
      <div className="App">
        <h1>Hi Im a React App</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Steve4')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Steve3')}
          changed={this.nameChangedHandler}
          >Hobbies: none</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <UserInput name={this.state.username} change={this.userHandler}/>
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
