import GraphBuilder from "./components/graphs/graphBuilder";


export default function ServerPage({ params }: { params: { server: string } }) {
    return <PageContentBuilder server={params.server}/>
}


interface ServerStatsProps {
    totalLogins: number;
    uniquePlayers: number;
    averagePlaytime: string;
    newLogins: number;
    peakConcurrent: number;
    retentionRate: number;
}



function ServerDataMiscStats({
    totalLogins,
    uniquePlayers,
    newLogins,
    peakConcurrent,
    averagePlaytime,
    retentionRate,
}: ServerStatsProps) {
    const statItems = [
        { label: "Retention Rate", value: retentionRate, color: "border-red-400"},
        { label: "Total Logins", value: totalLogins, color: "border-blue-400" },
        { label: "Unique Players", value: uniquePlayers, color: "border-green-400" },
        { label: "Avg. Playtime", value: averagePlaytime, color: "border-yellow-400" },
        { label: "New Logins", value: newLogins, color: "border-indigo-400" },
        { label: "Peak Concurrent", value: peakConcurrent, color: "border-pink-400" },
    ];

    return (
        <div className="w-full max-w-screen-md mx-auto flex flex-wrap justify-center">
            {statItems.map((item, index) => (
                <div
                    key={index}
                    className={`w-44 p-4 m-2 bg-zinc-700/50 font-Protest flex rounded shadow-md ${item.color} border-b-4 text-white`}
                >
                    <div className="flex flex-col space-y-2">
                        <span className="text-lg">{item.label}</span>
                        <span className="text-zinc-150">{item.value}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}


const ServerStatsData: ServerStatsProps = {
    peakConcurrent: 200,
    averagePlaytime: "2h 30m",
    retentionRate: 85,
    totalLogins: 16000,
    newLogins: 24,
    uniquePlayers: 0
};


function PageContentBuilder({ server }: { server: string }) {
    return (
        <div className="text-white gap-10 flex flex-col items-center justify-center w-full mt-[6%] pb-[5%]">
            <h2 className="text-6xl font-Protest first-letter:uppercase">{server}</h2>
            <ServerDataMiscStats {...ServerStatsData} />
            <GraphBuilder server={server}/>
        </div>
    )
} 