import moment from "moment";
import { api } from "../../../../../apiGetter";


export default async function MessageHistoryCard({ username, server }: { username: string, server: string }) {

    const messages = await api.getMessages(username, server, 100, "DESC");
    if (!messages || messages.length === 0) {
        return (
            <div className="flex flex-col overflow-hidden gap-3 max-h-[80vh]">
                <h3 className="font-Protest text-3xl">Message History</h3>
                <div className="bg-zinc-800 font-Protest items-center justify-center overflow-y-scroll p-4 flex gap-2 flex-col rounded min-h-[80vh]">
                    <p className="text-3xl text-zinc-100">No Messages Found!</p>
                    <p className="text-lg text-zinc-300">Go chat loser!</p>
                </div>
            </div>

        )
    }

    return (
        <div className="flex flex-col overflow-hidden gap-3 max-h-[80vh]">
            <h3 className="font-Protest text-3xl">Message History (100)</h3>
            <ul className="bg-zinc-800 overflow-y-scroll p-4 flex gap-2 flex-col rounded min-h-[80vh]">
                {
                    messages.map((message, index) => {
                        const formattedDate = message.date ? moment(parseInt(message.date)).format("MMM, Do, YYYY HH:mm") : ""
                        return (
                            <li key={index} className="flex flex-row justify-between items-center bg-zinc-700/60 p-2 rounded">
                                <span className="max-w-[70%]">{message.message}</span>

                                <span className="italic text-zinc-300 text-xs">... {formattedDate}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}