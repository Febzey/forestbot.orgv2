import Link from "next/link";
import Image from "next/image"

async function getTop5Leaderboards(server: string) {
    const data = await fetch(`${process.env.NEXT_PUBLIC_FORESTBOT_API_URL}/server-leaderboard?server=simplyvanilla`);
    const d = await data.json();
    return d;
}

export default async function Top5Leaderboards({ server }: { server: string }) {
    const data = await getTop5Leaderboards(server);

    return (
        <div className="mx-auto min-h-screen mb-[20rem] flex flex-col w-[90%] lg:w-2/3 gap-[7rem]" >

            <div className="w-full flex flex-col gap-8">
                <p className="text-neutral-100 text-4xl font-Protest">Top 5 Pvpers</p>

                <div className="grid lg:grid-cols-5 grid-cols-2 items-center justify-center gap-3">
                    {

                    data.Top5Killers === null || data.Top5Killers === undefined || data.Top5Killers.length === 0
                    ?
                    <p className="text-neutral-400 text-2xl">No data available</p>
                    :
                    data.Top5Killers.map((item: any, index: number) => (
                        <Link href={`/u/${item.PlayerName}`}  key={index} className="bg-zinc-800 hover:bg-zinc-700 duration-100 min-w-[18%] rounded shadow-lg p-7 flex flex-col items-center justify-center gap-2">
                            <Image alt={`${item.PlayerName}-body`} src={`https://crafatar.com/renders/body/${item.Uuid}`} width={50} height={50} />
                            <p className="text-2xl text-neutral-200 font-Protest">{item.PlayerName}</p>
                            <p className="text-lg text-neutral-400">{item.KillCount} kills</p>
                        </Link>
                    ))
                    
                    }
                </div>
            </div>

            <div className="w-full flex flex-col gap-8">
                <p className="text-neutral-100 text-4xl font-Protest">Top 5 Pvp Deaths</p>

                <div className="grid lg:grid-cols-5 grid-cols-2 items-center justify-center gap-3">
                    {
                    data.Top5PVPDeaths === null || data.Top5PVPDeaths === undefined || data.Top5PVPDeaths.length === 0
                    ?
                    <p className="text-neutral-400 text-2xl">No data available</p>
                    :
                    data.Top5PVPDeaths.map((item: any, index: number) => (
                        <Link href={`/u/${item.PlayerName}`} key={index} className="bg-zinc-800 hover:bg-zinc-700 duration-100min-w-[18%] rounded shadow-lg p-7 flex flex-col items-center justify-center gap-2">
                            <Image alt={`${item.PlayerName}-body`} src={`https://crafatar.com/renders/body/${item.Uuid}`} width={50} height={50} />
                            <p className="text-2xl text-neutral-200 font-Protest">{item.PlayerName}</p>
                            <p className="text-lg text-neutral-400">{item.PVPDeathCount} pvp deaths</p>
                        </Link  >
                    ))}

                </div>
            </div>


            <div className="w-full flex flex-col gap-8">
                <p className="text-neutral-100 text-4xl font-Protest">Top 5 Pve Deaths</p>

                <div className="grid lg:grid-cols-5 grid-cols-2 items-center justify-center gap-3">
                    {
                    data.Top5PVEDeaths === null || data.Top5PVEDeaths === undefined || data.Top5PVEDeaths.length === 0
                    ?
                    <p className="text-neutral-400 text-2xl">No data available</p>
                    :
                    data.Top5PVEDeaths.map((item: any, index: number) => (
                        <Link href={`/u/${item.PlayerName}`} key={index} className="bg-zinc-800 hover:bg-zinc-700 duration-100 min-w-[18%] rounded shadow-lg p-7 flex flex-col items-center justify-center gap-2">
                            <Image alt={`${item.PlayerName}-body`} src={`https://crafatar.com/renders/body/${item.Uuid}`} width={50} height={50} />
                            <p className="text-2xl text-neutral-200 font-Protest">{item.PlayerName}</p>
                            <p className="text-lg text-neutral-400">{item.DeathCount} pve deaths</p>
                        </Link>
                    ))}

                </div>
            </div>


            <div className="w-full flex flex-col gap-8">
                <p className="text-neutral-100 text-4xl font-Protest">Top 5 Advancements</p>

                <div className="grid lg:grid-cols-5 grid-cols-2 items-center justify-center gap-3">
                    {
                    data.Top5Advancements === null || data.Top5Advancements === undefined || data.Top5Advancements.length === 0
                    ?
                    <p className="text-neutral-400 text-2xl">No data available</p>
                    :
                    data.Top5Advancements.map((item: any, index: number) => (
                        <Link href={`/u/${item.PlayerName}`} key={index} className="bg-zinc-800 hover:bg-zinc-700 duration-100 min-w-[18%] rounded shadow-lg p-7 flex flex-col items-center justify-center gap-2">
                            <Image alt={`${item.PlayerName}-body`} src={`https://crafatar.com/renders/body/${item.Uuid}`} width={50} height={50} />
                            <p className="text-2xl text-neutral-200 font-Protest">{item.PlayerName}</p>
                            <p className="text-lg text-neutral-400">{item.AdvancementCount} advancements</p>
                        </Link>
                    ))}

                </div>
            </div>


            <div className="w-full flex flex-col gap-8">
                <p className="text-neutral-100 text-4xl font-Protest">Top 5 Logins</p>

                <div className="grid lg:grid-cols-5 grid-cols-2 items-center justify-center gap-3">
                    {
                        data.Top5Logins === null || data.Top5Logins === undefined
                            ? <p className="text-neutral-400 text-2xl">No data available</p>
                            : (data.Top5Logins as any).map((item: any, index: number) => (
                                <Link href={`/u/${item.PlayerName}`} key={index} className="bg-zinc-800 hover:bg-zinc-700 duration-100 min-w-[18%] rounded shadow-lg p-7 flex flex-col items-center justify-center gap-2">
                                    <Image alt={`${item.PlayerName}-body`} src={`https://crafatar.com/renders/body/${item.Uuid}`} width={50} height={50} />
                                    <p className="text-2xl text-neutral-200 font-Protest">{item.PlayerName}</p>
                                    <p className="text-lg text-neutral-400">{item.AdvancementCount} Logins</p>
                                </Link>
                            ))
                    }
                    {/* {data.Top5Logins.map((item: any, index: number) => (
                        <div key={index} className="bg-zinc-800 min-w-[18%] rounded shadow-lg p-7 flex flex-col items-center justify-center gap-2">
                            <Image alt={`${item.PlayerName}-body`} src={`https://crafatar.com/renders/body/${item.Uuid}`} width={50} height={50} />
                            <p className="text-2xl text-neutral-200 font-Protest">{item.PlayerName}</p>
                            <p className="text-lg text-neutral-400">{item.AdvancementCount} advancements</p>
                        </div>
                    ))} */}

                </div>
            </div>
        </div>
    )
}