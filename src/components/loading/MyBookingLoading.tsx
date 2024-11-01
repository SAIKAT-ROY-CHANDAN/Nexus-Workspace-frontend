import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const MyBookingLoading = () => {
    return (
        <div className="w-full">
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
                    {[...Array(5)].map((_, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">
                                <Skeleton className="h-20 w-full bg-gray-400 rounded" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-6 w-3/4 bg-gray-400 rounded" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-6 w-1/2 bg-gray-400 rounded" />
                            </TableCell>
                            <TableCell>
                                <div className="flex gap-2">
                                    <Skeleton className="h-6 w-8 bg-gray-400 rounded" />
                                    <span>-</span>
                                    <Skeleton className="h-6 w-8 bg-gray-400 rounded" />
                                </div>
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-6 w-1/2 bg-gray-400 rounded" />
                            </TableCell>
                            <TableCell className="text-right">
                                <Skeleton className="h-6 w-1/4 bg-gray-400 rounded" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="w-full mb-14 mt-5">
                <Skeleton className="h-10 bg-gray-400 w-40 mx-auto rounded" />
            </div>
        </div>
    )
}

export default MyBookingLoading