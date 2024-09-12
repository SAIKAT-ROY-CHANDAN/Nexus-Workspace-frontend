import DataPagination from "@/components/DataPagination"
import RoomCard from "@/components/RoomCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useGetRoomsQuery } from "@/redux/api/baseApi"
import { SetStateAction, useState } from "react"

const Rooms = () => {
    const { data: roomData } = useGetRoomsQuery({})
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8
    const totalItems = roomData?.length || 0;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentRoomData = roomData?.slice(startIndex, endIndex);


    const handlePageChange = (page: SetStateAction<number>) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="pt-24 flex items-center justify-center">
                <div className="flex w-full max-w-screen-md items-center space-x-2">
                    <Input type="email" placeholder="Email" />
                    <Button type="submit">Search</Button>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filters" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="apple">Price</SelectItem>
                                <SelectItem value="banana">Capacity</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="max-w-screen-2xl mx-auto grid gap-y-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 pt-10 pb-4 justify-items-center">
                {currentRoomData?.map((data) => (
                    <RoomCard room={data} key={data._id} />
                ))}
            </div>

            <div className="w-full mb-20">
                <DataPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </>
    )
}

export default Rooms

