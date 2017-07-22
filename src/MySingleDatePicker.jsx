import React from 'react';
import moment from 'moment';
import SingleDatePickerWrapper from './SingleDatePickerWrapper';

class MySingleDatePicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: moment().add(3,'days')
        }
        this.handleDateChanged = this.handleDateChanged.bind(this);
    }

    handleDateChanged(date) {
        this.setState({date: date});
        this.props.onDateChange(date);
    }

    render() {
        return (
            <SingleDatePickerWrapper 
                initialDate={moment().add(3,'days')}
                showDefaultInputIcon
                dateChanged={this.handleDateChanged}
            />
        )
    }
}

export default MySingleDatePicker;