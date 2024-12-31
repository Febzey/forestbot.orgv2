import Link from "next/link";
import UserOrServerSearch from "./components/search";
import ForestBotStats, { ForestBotStatsLoadingSkeleton } from "./fbStatsSection";
import { Suspense } from "react";

export default function HomePageContent() {
    return (
        <div className=" pt-[6vh] ">
            <div className="flex lg:flex-row flex-col p-10 min-h-screen lg:min-h-[80vh] justify-between items-center bg-home-bg bg-cover bg-center bg-no-repeat">

                <div className="font-Protest text-white flex flex-col lg:translate-x-40 lg:max-w-[33%] lg:mt-0 mt-[25%]">
                    <div className="flex items-center justify-center flex-col space-y-4">
                        <h1 className="lg:text-7xl text-5xl font-bold mr-auto">ForestBot<span className="text-emerald-300">.</span></h1>
                        <p className="text-lg lg:text-xl text-neutral-400 mr-auto">Your Server's Silent Observer.</p>
                        <p className="text-base lg:text-md text-neutral-200 mr-auto font-poppins">
                            Bring ForestBot to your Minecraft and Discord servers for live player tracking. Whether it's tablists, session data, or chat logs, ForestBot provides real-time insights into player behavior, creating a complete archive of your server’s activity.</p>

                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 mt-7 mb-16 text-center">
                        <a
                            href="https://www.buymeacoffee.com/ForestBot"
                            target="_blank"
                            className="w-full lg:w-40 text-white py-3 px-6 rounded-md text-md duration-200  bg-gradient-to-br from-green-500 to-teal-500 hover:bg-green-600"
                        >
                            Donate
                        </a>
                        <Link
                            href="/features"
                            className="w-full lg:w-40 text-white py-3 px-6 rounded-md text-md duration-200 bg-gray-500 hover:bg-gray-600"
                        >
                            About
                        </Link>
                    </div>
                </div>

                <UserOrServerSearch />
            </div>

            <Suspense fallback={<ForestBotStatsLoadingSkeleton />}>
                <ForestBotStats />
            </Suspense>
        </div>
    )
}