import Link from 'next/link';
import { FaDatabase, FaChartLine, FaServer, FaRobot, FaDiscord, FaUsers } from 'react-icons/fa';
import { FaChartSimple } from 'react-icons/fa6';

export default function FeaturesPage() {


    return (
        <div className="min-h-screen w-full lg:w-[60%] pb-[20%] mx-auto p-2">
            <div className="flex flex-col w-full  text-center text-lg text-neutral-300 lg:pt-[15%] lg:mt-0 mt-[45%]">

                <h1 className="text-7xl font-Protest text-neutral-100">Features<span className="text-emerald-400">.</span></h1>
                <p className="text-neutral-200">Here are some of the features that the bot has to offer<span className="text-emerald-400">.</span></p>

                <Link
                    href="/commands"
                    className="px-8 py-4 lg:w-[40%] mx-auto mt-3 border-emerald-500 border-[1px] font-Protest text-md text-white bg-emerald-500 hover:bg-emerald-600 shadow-md rounded-lg flex items-center justify-center gap-3 transition-all duration-200"
                >
                    Commands <FaRobot />
                </Link>
            </div>

            <div className="z-50 my-16 h-[1px] border-t-0 bg-transparent mx-auto w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-25"></div>


            <div className="flex flex-col lg:gap-12 gap-[10rem] lg:text-left text-center w-full p-4">
                <div className="flex w-full flex-col gap-4 lg:w-[56%] lg:mr-auto">
                    <h1 className="text-3xl text-white font-Protest text-center flex items-center justify-center gap-3">Comprehensive Data Tracking <FaDatabase className="text-emerald-400" /></h1>
                    <p className="text-neutral-300 text-lg">
                        ForestBot meticulously logs essential gameplay metrics, including playtime, joins, joindates, deaths, kills, messages, and advancements — everything visible to regular players. It seamlessly operates within Minecraft, capturing data like any other player.
                    </p>


                    <div className="h-[40%] w-[40%] ml-auto hidden lg:block">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800"><g strokeWidth="12" stroke="#34d399" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0 22" transform="rotate(360, 400, 400)"><path d="M102.91313052177429 100.42718505859375Q58.91313052177429 735.4271850585938 699.9131305217743 697.4271850585938 " marker-end="url(#SvgjsMarker2281)"></path></g><defs><marker markerWidth="12" markerHeight="12" refX="6" refY="6" viewBox="0 0 12 12" orient="auto" id="SvgjsMarker2281"><polygon points="0,12 4,6 0,0 12,6" fill="#34d399"></polygon></marker></defs></svg> */}


                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800"><g stroke-width="12" stroke="#34d399" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0 22" transform="rotate(360, 400, 400)"><path d="M101.5 101.5Q449.5 253.5 698.5 698.5 " marker-end="url(#SvgjsMarker3854)"></path></g><defs><marker markerWidth="12" markerHeight="12" refX="6" refY="6" viewBox="0 0 12 12" orient="auto" id="SvgjsMarker3854"><polygon points="0,12 4,6 0,0 12,6" fill="#34d399"></polygon></marker></defs></svg>
                    </div>
                </div>


                <div className="flex w-full flex-col gap-4 lg:w-[56%] lg:ml-auto">
                    <h1 className="text-3xl text-white font-Protest text-center flex items-center justify-center gap-3">Powerful Data Utilization <FaChartLine className="text-emerald-400" /></h1>
                    <p className="text-neutral-300 text-lg">
                        ForestBot transforms collected data into practical tools and visuals. With its Discord bot, enjoy live tablists and chat integration from Minecraft to Discord. Visualizations offer insights into server and player activity. Additionally, easily search individual users and servers on the website for detailed analysis.
                    </p>
                    <div className="h-[40%] w-[40%] mr-auto pt-10 hidden lg:block">

                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800"><g stroke-width="12" stroke="#34d399" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0 22" transform="rotate(83, 400, 400)"><path d="M101.5 101.5Q449.5 253.5 698.5 698.5 " marker-end="url(#SvgjsMarker3989)"></path></g><defs><marker markerWidth="12" markerHeight="12" refX="6" refY="6" viewBox="0 0 12 12" orient="auto" id="SvgjsMarker3989"><polygon points="0,12 4,6 0,0 12,6" fill="#34d399"></polygon></marker></defs></svg>
                    </div>

                </div>


                <div className=" w-full flex-col gap-4 lg:w-[56%] lg:mr-auto">
                    <h1 className="text-3xl text-white font-Protest text-center flex items-center justify-center gap-3">Versatile Compatibility <FaServer className="text-emerald-400" /></h1>
                    <p className="text-neutral-300 text-lg">
                        ForestBot works on any vanilla Minecraft server, ensuring accessibility across different communities. Whether it's a private server or a bustling public realm, ForestBot seamlessly integrates to enhance gameplay with its tracking and analysis capabilities.
                    </p>

                    <div className="h-[40%] w-[40%] ml-auto pt-10 hidden lg:flex">

                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800"><g stroke-width="12" stroke="#34d399" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0 22" transform="matrix(1,0,0,1,-13,0)"><path d="M101.5 101.5Q104.5 324.5 698.5 698.5 " marker-end="url(#SvgjsMarker5135)"></path></g><defs><marker markerWidth="12" markerHeight="12" refX="6" refY="6" viewBox="0 0 12 12" orient="auto" id="SvgjsMarker5135"><polygon points="0,12 4,6 0,0 12,6" fill="#34d399"></polygon></marker></defs></svg>
                    </div>
                </div>


                <div className="flex w-full flex-col gap-4 lg:w-[56%] lg:ml-auto">
                    <h1 className="text-3xl text-white font-Protest text-center flex items-center justify-center gap-3">View And Compare Statistics <FaChartSimple className="text-emerald-400" /></h1>
                    <p className="text-neutral-300 text-lg">
                        Easily view and compare your Minecraft stats with ForestBot's commands. In your Minecraft server, use "!playtime" or "!joindate" for instant stats. On Discord, use "/search" to find users, "/livechat" for real-time chat, and "/tablist" for a live tablist image. ForestBot makes data comparison simple, whether you're in-game or on Discord.
                    </p>

                    <Link href="/commands" className="flex flex-row text-white px-5 py-3 rounded w-2/3 mx-auto font-Protest items-center justify-center gap-2 text-center text-lg bg-emerald-500 duration-150 hover:bg-emerald-600">
                        View All Commands <FaRobot />
                    </Link>

                    <div className="h-[40%] w-[40%] mr-auto pt-10 hidden lg:flex">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800"><g stroke-width="12" stroke="#34d399" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0 22" transform="matrix(0.03489949670250108,0.9993908270190958,-0.9993908270190958,0.03489949670250108,772.7965321266379,-13.716129488638728)"><path d="M101.5 111.87919998168945Q384.5 -22.120800018310547 698.5 708.8791999816895 " marker-end="url(#SvgjsMarker5384)"></path></g><defs><marker markerWidth="12" markerHeight="12" refX="6" refY="6" viewBox="0 0 12 12" orient="auto" id="SvgjsMarker5384"><polygon points="0,12 4,6 0,0 12,6" fill="#34d399"></polygon></marker></defs></svg>
                    </div>
                </div>


                <div className="flex w-full flex-col gap-4 lg:w-[56%] lg:mr-auto">
                    <h1 className="text-3xl text-white font-Protest text-center flex items-center justify-center gap-3">Community <FaUsers className="text-emerald-400" /></h1>
                    <p className="text-neutral-300 text-lg">
                        ForestBot connects diverse Minecraft communities. By being present on multiple servers at once, it brings people together from different places. This creates opportunities for collaboration, competition, and friendships across servers. ForestBot makes Minecraft more fun and social for everyone involved.
                    </p>

                    <a href="https://discord.gg/2P8enrdY6t" className="flex flex-row text-white px-5 py-3 rounded w-2/3 mx-auto font-Protest items-center justify-center gap-2 text-center text-lg bg-[#7785cc] duration-150 hover:bg-sky-600">
                        Join The Discord <FaDiscord />
                    </a>

                    {/* <div className="h-[40%] w-[40%] mr-auto pt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800"><g stroke-width="12" stroke="#34d399" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0 22" transform="matrix(0.03489949670250108,0.9993908270190958,-0.9993908270190958,0.03489949670250108,772.7965321266379,-13.716129488638728)"><path d="M101.5 111.87919998168945Q384.5 -22.120800018310547 698.5 708.8791999816895 " marker-end="url(#SvgjsMarker5384)"></path></g><defs><marker markerWidth="12" markerHeight="12" refX="6" refY="6" viewBox="0 0 12 12" orient="auto" id="SvgjsMarker5384"><polygon points="0,12 4,6 0,0 12,6" fill="#34d399"></polygon></marker></defs></svg>
                    </div> */}
                </div>

                <div className="z-50 my-16 mt-[20%] h-[1px] border-t-0 bg-transparent mx-auto w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-25"></div>


                <div className="mx-auto text-center">
                    <h1 className="font-Protest text-white text-5xl">Want ForestBot For Your Minecraft Server <span className="text-emerald-400">?</span></h1>
                    <p className="text-neutral-200 text-xl">Join our <a href="https://discord.gg/2P8enrdY6t" className="underline-offset-2 underline text-[#7785cc] duration-150 hover:text-sky-700">Discord</a> and request to have him join your server <span className="text-emerald-400">!</span></p>
                </div>

                <div className="z-50 my-16 h-[1.5px] border-t-0 bg-transparent mx-auto w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-25"></div>


            </div>
        </div>
    )
}