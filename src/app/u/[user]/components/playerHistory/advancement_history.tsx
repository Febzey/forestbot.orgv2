import moment from "moment";
import { api } from "../../../../../apiGetter"


export default async function AdvancementHistoryCard({ uuid, server }: { uuid: string, server: string }) {

    const advancements = await api.getAdvancements(uuid, server, 100, "DESC");
    if (!advancements || advancements.length === 0) {
        return (
            <div className="flex flex-col overflow-hidden gap-3 max-h-[80vh]">
                <h3 className="font-Protest text-3xl">Advancement History</h3>
                <div className="bg-zinc-800 font-Protest items-center justify-center overflow-y-scroll p-4 flex gap-2 flex-col rounded min-h-[80vh]">
                    <p className="text-3xl text-zinc-100">No Advancements Found!</p>
                    <p className="text-lg text-zinc-300">GO DO SOMETHING!</p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col overflow-hidden gap-3 max-h-[80vh]">
            <h3 className="font-Protest text-3xl">Advancement History (100)</h3>
            <ul className="bg-zinc-800 overflow-y-scroll p-4 flex gap-2 flex-col rounded min-h-[80vh]">
                {
                    advancements.map((obj, index) => {

                        const formattedAdvancementString = () => {
                            if (!obj.advancement) return "N/A"
                            const regex = /\[([^\]]+)\]/g;
                            const highlightedText = obj.advancement.replace(
                                regex,
                                '<span class="text-purple-500">[$1]</span>'
                            )

                            return highlightedText

                        }

                        return (
                            <li key={index} className="flex flex-row justify-between items-center bg-zinc-700/60 p-2 rounded">
                                <span className="max-w-[70%]" dangerouslySetInnerHTML={{ __html: formattedAdvancementString() }}
                                ></span>

                                <span className="italic text-zinc-300 text-xs">... {moment(obj.time).format("MMM, Do, YYYY HH:mm")}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}