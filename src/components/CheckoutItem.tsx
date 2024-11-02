import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useGetMyBookingsQuery } from "@/redux/api/bookingApi"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { setBookingIds, setTotalPrice } from "@/redux/slices/totalPrice"
import { useEffect } from "react"
import CheckoutLoading from "./loading/CheckoutLoading"

const CheckoutItem = () => {
    const token = useAppSelector((state) => state.auth.token)
    const { data, isLoading } = useGetMyBookingsQuery(token)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (data) {
            const totalPrice = data.reduce((acc, booking) => acc + (booking?.totalAmount || 0), 0);
            dispatch(setTotalPrice(totalPrice));

            const bookingIds = data.map(booking => booking._id);
            dispatch(setBookingIds(bookingIds));
        }

    }, [data, dispatch]);

    if (isLoading) {
        return (
            <CheckoutLoading />
        )
    }

    return (
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
                {data?.map((booking) => (
                    <TableRow key={booking?._id}>
                        <TableCell className="font-medium max-sm:hidden">
                            <img
                                src={booking?.room?.image?.[0] || "https://rb.gy/tkc7m8"}
                                alt="Room image"
                                className="rounded"
                            />
                        </TableCell>
                        <TableCell>{booking?.room?.name}</TableCell>
                        <TableCell>{booking?.date}</TableCell>
                        <TableCell>
                            <div className="flex flex-col gap-2">
                                {booking?.slots?.map((slot, index) => (
                                    <div key={index} className="flex gap-2">
                                        <span>{slot?.startTime}</span> - <span>{slot?.endTime}</span>
                                    </div>
                                ))}
                            </div>
                        </TableCell>
                        <TableCell className="text-right capitalize">{booking?.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default CheckoutItem