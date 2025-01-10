import { FaSpinner } from "react-icons/fa"

export default function Loading() {

    return (
        <div className="w-full pb-[5%]">

            <div className="gap-1 flex items-center flex-col relative mb-auto mt-[6%]">
                <div className="bg-gray-300 p-16 mb-5 rounded-full animate-pulse"></div>
                <div className="font-Protest text-6xl bg-gray-300 w-36 h-8 animate-pulse"></div>
                <div className="bg-gray-300 w-40 h-8 animate-pulse"></div>
            </div>

            <div className="flex mt-[3%] h-[50vh] mb-auto m-4 p-8 lg:m-10">

                <div className="flex h-full lg:w-1/3 lg:min-w-[33.333%] w-full bg-gray-300 p-8 rounded rounded-r-none flex-col gap-8 shadow-xl shadow-gray-400 animate-pulse"></div>

                <div className="bg-gray-300/60 rounded rounded-lnone flex w-full p-4 animate-pulse"></div>
            </div>

        </div>
    )
}


export function GraphLoadingSkeleton() {
    return (
        <div className="bg-zinc-700/60 rounded rounded-lnone flex w-full p-4">
            <div className="w-full h-full flex items-center justify-center bg-zinc-800 rounded rounded-r-none p-8 shadow-2xl">
                <FaSpinner className="animate-spin text-white text-6xl" />
            </div>
        </div>
    )
}


export function UserProfileCardSkeleton() {
    return (
        <div className="w-full pb-[4vh] pt-[8vh] lg:mt-0 mt-[25%]">
            <div className="gap-1 flex items-center flex-col relative mb-auto mt-[6%]">
                <div className="bg-zinc-800 p-4 mb-5 rounded-full w-[100px] h-[100px] animate-pulse"></div>
                <div className="h-8 w-1/2 bg-zinc-700 animate-pulse rounded-md"></div>
                <div className="h-4 w-1/3 bg-zinc-700 animate-pulse rounded-md mt-2"></div>
                <div className="h-10 w-1/3 bg-zinc-700 animate-pulse rounded-md mt-4"></div>
                <div className="h-4 w-2/3 bg-zinc-700 animate-pulse rounded-md mt-2"></div>
            </div>

            <div className="w-full p-2 sm:p-4 md:p-8 flex flex-col items-center justify-center">
                <div className="flex flex-col lg:flex-row lg:gap-0 gap-4 w-full mt-[3%] mb-auto m-2 sm:m-4 shadow-xl shadow-zinc-900 rounded">
                    <div className="flex lg:w-1/3 lg:min-w-[33.333%] w-full bg-zinc-700 p-4 md:p-8 rounded rounded-r-none flex-col gap-4">
                        <div className="h-4 w-2/3 bg-zinc-600 animate-pulse rounded-md mb-2"></div>
                        <div className="h-4 w-1/2 bg-zinc-600 animate-pulse rounded-md mb-2"></div>
                        <div className="h-4 w-3/4 bg-zinc-600 animate-pulse rounded-md mb-2"></div>
                    </div>

                    <div className="bg-zinc-700/60 rounded rounded-l-none flex w-full p-4">
                        <div className="h-64 w-full bg-zinc-600 animate-pulse rounded-md"></div>
                    </div>
                </div>

                <div className="w-full flex h-auto min-h-[100vh] m-2 sm:m-4 bg-zinc-700 rounded p-4 shadow-2xl">
                    <PlayerHistorySkeleton />
                </div>
            </div>
        </div>
    );
}

function PlayerHistorySkeleton() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            {[...Array(4)].map((_, i) => (
                <div
                    key={i}
                    className="h-64 w-full bg-zinc-600 animate-pulse rounded-md"
                ></div>
            ))}
        </div>
    );
}
