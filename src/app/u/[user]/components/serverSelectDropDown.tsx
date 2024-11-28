"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";


export default function ServerSelectDropDown({ servers, currentServer }: { servers: PlayerData[], currentServer: string}) {
    const [serverPickDropDown, setOpenServerDropDown] = useState(false)

    return (
        <>
            <button className="text-neutral-400 flex flex-row items-center justify-center gap-2" onClick={() => setOpenServerDropDown(!serverPickDropDown)}>
                Viewing for server:
                <span className="text-sky-500 bg-zinc-700 rounded py-1 px-2 flex flex-row items-center justify-center gap-2">
                    {currentServer}
                    <FaChevronDown />
                </span>
            </button>

            <div id="dropdown" className={`z-10 ${serverPickDropDown ? "absolute" : "hidden"} bottom-0 translate-y-[110%] translate-x-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    {
                        servers.map((server, index) => {
                            return (
                                <li key={index} onClick={() => { window.location.href = `/u/${server.username}?server=${server.mc_server}` }}>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{server.mc_server}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}