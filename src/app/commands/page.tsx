
import { FaDiscord, FaRobot } from 'react-icons/fa';
import Link from 'next/link';
const commandList = [
    {
        cmd: 'ping',
        desc: 'See a users ping',
    },
    {
        cmd: 'bp',
        desc: 'See who has the best ping'
    },
    {
        cmd: 'joindate',
        desc: 'See when I first saw a user'
    },
    {
        cmd: 'lastseen',
        desc: 'Check when I lastseen a user'
    },
    {
        cmd: 'joins',
        desc: 'See how many times a user has joined',
    },
    {
        cmd: 'kd',
        desc: 'See how many kills/deaths a user has.'
    },
    {
        cmd: 'kill',
        desc: 'kill the bot'
    },
    {
        cmd: 'lastdeath',
        desc: 'see a users lastdeath'
    },
    {
        cmd: 'msgcount',
        desc: 'See a users message count'
    },
    {
        cmd: 'playtime',
        desc: 'See how long a user has been playing'
    },
    {
        cmd: 'quote',
        desc: 'Bring up a random message'
    },
    {
        cmd: 'top kills',
        desc: 'See the top 5 users with the most kills'
    },
    {
        cmd: 'top deaths',
        desc: 'See the top 5 users with the most deaths'
    },
    {
        cmd: 'top joins',
        desc: 'See the top 5 users with the most joins/leaves'
    },
    {
        cmd: 'top playtime',
        desc: "See the top 5 users with the most playtime"
    },
    {
        cmd: 'urban',
        desc: 'Search the urban dictionary',
    },
    {
        cmd: 'wp',
        desc: 'See who has the worst ping'
    },
    {
        cmd: 'offlinemsg <user> <message>',
        desc: 'Send a user an offlinemsg'
    }, 
    {
        cmd: 'lastadvancement <user>',
        desc: 'See the last advancement a user got'
    },
    {
        cmd: 'advancements <user>',
        desc: 'See the number of advancements a user has'
    },
    {
        cmd: 'lastkill',
        desc: 'See the last kill a user'
    },
    {
        cmd: 'iam',
        desc: 'Set a self user description'
    },
    {
        cmd: 'whois',
        desc: 'Get a users description'
    },
    {
        cmd: 'faq',
        desc: 'Get a list of frequently asked questions'
    },
    {
        cmd: 'faqadd <text>',
        desc: 'Add a frequently asked question'
    },
    {
        cmd: 'wordcount <user> <text>',
        desc: 'Counts the number of words a user has sent'
    },
    {
        cmd: 'lastmessage',
        desc: 'See the last message a user sent'
    }

];

const discordCommands = [
    {
        cmd: 'tablist',
        desc: 'Get an image of the in-game Tablist'
    },
    {
        cmd: 'search',
        desc: 'Get all statistics for the user you searched'
    },
    {
        cmd: 'livechat',
        desc: 'Setup a live chat bridge to interact with game chat'
    },
    {
        cmd: 'setup',
        desc: 'Initialize me for the Minecraft server you use me for'
    },
    {
        cmd: 'info',
        desc: 'Get some basic info about the bot',
    }
];


export default function CommandsPage() {

    return (
        <div className="w-full min-h-screen lg:w-[50%] mx-auto  p-8">
            <div className="pt-[18.5vh] flex flex-col w-full items-center justify-center text-center text-lg text-neutral-300">
                <h1 className="text-7xl font-Protest text-white">Commands<span className="text-emerald-400">.</span></h1>
                <p>ForestBot Commands. A Directory of discord and in-game Minecraft Commands<span className="text-emerald-400">.</span></p>
                <div className="flex flex-col gap-2 items-center justify-center">

                    <p>Click the button below to learn more about the bot and it's features.</p>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                <Link href="/features" className="px-8 duration-150 hover:bg-emerald-500 py-4 w-auto border-emerald-500 border-[1px] mt-3 font-Protest text-md shadow-xl rounded flex items-center flex-row justify-center gap-2">
                        Learn more about the bot <FaRobot/>
                    </Link>

                    <a href="https://discord.com/oauth2/authorize?client_id=771280674602614825" target='_blank' className="px-8 duration-150 hover:bg-[#7785cc] py-4 w-auto border-[#7785cc] border-[1px] mt-3 font-Protest text-md shadow-xl rounded flex items-center flex-row justify-center gap-2">
                        Invite ForestBot To Discord <FaDiscord/>
                    </a>
                </div>
                <div className="z-50 my-16 h-[1px] border-t-0 bg-transparent mx-auto w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-25"></div>

                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start justify-evenly mt-12">
                <div className="w-full flex flex-col items-center justify-center gap-5 mt-10">
                    <h2 className="text-4xl font-Protest text-neutral-100">Minecraft Commands<span className="text-emerald-400">.</span></h2>
                    <div className="w-full flex flex-col items-center justify-center gap-5">
                        {commandList.map((command, index) => (
                            <div key={index} className="w-full bg-zinc-800 rounded shadow-lg p-5">
                                <p className="text-2xl font-Protest text-neutral-200"><span className="text-emerald-400">!</span>{command.cmd}</p>
                                <p className="text-lg font-Protest text-neutral-400">{command.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full flex flex-col items-center justify-center gap-5 mt-10">
                    <h2 className="text-4xl font-Protest text-neutral-100">Discord Commands<span className="text-emerald-500">.</span></h2>
                    <div className="w-full flex flex-col items-center justify-center gap-5">
                        {discordCommands.map((command, index) => (
                            <div key={index} className="w-full bg-zinc-800 rounded shadow-lg p-5">
                                <p className="text-2xl font-Protest text-neutral-200"><span className="text-emerald-500">/</span>{command.cmd}</p>
                                <p className="text-lg font-Protest text-neutral-400">{command.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}