import { FaDotCircle, FaSpinner } from "react-icons/fa";

async function getForestBotStats() {
  const res = await fetch('https://api.forestbot.org/status');
  if (!res.ok) {
      return null;
  }

  const data = await res.json();
  console.log(data)
  return data
}


export default async function ForestBotStats() {

  const d = await getForestBotStats();
  if (!d) {
    return <ForestBotStatsLoadingSkeleton />;
  }

  return (
    <div className="font-Protest w-full lg:absolute  mt-auto bottom-0 bg-gradient-to-br from-green-500 to-teal-500 flex flex-col lg:flex-row p-10 justify-around text-white">
      <div className="flex flex-col items-center mb-4 lg:mb-0">
        <span className="text-2xl lg:text-4xl">{d.status.users.toLocaleString()}</span>
        <span className="text-xs lg:text-sm">Users Saved</span>
      </div>
      <div className="flex flex-col items-center mb-4 lg:mb-0">
        <span className="text-2xl lg:text-4xl">{d.status.messages.toLocaleString()}</span>
        <span className="text-xs lg:text-sm">Messages Saved</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl lg:text-4xl inline-flex justify-center items-center gap-2">Online <FaDotCircle className="text-sm text-green-100"/></span>
        <span className="text-xs lg:text-sm">Status</span>
      </div>
    </div>
  )
}

export function ForestBotStatsLoadingSkeleton() {
  return (
    <div className="font-Protest w-full lg:absolute mt-auto bottom-0 bg-gradient-to-br from-green-500 to-teal-500 flex flex-col lg:flex-row p-10 justify-around text-white ">
      {/* Skeleton for Users Saved */}
      <div className="flex flex-col items-center mb-4 lg:mb-0">
        <FaSpinner className="text-4xl lg:text-6xl animate-spin mb-2" />
        <div className="bg-white bg-opacity-30 h-6 lg:h-8 w-20 rounded"></div>
        <div className="bg-white bg-opacity-20 h-4 lg:h-5 w-24 mt-2 rounded"></div>
      </div>

      {/* Skeleton for Messages Saved */}
      <div className="flex flex-col items-center mb-4 lg:mb-0">
        <FaSpinner className="text-4xl lg:text-6xl animate-spin mb-2" />
        <div className="bg-white bg-opacity-30 h-6 lg:h-8 w-20 rounded"></div>
        <div className="bg-white bg-opacity-20 h-4 lg:h-5 w-28 mt-2 rounded"></div>
      </div>

      {/* Skeleton for Servers Seen */}
      <div className="flex flex-col items-center">
        <FaSpinner className="text-4xl lg:text-6xl animate-spin mb-2" />
        <div className="bg-white bg-opacity-30 h-6 lg:h-8 w-16 rounded"></div>
        <div className="bg-white bg-opacity-20 h-4 lg:h-5 w-20 mt-2 rounded"></div>
      </div>
    </div>
  );
}