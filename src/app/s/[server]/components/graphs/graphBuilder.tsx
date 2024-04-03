import { notFound } from "next/navigation";
import PlayerActivityGraph from "./graph_client_side";
import MiscServerStats from "./miscServerStats";
import { Suspense } from "react";
import { FaSpinner } from "react-icons/fa";


async function getGraphData(server: string) {

    const data = await fetch(`${process.env.NEXT_PUBLIC_FORESTBOT_API_URL}/server-activity-data?server=${server}`)
    if (!data.ok) return null

    const d = await data.json();

    return d;

}

export default async function GraphBuilder({ server }: { server: string }) {

    let serverData: PlayerActivityHourlyResult[] | any | null | undefined = await getGraphData(server);

    console.log(serverData)


    if (!serverData || serverData.length === 0) {
        console.log("k no data")
        return (
            <div className="w-full min-h-[80vh] text-white flex items-center justify-center">
                No graph data available
            </div>
        )
    };

    if ("player_activity_by_hour" in serverData) {
        serverData = serverData.player_activity_by_hour;
    }


    return (
        <div className="w-full">
            <Suspense fallback={<FaSpinner className="animate-spin text-3xl text-emerald-500" />}>
                <MiscServerStats 
                    totalLogins={serverData.TotalLogins}
                    UniquePlayers={serverData.UniquePlayers}
                    UniqueLogins={serverData.UniqueLogins}
                    UserWithMostLogins={serverData.UserWithMostLogins}
                />
            </Suspense>
            <PlayerActivityGraph data={serverData.PlayerActivityHourlyResult} />
        </div>
    )
}