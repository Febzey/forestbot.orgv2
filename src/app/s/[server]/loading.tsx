import { FaSpinner } from "react-icons/fa"


export default function LeaderboardSkeleton() {
    return (
        <div className="mx-auto min-h-screen mb-[20rem] flex flex-col w-[90%] lg:w-2/3 gap-[7rem]" >
            <p className="text-neutral-100 text-4xl font-Protest">Top 5 Pvpers</p>

            <div className="grid lg:grid-cols-5 grid-cols-2 items-center justify-center gap-3">
                {/* Loading skeleton */}
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="bg-zinc-800 rounded shadow-lg p-7 flex flex-col items-center justify-center gap-2 animate-pulse">
                        <div className="w-20 h-8 bg-neutral-300"></div>
                        <div className="w-12 h-6 bg-neutral-300"></div>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-5 grid-cols-2 items-center justify-center gap-3">
                {/* Loading skeleton */}
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="bg-zinc-800 rounded shadow-lg p-7 flex flex-col items-center justify-center gap-2 animate-pulse">
                        <div className="w-20 h-8 bg-neutral-300"></div>
                        <div className="w-12 h-6 bg-neutral-300"></div>
                    </div>
                ))}
            </div>


            <div className="grid lg:grid-cols-5 grid-cols-2 items-center justify-center gap-3">
                {/* Loading skeleton */}
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="bg-zinc-800 rounded shadow-lg p-7 flex flex-col items-center justify-center gap-2 animate-pulse">
                        <div className="w-20 h-8 bg-neutral-300"></div>
                        <div className="w-12 h-6 bg-neutral-300"></div>
                    </div>
                ))}
            </div>
        </div>

    )
}


export function PageLoader() {
    // put some wording of what we are loading, make it look nice
    return (
        <div className="w-full h-screen fixed overflow-hidden top-0 bottom-0 right-0 left-0 bg-zinc-900 z-50 ">
            <div className="lg:w-[55%] mx-auto h-full w-[90%] flex flex-col items-center justify-center text-white text-center gap-8">
                <FaSpinner className="text-5xl text-indigo-400 rounded-full animate-spin" />
                <p className="break-words">Loading server statistics... Grab some snacks and a comfy chair. This might take a moment. Remember, good things come to those who wait, like perfectly brewed coffee and diamond gear!</p>
            </div>
        </div>
    )

}