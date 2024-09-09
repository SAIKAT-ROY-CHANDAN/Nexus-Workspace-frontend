/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useGetAllBookingsQuery } from "@/redux/api/bookingApi"
import { useAppSelector } from "@/redux/hooks"
import { MdOutlineDelete } from "react-icons/md"

const BookingManagement = () => {
  const token = useAppSelector((state) => state.auth.token)
  const { data } = useGetAllBookingsQuery(token)

  console.log(data);
  return (
    <Table className="max-w-7xl mx-auto mt-10">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]"></TableHead>
          <TableHead className="">Room Name</TableHead>
          <TableHead className="">User Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Start Time</TableHead>
          <TableHead>End Time</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((booking: any) => (
          <TableRow key={booking._id}>
            <TableCell className="font-medium">
              <img
                className="rounded-md"
                src={
                  booking?.room?.image?.length > 0
                    ? booking.room.image[0]
                    : "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                }
                alt="Room image"
              />
            </TableCell>
            <TableCell>{booking?.room?.name}</TableCell>
            <TableCell>{booking?.user?.name}</TableCell>
            <TableCell className="">{booking?.date}</TableCell>
            <TableCell className="">{booking?.startTime}</TableCell>
            <TableCell className="">{booking?.endTime}</TableCell>
            <TableCell className="text-green-500 font-medium">Confirmed</TableCell>
            <TableCell className="flex gap-x-4">
              <button
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

export default BookingManagement