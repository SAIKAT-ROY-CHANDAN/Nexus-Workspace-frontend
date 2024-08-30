import { TRoom } from "@/types/global";
import { Link } from "react-router-dom";

interface RoomCardProps {
    room: TRoom;
}

const RoomCard = ({ room }: RoomCardProps) => {
    return (
        <div className="max-[350px] mx-auto space-y-4 rounded  p-6 md:w-[350px] dark:border-zinc-700 dark:bg-zinc-900">
            <div className="relative rounded-2xl group overflow-hidden">
                <img
                    width={350}
                    height={190}
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1489269637500-aa0e75768394?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="card navigate ui"
                />
                <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-full transition-all duration-500 bg-gradient-to-r from-[#93c5fd] via-[#60a5fa] to-[#3b82f6] opacity-20"></div>
            </div>
            <div className="space-y-2">
                <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-white/90">{room.name}</h2>
            </div>
            <div className="mt-5 flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                    <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                </svg>
                <h2 className="font-medium text-gray-700 md:text-xl dark:text-white/60">4</h2>
            </div>
            <div className="mt-5 flex items-center justify-between">
                <h2 className="font-medium text-gray-700 md:text-xl dark:text-white/60">${room.pricePerSlot}</h2>
                <Link to={`/rooms/${room._id}`} className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">See Details</Link>
            </div>
        </div>
    )
}

export default RoomCard