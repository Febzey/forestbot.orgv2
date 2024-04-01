import { notFound } from "next/navigation";
import PlayerActivityGraph from "./graph_client_side";


async function getGraphData(server: string) {

    const data = await fetch(`${process.env.NEXT_PUBLIC_FORESTBOT_API_URL}/player-activity-by-hour?server=${server}`, { cache: "no-cache"})
    if (!data.ok) return notFound();

    const d = await data.json();

<<<<<<< HEAD
    console.log(d," dataaa")
=======
    console.log(d, "data from getGraphData")
>>>>>>> df28543f33c825b5e6934e355640194212c271d5


    return d;

}

export default async function GraphBuilder({ server }: { server: string} ) {

<<<<<<< HEAD
    let serverData:PlayerActivityHourlyResult[]|any | null | undefined = await getGraphData(server);
=======
    const serverData:PlayerActivityHourlyResult[]|any | null | undefined = await getGraphData(server);
    //make a 5 sec timeout
    // do it without commenting for fuck sakes
    // const sleep = (time:number) => new Promise(res=>setTimeout(res,time))

    // await sleep(5000)
   // console.log("Received data:", JSON.stringify(serverData));
    
   console.log(serverData, " server data")
>>>>>>> df28543f33c825b5e6934e355640194212c271d5
    
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