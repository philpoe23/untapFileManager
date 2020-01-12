import React, { Component } from 'react';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

class DateRangePickerOne extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      datePickerInternational: null,
      locale: 'ja',
      dateRangePicker: {
        selection: {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection',
        },
      },
    };
  }

  handleChange(which, payload) {
    console.log(which, payload);
    this.setState({
      [which]: payload,
    });
  }

  handleRangeChange(which, payload) {
    console.log(which, payload);
    this.setState({
      [which]: {
        ...this.state[which],
        ...payload,
      },
    });
  }
  render() {
    return <DateRangePicker onChange={this.handleRangeChange.bind(this, 'dateRangePicker')} showSelectionPreview={true} moveRangeOnFirstSelection={false} className={'PreviewArea'} months={2} ranges={[this.state.dateRangePicker.selection]} direction="horizontal" />;
  }
}
export { DateRangePickerOne };
