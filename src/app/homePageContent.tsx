import Link from "next/link";
import UserOrServerSearch from "./components/search";


export default function HomePageContent() {
    return (
        <div className="h-auto flex flex-col pt-[20vh]">

            <div className="font-Protest text-white mx-auto flex flex-col text-center">
                <h1 className="text-9xl">ForestBot<span className="text-emerald-400">.</span></h1>
                <p className="text-xl text-neutral-400">Your Server's Silent Observer.</p>

                <div className="flex flex-row gap-3 mx-auto mt-10 w-full items-center justify-center">
                    <Link href="#" className="duration-200 hover:-translate-y-2  hover:bg-transparent hover:border-red-400/90 px-3 py-2 border-transparent border-4 bg-red-400/90 text-lg shadow-lg shadow-red-400/70 rounded w-1/4 items-center justify-center/3">Commands</Link>
                    <Link href="#" className="duration-200 hover:-translate-y-2  hover:bg-emerald-400/90 px-3 py-2 border-emerald-400/90 border-4  text-lg  shadow-lg shadow-emerald-400/70  rounded w-1/4">Donate</Link>
                </div>

                <a href="#" className="hover:text-sky-500/90 underline-offset-2 underline decoration-[3px] pt-7 text-sm duration-200">Invite Me To Discord</a>
            </div>

            <UserOrServerSearch/>

        </div>
    )
}