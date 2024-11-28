import { FaCube } from "react-icons/fa";
import Graph from "./activity_graph";
import { api } from "../../../../../apiGetter";

async function getGraphData(username: string, server: string) {
    const uuid = await api.convertUsernameToUuid(username);

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_FORESTBOT_API_URL}/player/playtime?uuid=${uuid}&date=${Date.now()}&server=${server}`, { cache: 'no-cache' });
        const data = await res.json();;
        if (data["success"] === false) { 
            return null;
        } 

        return data;
    } catch (err) {
        return null;
    }
}

export default async function UserDataGraphs({ username, server }: { username: string, server: string }) {
    const data = await getGraphData(username, server) as any[];
    if (!data || data.length === 0 || data === undefined || data === null) {
        return (
            <div className="bg-zinc-700/60 rounded rounded-lnone flex w-full p-4">
                <div className="w-full h-full bg-zinc-800 rounded rounded-r-none p-8 shadow-2xl">
                    <h3 className="text-lg text-center text-white font-Protest">No Data For The Last Week</h3>
                </div>
            </div>
        )
    }

    console.log(data, "data")

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const totalPlaytimeMinutes = data.reduce((sum, entry) => sum + entry.playtime, 0);
    const totalPlaytimeHours = (totalPlaytimeMinutes / 60).toFixed(1);

    // Find the day with the most playtime
    const maxPlaytimeEntry = data.reduce((max, entry) => (entry.playtime > max.playtime ? entry : max), data[0]);
    const maxPlaytimeHours = (maxPlaytimeEntry.playtime / 60).toFixed(1);
    const maxPlaytimeDay = dayNames[new Date(maxPlaytimeEntry.day).getDay()];

    // Calculate weekend and weekday playtime
    let weekendPlaytime = 0;
    let weekdayPlaytime = 0;

    data.forEach(entry => {
        const dayOfWeek = new Date(entry.day).getDay();
        const playtimeInHours = entry.playtime / 60;

        if (dayOfWeek === 0 || dayOfWeek === 6) {
            weekendPlaytime += playtimeInHours;
        } else {
            weekdayPlaytime += playtimeInHours;
        }
    });

    // Calculate streaks
    let currentStreak = 0;
    let maxStreak = 0;

    data.forEach(entry => {
        if (entry.playtime > 0) {
            currentStreak++;
            maxStreak = Math.max(maxStreak, currentStreak);
        } else {
            currentStreak = 0;
        }
    });

    // Construct output strings
    const mostPlayedString = `Played the most on ${maxPlaytimeDay} with ${maxPlaytimeHours} hours.`;
    const totalPlaytimeString = `Playtime this week is ${totalPlaytimeHours} hours.`;
    const weekendWeekdayString = `Played ${weekendPlaytime.toFixed(1)} hours on the weekend and ${weekdayPlaytime.toFixed(1)} hours on weekdays.`;
    const streakString = `Longest streak was ${maxStreak} consecutive play days.`;


    return (
        <div className="w-full h-full bg-zinc-800 rounded rounded-r-none p-8 shadow-2xl">
            <h1 className="text-2xl font-Protest">Weekly Report</h1>
            <div className="flex flex-col justify-between">
                <ul className="flex flex-col lg:flex-row gap-3">
                    <li className="flex flex-col gap-2 p-4 bg-zinc-700/60 rounded">
                        <div className="inline-flex gap-2 items-center">
                            <FaCube className="text-red-500" />
                            <h3 className="text-xs text-zinc-100">Playtime this week</h3>
                        </div>
                        <p className="text-sm">{totalPlaytimeString}</p>
                    </li>

                    <li className="flex flex-col gap-2 p-4 bg-zinc-700/60 rounded">
                        <div className="inline-flex gap-2 items-center">
                            <FaCube className="text-indigo-500" />
                            <h3 className="text-xs text-zinc-100">Most played day</h3>
                        </div>
                        <p className="text-sm">{mostPlayedString}</p>
                    </li>

                    <li className="flex flex-col gap-2 p-4 bg-zinc-700/60 rounded">
                        <div className="inline-flex gap-2 items-center">
                            <FaCube className="text-lime-500" />
                            <h3 className="text-xs text-zinc-100">Weekend vs Weekday playtime</h3>
                        </div>
                        <p className="text-sm">{weekendWeekdayString}</p>
                    </li>

                    <li className="flex flex-col gap-2 p-4 bg-zinc-700/60 rounded">
                        <div className="inline-flex gap-2 items-center">
                            <FaCube className="text-orange-500" />
                            <h3 className="text-xs text-zinc-100">Longest streak</h3>
                        </div>
                        <p className="text-sm">{streakString}</p>
                    </li>

                </ul>

                <Graph aggregatedData={data} />
            </div>
        </div>
    )
}