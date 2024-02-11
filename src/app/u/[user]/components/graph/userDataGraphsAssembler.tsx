import { FaCube } from "react-icons/fa";
import Graph from "./activity_graph";





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


async function getGraphData(username: string, server: string) {
    // try {
    //     return await api.getGraphData(username, server);
    // } catch (err) {
    //     return null;
    // }
    //await new Promise(resolve => setTimeout(resolve, 4000));
    //eventually pull our real graph data here
    const playtimeSessionsData: PlayerActivityData[] = [
        { UUID: "abcdef123456", Date: 1707040000000, mc_server: "example_server", type: "login" },
        { UUID: "abcdef123456", Date: 1707043600000, mc_server: "example_server", type: "logout" },
        { UUID: "abcdef123456", Date: 1707047200000, mc_server: "example_server", type: "login" },
        { UUID: "abcdef123456", Date: 1707050800000, mc_server: "example_server", type: "logout" },
        { UUID: "abcdef123456", Date: 1707054400000, mc_server: "example_server", type: "login" },
        { UUID: "abcdef123456", Date: 1707058000000, mc_server: "example_server", type: "logout" },
        { UUID: "abcdef123456", Date: 1707144000000, mc_server: "example_server", type: "login" },
        { UUID: "abcdef123456", Date: 1707147600000, mc_server: "example_server", type: "logout" },
        { UUID: "abcdef123456", Date: 1707154800000, mc_server: "example_server", type: "login" },
        { UUID: "abcdef123456", Date: 1707158400000, mc_server: "example_server", type: "logout" },
        { UUID: "abcdef123456", Date: 1707165600000, mc_server: "example_server", type: "login" },
        { UUID: "abcdef123456", Date: 1707169200000, mc_server: "example_server", type: "logout" },
        { UUID: "abcdef123456", Date: 1707252000000, mc_server: "example_server", type: "login" },
        { UUID: "abcdef123456", Date: 1707255600000, mc_server: "example_server", type: "logout" },
        { UUID: "abcdef123456", Date: 1707342400000, mc_server: "example_server", type: "login" },
        { UUID: "abcdef123456", Date: 1707346000000, mc_server: "example_server", type: "logout" },
        { UUID: "abcdef123456", Date: 1707432000000, mc_server: "example_server", type: "login" },
        { UUID: "abcdef123456", Date: 1707435600000, mc_server: "example_server", type: "logout" },
        { UUID: "abcdef123456", Date: 1707461499000, mc_server: "example_server", type: "login" },
        { UUID: "abcdef123456", Date: 1707465099000, mc_server: "example_server", type: "logout" },
    ];
    return playtimeSessionsData;
}


export default async function UserDataGraphs({ username, server }: { username: string, server: string }) {

    const data = await getGraphData(username, server);

    if (!data) {
        return (
            <div className="bg-zinc-700/60 rounded rounded-lnone flex w-full p-4">
                <div className="w-full h-full bg-zinc-800 rounded rounded-r-none p-8 shadow-2xl">
                    <h3 className="text-lg text-center text-red-500">Failed to load graph data</h3>
                </div>
            </div>
        )
    }

    const calculatedSessions = calculatePlaytimeSessions(data);
    const aggregatedData: Record<string,number> = {}; // Key: Date string, Value: Total playtime for the day

    calculatedSessions.forEach(session => {
        const loginDate = new Date(session.loginTime);
        const dayKey = loginDate.toDateString();

        if (!aggregatedData[dayKey]) {
            aggregatedData[dayKey] = 0;
        }

        aggregatedData[dayKey] += session.playtime / (1000 * 60);
    });

    //add up each value from our aggregateData object
    const totalPlaytimeThisWeek = Object.values(aggregatedData).reduce((total, playtime) => total + playtime, 0);

    const weekDayWithMostPlaytime = Object.keys(aggregatedData).reduce((maxDay, day) => { 
        return aggregatedData[day] > aggregatedData[maxDay] ? day : maxDay;
    });

    const loginsThisWeek = data.filter(entry => entry.type === 'login').length;

    const weekDayWithMostLogins = Object.keys(aggregatedData).reduce((maxDay, day) => {
        return data.filter(entry => entry.type === 'login').length > data.filter(entry => entry.type === 'login').length ? day : maxDay;
    });

    const weekDayWithMostLoginsString = weekDayWithMostLogins + " with " + data.filter(entry=>entry.type==="login").length + " logins";

    return (
            <div className="w-full h-full bg-zinc-800 rounded rounded-r-none p-8 shadow-2xl">
                <h1 className="text-2xl font-Protest">Weekly Report</h1>
                <div className="flex flex-col justify-between items-center">
                    <ul className="flex flex-row gap-3">
                        <li className="flex flex-col gap-2 p-4 bg-zinc-700/60 rounded">
                            <div className="inline-flex gap-2 items-center">
                                <FaCube className="text-red-500" />
                                <h3 className="text-xs text-zinc-100">Playtime this week</h3>
                            </div>
                            <p className="text-sm">{(totalPlaytimeThisWeek / 60).toFixed(2)} hours</p>
                        </li>

                        <li className="flex flex-col gap-2 p-4 bg-zinc-700/60 rounded">
                            <div className="inline-flex gap-2 items-center">
                                <FaCube className="text-indigo-500" />
                                <h3 className="text-xs text-zinc-100"># of logins this week</h3>
                            </div>
                            <p className="text-sm">{loginsThisWeek}</p>
                        </li>

                        <li className="flex flex-col gap-2 p-4 bg-zinc-700/60 rounded">
                            <div className="inline-flex gap-2 items-center">
                                <FaCube className="text-lime-500" />
                                <h3 className="text-xs text-zinc-100">Day with most logins this week</h3>
                            </div>
                            <p className="text-sm">{weekDayWithMostLoginsString}</p>
                        </li>


                        <li className="flex flex-col gap-2 p-4 bg-zinc-700/60 rounded">
                            <div className="inline-flex gap-2 items-center">
                                <FaCube className="text-orange-500" />
                                <h3 className="text-xs text-zinc-100">Day with most playtime this week</h3>
                            </div>
                            <p className="text-sm">{weekDayWithMostPlaytime}</p>
                        </li>
                    </ul>

                    <Graph aggregatedData={aggregatedData} />
                </div>
            </div>
    )
}