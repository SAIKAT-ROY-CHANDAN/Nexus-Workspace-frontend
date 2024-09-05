import { RoomUpdateModal } from "@/components/RoomUpdateModal"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useDeleteRoomMutation, useGetRoomsQuery } from "@/redux/api/baseApi"
import { useAppSelector } from "@/redux/hooks";
import { MdOutlineDelete } from "react-icons/md";
import { toast } from "sonner";


const ViewRooms = () => {
  const { data: roomData } = useGetRoomsQuery({})
  const [deleteRoom, { isLoading }] = useDeleteRoomMutation()
  const token = useAppSelector((state) => state.auth.token)

  const handleDelete = async (roomId: string | undefined) => {
    try {
      const result = await deleteRoom({ token, roomId }).unwrap();
      if (result.success) {
        toast.success(`${result.message}`)
        console.log('Room deleted successfully:', result);
      }
    } catch (error) {
      toast.warning(`Failed to delete room`)
      console.error('Failed to delete room:', error);
    }
  };

  return (
    <Table className="max-w-7xl mx-auto mt-24">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]"></TableHead>
          <TableHead className="flex-1">Room Name</TableHead>
          <TableHead className="">Floor No</TableHead>
          <TableHead>Capacity</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {roomData?.map((room) => (
          <TableRow key={room._id}>
            <TableCell className="font-medium">
              <img className="rounded-md" src={room?.image[0] || "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} alt="Gucci image" />
            </TableCell>
            <TableCell>{room.name}</TableCell>
            <TableCell>{room.floorNo}</TableCell>
            <TableCell className="">{room.capacity}</TableCell>
            <TableCell className="">{room.pricePerSlot}</TableCell>
            <TableCell className="flex gap-x-4">
              <RoomUpdateModal roomId={room._id} />
              <button
                onClick={() => handleDelete(room._id)}
                disabled={isLoading}
                className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md border dark:border-[#656fe2] border-black font-medium">
                <div className="inline-flex h-10 translate-y-0 items-center justify-center  bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f7f8ff] to-[#ffffff] px-6 dark:text-white text-black transition group-hover:-translate-y-[150%]">
                  Delete
                </div>
                <div className="absolute inline-flex h-10 w-full translate-y-[100%] items-center justify-center bg-black dark:bg-[#656fe2] px-6 text-neutral-50 transition duration-300 group-hover:translate-y-0">
                  <MdOutlineDelete className="size-6" />
                </div>
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ViewRooms