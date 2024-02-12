import Image from "next/image"
import UserDataGraphs from "./components/graph/userDataGraphsAssembler";
import ServerSelectDropDown from "./components/serverSelectDropDown";
import { Suspense } from "react";
import { GeneralStatsSection } from "./components/general_stats_card";
import { GraphLoadingSkeleton } from "./loading";
import MessageHistoryCard from "./components/playerHistory/messages_history";
import AdvancementHistoryCard from "./components/playerHistory/advancement_history";
import PlayerDeathHistory from "./components/playerHistory/death_history";
import PlayerKillHistory from "./components/playerHistory/kill_history";
import { api } from "../../../../apiGetter";

import { FaCircleDot } from "react-icons/fa6"
import moment from "moment";
//TODO: 
//Times user has been seen in past week,
//average playtime per day,
//general activity (what does this mean?)
//stats as in retention, average day played, average time played: example: most active around 7pm on weekdays; 2pm on weekends type thing.

async function OnlineStatus({ username, lastseen }: { username: string, lastseen: number }) {

    const onlineCheck = await api.getOnlineCheck(username);
    console.log(onlineCheck)
    return (
        <div className="mx-auto pt-5 flex text-sm font-Protest text-zinc-200 flex-row gap-2 items-center justify-center">
            {
                onlineCheck.online === "true"
                    ?
                    <>
                        <FaCircleDot className="text-green-400" />
                        <p>{onlineCheck.server}</p>
                        <p>For {moment(lastseen).format('MMM, Do, YYYY')}</p>
                    </>
                    :
                    <>
                        <FaCircleDot className="text-red-400" />
                        <p>offline</p>
                    </>
            }
        </div>
    )
}

export default function UserProfileCard({ userData, availableServers }: { userData: PlayerData, availableServers: string[] }) {
    return (
        <div className="w-full pb-[5%]">

            {
                /**
                 * User Profile Card (Avatar, Username, Server Select Dropdown)
                 */
            }
            <div className="gap-1 flex items-center flex-col  relative mb-auto mt-[6%] ">
                <Image className="bg-zinc-800 p-4 mb-5 rounded-full" alt="MinecraftRender" width={100} height={100} src={`https://skins.danielraybone.com/v1/render/head/${userData.Username}`} />

                <h1 className="font-Protest text-6xl">{userData.Username}</h1>
                <ServerSelectDropDown servers={availableServers} currentServer={userData.MCServer} username={userData.Username} />
                <OnlineStatus username={userData.Username} lastseen={parseInt(userData.LastSeen.String)} />

            </div>

            <div className="w-full  p-8 flex flex-col items-center justify-center">

                <div className="flex w-full mt-[3%] mb-auto m-4 shadow-xl shadow-zinc-900  rounded">

                    {
                        /**
                         * General Stats Card
                         */
                    }
                    <div className="flex lg:w-1/3 lg:min-w-[33.333%] w-full bg-zinc-700 p-8 rounded rounded-r-none flex-col gap-8">
                        <GeneralStatsSection {...userData} />
                    </div>


                    {
                        /**
                         * player activity Graph
                         */
                    }
                    <Suspense fallback={<GraphLoadingSkeleton />}>
                        <div className="bg-zinc-700/60 rounded rounded-l-none flex w-full p-4">
                            <UserDataGraphs username={userData.Username} server={userData.MCServer} />
                            {/* <GenerateGraphServerSide username={userData.Username} server={userData.MCServer} /> */}
                        </div>
                    </Suspense>

                </div>

                {
                    /**
                     * Messages, advancements, kills and deaths here.
                     */
                }
                <div className="w-full flex h-auto min-h-[100vh] m-4 bg-zinc-700 rounded p-4 shadow-2xl">
                    <PlayerHistory uuid={userData.UUID.String} username={userData.Username} server={userData.MCServer} />
                </div>


            </div>

        </div>
    )
}


function PlayerHistory({ uuid, username, server }: { uuid: string, username: string, server: string }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Suspense fallback={<p>Loading Messages...</p>}>
                <MessageHistoryCard username={username} server={server} />
            </Suspense>

            <Suspense fallback={<p>Loading Advancement History...</p>}>
                <AdvancementHistoryCard uuid={uuid} server={server} />
            </Suspense>


            <Suspense fallback={<p>Loading Death history.</p>}>
                <PlayerDeathHistory uuid={uuid} server={server} />
            </Suspense>

            <Suspense fallback={<p>Loading Kills.</p>}>
                <PlayerKillHistory uuid={uuid} server={server} />
            </Suspense>
        </div>
    )
}