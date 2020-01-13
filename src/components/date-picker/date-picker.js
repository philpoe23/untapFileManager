import React, { Component } from 'react';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Button } from 'antd';
import { ItemWraper, ButtonGroup } from './date-picker-style';
class DateRangePickerOne extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      datePickerInternational: null,
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
    const start = this.state.dateRangePicker.selection.startDate.toString().split(' ');
    const end = this.state.dateRangePicker.selection.endDate.toString().split(' ');
    return (
      <ItemWraper>
        <DateRangePicker onChange={this.handleRangeChange.bind(this, 'dateRangePicker')} showSelectionPreview={true} moveRangeOnFirstSelection={false} className={'PreviewArea'} months={2} ranges={[this.state.dateRangePicker.selection]} direction="horizontal" />;
        <ButtonGroup>
          <p>{`${start[1]} ${start[2]} ${start[3]} - ${end[1]} ${end[2]} ${end[3]}`}</p>
          <Button type="primary">Apply</Button>
          <Button>Cancel</Button>
        </ButtonGroup>
      </ItemWraper>
    );
  }
}
export { DateRangePickerOne };
