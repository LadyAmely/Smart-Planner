import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: '#2c3e50',
}));

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Completed Tasks',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: '#3563d9ce',
      borderColor: '#3563d9ce',
      tension: 0.1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#ecf0f1',
      },
    },
    title: {
      display: true,
      color: '#ecf0f1',
      text: 'Progress Tracking of Completed Tasks',
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `Percentage of completed tasks: ${tooltipItem.raw}`;
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#ecf0f1',
      },
    },
    y: {
      ticks: {
        color: '#ecf0f1',
      },
    },
  },
};

const BarChart = () => {
  return (
    <ChartContainer>
      <Typography variant="h6" gutterBottom style={{ color: '#ecf0f1' }}>
        Bar Chart
      </Typography>
      <Bar data={data} options={options} />
    </ChartContainer>
  );
};

export default BarChart;
