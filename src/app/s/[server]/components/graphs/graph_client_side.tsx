"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

type PlayerActivityGraphProps = {
  data: { day:string, avgPlayerCount:number }[];
};

export default function PlayerActivityGraph({ data }: PlayerActivityGraphProps) {
  // Remove the last day
  data.pop();

  // Prepare the labels for each day
  const daysLabels = data.map(item => item.day);
  
  // Convert playtime from minutes to hours
  const playtimeData = data.map(item => item.avgPlayerCount);
  // Define chart data
  const chartData = {
    labels: daysLabels,
    datasets: [
      {
        label: 'Player count',
        data: playtimeData,
        borderColor: '#10b981',
        backgroundColor: 'transparent',
        pointBackgroundColor: '#10b981',
        pointBorderColor: '#10b981',
      },
    ],
  };

  // Define chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Day',
          font: {
            size: 14,
          },
        },
        grid: {
          color: '#27272a',
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Playtime (hours)',
          font: {
            size: 14,
          },
        },
        grid: {
          color: '#27272a',
        },
        ticks: {
          display: true,
          font: {
            size: 12,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const,
        labels: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="mx-auto min-h-[80vh] h-auto w-full lg:w-3/4">
      <Line data={chartData} options={options} />
    </div>
  );
}
