import Link from "next/link";
import { FaDiscord } from "react-icons/fa"

export default function NavBar() {
    return (
        <div className="w-full min-h-24 pt-10">
            <div className="flex flex-row justify-evenly items-center w-full ">
                <Link href="/" className="font-Protest text-white text-3xl">ForestBot</Link>
                <div className="flex flex-row gap-3">
                    {/* <a href="#" className="text-white">Commands</a>
                    <a href="#" className="text-white">Donate</a> */}
                    <a href="#" className="flex hover:text-[#7785cc]  text-white  flex-row items-center duration-200 justify-center gap-2">
                        <FaDiscord className=" text-[2.6rem] " />
                        Join our discord!
                    </a>
                </div>
            </div>
        </div>
    )
}