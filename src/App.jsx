import React, { Component } from 'react';
import './App.css';
import SubmitButton from './button';
import MySingleDatePicker from './MySingleDatePicker';
import MyDateRangePicker from './MyDateRangePicker';
import moment from 'moment';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: moment().add(3,'days')
    }
    this.handleChangeInDate = this.handleChangeInDate.bind(this);
  }

  handleChangeInDate(date) {
    this.setState({date: date});
  }

  render() {
    return (
      <div>
        <div>
          <h1>Single Date Picker</h1>
          <MySingleDatePicker onDateChange={this.handleChangeInDate}/>
          <SubmitButton date={this.state.date}></SubmitButton>
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
