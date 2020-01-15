import React from 'react';
import { Bar, HorizontalBar, Line, Pie, Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';
const ChartjsBarChart = props => {
  const { Label, Data1, Color1, Data2, Color2 } = props;
  const data = {
    data: {
      labels: Label,
      datasets: [
        {
          data: Data1,
          backgroundColor: Color1,
        },
        {
          data: Data2,
          backgroundColor: Color2,
        },
      ],
    },
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
  return <Bar data={data.data} height={200} options={data.options} />;
};
ChartjsBarChart.propTypes = {
  Label: PropTypes.array.isRequired,
  Data1: PropTypes.array.isRequired,
  Data2: PropTypes.array.isRequired,
  Color1: PropTypes.string.isRequired,
  Color2: PropTypes.string.isRequired,
};

const ChartjsHorizontalChart = props => {
  const { Label, Data1, Color1, Data2, Color2 } = props;
  const data = {
    data: {
      labels: Label,
      datasets: [
        {
          data: Data1,
          backgroundColor: Color1,
        },
        {
          data: Data2,
          backgroundColor: Color2,
        },
      ],
    },
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
  return <HorizontalBar data={data.data} height={200} options={data.options} />;
};

ChartjsHorizontalChart.propTypes = {
  Label: PropTypes.array.isRequired,
  Data1: PropTypes.array.isRequired,
  Data2: PropTypes.array.isRequired,
  Color1: PropTypes.string.isRequired,
  Color2: PropTypes.string.isRequired,
};

const ChartjsStackedChart = props => {
  const { Label, Data1, Color1, Data2, Color2 } = props;
  const data = {
    data: {
      labels: Label,
      datasets: [
        {
          data: Data1,
          backgroundColor: Color1,
        },
        {
          data: Data2,
          backgroundColor: Color2,
        },
      ],
    },
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
  return <Bar data={data.data} height={200} options={data.options} />;
};

ChartjsStackedChart.propTypes = {
  Label: PropTypes.array.isRequired,
  Data1: PropTypes.array.isRequired,
  Data2: PropTypes.array.isRequired,
  Color1: PropTypes.string.isRequired,
  Color2: PropTypes.string.isRequired,
};

const ChartjsLineChart = props => {
  const { Label, Data1, Color1, Data2, Color2 } = props;
  const data = {
    data: {
      labels: Label,
      datasets: [
        {
          data: Data1,
          borderColor: Color1,
          borderWidth: 1,
          fill: false,
        },
        {
          data: Data2,
          borderColor: Color2,
          borderWidth: 1,
          fill: false,
        },
      ],
    },
    options: {
      maintainAspectRatio: true,
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
  return <Line data={data.data} height={200} options={data.options} />;
};
ChartjsLineChart.propTypes = {
  Label: PropTypes.array.isRequired,
  Data1: PropTypes.array.isRequired,
  Data2: PropTypes.array.isRequired,
  Color1: PropTypes.string.isRequired,
  Color2: PropTypes.string.isRequired,
};
const ChartjsAreaChart = props => {
  const { Label, Data1, Color1, Data2, Color2 } = props;
  const data = {
    data: {
      labels: Label,
      datasets: [
        {
          data: Data1,
          borderColor: Color1,
          borderWidth: 1,
          backgroundColor: 'rgba(0,23,55, .5)',
        },
        {
          data: Data2,
          borderColor: Color2,
          borderWidth: 1,
          backgroundColor: 'rgba(28,225,172, .5)',
        },
      ],
    },
    options: {
      maintainAspectRatio: true,
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
            },
          },
        ],
      },
    },
  };
  return <Line data={data.data} height={200} options={data.options} />;
};

ChartjsAreaChart.propTypes = {
  Label: PropTypes.array.isRequired,
  Data1: PropTypes.array.isRequired,
  Data2: PropTypes.array.isRequired,
  Color1: PropTypes.string.isRequired,
  Color2: PropTypes.string.isRequired,
};

const ChartjsBarChartTransparent = props => {
  const { Label, Data1, Data2 } = props;
  const data = {
    data: {
      labels: Label,
      datasets: [
        {
          data: Data1,
          backgroundColor: 'rgba(0,23,55, .5)',
        },
        {
          data: Data2,
          backgroundColor: 'rgba(28,225,172, .5)',
        },
      ],
    },
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
  return <Bar data={data.data} height={200} options={data.options} />;
};

ChartjsBarChartTransparent.propTypes = {
  Label: PropTypes.array.isRequired,
  Data1: PropTypes.array.isRequired,
  Data2: PropTypes.array.isRequired,
};

const ChartjsBarChartGrad = () => {
  const Label = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const Data1 = [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30];
  const Data2 = [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20];

  const data = {
    data: {
      labels: Label,
      datasets: [
        {
          data: Data1,
          backgroundColor: 'rgba(0,23,55, .5)',
        },
        {
          data: Data2,
          backgroundColor: 'rgba(28,225,172, .5)',
        },
      ],
    },
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
  return <Bar data={data.data} height={200} options={data.options} />;
};

const ChartjsPieChart = props => {
  const { Label, Data1, color } = props;
  const data = {
    labels: Label,
    datasets: [
      {
        data: Data1,
        backgroundColor: color,
      },
    ],
  };
  const options = {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };
  return <Pie data={data} height={200} options={options} />;
};
ChartjsPieChart.propTypes = {
  Label: PropTypes.array.isRequired,
  Data1: PropTypes.array.isRequired,
  color: PropTypes.array.isRequired,
};
const ChartjsDonutChart = props => {
  const { Label, Data1, color } = props;
  const data = {
    labels: Label,
    datasets: [
      {
        data: Data1,
        backgroundColor: color,
      },
    ],
  };
  const options = {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };
  return <Doughnut data={data} height={200} options={options} />;
};
ChartjsDonutChart.propTypes = {
  Label: PropTypes.array.isRequired,
  Data1: PropTypes.array.isRequired,
  color: PropTypes.array.isRequired,
};
export { ChartjsDonutChart, ChartjsPieChart, ChartjsBarChartGrad, ChartjsBarChartTransparent, ChartjsAreaChart, ChartjsLineChart, ChartjsStackedChart, ChartjsHorizontalChart, ChartjsBarChart };
