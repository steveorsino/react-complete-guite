import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    persons: [
      {id: '0', name: 'Steve', age: 96},
      {id: '1', name: 'fjksf', age: 22},
      {id: '2', name: 'ajy', age: 852}
    ],
    otherState: 'some other value',
    username: 'defult-username',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); //works. es5  or...
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //const person = Object.assign({},this.state.persons[personIndex]);  //es5
    const person =  {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  userHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  togglePersonsHandler = () => {
    const doesShow =  this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons){
      persons = (
          <div>
          {this.state.persons.map((person, index) =>{
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            )
          })}
          </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi Im a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Person
        </button>
        {persons}
        <UserInput name={this.state.username} change={this.userHandler}/>
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;