import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import VComponent from './ValidationComponent/ValidationComponent';
import CComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    persons: [
      {id: '0', name: 'Steve', age: 96},
      {id: '1', name: 'fjksf', age: 22},
      {id: '2', name: 'ajy', age: 852}
    ],
    otherState: 'some other value',
    username: 'defult-username',
    showPersons: false,
    chars: [],
    numChars: 0
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
    });
  }

  textInputHandler = (event) => {
    this.setState({
      chars: [...event.target.value,],
      numChars: event.target.value.length
    })
  }

  togglePersonsHandler = () => {
    const doesShow =  this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  
  clickCharHandler = (idx) => {
    let newChars = this.state.chars;
    newChars.splice(idx,1);
    this.setState({chars:newChars})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
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
      style.backgroundColor = 'red';
    }

    let charString = null;
    if (this.state.numChars > 0){ 
      charString = (
        <div>
        {this.state.chars.map( (curChar,index) => {
          return (
            <CComponent
              click={() => this.clickCharHandler(index)}
              dChar={curChar}
              idx={index}
            />
          )
        })}
        </div>
      );
    }
    let classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1>Hi Im a React App</h1>
        <p className={classes.join(' ')}>Learning</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Person
        </button>
        {persons}
        <UserInput name={this.state.username} change={this.userHandler}/>
        <UserOutput username={this.state.username} />
        <input type="text" value={this.state.chars.join('')} onChange={this.textInputHandler}/>
        <p>{this.state.numChars}</p>
        <VComponent size={this.state.numChars} />
        {charString}
      </div>
    );
  }
}

export default App;