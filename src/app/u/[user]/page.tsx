import { Suspense } from "react"
import Loading, { UserProfileCardSkeleton } from "./loading"
import { notFound } from "next/navigation"
import UserProfileCard from "./profileCard"
import { api } from "../../../apiGetter"


/**
 * Getting every server the user has played on and their stats
 * @param username 
 * @returns 
 */
async function getUser(username: string) {
  try {
    const uuid = await api.convertUsernameToUuid(username);
    if (!uuid) return null;

    const res = await fetch(`${process.env.NEXT_PUBLIC_FORESTBOT_API_URL}/all-user-stats?uuid=${uuid}`, { cache: 'no-cache' })
    return res.json()
  } catch (err) {
    return null;
  }
}

/**
 * Render the user page
 * @param param
 * @returns 
 */
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
    if (!servers.includes(entry.mc_server)) {
      servers.push(entry.mc_server)
    }
  })

  const serverPlayerData = () => {
    if (!data) return notFound();
    if (server) {
      const stat = data.find((entry) => entry.mc_server === server);
      if (!stat) return notFound();
      return stat;
    } else {
      let highestPlayTimeServerStats = data.sort((a, b) => b.playtime - a.playtime)[0];
      return highestPlayTimeServerStats;
    }
  }

  return (
    <Suspense fallback={<UserProfileCardSkeleton/>}>
      <UserProfileCard userData={serverPlayerData()} availableServers={data} />
    </Suspense>
  )
}