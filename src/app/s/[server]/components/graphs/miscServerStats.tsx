import { notFound } from "next/navigation";
import { FaChartLine, FaUser, FaTrophy, FaSkull } from "react-icons/fa";


async function getServerStats(server: string): Promise<ServerStatsProps> {
    const data = await fetch(`${process.env.NEXT_PUBLIC_FORESTBOT_API_URL}/server-stats?server=${server}`)
    if (!data.ok) return notFound()
    const d = await data.json();
    return d;
}



export default async function MiscServerStats({ server }: { server: string }) {

    const serverStats = await getServerStats(server);
    const statItems = [
        { label: "Total Logins", value: serverStats.TotalLogins },
        { label: "Unique Logins", value: serverStats.UniquePlayers },
        { label: "New Users", value: serverStats.UniqueLogins },
        { label: "Most Active User", value: `${serverStats.UserWithMostLogins.Username} (${serverStats.UserWithMostLogins.LoginCount} logins)` },

    ];

    console.log(serverStats, "stats")

    // TotalUsersSaved   int
    // TotalAdvancements int
    // TotalDeaths       int
    return (
        <div className="flex items-center justify-center flex-col gap-3 text-neutral-400 ">
            <div className="bg-zinc-800 text-center mt-5 shadow-xl py-2 px-6 rounded-full text-neutral-400 italic flex items-center justify-center flex-row gap-5">
                <div className="flex flex-col items-center justify-center gap-2 text-blue-400 font-Protest">
                    <FaUser /> 13,440{serverStats.TotalUsersSaved}
                </div>
                <div className="flex flex-col text-center items-center justify-center gap-2 text-violet-400 font-Protest">
                    <FaTrophy />  2234{serverStats.TotalAdvancements}
                </div>
                <div className="flex flex-col text-center items-center justify-center gap-2 text-red-400 font-Protest">
                    <FaSkull /> 9932{serverStats.TotalDeaths}
                </div>
            </div>
            
            <div className="flex items-center justify-center flex-col gap-3 text-neutral-400 pt-11">
                <div className="text-center w-full text-neutral-400 italic flex items-center justify-center flex-col">
                    <p>
                        All stats are from the past 7 days
                    </p>
                    <p className="flex items-center justify-center gap-1.5">
                        Scroll down to see some leaderboards and other stats <FaChartLine />
                    </p>
                </div>
            </div>

            <div className="mx-auto gap-5 flex flex-row mb-5">
                {statItems.map((item, index) => (
                    <div key={index} className="bg-zinc-800 rounded shadow-lg">
                        <div className="rounded p-7">
                            <p className="text-2xl text-neutral-100 font-Protest">{item.label}</p>
                            <p className="text-lg text-white font-Protest">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}