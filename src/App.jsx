import React, { Component } from 'react';
import './App.css';
import SubmitButton from './button';
import MySingleDatePicker from './MySingleDatePicker';
import MyDateRangePicker from './MyDateRangePicker';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Single Date Picker</h1>
          <MySingleDatePicker />
          <SubmitButton></SubmitButton>
        </div>
        <div>
          <h1>Date Range Picker</h1>
          <MyDateRangePicker />
        </div>
      </div>
    );
  }
}

export default App;
