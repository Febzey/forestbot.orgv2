import Link from "next/link";
import UserOrServerSearch from "./components/search";
import Image from "next/image"

// {/* <Link href="#" className="duration-200 hover:-translate-y-2  hover:bg-transparent hover:border-red-400/90 px-3 py-2 border-transparent border-4 bg-red-400/90 text-lg shadow-lg shadow-red-400/70 rounded w-1/4 items-center justify-center/3">Commands</Link>
// <Link href="#" className="duration-200 hover:-translate-y-2  hover:bg-emerald-400/90 px-3 py-2 border-emerald-400/90 border-4  text-lg  shadow-lg shadow-emerald-400/70  rounded w-1/4">Donate</Link> */}

export default function HomePageContent() {
    return (
        <div className="h-auto flex flex-col pt-[3vh]">

            {/* <UserOrServerSearch /> */}


            <div className="font-Protest text-white w-full flex flex-col text-center">
                <div className="bg-forestbot-banner bg-cover w-[33rem] bg-center h-[33rem] mx-auto bg-no-repeat relative">
                    <div className="absolute bottom-0 right-0 left-0 translate-y-8 flex items-center justify-center  flex-col">
                        <h1 className="text-9xl">ForestBot<span className="text-emerald-400">.</span></h1>
                        <p className="text-xl text-neutral-400">Your Server's Silent Observer.</p>
                    </div>
                </div>



                {/* <div className="flex flex-col gap-3 mx-auto mt-10  items-center justify-center w-full lg:flex-row lg:w-1/3">
                    <Link href="#" className="text-3xl mx-10">Commands</Link>
                    <Link href="#" className="text-3xl mx-10">Donate</Link>
                </div> */}

                <div className="flex flex-row gap-5 items-center mx-auto p-3 mt-[3%]">
                    <Link href="#" className="hover:text-sky-500/90 underline-offset-2 underline decoration-[3px] pt-7 text-sm duration-200">Commands</Link>
                    <a href="#" className="hover:text-sky-500/90 underline-offset-2 underline decoration-[3px] pt-7 text-sm duration-200">Invite Me To Discord</a>
                    <Link href="#" className="hover:text-sky-500/90 underline-offset-2 underline decoration-[3px] pt-7 text-sm duration-200">Donate</Link>
                </div>


            </div>
        </div>
    )
}