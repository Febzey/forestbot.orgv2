import { notFound } from "next/navigation";
import PlayerActivityGraph from "./graph_client_side";


async function getGraphData(server: string) {

    const data = await fetch("http://127.0.0.1:5000/api/v1/player-activity-by-hour?"+"newtest")

    const d = await data.json();


    console.log(d);

    return d;

}

const Data: UserCountData[] = [
    { day_of_week: 1, hour_of_day: 0, user_count: 15 },
    { day_of_week: 1, hour_of_day: 1, user_count: 12 },
    { day_of_week: 1, hour_of_day: 2, user_count: 10 },
    { day_of_week: 1, hour_of_day: 3, user_count: 8 },
    { day_of_week: 1, hour_of_day: 4, user_count: 5 },
    { day_of_week: 1, hour_of_day: 5, user_count: 3 },
    { day_of_week: 1, hour_of_day: 6, user_count: 7 },
    { day_of_week: 1, hour_of_day: 7, user_count: 12 },
    { day_of_week: 1, hour_of_day: 8, user_count: 18 },
    { day_of_week: 1, hour_of_day: 9, user_count: 20 },
    { day_of_week: 2, hour_of_day: 10, user_count: 14 },
    { day_of_week: 2, hour_of_day: 11, user_count: 16 },
    { day_of_week: 2, hour_of_day: 12, user_count: 22 },
    { day_of_week: 2, hour_of_day: 13, user_count: 25 },
    { day_of_week: 2, hour_of_day: 14, user_count: 19 },
    // ... Continue for other days of the week ...
    { day_of_week: 7, hour_of_day: 23, user_count: 18 },
  ];

export default async function GraphBuilder({ server }: { server: string} ) {

    // const serverData:UserCountData[] | null | undefined = await getGraphData(server);
    // if (!serverData || serverData.length === 0) {
    //     return notFound()
    // };


    return (
        <div className="w-full">
            <PlayerActivityGraph data={Data}/>
        </div>
    )
}