import HoverTooltip from "@/app/components/tooltips/tooltip";
import { notFound } from "next/navigation";
import { FaUser, FaTrophy, FaSkull, FaChevronDown } from "react-icons/fa";


export default async function MiscServerStats(
    { totalLogins, UniquePlayers, UniqueLogins, UserWithMostLogins }:
    { totalLogins: number, 
      UniquePlayers: number, 
      UniqueLogins: number,
      UserWithMostLogins: { 
        Username: string, 
        LoginCount: number 
    }}) {

    if (!UniqueLogins === undefined) return (
        <div className="w-full py-8 px-2 text-3xl font-Protest italic text-white">
            Failed to load server stats
        </div>
    )
    const statItems = [
        { label: "Total Logins", value: totalLogins },
        { label: "Unique Logins", value: UniquePlayers },
        { label: "New Users", value: UniqueLogins },
        { label: "Most Active User", value: `${UserWithMostLogins.Username} (${UserWithMostLogins.LoginCount} logins)` },

    ];
    return (
        <div className="flex  flex-col  text-neutral-400 ">
            <div className="z-50 mx-auto  my-12 h-px border-t-0 bg-transparent w-full bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25"></div>

            <h2 className="text-2xl font-Protest text-white mr-auto">Server Stats</h2>
            <div className=" gap-5 flex flex-row mb-12">
                {statItems.map((item, index) => (
                    <div key={index} className="bg-zinc-800/70 shadow-xl">
                        <div className="rounded p-7">
                            <p className="text-md text-neutral-400 font-Protest">{item.label}</p>
                            <p className="text-4xl text-neutral-100 font-Protest">{item.value}</p>
                        </div>
                    </div>
                ))}
                <div className="bg-zinc-800/70 ml-auto flex flex-row items-center shadow-xl justify-center p-7 gap-4">
                    <div className="rounded">
                        <p className="text-md text-neutral-400 font-Protest">Viewing for</p>
                        <p className="text-4xl text-neutral-100 font-Protest">Past 7 dayss</p>
                    </div>
                    <FaChevronDown className="text-4xl text-neutral-100" />
                </div>
            </div>
        </div>
    )

}








async function getOverallServerStats(server: string): Promise<any> {
    const data = await fetch(`${process.env.NEXT_PUBLIC_FORESTBOT_API_URL}/server-stats-total-overall?server=${server}`)
    if (!data.ok) return null
    const d = await data.json();
    return d;

}
export async function OverAllSavedServerData({ server }: { server: string }) {
   const serverStats = await getOverallServerStats(server);

    if (serverStats === null) return (
        <div className="py-3 text-center text-neutral-400 bg-zinc-800 p-2 rounded w-auto mt-4">
            No server stats available
        </div>
    )

    return (
        <div className="text-center pt-5 py-3 px-14 text-xl rounded-full text-neutral-400 flex items-center justify-between flex-row gap-5">
            <HoverTooltip text="Total Users Saved" >
                <div className="flex flex-col text-center items-center justify-center gap-2 text-green-400 font-Protest">
                    <FaUser /> {serverStats.TotalUsersSaved}
                </div>
            </HoverTooltip>
            <HoverTooltip text="Total Advancements Saved" >
                <div className="flex flex-col text-center items-center justify-center gap-2 text-violet-400 font-Protest">
                    <FaTrophy /> {serverStats.TotalAdvancements}
                </div>
            </HoverTooltip>
            <HoverTooltip text="Total Deaths Saved" >
                <div className="flex flex-col text-center items-center justify-center gap-2 text-red-400 font-Protest">
                    <FaSkull /> {serverStats.TotalDeaths}
                </div>
            </HoverTooltip>
        </div>
    )
}