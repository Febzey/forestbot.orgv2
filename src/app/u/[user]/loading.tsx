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