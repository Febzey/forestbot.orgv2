import moment from "moment";
import { Suspense } from "react";
import { api } from "../../../../apiGetter";

interface QuoteData {
    message: string;
    date: string;
}

interface AdvancementData {
    advancement: string;
    time: number;
}

interface KillData {
    death_message: string;
    time: number;
}

interface PlayerData {
    username: string;
    joindate: string;
    lastseen: string;
    playtime: number;
    joins: number;
    kills: number;
    deaths: number;
    lastdeathTime: number;
    lastdeathString: string;
    mc_server: string;
    uuid: string
}

// Component to display a random quote for the user
async function QuoteBlock({ username, server }: { username: string, server: string }) {
    const quoteData: QuoteData = await api.getQuote(username, server) || { message: "N/A", date: "0" };

    const formattedQuote = () => {
        if (!quoteData || !quoteData.message) return "N/A";
        return `${quoteData.message} - ${moment(parseInt(quoteData.date)).format('MMM, Do, YYYY')}, ${moment(parseInt(quoteData.date)).fromNow()}`;
    };

    return (
        <div className="border-l-[#f59e0b] w-full bg-zinc-800 shadow-lg rounded border-l-8 flex flex-col justify-center p-2 pr-3">
            <p className="text-[#f59e0b] border-0 text-xs font-Protest">Random Quote</p>
            <p className="text-pretty text-white">{formattedQuote()}</p>
        </div>
    );
}

// Component to display the last advancement made by the user
async function LastAdvancementBlock({ username, server, uuid }: { username: string, server: string, uuid: string }) {
    const advancementData: AdvancementData[] = await api.getAdvancements(uuid, server, 1, "DESC") || [];

    const formattedAdvancement = () => {
        if (!advancementData || advancementData.length === 0) return "N/A";
        const regex = /\[([^\]]+)\]/g;

        const highlightedText = advancementData[0].advancement.replace(
            regex,
            '<span class="text-purple-500">[$1]</span>'
        );

        return `${highlightedText} - ${moment(Number(advancementData[0].time)).format('MMM, Do, YYYY')}, ${moment(Number(advancementData[0].time)).fromNow()}`;
    };

    return (
        <div className="border-l-[#a855f7] w-full bg-zinc-800 shadow-lg rounded border-l-8 flex flex-col justify-center p-2 pr-3">
            <p className="text-[#a855f7] border-0 text-xs font-Protest">Last Advancement</p>
            <p
                className="text-pretty text-white"
                dangerouslySetInnerHTML={{ __html: formattedAdvancement() }}
            ></p>
        </div>
    );
}

// Component to display the last kill made by the user
async function LastKillBlock({ username, server, uuid }: { username: string, server: string, uuid: string }) {
    const lastKillData: KillData[] = await api.getKills(uuid, server, 1, "DESC") || [];

    const formattedLastKill = () => {
        if (!lastKillData || lastKillData.length === 0) return "N/A";
        return `${lastKillData[0].death_message} - ${moment(Number(lastKillData[0].time)).format('MMM, Do, YYYY')}, ${moment(Number(lastKillData[0].time)).fromNow()}`;
    };

    return (
        <div className="border-l-[#14b8a6] w-full mx-auto bg-zinc-800 shadow-lg rounded border-l-8 flex flex-col justify-center p-2 pr-3">
            <p className="text-[#14b8a6] text-xs font-Protest">Last Kill</p>
            <p className="text-pretty text-white">{formattedLastKill()}</p>
        </div>
    );
}

// Component to display a general statistic with a short label
function GeneralStatBlock({ stat, label, style }: { stat: string, label: string, style: string[] }) {
    return (
        <div className={`${style.join(' ')} w-full bg-zinc-800 shadow-lg rounded border-l-8 flex flex-col justify-center p-2 pr-3`}>
            <p className="border-0 text-xs font-Protest">{label}</p>
            <p className="text-pretty text-white">{stat}</p>
        </div>
    );
}

// Component to display a general statistic with a longer label
function GeneralStatLongBlock({ stat, label, style }: { stat: string, label: string, style: string[] }) {
    return (
        <div className={`${style.join(' ')} w-full mx-auto bg-zinc-800 shadow-lg rounded border-l-8 flex flex-col justify-center p-2 pr-3`}>
            <p className="border-0 text-xs font-Protest">{label}</p>
            <p className="text-pretty text-white">{stat}</p>
        </div>
    );
}

// Function to format playtime from milliseconds to a readable format
const formattedPlaytime = (pt: number) => {
    const duration = moment.duration(pt);
    const days = Math.floor(duration.asDays());
    const hours = Math.floor(duration.asHours()) % 24;
    const minutes = Math.floor(duration.asMinutes()) % 60;
    return `${days} days ${hours} hours ${minutes} minutes`;
};

// Function to format join date from a timestamp to a readable format
const formattedJoindate = (jd: string) => {
    if (/^\d+$/.test(jd)) {
        return `${moment(parseInt(jd)).format('MMM, Do, YYYY')}, ${moment(parseInt(jd)).fromNow()}`;
    } else {
        return jd;
    }
};

// Function to format the last death information
const formattedLastDeath = (lastDeathTime: number, lastdeathString: string) => {
    if (lastDeathTime) {
        return `${lastdeathString} - ${moment(lastDeathTime).format('MMM, Do, YYYY')}, ${moment(lastDeathTime).fromNow()}`;
    } else {
        return "N/A";
    }
};

/**
 * Component for our main statistics card. show on the left side of the users profile page.
 * this will be rendered in profileCard.tsx
 */
export async function GeneralStatsSection(data: PlayerData) {
    const { username, joindate, lastseen, playtime, joins, kills, deaths, lastdeathTime, lastdeathString, mc_server, uuid } = data;

    return (
        <>
            <h1 className="font-Protest text-4xl p-4 pl-0 underline-offset-[8px] decoration-[8px] underline decoration-emerald-400">General Statistics</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <GeneralStatBlock stat={username} label={"Username"} style={["text-[#f6e05e]", "border-l-[#f6e05e]"]} />
                <GeneralStatBlock stat={formattedJoindate(joindate)} label={"Join Date"} style={["text-[#84cc16]", "border-l-[#84cc16]"]} />
                <GeneralStatBlock stat={`${moment(parseInt(lastseen)).format('MMM, Do, YYYY')}, ${moment(parseInt(lastseen)).fromNow()}`} label={"Last Seen"} style={["text-[#22c55e]", "border-l-[#22c55e]"]} />
                <GeneralStatBlock stat={formattedPlaytime(playtime)} label={"Playtime"} style={['text-[#06b6d4]', "border-l-[#06b6d4]"]} />
                <GeneralStatBlock stat={kills.toString()} label={"Kills"} style={['text-[#f87171]', "border-l-[#f87171]"]} />
                <GeneralStatBlock stat={deaths.toString()} label={"Deaths"} style={['text-[#f87171]', "border-l-[#f87171]"]} />
                <GeneralStatBlock stat={joins.toString()} label={"Joins"} style={['text-[#60a5fa]', "border-l-[#60a5fa]"]} />
                <GeneralStatBlock stat={joins.toString()} label={"Leaves"} style={['text-[#60a5fa]', "border-l-[#60a5fa]"]} />
            </div>
            <GeneralStatLongBlock stat={formattedLastDeath(lastdeathTime, lastdeathString)} label="Last Death" style={["text-[#f43f5e]", "border-l-[#f43f5e]"]} />

            <Suspense fallback={<p>Loading Last Kill...</p>}>
                <LastKillBlock username={username} server={mc_server} uuid={uuid} />
            </Suspense>

            <Suspense fallback={<p>Loading Random Quote...</p>}>
                <QuoteBlock username={username} server={mc_server} />
            </Suspense>

            <Suspense fallback={<p>Loading Last Advancement...</p>}>
                <LastAdvancementBlock username={username} server={mc_server} uuid={uuid} />
            </Suspense>
        </>
    );
}
