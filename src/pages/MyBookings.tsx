import DataPagination from "@/components/DataPagination"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useGetPaidBookingsQuery } from "@/redux/api/bookingApi"
import { SetStateAction, useState } from "react"


const MyBookings = () => {
  const { data, isLoading } = useGetPaidBookingsQuery({})
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8

  const totalItems = data?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data?.slice(startIndex, endIndex);

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <p className="text-center text-3xl">Loading....</p>
  }

  console.log(data);
  return (
    <div>
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
          {currentData?.map((booking) => (
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

      <div className="w-full mb-14 mt-5">
        <DataPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  )
}

export default MyBookings