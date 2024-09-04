import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useGetRoomsQuery } from "@/redux/api/baseApi"
const ViewRooms = () => {

  const { data: roomData } = useGetRoomsQuery({})
  console.log(roomData);
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
              <Button>+</Button>
              <Button>-</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ViewRooms