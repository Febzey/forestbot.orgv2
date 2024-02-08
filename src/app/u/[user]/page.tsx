import { Suspense } from "react"
import Loading from "./loading"
import { notFound } from "next/navigation"
import UserProfileCard from "./profileCard"

async function getUser(username: string) {
  try {
    const res = await fetch(`http://127.0.0.1:5000/api/v1/all-player-stats?username=${username}`, { cache: 'no-cache' })
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
  let data: PlayerData[]|undefined = await getUser(username)
  if (!data) return notFound()

  const servers: string[] = [];

  data.forEach((entry) => {
    if (!servers.includes(entry.MCServer)) {
      servers.push(entry.MCServer)
    }
  })

  console.log(servers)

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
  //await new Promise((resolve) => setTimeout(resolve, 10000))
  //we basically need to loop through data and put all of our servers into an array.
  //we want the user to pick a server for the user to view their stats on.
  //if only one server exists, we want to skip the selection part and show them their stats for that one server right away

  return (
    <>
        <UserProfileCard userData={serverPlayerData()} availableServers={servers} />

    </>
    )
}