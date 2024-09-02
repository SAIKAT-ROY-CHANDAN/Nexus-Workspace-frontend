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

const Rooms = () => {
    const { data: meetingData } = useGetRoomsQuery({})
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

            <div className="max-w-screen-2xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 pt-10 pb-20 justify-items-center">
                {meetingData?.map((data) => (
                    <RoomCard room={data} key={data._id} />
                ))}
            </div>
        </>
    )
}

export default Rooms

