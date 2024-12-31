import Link from "next/link";
import { FaDiscord } from "react-icons/fa"

export default function NavBar() {
    return (
        <div className="w-full min-h-24 pt-10 absolute">
            <div className="flex flex-col md:flex-row px-5 md:px-10 lg:px-[10%] justify-between items-center w-full">
                <div className="flex items-center justify-between gap-4">
                    <Link href="/" className="font-Protest text-white text-2xl md:text-3xl mb-4 md:mb-0 flex items-center gap-2">
                        ForestBot
                    </Link>
                    <a href="https://discord.gg/2P8enrdY6t" target="_blank" className="text-[#7289da]">
                        <FaDiscord className="text-[2rem] md:hidden mb-4" />
                    </a>
                </div>
                <div className="hidden md:flex flex-col md:flex-row gap-3 ml-auto">
                    <a href="https://discord.gg/2P8enrdY6t" target="_blank" className="flex hover:bg-[#a7b1dd] bg-[#7785cc] p-2 px-4 rounded-full text-white flex-row items-center duration-200 justify-center gap-2">
                        <FaDiscord className="text-[2rem] md:text-[2.6rem]" />
                        Join our discord!
                    </a>
                </div>
            </div>
        </div>
    )
}