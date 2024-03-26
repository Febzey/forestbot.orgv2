"use client";

import React, { useRef, useEffect } from 'react';
import { Chart, Line } from 'react-chartjs-2';
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
    Legend
);

type Dataset = {
    label: string;
    data: UserCountData[];
    borderColor: string;
    borderWidth: number;
    fill: boolean;
};

type MockChartData = {
    labels: string[];
    datasets: Dataset[];
};

export default function PlayerActivityGraph({ data }: { data: UserCountData[] }) {

    const chartRef = useRef(null);


    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const labels = data.map(entry => `${daysOfWeek[entry.day_of_week - 1]} - ${entry.hour_of_day}:00`);
    const userCounts = data.map(entry => entry.user_count);

    const mockData = {
        labels: labels,
        responsive: true,
        maintainAspectRatio: true,

        datasets: [
            {
                label: 'User Count',
                data: userCounts,
                borderColor: '#6366f1',
                backgroundColor: '#6366f1',
            },
        ],


    };

    const options = {
        scales: {
          x: {
            display: true,
            grid: {
              color: '#27272a', // Set the color of the x-axis grid lines
            },
          },
          y: {
            display: true,
            grid: {
              color: '#27272a', // Set the color of the y-axis grid lines
            },
          },
        },
      };


    return (
        <div className="mx-auto">
            <h2 className="font-Protest text-3xl text-neutral-200 mt-5">Player Activity</h2>

            <Line data={mockData} options={options}/>


        </div>
    );
};
