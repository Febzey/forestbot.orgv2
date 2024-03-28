import { notFound } from "next/navigation";
import PlayerActivityGraph from "./graph_client_side";


async function getGraphData(server: string) {

    const data = await fetch(`${process.env.NEXT_PUBLIC_FORESTBOT_API_URL}/player-activity-by-hour?server=${server}`)
    if (!data.ok) return notFound();

    const d = await data.json();


    return d.player_activity_by_hour;

}

export default async function GraphBuilder({ server }: { server: string} ) {

    const serverData:PlayerActivityHourlyResult[]|any | null | undefined = await getGraphData(server);
    //make a 5 sec timeout
    // do it without commenting for fuck sakes
    // const sleep = (time:number) => new Promise(res=>setTimeout(res,time))

    // await sleep(5000)
   // console.log("Received data:", JSON.stringify(serverData));
    
    
    if (!serverData || serverData.length === 0) {
        return notFound()
    };


    return (
        <div className="w-full">
            <PlayerActivityGraph data={serverData}/>
        </div>
    )
}