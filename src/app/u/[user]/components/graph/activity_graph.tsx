"use client";
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
    Legend
);

/**
 * 
 * User playtime activity graph for past week or month
 * 
 */
const Graph = ({ aggregatedData }: { aggregatedData: { day: string, playtime: number, success?: boolean }[]}) => {
    // Convert the playtime from minutes to hours (rounded to 2 decimal places)

    //@ts-ignore
    if (!aggregatedData || aggregatedData.length === 0 || aggregatedData === undefined || aggregatedData === null || aggregatedData["success"] === false) { 
        return (
            <div className='mt-10 w-full h-fit my-auto flex justify-center items-center'>
                <p className='text-center text-gray-500 italic'>No data available. Time to play and gather some stats!</p>
            </div>
        )
    }

    else {
        const playtimeInHours = aggregatedData.map(item => (item.playtime / 60).toFixed(2)); // Converts minutes to hours and rounds to 2 decimal places

    // Convert the date string into a weekday name (e.g., "Monday", "Tuesday")
    const weekdays = aggregatedData.map(item => {
        const date = new Date(item.day);
        const options: Intl.DateTimeFormatOptions = { weekday: 'long' }; // This will get the full name of the weekday
        return new Intl.DateTimeFormat('en-US', options).format(date);
    });

    const chartData = {
        labels: weekdays, // Use the formatted weekdays
        datasets: [
            {
                label: 'Playtime (hours)',
                data: playtimeInHours, // Use the playtime in hours data
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.0,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Day of Week',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Playtime (hours)',
                },
                ticks: {
                    beginAtZero: true, // Ensures the Y-axis starts from 0
                    precision: 0,
                },
            },
        },
    };

    return (
        <div className='border mt-10 border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl'>
            <Line data={chartData} options={options} />
        </div>
    );
    }
};



export default Graph;