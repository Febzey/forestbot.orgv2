import { Suspense } from "react";
import GraphBuilder from "./components/graphs/graphBuilder";
import LeaderboardSkeleton, { PageLoader } from "./loading";
import Top5Leaderboards from "./components/leaderboards/leaderboard";
import MiscServerStats from "./components/graphs/miscServerStats";


export default function ServerPage({ params }: { params: { server: string } }) {
    return <PageContentBuilder server={params.server} />
}

function PageContentBuilder({ server }: { server: string }) {
    return (
        <div className="min-h-screen w-full">

            <div className="w-[79%] mx-auto  flex flex-col items-center justify-center">
                <h2 className="text-8xl font-Protest first-letter:uppercase text-white">{server}</h2>

                <Suspense fallback={<div>Loading...</div>}>
                    <MiscServerStats server={server} />
                </Suspense>
                <Suspense fallback={<PageLoader/>}>
                    <GraphBuilder server={server} />
                </Suspense>
            </div>


            <div className="w-full h-full flex flex-col mt-[10%] gap-5 min-h-screen bg-cover bg-no-repeat">

                <div className="w-full text-center p-8">
                    <h2 className="text-7xl font-Protest text-white">Leaderboards</h2>
                    <p className="text-neutral-400">Top 5 stats for the past 7 days</p>
                </div>

                <Suspense fallback={<LeaderboardSkeleton/>}>
                    <Top5Leaderboards server={server} />
                </Suspense>

            </div>
        </div>
    )
}
