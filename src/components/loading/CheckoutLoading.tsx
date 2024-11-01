import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Skeleton } from "../ui/skeleton"


const CheckoutLoading = () => {
    return (
        <div className="w-full">
            <Table className="max-w-screen-xl mx-auto mt-6">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] max-sm:hidden"></TableHead>
                        <TableHead className="w-[120px]">Room Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead className="w-[100px] text-right">Price</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[...Array(5)].map((_, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium max-sm:hidden">
                                <Skeleton className="h-20 bg-gray-300 w-full rounded" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-6 bg-gray-300 w-3/4 rounded" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-6 bg-gray-300 w-1/2 rounded" />
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-col gap-2">
                                    {[...Array(2)].map((_, slotIndex) => (
                                        <div key={slotIndex} className="flex gap-2">
                                            <Skeleton className="h-6 bg-gray-300 w-8 rounded" />
                                            <span>-</span>
                                            <Skeleton className="h-6 bg-gray-300 w-8 rounded" />
                                        </div>
                                    ))}
                                </div>
                            </TableCell>
                            <td className="text-right">
                                <Skeleton className="h-6 w-1/3 bg-gray-300 rounded" />
                            </td>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default CheckoutLoading