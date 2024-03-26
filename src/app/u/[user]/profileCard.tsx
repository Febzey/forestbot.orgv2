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

async function OnlineStatus({ username, availableServers }: { username: string, availableServers: PlayerData[] }) {

    const onlineCheck = await api.getOnlineCheck(username);
    console.log(onlineCheck)

    let lastseen;

    if (onlineCheck?.server) {
        let str = availableServers.find(user => user.MCServer === onlineCheck.server)?.LastSeen.String;
        lastseen = str ? moment(parseInt(str)).fromNow() : "N/A";
    }

    return (
        <div className="mx-auto pt-5 flex text-sm font-Protest text-zinc-200 flex-row gap-2 items-center justify-center">
            {
                onlineCheck.online === "true"
                    ?
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-1 items-center justify-center">
                            <FaCircleDot className="text-green-400" />
                            <p>{onlineCheck.server}</p>
                        </div>
                        <p>{lastseen}</p>
                    </div>
                    :
                    <>
                        <FaCircleDot className="text-red-400" />
                        <p>OFFLINE</p>
                    </>
            }
        </div>
    )
}

export default function UserProfileCard({ userData, availableServers }: { userData: PlayerData, availableServers: PlayerData[] }) {
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
                <p className="text-zinc-400 text-xs pb-4">({userData.UUID.String})</p>
                <ServerSelectDropDown servers={availableServers} currentServer={userData.MCServer} />
                <OnlineStatus username={userData.Username} availableServers={availableServers} />

            </div>

            <div className="w-full  p-8 flex flex-col items-center justify-center">

                <div className="flex lg:flex-row lg:gap-0 gap-4 flex-col w-full mt-[3%] mb-auto m-4 shadow-xl shadow-zinc-900  rounded">

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
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