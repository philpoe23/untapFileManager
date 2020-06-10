import React from 'react';
import { Bar, HorizontalBar, Line, Pie, Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const ChartjsBarChart = props => {
  const { labels, datasets, options, height } = props;
  const data = {
    datasets,
    labels,
  };
  return <Bar data={data} height={height} options={options} />;
};

ChartjsBarChart.defaultProps = {
  height: 200,
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

  datasets: [
    {
      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
      backgroundColor: '#001737',
    },
    {
      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
      backgroundColor: '#1ce1ac',
    },
  ],

  options: {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            color: '#e5e9f2',
          },
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: '#182b49',
            max: 80,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          barPercentage: 0.6,
          ticks: {
            beginAtZero: true,
            fontSize: 11,
            fontColor: '#182b49',
          },
        },
      ],
    },
  },
};

ChartjsBarChart.propTypes = {
  labels: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
  datasets: PropTypes.arrayOf(PropTypes.object),
};

const ChartjsHorizontalChart = props => {
  const { labels, datasets, options, height } = props;
  const data = {
    datasets,
    labels,
  };
  return <HorizontalBar data={data} height={height} options={options} />;
};

ChartjsHorizontalChart.defaultProps = {
  height: 200,
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
      backgroundColor: '#001737',
    },
    {
      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
      backgroundColor: '#1ce1ac',
    },
  ],

  options: {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: '#182b49',
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            color: '#e5e9f2',
          },
          barPercentage: 0.6,
          ticks: {
            beginAtZero: true,
            fontSize: 11,
            fontColor: '#182b49',
            max: 100,
          },
        },
      ],
    },
  },
};

ChartjsHorizontalChart.propTypes = {
  height: PropTypes.number.isRequired,
  labels: PropTypes.array.isRequired,
  datasets: PropTypes.arrayOf(PropTypes.object),
};

const ChartjsStackedChart = props => {
  const { labels, datasets, options, height } = props;
  const data = {
    datasets,
    labels,
  };
  return <Bar data={data} height={height} options={options} />;
};

ChartjsStackedChart.defaultProps = {
  height: 200,
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

  datasets: [
    {
      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
      backgroundColor: '#001737',
    },
    {
      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
      backgroundColor: '#1ce1ac',
    },
  ],

  options: {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          gridLines: {
            color: '#e5e9f2',
          },
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: '#182b49',
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
          },
          barPercentage: 0.6,
          ticks: {
            beginAtZero: true,
            fontSize: 11,
            fontColor: '#182b49',
          },
        },
      ],
    },
  },
};

ChartjsStackedChart.propTypes = {
  height: PropTypes.number,
  labels: PropTypes.array,
  datasets: PropTypes.arrayOf(PropTypes.object),
};

const ChartjsLineChart = props => {
  const { labels, datasets, options, height, layout, width } = props;
  const data = {
    labels,
    datasets,
  };
  return <Line width={width} data={data} height={height} options={{ ...options, ...layout }} />;
};

ChartjsLineChart.defaultProps = {
  height: 415,
  width: null,
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
      borderColor: '#001737',
      borderWidth: 1,
      fill: false,
    },
    {
      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
      borderColor: '#1ce1ac',
      borderWidth: 1,
      fill: false,
    },
  ],

  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: '-10',
        right: 0,
        top: 0,
        bottom: '-10',
      },
    },
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            color: '#e5e9f2',
          },
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            max: 80,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            beginAtZero: true,
            fontSize: 11,
          },
        },
      ],
    },
  },
};

ChartjsLineChart.propTypes = {
  height: PropTypes.number.isRequired,
  labels: PropTypes.array.isRequired,
  datasets: PropTypes.arrayOf(PropTypes.object),
  layout: PropTypes.object,
  width: PropTypes.number,
};

const ChartjsAreaChart = props => {
  const { labels, datasets, options, height, layout } = props;
  const data = {
    labels,
    datasets,
  };
  return <Line data={data} height={height} options={{ ...options, ...layout }} />;
};

ChartjsAreaChart.defaultProps = {
  height: 200,
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
      borderColor: '#001737',
      borderWidth: 1,
      fill: true,
      backgroundColor: '#00173750',
    },
    {
      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
      borderColor: '#1ce1ac',
      borderWidth: 1,
      fill: true,
      backgroundColor: '#1ce1ac50',
    },
  ],
  options: {
    maintainAspectRatio: true,
    layout: {
      padding: {
        left: '-10',
        right: 0,
        top: 0,
        bottom: '-10',
      },
    },
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
            color: '#e5e9f2',
          },
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            display: false,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
          },

          ticks: {
            beginAtZero: true,
            fontSize: 11,
            display: false,
          },
        },
      ],
    },
  },
};

ChartjsAreaChart.propTypes = {
  height: PropTypes.number,
  labels: PropTypes.array,
  datasets: PropTypes.arrayOf(PropTypes.object),
  layout: PropTypes.object,
};

const ChartjsBarChartTransparent = props => {
  const { labels, datasets, options, height, layout } = props;
  const data = {
    labels,
    datasets,
  };
  return <Bar data={data} height={height} options={{ ...options, ...layout }} />;
};

ChartjsBarChartTransparent.defaultProps = {
  height: 200,
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
      backgroundColor: 'rgba(0,23,55, .5)',
      label: 'Profit',
    },
    {
      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
      backgroundColor: 'rgba(28,225,172, .5)',
      label: 'Lose',
    },
  ],

  options: {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        boxWidth: 6,
        display: true,
        usePointStyle: true,
      },
    },
    layout: {
      padding: {
        left: '0',
        right: 0,
        top: 0,
        bottom: '0',
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            color: '#e5e9f2',
          },
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: '#182b49',
            max: 80,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          barPercentage: 0.6,
          ticks: {
            beginAtZero: true,
            fontSize: 11,
            fontColor: '#182b49',
          },
        },
      ],
    },
  },
};

ChartjsBarChartTransparent.propTypes = {
  height: PropTypes.number,
  labels: PropTypes.array,
  datasets: PropTypes.arrayOf(PropTypes.object),
};

const ChartjsBarChartGrad = props => {
  const { labels, datasets, options, height, layout } = props;
  const data = {
    labels,
    datasets,
  };
  return <Bar data={data} height={height} options={{ ...options, ...layout }} />;
};

ChartjsBarChartGrad.defaultProps = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
      backgroundColor: 'rgba(0,23,55, .5)',
    },
    {
      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
      backgroundColor: 'rgba(28,225,172, .5)',
    },
  ],

  options: {
    maintainAspectRatio: true,
    responsive: true,
    layout: {
      padding: {
        left: '0',
        right: 0,
        top: 0,
        bottom: '0',
      },
    },
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            color: '#e5e9f2',
          },
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: '#182b49',
            max: 80,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          barPercentage: 0.6,
          ticks: {
            beginAtZero: true,
            fontSize: 11,
            fontColor: '#182b49',
          },
        },
      ],
    },
  },
};

const ChartjsPieChart = props => {
  const { labels, datasets, options, height } = props;
  const data = {
    labels,
    datasets,
  };
  return <Pie data={data} height={height} options={options} />;
};

ChartjsPieChart.defaultProps = {
  height: 200,
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      data: [20, 20, 30, 5, 25],
      backgroundColor: ['#560bd0', '#007bff', '#00cccc', '#cbe0e3', '#74de00'],
    },
  ],

  options: {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
};

ChartjsPieChart.propTypes = {
  height: PropTypes.number.isRequired,
  labels: PropTypes.array.isRequired,
  datasets: PropTypes.arrayOf(PropTypes.object),
};

const ChartjsDonutChart = props => {
  const { labels, datasets, options, height } = props;
  const data = {
    labels,
    datasets,
  };
  return <Doughnut data={data} height={height} options={options} />;
};

ChartjsDonutChart.defaultProps = {
  height: 200,
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      data: [20, 20, 30, 5, 25],
      backgroundColor: ['#560bd0', '#007bff', '#00cccc', '#cbe0e3', '#74de00'],
    },
  ],

  options: {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        boxWidth: 6,
        display: true,
        usePointStyle: true,
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
};

ChartjsDonutChart.propTypes = {
  height: PropTypes.number.isRequired,
  labels: PropTypes.array.isRequired,
  datasets: PropTypes.arrayOf(PropTypes.object),
};

export {
  ChartjsDonutChart,
  ChartjsPieChart,
  ChartjsBarChartGrad,
  ChartjsBarChartTransparent,
  ChartjsAreaChart,
  ChartjsLineChart,
  ChartjsStackedChart,
  ChartjsHorizontalChart,
  ChartjsBarChart,
};
