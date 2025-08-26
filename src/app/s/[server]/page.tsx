import { Suspense } from "react";
import GraphBuilder from "./components/graphs/graphBuilder";
import LeaderboardSkeleton, { PageLoader } from "./loading";
import Top5Leaderboards from "./components/leaderboards/leaderboard";
import MiscServerStats from "./components/graphs/miscServerStats";
import { FaChartLine, FaSpinner } from "react-icons/fa";
import { OverAllSavedServerData } from "./components/graphs/miscServerStats";
import { notFound } from "next/navigation";

async function getAllKnownMinecraftServers() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_FORESTBOT_API_URL}/all-servers`, { cache: 'no-cache' });
        if (!res.ok) return null;
       // console.log(await res.json(), " all servers");
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export default async function ServerPage({ params }: { params: { server: string } }) {
    const allservers = await getAllKnownMinecraftServers();
    console.log(allservers, " all servers1");
    console.log(params.server, " param server");
    if (!allservers || !allservers.includes(params.server)) {
        console.log("not found");
        return notFound()
    }

    return <PageContentBuilder server={params.server} />
}

function PageContentBuilder({ server }: { server: string }) {
    return (
        <div className="min-h-screen w-full px-4">

            <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center lg:mt-0 mt-[30%]">
                <h2 className="text-4xl sm:text-6xl md:text-8xl font-Protest first-letter:uppercase text-white text-center">{server}</h2>
                <div className="flex items-center justify-center flex-col pt-5 gap-3 text-neutral-400">
                    <div className="text-center w-full text-neutral-400 italic flex items-center justify-center flex-col">
                        <p className="text-sm sm:text-base md:text-lg">
                            Average Player Count Per Day
                        </p>
                        <p className="flex text-xs items-center justify-center gap-1.5 pb-5">
                            Scroll down to see some leaderboards and other stats <FaChartLine />
                        </p>
                    </div>
                </div>

                {/* <Suspense fallback={<FaSpinner className="animate-spin text-3xl mt-5 text-emerald-500" />}>
                <OverAllSavedServerData server={server} />
            </Suspense> */}

                <Suspense fallback={<PageLoader />}>
                    <GraphBuilder server={server} />
                </Suspense>
            </div>


            <div className="w-full h-full flex flex-col gap-5 min-h-screen">

                <div className="w-full text-center p-4 sm:p-8 h-full">
                    <div className="z-50 my-8 sm:my-16 h-[2px] border-t-0 bg-transparent mx-auto w-2/3 bg-gradient-to-r from-transparent via-white to-transparent opacity-25"></div>

                    <h2 className="text-4xl sm:text-6xl md:text-7xl font-Protest text-white">Leaderboards</h2>
                    <p className="text-neutral-400 text-sm sm:text-base md:text-lg">Top 5 stats for the past 7 days</p>
                </div>

                <Suspense fallback={<LeaderboardSkeleton />}>
                    <Top5Leaderboards server={server} />
                </Suspense>

            </div>
        </div>
    )
}
