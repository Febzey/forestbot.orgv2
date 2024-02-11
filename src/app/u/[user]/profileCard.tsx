import Image from "next/image"
import UserDataGraphs from "./components/graph/userDataGraphsAssembler";
import ServerSelectDropDown from "./components/serverSelectDropDown";
import { Suspense } from "react";
import { GeneralStatsSection } from "./components/general_stats_card";
import { GraphLoadingSkeleton } from "./loading";
import { api } from "../../../../apiGetter";
import moment from "moment";
import MessageHistoryCard from "./components/playerHistory/messages_history";
import AdvancementHistoryCard from "./components/playerHistory/advancement_history";

//TODO: 
//Times user has been seen in past week,
//average playtime per day,
//general activity (what does this mean?)
//stats as in retention, average day played, average time played: example: most active around 7pm on weekdays; 2pm on weekends type thing.

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
                    {/* <h1 className="text-2xl font-Protest">Messages, Advancements, Kills and Deaths</h1>
                    <p className="text-pretty">Coming soon...</p> */}

                    <PlayerHistory uuid={userData.UUID.String} username={userData.Username} server={userData.MCServer} />

                </div>


            </div>

        </div>
    )
}


// async function getMessages(username: string, server: string) {

//     return [];
// }

// async function getAdvancements(uuid: string, server: string) { 

//     return;
// }

// async function getKills(uuid: string, server: string) { 

//     return;
// }

// async function getDeaths(uuid: string, server: string) {

//     return;
// }

function PlayerHistory({ uuid, username, server }: { uuid: string, username: string, server: string }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Suspense fallback={<p>Loading Messages...</p>}>
                <MessageHistoryCard username={username} server={server} />
            </Suspense>

            <Suspense fallback={<p>Loading Advancement History...</p>}>
                <AdvancementHistoryCard uuid={uuid} server={server}/>
            </Suspense>
        </div>
    )
}

// export async function PlayerMessagesCard({ username, server }: { username: string, server: string }) {

//     const messages = await api.getMessages(username, server, 100, "DESC");
//     if (!messages || messages.length === 0) {
//         return (
//             <div className="">
//                 Messages could not be loaded.
//             </div>

//         )
//     }

//     return (
//         <div className="flex flex-col overflow-hidden gap-3">
//             <h3 className="font-Protest text-3xl">Message History (100)</h3>
//             <ul className="bg-zinc-800 overflow-y-scroll p-4 flex gap-2 flex-col rounded">
//                 {
//                     messages.map((message, index) => {
//                         return (
//                             <li key={index} className="flex flex-row justify-between items-center bg-zinc-700/60 p-2 rounded">
//                                 <span className="max-w-[70%]">{message.message}</span>

//                                 <span className="italic text-zinc-300 text-xs">... {moment(parseInt(message.Date.String)).format("MMM, Do, YYYY HH:mm")}</span>
//                             </li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }