import Link from "next/link";
import UserOrServerSearch from "./components/search";

export default function HomePageContent() {
    return (
        <div className="h-auto flex flex-col pt-[6vh] min-h-screen pb-[6rem]">
            <div className="font-Protest text-white w-full flex flex-col text-center">
                <div className="bg-forestbot-banner bg-cover lg:w-[33rem] bg-center lg:h-[33rem] w-[26rem] h-[26rem] mx-auto bg-no-repeat relative">
                    <div className="absolute bottom-0 right-0 left-0 translate-y-8 flex items-center justify-center  flex-col">
                        <h1 className="text-7xl lg:text-9xl">ForestBot<span className="text-emerald-400">.</span></h1>
                        <p className="text-lg lg:text-xl text-neutral-400">Your Server's Silent Observer.</p>
                    </div>
                </div>


                <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 items-center mx-auto p-3 mt-[3%] mb-16">
                    <Link href="/commands" className="hover:text-emerald-400/90 underline-offset-2 underline decoration-[3px] pt-7 text-md duration-200">Commands</Link>
                    <a href="https://www.buymeacoffee.com/ForestBot" target="_blank" className="hover:text-emerald-400/90 underline-offset-2 underline decoration-[3px] lg:pt-7 text-md duration-200">Donate</a>
                </div>

                <UserOrServerSearch />

            </div>
        </div>
    )
}