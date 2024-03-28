import Link from "next/link";
import { FaDiscord } from "react-icons/fa"

export default function NavBar() {
    return (
        <div className="w-full min-h-24 pt-10 absolute">
            <div className="flex flex-row justify-between px-10 lg:justify-evenly items-center w-full ">
                <Link href="/" className="font-Protest text-white text-3xl">ForestBot</Link>
                <div className="flex flex-row gap-3">
                    <a href="https://discord.gg/2P8enrdY6t" target="_blank" className="flex hover:text-[#7785cc]  text-white  flex-row items-center duration-200 justify-center gap-2">
                        <FaDiscord className=" text-[2.6rem] " />
                        Join our discord!
                    </a>
                </div>
            </div>
        </div>
    )
}