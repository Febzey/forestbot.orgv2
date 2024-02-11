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
const Graph = ({ aggregatedData }: { aggregatedData: Record<string,number> }) => {
    const labels = Object.keys(aggregatedData);
    // const data = Object.values(aggregatedData);

    const data = {
        labels,
        datasets: [
            {
                label: 'Playtime (minutes)',
                data: Object.values(aggregatedData),// Convert milliseconds to minutes
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Sessions',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Playtime (minutes)',
                },
            },
        },
    };

    return (
        <div className='border mt-10 border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl'>
            <Line data={data} options={options} />
        </div>
    );
};

export default Graph;