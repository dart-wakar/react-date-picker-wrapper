import React from 'react';
import moment from 'moment';
import SingleDatePickerWrapper from './SingleDatePickerWrapper';

class MySingleDatePicker extends React.Component {
    render() {
        return (
            <SingleDatePickerWrapper 
                initialDate={moment().add(3,'days')}
                showDefaultInputIcon
            />
        )
    }
}

export default MySingleDatePicker;