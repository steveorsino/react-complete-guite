import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi Im a React App</h1>
        <Person name="fff" age="25"/>
        <Person name="ggg" age="123">And my hobbies include</Person>
        <Person name="qqq" age="16"/>
      </div>
    );
  }
}

export default App;
