

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
    }

];

const discordCommands = [
    {
        cmd: 'tablist',
        desc: 'Get an image of the in-game Tablist'
    },
    {
        cmd: 'stats',
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
            <div className="pt-[18.5vh] flex flex-col w-full items-center justify-center text-white text-center">
                <h1 className="text-7xl font-Protest">Commands<span className="text-emerald-400">.</span></h1>
                <p className="text-lg text-neutral-300">ForestBot Commands. Learn what the bot can do both in-game and on Discord<span className="text-emerald-400">.</span></p>
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