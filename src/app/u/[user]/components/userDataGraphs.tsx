"use client";

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



import { Line } from 'react-chartjs-2';
import { FaCube } from "react-icons/fa";
import { useEffect } from "react";

export default function UserDataGraphs() {

    return (
        <div className="w-full h-full bg-zinc-800 rounded rounded-r-none p-8 shadow-2xl">
            <div className="flex flex-col justify-between items-center">
                <ul className="flex flex-row gap-3">
                    <li className="flex flex-col gap-2 p-4 bg-zinc-700/60 rounded">
                        <div className="inline-flex gap-2 items-center">
                            <FaCube className="text-red-500" />
                            <h3 className="text-xs text-zinc-100">Playtime this week</h3>
                        </div>
                        <p className="text-sm">15 minutes</p>
                    </li>

                    <li className="flex flex-col gap-2 p-4 bg-zinc-700/60 rounded">
                        <div className="inline-flex gap-2 items-center">
                            <FaCube className="text-indigo-500" />
                            <h3 className="text-xs text-zinc-100"># of logins this week</h3>
                        </div>
                        <p className="text-sm">126</p>
                    </li>

                    <li className="flex flex-col gap-2 p-4 bg-zinc-700/60 rounded">
                        <div className="inline-flex gap-2 items-center">
                            <FaCube className="text-lime-500" />
                            <h3 className="text-xs text-zinc-100">Day with most logins</h3>
                        </div>
                        <p className="text-sm">Monday, with 33 logins</p>
                    </li>
                </ul>

                <Graph playtimeSessions={calculatePlaytimeSessions(playtimeSessionsData)} />
            </div>
        </div>
    )
}

const playtimeSessionsData: PlayerActivityData[] = [
    { UUID: "abcdef123456", Date: 1645824000000, mc_server: "example_server", type: "login" },
    { UUID: "abcdef123456", Date: 1645827600000, mc_server: "example_server", type: "logout" },
    { UUID: "abcdef123456", Date: 1645831200000, mc_server: "example_server", type: "login" },
    { UUID: "abcdef123456", Date: 1645838400000, mc_server: "example_server", type: "logout" },
    { UUID: "abcdef123456", Date: 1645845600000, mc_server: "example_server", type: "login" },
    { UUID: "abcdef123456", Date: 1645852800000, mc_server: "example_server", type: "logout" },
    { UUID: "abcdef123456", Date: 1645932000000, mc_server: "example_server", type: "login" },
    { UUID: "abcdef123456", Date: 1645935600000, mc_server: "example_server", type: "logout" },
    { UUID: "abcdef123456", Date: 1645942800000, mc_server: "example_server", type: "login" },
    { UUID: "abcdef123456", Date: 1645946400000, mc_server: "example_server", type: "logout" },
    { UUID: "abcdef123456", Date: 1645953600000, mc_server: "example_server", type: "login" },
    { UUID: "abcdef123456", Date: 1645957200000, mc_server: "example_server", type: "logout" },
    { UUID: "abcdef123456", Date: 1645968000000, mc_server: "example_server", type: "login" },
    { UUID: "abcdef123456", Date: 1645971600000, mc_server: "example_server", type: "logout" },
    { UUID: "abcdef123456", Date: 1645982400000, mc_server: "example_server", type: "login" },
    { UUID: "abcdef123456", Date: 1645986000000, mc_server: "example_server", type: "logout" },
    { UUID: "abcdef123456", Date: 1646054400000, mc_server: "example_server", type: "login" },
    { UUID: "abcdef123456", Date: 1646058000000, mc_server: "example_server", type: "logout" },
    { UUID: "abcdef123456", Date: 1646068800000, mc_server: "example_server", type: "login" },
    { UUID: "abcdef123456", Date: 1646072400000, mc_server: "example_server", type: "logout" },
];

// Now use this data to calculate playtime sessions and plot them on the line graph as discussed earlier.




interface PlayerActivityData {
    UUID: string;
    Date: number;
    mc_server: string;
    type: string;
}

interface PlaytimeSession {
    loginTime: number;
    logoutTime: number;
    playtime: number;
}


const calculatePlaytimeSessions = (data: PlayerActivityData[]): PlaytimeSession[] => {
    const playtimeSessions: PlaytimeSession[] = [];

    for (let i = 0; i < data.length - 1; i += 2) {
        const loginTime = data[i].Date;
        const logoutTime = data[i + 1].Date;

        // Check if the data points represent a login event
        if (data[i].type === 'login' && data[i + 1].type === 'logout') {
            // Calculate playtime in milliseconds
            const playtime = logoutTime - loginTime;

            playtimeSessions.push({
                loginTime,
                logoutTime,
                playtime,
            });
        }
    }

    return playtimeSessions;
};


interface PlaytimeGraphProps {
    playtimeSessions: PlaytimeSession[];
}

const Graph: React.FC<PlaytimeGraphProps> = ({ playtimeSessions }) => {
    const aggregatedData: Record<string, number> = {}; // Key: Date string, Value: Total playtime for the day

    playtimeSessions.forEach(session => {
        const loginDate = new Date(session.loginTime);
        const dayKey = loginDate.toDateString();
    
        if (!aggregatedData[dayKey]) {
            aggregatedData[dayKey] = 0;
        }
    
        aggregatedData[dayKey] += session.playtime / (1000 * 60);
    });
    
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