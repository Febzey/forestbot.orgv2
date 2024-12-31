
import { FaDiscord, FaRobot } from 'react-icons/fa';
import Link from 'next/link';
const commandList = [
    {
        category: "General Commands",
        commands: [
            { name: "!addfaq", desc: "Adds a new FAQ entry." },
            { name: "!coords", desc: "Get the coordinates of the bot." },
            { name: "!discord", desc: "Shares the Discord server invite link." },
            { name: "!faq", desc: "Retrieve a FAQ entry by ID." },
            { name: "!help", desc: "Get the help message." },
            { name: "!iam", desc: "Set your `!whois` description." },
        ],
    },
    {
        category: "Player Stats Commands",
        commands: [
            { name: "!joindate", desc: "Retrieve the join date of a user." },
            { name: "!joins", desc: "Show the number of times a user has joined." },
            { name: "!kd", desc: "Display the kill/death ratio of a user." },
            { name: "!playtime", desc: "Retrieve the total playtime of a user." },
            { name: "!lastkill", desc: "Retrieve the last kill a user got." },
            { name: "!lastdeath", desc: "Retrieve the last death of a user." },
        ],
    },
    {
        category: "Chat and Messaging Commands",
        commands: [
            { name: "!firstmessage", desc: "Retrieve the first message of a user." },
            { name: "!offlinemsg", desc: "Send a message to a user who is offline." },
            { name: "!lastmessage", desc: "Retrieve the last message of a user." },
            { name: "!msgcount", desc: "Retrieve the number of messages a user has sent." },
            { name: "!wordcount", desc: "Show how many times a user has said a word." },
        ],
    },
    {
        category: "Utility Commands",
        commands: [
            { name: "!advancements", desc: "Retrieve the number of advancements a user has." },
            { name: "!lastadvancement", desc: "Retrieve the most recent advancement of a user." },
            { name: "!lastseen", desc: "Display the last time a user was seen online." },
            { name: "!sleep", desc: "Put the bot to sleep." },
            { name: "!top", desc: "Show the top players for a specific stat (e.g., kills, deaths, joins, playtime)." },
            { name: "!oldnames", desc: "Show the old names of a user." },
            { name: "!realname", desc: "Show the real name of a user." },
        ],
    },
    {
        category: "Fun Commands",
        commands: [
            { name: "!quote", desc: "Retrieve a random quote from a user." },
            { name: "!mount", desc: "Mount the nearest boat." },
            { name: "!whois", desc: "Show the description of a user." },
        ],
    },
    {
        category: "Ping and Leaderboard Commands",
        commands: [
            { name: "!ping", desc: "See a user's ping." },
            { name: "!bp", desc: "See who has the best ping." },
            { name: "!wp", desc: "See who has the worst ping." },
            { name: "!top kills", desc: "See the top 5 users with the most kills." },
            { name: "!top deaths", desc: "See the top 5 users with the most deaths." },
            { name: "!top joins", desc: "See the top 5 users with the most joins/leaves." },
            { name: "!top playtime", desc: "See the top 5 users with the most playtime." },
        ],
    },
    {
        category: "Bot Management Commands",
        commands: [
            { name: "!kill", desc: "Kill the bot." },
        ],
    },
];


const discordCommands = [
    {
        name: "/search [user]",
        description: "Query statistics about a specific user.",
    },
    {
        name: "/messages [user]",
        description: "Retrieve all messages from a specific user.",
    },
    {
        name: "/setup [mc_server] (channel)",
        description: "Configure the bot with an initial setup for your Minecraft server.",
    },
    {
        name: "/tablist",
        description: "Get the live tablist of the Minecraft server.",
    },
    {
        name: "/livechat [mc_server] (channel)",
        description: "Get a live chat feed of the Minecraft server in a Discord channel.",
    },
    {
        name: "/invite",
        description: "Get an invite link for ForestBot.",
    },
    {
        name: "/watcher add|remove <user>",
        description: "Notify you when a user joins the server.",
    },
    {
        name: "/playtimegraph [user]",
        description: "Generate a playtime graph for a specific user.",
    },
];


export default function CommandsPage() {

    return (
        <div className="lg:pt-[18.5vh] pt-[40%] flex flex-col w-full items-center justify-center text-center text-neutral-300 px-4">
            <h1 className="text-4xl md:text-7xl font-Protest text-white mb-6">
                Commands<span className="text-emerald-400">.</span>
            </h1>
            <p className="text-md md:text-lg text-neutral-400 max-w-xl mb-10">
                ForestBot Commands. A directory of Discord and in-game Minecraft commands<span className="text-emerald-400">.</span>
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
                <Link
                    href="/features"
                    className="px-6 py-3 md:px-8 md:py-4 w-full lg:w-auto border-emerald-500 border-[1px] font-Protest text-sm md:text-md text-white bg-emerald-500 hover:bg-emerald-600 shadow-md rounded-lg flex items-center justify-center gap-3 transition-all duration-200"
                >
                    Learn More About the Bot <FaRobot />
                </Link>

                <a
                    href="https://discord.com/oauth2/authorize?client_id=771280674602614825"
                    target="_blank"
                    className="px-6 py-3 md:px-8 md:py-4 w-full lg:w-auto border-[#7785cc] border-[1px] font-Protest text-sm md:text-md text-white bg-[#7785cc] hover:bg-[#6b77bb] shadow-md rounded-lg flex items-center justify-center gap-3 transition-all duration-200"
                >
                    Invite ForestBot to Discord <FaDiscord />
                </a>
            </div>



            <div className="w-[60%] hidden md:block h-[1px] bg-neutral-700 my-12 opacity-50"></div>

            <div className="flex flex-col gap-12 lg:mt-12 mt-32 text-left">
                <div className="w-full flex flex-col items-center justify-center gap-6">
                    <h2 className="text-3xl font-Protest text-neutral-100">
                        Minecraft Commands<span className="text-emerald-400">.</span>
                    </h2>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                        {commandList.map((category, index) => (
                            <div key={index} className="w-full bg-zinc-800 rounded shadow-lg p-5">
                                <h3 className="text-2xl font-Protest text-neutral-100 mb-4 underline underline-offset-4">
                                    {category.category}
                                </h3>
                                <div className="flex flex-col gap-4">
                                    {category.commands.map((command, cmdIndex) => (
                                        <div key={cmdIndex} className="w-full">
                                            <p className="text-xl font-Protest text-neutral-200">
                                                {command.name}
                                            </p>
                                            <p className="text-md font-Protest text-neutral-400">
                                                {command.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full flex flex-col items-center justify-center gap-6">
                    <h2 className="text-3xl font-Protest text-neutral-100">
                        Discord Commands<span className="text-emerald-500">.</span>
                    </h2>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                        {discordCommands.map((command, index) => (
                            <div key={index} className="w-full bg-zinc-800 rounded shadow-lg p-5">
                                <p className="text-xl font-Protest text-neutral-200">
                                    {command.name}
                                </p>
                                <p className="text-md font-Protest text-neutral-400">
                                    {command.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div >
    )
}