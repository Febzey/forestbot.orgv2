import { Suspense } from "react"
import Loading from "./loading"
import { notFound } from "next/navigation"
import UserProfileCard from "./profileCard"

async function getUser(username: string) {
  try {

    //change this in the golang api to convert the username to UUID based.
    const res = await fetch(`${process.env.NEXT_PUBLIC_FORESTBOT_API_URL}/all-player-stats?username=${username}`, { cache: 'no-cache' })
    return res.json()
  } catch (err) {
    return null;
  }
}

export default async function Page({
  params,
  searchParams
}: {
  params: { user: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const server = typeof searchParams.server === 'string' ? searchParams.server : undefined;
  return (
    <div className="text-white h-full w-full flex">
      <Suspense fallback={<Loading />}>
        <UserPageBuilder username={params.user} server={server} />
      </Suspense>
    </div>
  )
}


async function UserPageBuilder({ username, server }: { username: string, server?: string }) {
  let data: PlayerData[] | null | undefined;
  
  try {
    data = await getUser(username)
  } catch {
    return notFound()
  }
  if (!data) return notFound()

  const servers: string[] = [];

  data.forEach((entry) => {
    if (!servers.includes(entry.MCServer)) {
      servers.push(entry.MCServer)
    }
  })

  const serverPlayerData = () => {
    if (!data) return notFound();
    if (server) {
      const stat = data.find((entry) => entry.MCServer === server);
      if (!stat) return notFound();
      return stat;
    } else {
      let highestPlayTimeServerStats = data.sort((a, b) => b.Playtime - a.Playtime)[0];
      return highestPlayTimeServerStats;
    }
  }

  return (
    <UserProfileCard userData={serverPlayerData()} availableServers={data} />
  )
}