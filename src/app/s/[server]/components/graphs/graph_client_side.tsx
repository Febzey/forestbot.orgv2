"use client";

import React, { useRef, useEffect } from 'react';
import { Bar, Chart, Line } from 'react-chartjs-2';
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
  data: PlayerActivityHourlyResult[];
};

export default function PlayerActivityGraph({ data }: PlayerActivityGraphProps) {
  const daysOfWeekLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Prepare the labels for each hour of the day
  const hoursOfDayLabels = Array.from({ length: 24 }, (_, i) => `${i}:00`);

  // Initialize datasets for the chart
  const datasets = daysOfWeekLabels.map((day, index) => {
    const matchingData = data.find(({ Weekday }) => Weekday === index + 1);
    const loginCounts = matchingData
      ? hoursOfDayLabels.map(hourLabel => {
          const hour = parseInt(hourLabel.split(':')[0]);
          const hourData = matchingData.Activity.find(activity => activity.Hour === hour);
          return hourData ? hourData.Logins : 0;
        })
      : Array(24).fill(0);

    return {
      label: day,
      data: loginCounts,
      borderColor: '#10b981',
      backgroundColor: 'transparent',
      pointBackgroundColor: '#10b981',
      pointBorderColor: '#10b981',

    };
  });

  // Define chart data
  const chartData = {
    responsive: true,
    maintainAspectRatio: true,

    labels: hoursOfDayLabels,
    datasets: datasets,
  };

  const maxUserCount = Math.max(...datasets.flatMap(dataset => dataset.data));


  // Define chart options
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Hour of the Day',
        },
        stacked: false,
        grid: {
          color: '#27272a',
        },
      },
      y: {
        title: {
          display: true,
          text: 'User Count',
        },
        stacked: false,
        grid: {
          color: '#27272a',
        },
        ticks: {
          display: true, // Hide Y-axis numbers
        },      
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const,
      },
    },
  };

  return (
    <div className="mx-auto min-h-[80vh] h-auto">
      <h2 className="font-Protest text-3xl text-neutral-200">Player Activity</h2>
      <Line data={chartData} options={options} />
    </div>
  );
}
// Mock data for a full week of play
const mockData: PlayerActivityHourlyResult[] = [
  {
    Weekday: 1,
    Activity: [
      { Hour: 0, Logins: 10 },
      { Hour: 1, Logins: 15 },
      { Hour: 2, Logins: 20 },
      { Hour: 3, Logins: 25 },
      { Hour: 4, Logins: 30 },
      { Hour: 5, Logins: 35 },
      { Hour: 6, Logins: 40 },
      { Hour: 7, Logins: 45 },
      { Hour: 8, Logins: 50 },
      { Hour: 9, Logins: 55 },
      { Hour: 10, Logins: 60 },
      { Hour: 11, Logins: 65 },

      { Hour: 18, Logins: 100 },
      { Hour: 19, Logins: 105 },
      { Hour: 20, Logins: 110 },
      { Hour: 21, Logins: 115 },
      { Hour: 22, Logins: 120 },
      { Hour: 23, Logins: 125 },
    ],
  },
  {
    Weekday: 2,
    Activity: [
      { Hour: 0, Logins: 5 },
      { Hour: 1, Logins: 10 },
      { Hour: 2, Logins: 15 },
      { Hour: 3, Logins: 20 },
      { Hour: 4, Logins: 25 },
      { Hour: 5, Logins: 30 },
      { Hour: 6, Logins: 35 },
      { Hour: 7, Logins: 40 },
      { Hour: 8, Logins: 45 },
      { Hour: 9, Logins: 50 },

      { Hour: 13, Logins: 70 },
      { Hour: 14, Logins: 75 },
      { Hour: 15, Logins: 80 },
      { Hour: 16, Logins: 85 },
      { Hour: 17, Logins: 90 },
      { Hour: 18, Logins: 95 },
      { Hour: 19, Logins: 100 },
      { Hour: 20, Logins: 105 },
      { Hour: 21, Logins: 110 },
      { Hour: 22, Logins: 115 },
      { Hour: 23, Logins: 120 },
    ],
  },
  {
    Weekday: 3,
    Activity: [
      { Hour: 0, Logins: 8 },
      { Hour: 1, Logins: 12 },
      { Hour: 2, Logins: 18 },
      { Hour: 3, Logins: 24 },
      { Hour: 4, Logins: 30 },
      { Hour: 5, Logins: 36 },
      { Hour: 6, Logins: 42 },
      { Hour: 7, Logins: 48 },
      { Hour: 8, Logins: 54 },

      { Hour: 14, Logins: 90 },
      { Hour: 15, Logins: 96 },
      { Hour: 16, Logins: 102 },
      { Hour: 17, Logins: 108 },
      { Hour: 18, Logins: 114 },
      { Hour: 19, Logins: 120 },
      { Hour: 20, Logins: 126 },
      { Hour: 21, Logins: 132 },
      { Hour: 22, Logins: 138 },
      { Hour: 23, Logins: 144 },
    ],
  },
  {
    Weekday: 4,
    Activity: [
      { Hour: 0, Logins: 6 },
      { Hour: 1, Logins: 11 },
      { Hour: 2, Logins: 16 },
      { Hour: 3, Logins: 21 },
      { Hour: 4, Logins: 26 },
      { Hour: 5, Logins: 31 },
      { Hour: 6, Logins: 36 },
      { Hour: 7, Logins: 41 },
      { Hour: 8, Logins: 46 },
      { Hour: 9, Logins: 51 },
      { Hour: 10, Logins: 56 },
      { Hour: 11, Logins: 61 },
      { Hour: 12, Logins: 66 },
      { Hour: 13, Logins: 71 },
      { Hour: 14, Logins: 76 },
      { Hour: 15, Logins: 81 },
      { Hour: 16, Logins: 86 },
      { Hour: 17, Logins: 91 },
      { Hour: 18, Logins: 96 },
      { Hour: 19, Logins: 101 },
      { Hour: 20, Logins: 106 },
      { Hour: 21, Logins: 111 },
      { Hour: 22, Logins: 116 },
      { Hour: 23, Logins: 121 },
    ],
  },
  {
    Weekday: 5,
    Activity: [
      { Hour: 0, Logins: 7 },
      { Hour: 1, Logins: 13 },
      { Hour: 2, Logins: 19 },
      { Hour: 3, Logins: 25 },
      { Hour: 4, Logins: 31 },
      { Hour: 5, Logins: 37 },
      { Hour: 6, Logins: 43 },
      { Hour: 7, Logins: 49 },
      { Hour: 8, Logins: 55 },
      { Hour: 9, Logins: 61 },
      { Hour: 10, Logins: 67 },
      { Hour: 11, Logins: 73 },
      { Hour: 12, Logins: 79 },
      { Hour: 13, Logins: 85 },
      { Hour: 14, Logins: 91 },
      { Hour: 15, Logins: 97 },
      { Hour: 16, Logins: 103 },
      { Hour: 17, Logins: 109 },
      { Hour: 18, Logins: 115 },
      { Hour: 19, Logins: 121 },
  
    ],
  },
  {
    Weekday: 6,
    Activity: [
      { Hour: 0, Logins: 9 },
      { Hour: 1, Logins: 14 },
      { Hour: 2, Logins: 21 },
      { Hour: 3, Logins: 28 },
      { Hour: 4, Logins: 35 },
      { Hour: 5, Logins: 42 },
      { Hour: 6, Logins: 49 },
      { Hour: 7, Logins: 56 },
      { Hour: 8, Logins: 63 },
      { Hour: 9, Logins: 70 },
      { Hour: 10, Logins: 77 },
      { Hour: 11, Logins: 84 },
      { Hour: 12, Logins: 91 },
      { Hour: 13, Logins: 98 },
      { Hour: 14, Logins: 105 },
      { Hour: 15, Logins: 112 },
      { Hour: 16, Logins: 119 },
      { Hour: 17, Logins: 126 },
    
    ],
  },
  {
    Weekday: 7,
    Activity: [
      { Hour: 0, Logins: 4 },
      { Hour: 1, Logins: 8 },
      { Hour: 2, Logins: 12 },
      { Hour: 3, Logins: 16 },
      { Hour: 4, Logins: 20 },
      { Hour: 5, Logins: 24 },
      { Hour: 6, Logins: 28 },
      { Hour: 7, Logins: 32 },
      { Hour: 8, Logins: 36 },
      { Hour: 9, Logins: 40 },
      { Hour: 10, Logins: 44 },
      { Hour: 11, Logins: 48 },
      { Hour: 12, Logins: 52 },
      { Hour: 13, Logins: 56 },
      { Hour: 14, Logins: 60 },
      { Hour: 15, Logins: 64 },
      { Hour: 16, Logins: 68 },
      { Hour: 17, Logins: 72 },
      { Hour: 18, Logins: 76 },
      { Hour: 19, Logins: 80 },
      { Hour: 20, Logins: 84 },
      { Hour: 21, Logins: 88 },
      { Hour: 22, Logins: 92 },
      { Hour: 23, Logins: 96 },
    ],
  },
];

// Use the mockData for the PlayerActivityGraph component
{/* <PlayerActivityGraph data={mockData} /> */}




// export default function PlayerActivityGraph({ data }: PlayerActivityGraphProps) {
//   // Define time periods
//   const timePeriods = ['Early', 'Mid', 'Late'];

//   // Extracting labels (days of the week) and datasets (player counts) from the data
//   const labels: string[] = [];
//   const datasets: { label: string; data: number[] }[] = [];

//   // Initialize data array for each time period
//   const timePeriodData = timePeriods.map(() => []);

//   data.forEach(({ Weekday, Activity }) => {
//     const totalLogins = Activity.reduce((acc, { Logins }) => acc + Logins, 0);

//     // Push total logins for each time period
//     timePeriodData.forEach((period: number[], index) => {
//       const startHour = index * 8;
//       const endHour = (index + 1) * 8;
//       const periodLogins = Activity.reduce((acc, { Hour, Logins }) => {
//         if (Hour >= startHour && Hour < endHour) {
//           return acc + Logins;
//         }
//         return acc;
//       }, 0);
//       period.push(periodLogins);
//     });

//     // Update labels if not already updated
//     if (labels.length === 0) {
//       labels.push(`Weekday ${Weekday}`);
//     }
//   });

//   // Constructing datasets for the chart
//   timePeriodData.forEach((period, index) => {
//     datasets.push({
//       label: timePeriods[index],
//       data: period,
//     });
//   });

//   // Constructing the data object for the chart
//   const chartData = {
//     labels: labels,
//     datasets: datasets,
//   };

//   // Chart options
//   const options = {
//     scales: {
//       x: {
//         stacked: true,
//         display: true,
//         grid: {
//           color: '#27272a',
//         },
//       },
//       y: {
//         stacked: true,
//         display: true,
//         grid: {
//           color: '#27272a',
//         },
//       },
//     },
//   };

//   return (
//     <div className="mx-auto">
//       <h2 className="font-Protest text-3xl text-neutral-200 mt-5">Player Activity</h2>
//       <Line data={chartData} options={options} />
//     </div>
//   );
// }