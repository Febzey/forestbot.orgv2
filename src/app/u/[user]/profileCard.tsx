

import moment from "moment";
import Image from "next/image"
import { api } from "../../../../apiGetter";
import ServerSelectDropDown from "./components/serverSelectDropDown";
import { Suspense } from "react";
import UserDataGraphs from "./components/userDataGraphs";
import { FaSpinner } from "react-icons/fa";

//TODO: 
//Times user has been seen in past week,
//average playtime per day,
//general activity (what does this mean?)
//stats as in retention, average day played, average time played: example: most active around 7pm on weekdays; 2pm on weekends type thing.

export default function UserProfileCard({ userData, availableServers }: { userData: PlayerData, availableServers: string[] }) {
    return (
        <div className="w-full pb-[5%]">

            <div className="gap-1 flex items-center flex-col  relative mb-auto mt-[6%] ">
                <Image className="bg-zinc-800 p-4 mb-5 rounded-full" alt="MinecraftRender" width={100} height={100} src={`https://skins.danielraybone.com/v1/render/head/${userData.Username}`} />
                <h1 className="font-Protest text-6xl">{userData.Username}</h1>
                <ServerSelectDropDown servers={availableServers} currentServer={userData.MCServer} username={userData.Username} />
            </div>
            <div className="flex mt-[3%] mb-auto m-4 p-8 lg:m-10">
                <GeneralStatsSection {...userData} />

                {
                    //The graph needs to be made in a client component,
                    //so we will load the data in a seperate server side component,
                    //then pass the date to the client component.
                    //and have a react suspense fallback for the graph.
                }
                <Suspense fallback={<GraphLoadingSkeleton />}>
                    <GenerateGraphServerSide username={userData.Username} server={userData.MCServer} />
                </Suspense>
            </div>
        </div>
    )
}

async function getGraphData(username: string, server: string) {
    // try {
    //     return await api.getGraphData(username, server);
    // } catch (err) {
    //     return null;
    // }
    return;
};

async function GraphLoadingSkeleton() {
    return (
        <div className="bg-zinc-700/60 rounded rounded-lnone flex w-full p-4">
            <div className="w-full h-full flex items-center justify-center bg-zinc-800 rounded rounded-r-none p-8 shadow-2xl">
                <FaSpinner className="animate-spin text-white text-6xl" />
            </div>
        </div>
    )
}

async function GenerateGraphServerSide({ username, server }: { username: string, server: string }) {
    const data = await getGraphData(username, server);

    return (
        <div className="bg-zinc-700/60 rounded rounded-lnone flex w-full p-4">
            <UserDataGraphs />

        </div>
    )
};







async function getQuote(username: string, server: string) {
    try {
        return await api.getQuote(username, server);
    } catch (err) {
        return null;
    }
}

async function GeneralStatsSection(data: PlayerData) {
    const { Username, Joindate, LastSeen, Playtime, Joins, Leaves, Kills, Deaths, LastDeathTime, UUID, LastDeathString, MCServer } = data

    //const [quote, setQuote] = useState("N/A");

    const formattedPlaytime = (pt: number) => {
        const duration = moment.duration(pt);

        const days = Math.floor(duration.asDays());
        const hours = Math.floor(duration.asHours()) % 24;
        const minutes = Math.floor(duration.asMinutes()) % 60;

        return `${days} days ${hours} hours ${minutes} minutes`;
    }

    const formattedJoindate = (jd: string) => {
        if (/^\d+$/.test(jd)) {
            return `${moment(parseInt(jd)).format('MMM, Do, YYYY')}, ${moment(parseInt(jd)).fromNow()}`
        } else {
            return jd
        }
    }

    const formattedLastDeath = (lastDeathTime: number, lastdeathString: string) => {
        if (lastDeathTime) {
            return `${lastdeathString} - ${moment(lastDeathTime).format('MMM, Do, YYYY')}, ${moment(lastDeathTime).fromNow()}`
        } else {
            return "N/A"
        }
    }

    return (
        <div className="flex lg:w-1/3 lg:min-w-[33.333%] w-full bg-zinc-700 p-8 rounded rounded-r-none flex-col gap-8 shadow-xl shadow-zinc-900">
            <h1 className="font-Protest text-4xl underline-offset-[8px] decoration-[8px] underline decoration-emerald-400">General Statistics</h1>
            <div className="grid grid-cols-2 gap-8">
                <GeneralStatBlock stat={Username} label={"Username"} style={["text-[#f6e05e]", "border-l-[#f6e05e]"]} />
                <GeneralStatBlock stat={formattedJoindate(Joindate)} label={"Join Date"} style={["text-[#84cc16]", "border-l-[#84cc16]"]} />
                <GeneralStatBlock stat={`${moment(parseInt(LastSeen.String)).format('MMM, Do, YYYY')}, ${moment(parseInt(LastSeen.String)).fromNow()}`} label={"Last Seen"} style={["text-[#22c55e]", "border-l-[#22c55e]"]} />
                <GeneralStatBlock stat={formattedPlaytime(Playtime)} label={"Playtime"} style={['text-[#06b6d4]', "border-l-[#06b6d4]"]} />
                <GeneralStatBlock stat={Kills.toString()} label={"Kills"} style={['text-[#f87171]', "border-l-[#f87171]"]} />
                <GeneralStatBlock stat={Deaths.toString()} label={"Deaths"} style={['text-[#f87171]', "border-l-[#f87171]"]} />
                <GeneralStatBlock stat={Joins.toString()} label={"Joins"} style={['text-[#60a5fa]', "border-l-[#60a5fa]"]} />
                <GeneralStatBlock stat={Joins.toString()} label={"Leaves"} style={['text-[#60a5fa]', "border-l-[#60a5fa]"]} />
            </div>

            <Suspense fallback={<p>Loading Last Kill...</p>}>
                <LastKillBlock username={Username} server={MCServer} />
            </Suspense>

            <GeneralStatLongBlock stat={formattedLastDeath(LastDeathTime, LastDeathString.String)} label="Last Death" style={["text-[#f43f5e]", "border-l-[#f43f5e]"]} />

            <Suspense fallback={<p>Loading Random Quote...</p>}>
                <QuoteBlock username={Username} server={MCServer} />
            </Suspense>

            <Suspense fallback={<p>Loading Last Advancement...</p>}>
                <LastAdvancementBlock username={Username} server={MCServer} />
            </Suspense>


        </div>
    )
}

async function QuoteBlock({ username, server }: { username: string, server: string }) {
    const quoteData = await getQuote(username, server);

    const formattedQuote = async () => {
        if (!quoteData || !quoteData.message) return "N/A";
        return `${quoteData.message} - ${moment(parseInt(quoteData.Date.String)).format('MMM, Do, YYYY')}, ${moment(parseInt(quoteData.Date.String)).fromNow()}`;
    }

    return (
        <div className={`border-l-[#f59e0b] w-full bg-zinc-800 shadow-lg rounded border-l-8 flex flex-col justify-center p-2 pr-3`}>
            <p className={`text-[#f59e0b] border-0 text-xs font-Protest`}>Random Quote</p>
            <p className="text-pretty text-white">{formattedQuote()}</p>
        </div>
    )
}

async function LastAdvancementBlock({ username, server }: { username: string, server: string }) {
    const uuid = await api.convertUsernameToUuid(username);
    const advancementData = await api.getAdvancements(uuid as string, server, 1, "DESC");
    const formattedAdvancement = async () => {
        if (!advancementData || advancementData.length === 0) return "N/A";
        const regex = /\[([^\]]+)\]/g;

        const highlightedText = advancementData[0].advancement.replace(
            regex,
            '<span class="text-purple-500">[$1]</span>'
        );

        const formattedText = `${highlightedText} - ${moment(parseInt(advancementData[0].time)).format('MMM, Do, YYYY')}, ${moment(parseInt(advancementData[0].time)).fromNow()}`;

        return formattedText;
    };

    return (
        <div className={`border-l-[#a855f7] w-full bg-zinc-800 shadow-lg rounded border-l-8 flex flex-col justify-center p-2 pr-3`}>
            <p className={`text-[#a855f7] border-0 text-xs font-Protest`}>Last Advancement</p>
            <p
                className="text-pretty text-white"
                dangerouslySetInnerHTML={{ __html: await formattedAdvancement() }}
            ></p>
        </div>
    );
}

async function LastKillBlock({ username, server }: { username: string, server: string }) {
    const uuid = await api.convertUsernameToUuid(username);
    const lastKillData = await api.getKills(uuid as string, server, 1, "DESC");

    const formattedLastKill = () => {
        if (!lastKillData || lastKillData.length === 0) return "N/A";
        return `${lastKillData[0].death_message} - ${moment(parseInt(lastKillData[0].time)).format('MMM, Do, YYYY')}, ${moment(parseInt(lastKillData[0].time)).fromNow()}`;
    }

    return (
        <div className={`border-l-[#14b8a6] w-full mx-auto bg-zinc-800 shadow-lg rounded border-l-8 flex flex-col justify-center p-2 pr-3`}>
            <p className={`text-[#14b8a6] text-xs font-Protest`}>Last Kill</p>
            <p className="text-pretty text-white">{formattedLastKill()}</p>
        </div>
    )
}


function GeneralStatBlock({ stat, label, style }: { stat: string, label: string, style: string[] }) {
    return (
        <div className={`${style.join(' ')} w-full bg-zinc-800 shadow-lg rounded border-l-8 flex flex-col justify-center p-2 pr-3`}>
            <p className={`border-0 text-xs font-Protest`}>{label}</p>
            <p className="text-pretty text-white">{stat}</p>
        </div>
    )
}

function GeneralStatLongBlock({ stat, label, style }: { stat: string, label: string, style: string[] }) {
    return (
        <div className={`${style.join(' ')} w-full mx-auto bg-zinc-800 shadow-lg rounded border-l-8 flex flex-col justify-center p-2 pr-3`}>
            <p className={`border-0 text-xs font-Protest`}>{label}</p>
            <p className="text-pretty text-white">{stat}</p>
        </div>
    )
}

