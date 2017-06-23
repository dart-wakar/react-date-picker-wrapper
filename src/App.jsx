import React, { Component } from 'react';
import './App.css';
import SubmitButton from './button';
import MySingleDatePicker from './MySingleDatePicker';

class App extends Component {
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <MySingleDatePicker></MySingleDatePicker>
        <SubmitButton></SubmitButton>
      </div>
    );
  }
}

export default App;
