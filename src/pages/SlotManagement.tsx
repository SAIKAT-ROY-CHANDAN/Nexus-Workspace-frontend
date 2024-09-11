 import DataPagination from "@/components/DataPagination"
import SlotForm from "@/components/SlotForm"
import SlotUpdateModal from "@/components/SlotUpdateModal"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useGetSlotsQuery } from "@/redux/api/slotApi"
import { SetStateAction, useState } from "react"
import { MdOutlineDelete } from "react-icons/md"

const SlotManagement = () => {
  const { data: slotData, isLoading } = useGetSlotsQuery({})
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8

  const totalItems = slotData?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSlots = slotData?.slice(startIndex, endIndex);

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };

  if (isLoading) return <p className="flex items-center justify-center text-center">Loading...</p>;


  return (
    <div className="w-full">
      <div>
        <Table className="max-w-7xl mx-auto mt-10">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                <SlotForm />
              </TableHead>
              <TableHead className="flex-1">Room Name</TableHead>
              <TableHead className="">Room No</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Start Time</TableHead>
              <TableHead>End Time</TableHead>
              <TableHead className="text-center w-[200px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentSlots?.map((slot) => (
              <TableRow key={slot._id}>
                <TableCell className="font-medium">
                  <img
                    className="rounded-md"
                    src={slot?.room?.image[0] || "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}
                    alt="Room image"
                  />
                </TableCell>
                <TableCell>{slot.room.name}</TableCell>
                <TableCell>{slot.room.roomNo}</TableCell>
                <TableCell className="">{slot.date}</TableCell>
                <TableCell className="">{slot.startTime}</TableCell>
                <TableCell className="">{slot.endTime}</TableCell>
                <TableCell className="flex gap-x-4">
                  <SlotUpdateModal id={slot._id as string} roomId={slot.room._id as string} />
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
      </div>
      <div className="w-full mt-20">
        <DataPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  )
}

export default SlotManagement