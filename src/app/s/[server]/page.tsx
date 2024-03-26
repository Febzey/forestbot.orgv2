import GraphBuilder from "./components/graphs/graphBuilder";


export default function ServerPage({ params }: { params: { server: string } }) {
    return <PageContentBuilder server={params.server}/>
}

interface ServerStatsProps {
    totalLogins: number;
    uniquePlayers: number;
    averagePlaytime: string;
    peakConcurrent: number;
    retentionRate: number;
}

function ServerDataMiscStats({
    totalLogins,
    uniquePlayers,
    peakConcurrent,
    averagePlaytime,
    retentionRate,
}: ServerStatsProps) {
    const statItems = [
        { label: "Retention Rate", value: retentionRate, color: "border-red-400"},
        { label: "Total Logins", value: totalLogins, color: "border-blue-400" },
        { label: "Unique Players", value: uniquePlayers, color: "border-green-400" },
        { label: "Avg. Playtime", value: averagePlaytime, color: "border-yellow-400" },
        { label: "Peak Concurrent", value: peakConcurrent, color: "border-pink-400" },
    ];


    // ! todo: add stuff like leaderboards, etc

    return (
        <div className=" mx-auto gap-5 flex">
            {statItems.map((item, index) => (
                <div
                    key={index}
                    className=""
            >
                
                <div className=" rounded p-7">
                    <p className="text-2xl text-neutral-200 font-Protest">{item.label}</p>
                    <p className="text-lg text-neutral-400">{item.value}</p>
                </div>


                </div>
            ))}
        </div>
    );
}


const ServerStatsData: ServerStatsProps = {

    // peak concurrent players in the last 30 days
    peakConcurrent: 200,

    // average playtime for players in the last 30 days
    averagePlaytime: "2h 30m",

    // 44 percent of players returned to the sevrver after their first login within the last 30 days
    retentionRate: 44,
    
    // total logins for this week
    totalLogins: 16887,

    // total unique players for this week
    uniquePlayers: 120,
};


function PageContentBuilder({ server }: { server: string }) {
    return (
        <div className="text-white gap-10 flex flex-col items-center justify-center w-full mt-[6%] pb-[5%] mx-auto lg:w-[73%] ">
            <h2 className="text-7xl font-Protest first-letter:uppercase">{server}</h2>
            <ServerDataMiscStats {...ServerStatsData} />
            <GraphBuilder server={server}/>
        </div>
    )
} 