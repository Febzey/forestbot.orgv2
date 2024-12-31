import Link from "next/link";
import Image from "next/image";

async function getTop5Leaderboards(server: string) {
    const data = await fetch(`${process.env.NEXT_PUBLIC_FORESTBOT_API_URL}/leaderboards?server=${server}&limit=1_week`);
    const d = await data.json();
    return d;
}

export default async function Top5Leaderboards({ server }: { server: string }) {
    const data = await getTop5Leaderboards(server);

    return (
        <div className="mx-auto min-h-screen mb-[20rem] flex flex-col w-[90%] lg:w-2/3 gap-[7rem]">
            <div className="w-full flex flex-col gap-8">
                <p className="text-neutral-100 text-4xl font-Protest">Top 5 Playtime</p>
                <div className="grid lg:grid-cols-5 grid-cols-2 items-center justify-center gap-3">
                    {
                        data.playtime.length === 0
                            ? <p className="text-neutral-400 text-2xl">No data available</p>
                            : data.playtime.map((item: any, index: number) => (
                                <Link href={`/u/${item.username}`} key={index} className="bg-zinc-800 hover:bg-zinc-700 duration-100 min-w-[18%] rounded-lg shadow-lg p-7 flex flex-col items-center justify-center gap-2">
                                    <Image alt={`${item.username}-body`} src={`https://crafatar.com/renders/body/${item.player_uuid}`} width={50} height={50} />
                                    <p className="text-2xl text-neutral-200 font-Protest">{item.username}</p>
                                    <p className="text-lg text-neutral-400">{(item.total_playtime / (1000 * 60 * 60 * 24)).toFixed(2)} days</p>
                                </Link>
                            ))
                    }
                </div>
            </div>

            <div className="w-full flex flex-col gap-8">
                <p className="text-neutral-100 text-4xl font-Protest">Top 5 Pvpers</p>
                <div className="grid lg:grid-cols-5 grid-cols-2 items-center justify-center gap-3">
                    {
                        data.kills.length === 0
                            ? <p className="text-neutral-400 text-2xl">No data available</p>
                            : data.kills.map((item: any, index: number) => (
                                <Link href={`/u/${item.player_name}`} key={index} className="bg-zinc-800 hover:bg-zinc-700 duration-100 min-w-[18%] rounded-lg shadow-lg p-7 flex flex-col items-center justify-center gap-2">
                                    <Image alt={`${item.player_name}-body`} src={`https://crafatar.com/renders/body/${item.player_uuid}`} width={50} height={50} />
                                    <p className="text-2xl text-neutral-200 font-Protest">{item.player_name}</p>
                                    <p className="text-lg text-neutral-400">{item.kill_count} kills</p>
                                </Link>
                            ))
                    }
                </div>
            </div>

            <div className="w-full flex flex-col gap-8">
                <p className="text-neutral-100 text-4xl font-Protest">Top 5 Pvp Deaths</p>
                <div className="grid lg:grid-cols-5 grid-cols-2 items-center justify-center gap-3">
                    {
                        data.pvp_deaths.length === 0
                            ? <p className="text-neutral-400 text-2xl">No data available</p>
                            : data.pvp_deaths.map((item: any, index: number) => (
                                <Link href={`/u/${item.player_name}`} key={index} className="bg-zinc-800 hover:bg-zinc-700 duration-100 min-w-[18%] rounded-lg shadow-lg p-7 flex flex-col items-center justify-center gap-2">
                                    <Image alt={`${item.player_name}-body`} src={`https://crafatar.com/renders/body/${item.player_uuid}`} width={50} height={50} />
                                    <p className="text-2xl text-neutral-200 font-Protest">{item.player_name}</p>
                                    <p className="text-lg text-neutral-400">{item.pvp_death_count} pvp deaths</p>
                                </Link>
                            ))
                    }
                </div>
            </div>

            <div className="w-full flex flex-col gap-8">
                <p className="text-neutral-100 text-4xl font-Protest">Top 5 Pve Deaths</p>
                <div className="grid lg:grid-cols-5 grid-cols-2 items-center justify-center gap-3">
                    {
                        data.pve_deaths.length === 0
                            ? <p className="text-neutral-400 text-2xl">No data available</p>
                            : data.pve_deaths.map((item: any, index: number) => (
                                <Link href={`/u/${item.player_name}`} key={index} className="bg-zinc-800 hover:bg-zinc-700 duration-100 min-w-[18%] rounded-lg shadow-lg p-7 flex flex-col items-center justify-center gap-2">
                                    <Image alt={`${item.player_name}-body`} src={`https://crafatar.com/renders/body/${item.player_uuid}`} width={50} height={50} />
                                    <p className="text-2xl text-neutral-200 font-Protest">{item.player_name}</p>
                                    <p className="text-lg text-neutral-400">{item.death_count} pve deaths</p>
                                </Link>
                            ))
                    }
                </div>
            </div>

            <div className="w-full flex flex-col gap-8">
                <p className="text-neutral-100 text-4xl font-Protest">Top 5 Advancements</p>
                <div className="grid lg:grid-cols-5 grid-cols-2 items-center justify-center gap-3">
                    {
                        data.advancements.length === 0
                            ? <p className="text-neutral-400 text-2xl">No data available</p>
                            : data.advancements.map((item: any, index: number) => (
                                <Link href={`/u/${item.player_name}`} key={index} className="bg-zinc-800 hover:bg-zinc-700 duration-100 min-w-[18%] rounded-lg shadow-lg p-7 flex flex-col items-center justify-center gap-2">
                                    <Image alt={`${item.player_name}-body`} src={`https://crafatar.com/renders/body/${item.player_uuid}`} width={50} height={50} />
                                    <p className="text-2xl text-neutral-200 font-Protest">{item.player_name}</p>
                                    <p className="text-lg text-neutral-400">{item.advancement_count} advancements</p>
                                </Link>
                            ))
                    }
                </div>
            </div>
        </div>
    );
}