import { notFound } from "next/navigation";
import PlayerActivityGraph from "./graph_client_side";
import MiscServerStats from "./miscServerStats";
import { Suspense } from "react";
import { FaSpinner } from "react-icons/fa";

async function getServerGraphData(server: string) {
    try {
        const date = Date.now();
        const res = await fetch(`${process.env.NEXT_PUBLIC_FORESTBOT_API_URL}/server/playtime?date=${date}&server=${server}&duration=1_month`, { cache: 'no-cache' });
        console.log(res);
        if (!res.ok) return null;

        const d = await res.json();
        return d;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export default async function GraphBuilder({ server }: { server: string }) {
    let serverData = await getServerGraphData(server);

    console.log(serverData, " server graph data");

    if (!serverData || serverData.length === 0) {
        return (
            <div className="w-full min-h-[80vh] text-white flex items-center justify-center">
                No graph data available
            </div>
        );
    }

    return (
        <div className="w-screen flex">
            {/* <Suspense fallback={<FaSpinner className="animate-spin text-3xl text-emerald-500" />}>
                <MiscServerStats
                    totalLogins={serverData.TotalLogins}
                    UniquePlayers={serverData.UniquePlayers}
                    UniqueLogins={serverData.UniqueLogins}
                    UserWithMostLogins={serverData.UserWithMostLogins}
                />
            </Suspense> */}
            <PlayerActivityGraph data={serverData} />
        </div>
    );
}
