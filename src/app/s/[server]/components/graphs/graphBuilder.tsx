import { notFound } from "next/navigation";
import PlayerActivityGraph from "./graph_client_side";


async function getGraphData(server: string) {

    const data = await fetch(`${process.env.NEXT_PUBLIC_FORESTBOT_API_URL}/player-activity-by-hour?server=${server}`)
    if (!data.ok) return notFound();

    const d = await data.json();

    console.log(d," dataaa")


    return d;

}

export default async function GraphBuilder({ server }: { server: string} ) {

    let serverData:PlayerActivityHourlyResult[]|any | null | undefined = await getGraphData(server);
    
    if ("player_activity_by_hour" in serverData) {
        serverData = serverData.player_activity_by_hour;
    }

    if (!serverData || serverData.length === 0) {
        return notFound()
    };


    return (
        <div className="w-full">
            <PlayerActivityGraph data={serverData}/>
        </div>
    )
}