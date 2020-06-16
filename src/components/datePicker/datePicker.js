import React, { Component } from 'react';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Button, DatePicker } from 'antd';
import { ItemWraper, ButtonGroup } from './style';

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
        <DateRangePicker
          onChange={this.handleRangeChange.bind(this, 'dateRangePicker')}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          className={'PreviewArea'}
          months={2}
          ranges={[this.state.dateRangePicker.selection]}
          direction="horizontal"
        />

        <ButtonGroup>
          <p>{`${start[1]} ${start[2]} ${start[3]} - ${end[1]} ${end[2]} ${end[3]}`}</p>
          <Button type="primary">Apply</Button>
          <Button>Cancel</Button>
        </ButtonGroup>
      </ItemWraper>
    );
  }
}

class CustomDateRange extends React.Component {
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  disabledStartDate = startValue => {
    const { endValue } = this.state;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = endValue => {
    const { startValue } = this.state;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onStartChange = value => {
    this.onChange('startValue', value);
  };

  onEndChange = value => {
    this.onChange('endValue', value);
  };

  handleStartOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = open => {
    this.setState({ endOpen: open });
  };

  render() {
    const { startValue, endValue, endOpen } = this.state;

    return (
      <div>
        <DatePicker
          disabledDate={this.disabledStartDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={startValue}
          placeholder="Start"
          onChange={this.onStartChange}
          onOpenChange={this.handleStartOpenChange} style={{margin: "5px"}}
        />

        <DatePicker
          disabledDate={this.disabledEndDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={endValue}
          placeholder="End"
          onChange={this.onEndChange}
          open={endOpen}
          onOpenChange={this.handleEndOpenChange} style={{margin: "5px"}}
        />
      </div>
    );
  }
}

export { DateRangePickerOne, CustomDateRange };
