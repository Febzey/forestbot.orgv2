import { Suspense } from "react";
import GraphBuilder from "./components/graphs/graphBuilder";
import LeaderboardSkeleton, { PageLoader } from "./loading";
import Top5Leaderboards from "./components/leaderboards/leaderboard";
import MiscServerStats from "./components/graphs/miscServerStats";
import { FaChartLine, FaSpinner } from "react-icons/fa";
import { OverAllSavedServerData } from "./components/graphs/miscServerStats";


export default function ServerPage({ params }: { params: { server: string } }) {
    return <PageContentBuilder server={params.server} />
}

function PageContentBuilder({ server }: { server: string }) {
    return (
        <div className="min-h-screen w-full">

            <div className="w-[79%] mx-auto  flex flex-col items-center justify-center">
                <h2 className="text-8xl font-Protest first-letter:uppercase text-white">{server}</h2>
                <div className="flex items-center justify-center flex-col pt-5 gap-3 text-neutral-400">
                    <div className="text-center w-full text-neutral-400 italic flex items-center justify-center flex-col">
                        <p>
                            Here you can view an activity graph, and some other stats about the server
                        </p>
                        <p className="flex items-center justify-center gap-1.5">
                            Scroll down to see some leaderboards and other stats <FaChartLine />
                        </p>
                    </div>
                </div>

                <Suspense fallback={<FaSpinner className="animate-spin text-3xl mt-5 text-emerald-500" />}>
                    <OverAllSavedServerData server={server} />
                </Suspense>

                <div className="w-full">
                    <Suspense fallback={<PageLoader />}>
                        <GraphBuilder server={server} />
                    </Suspense>
                </div>
            </div>


            <div className="w-full h-full flex flex-col gap-5 min-h-screen">

                <div className="w-full text-center p-8 h-full">
                    <div className="z-50 my-16 h-[2px] border-t-0 bg-transparent mx-auto w-2/3 bg-gradient-to-r from-transparent via-white to-transparent opacity-25"></div>

                    <h2 className="text-7xl font-Protest text-white">Leaderboards</h2>
                    <p className="text-neutral-400">Top 5 stats for the past 7 days</p>
                </div>

                <Suspense fallback={<LeaderboardSkeleton />}>
                    <Top5Leaderboards server={server} />
                </Suspense>

            </div>
        </div>
    )
}
