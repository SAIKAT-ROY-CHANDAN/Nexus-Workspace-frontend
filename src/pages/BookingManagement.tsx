/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useApproveBookingMutation, useGetAllBookingsQuery } from "@/redux/api/bookingApi"
import { useAppSelector } from "@/redux/hooks"
import { MdOutlineDelete } from "react-icons/md"

const BookingManagement = () => {
  const token = useAppSelector((state) => state.auth.token)
  const { data } = useGetAllBookingsQuery(token)
  const [approveBooking] = useApproveBookingMutation()

  const handleStatus = async (id: string, status: string) => {
    const res = await approveBooking({ id, token, status })
    console.log(res);
  }

  return (
    <Table className="max-w-7xl mx-auto mt-10">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]"></TableHead>
          <TableHead className="">Room Name</TableHead>
          <TableHead className="">User Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="inline-flex gap-x-2 text-start"><span>Start Time</span> <span>End Time</span></TableHead>
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
            {booking?.slots?.map((slot: any, index: number) => (
              <TableRow key={slot._id || index}>
                <TableCell>{slot.startTime}</TableCell>
                <TableCell>{slot.endTime}</TableCell>
              </TableRow>
            ))}
            <TableCell className={`${booking.isConfirmed === 'confirmed' ? 'text-green-500' : 'text-red-500'} font-medium capitalize`}>
              {booking.isConfirmed}
            </TableCell>
            <TableCell className="flex gap-x-4">
              <button
                onClick={() => handleStatus(booking._id, "confirmed")}
                className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md border dark:border-[#656fe2] border-black font-medium">
                <div className="inline-flex h-10 translate-y-0 items-center justify-center  bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f7f8ff] to-[#ffffff] px-6 dark:text-white text-black transition group-hover:-translate-y-[150%]">
                  Approve
                </div>
                <div className="absolute inline-flex h-10 w-full translate-y-[100%] items-center justify-center bg-black dark:bg-[#656fe2] px-6 text-neutral-50 transition duration-300 group-hover:translate-y-0">
                  <MdOutlineDelete className="size-6" />
                </div>
              </button>
              <button
                onClick={() => handleStatus(booking._id, "unconfirmed")}
                className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md border dark:border-[#656fe2] border-black font-medium">
                <div className="inline-flex h-10 translate-y-0 items-center justify-center  bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f7f8ff] to-[#ffffff] px-6 dark:text-white text-black transition group-hover:-translate-y-[150%]">
                  Reject
                </div>
                <div className="absolute inline-flex h-10 w-full translate-y-[100%] items-center justify-center bg-black dark:bg-[#656fe2] px-6 text-neutral-50 transition duration-300 group-hover:translate-y-0">
                  <MdOutlineDelete className="size-6" />
                </div>
              </button>
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