import React from  'react';
import moment from 'moment';
//import momentJalaali from 'moment-jalaali';

import DateRangePickerWrapper from './DateRangePickerWrapper';

class MyDateRangePicker extends React.Component {
    render() {
        return(
            <DateRangePickerWrapper
                initialStartDate={moment().add(3,'months')}
                initialEndDate={moment().add(3,'months').add(10,'days')}
                showDefaultInputIcon />
        )
    }
}

export default MyDateRangePicker;