import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useGetMyBookingsQuery } from "@/redux/api/bookingApi"
import { useAppSelector } from "@/redux/hooks"


const MyBookings = () => {
  const token = useAppSelector((state) => state.auth.token)
  const { data, isLoading } = useGetMyBookingsQuery(token)

  if(isLoading){
    return <p className="text-center text-3xl">Loading....</p>
  }

  console.log(data);
  return (
    <Table className="max-w-screen-xl mx-auto mt-24">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]"></TableHead>
          <TableHead className="w-[120px]">Room Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Payment Status</TableHead>
          <TableHead className="w-[100px]">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((booking) => (
          <TableRow key={booking?._id}>
            <TableCell className="font-medium">
              <img
                src={booking?.room?.image?.[0] || "https://rb.gy/tkc7m8"}
                alt="Room image"
                className="rounded"
              />
            </TableCell>
            <TableCell>{booking?.room?.name}</TableCell>
            <TableCell>{booking?.date}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <span>{booking?.slots[0]?.startTime}</span>
                -
                <span>{booking?.slots[0]?.endTime}</span>
              </div>
            </TableCell>
            <TableCell className="capitalize text-green-500">paid</TableCell>
            <TableCell className="text-right capitalize text-red-500">{booking?.isConfirmed}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default MyBookings