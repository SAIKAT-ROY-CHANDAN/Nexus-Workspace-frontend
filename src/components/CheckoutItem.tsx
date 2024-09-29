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
import { setTotalPrice } from "@/redux/slices/totalPrice"
import { useEffect } from "react"

const CheckoutItem = () => {
    const token = useAppSelector((state) => state.auth.token)
    const { data, isLoading } = useGetMyBookingsQuery(token)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (data) {
            const totalPrice = data.reduce((acc, booking) => acc + (booking?.totalAmount || 0), 0);
            dispatch(setTotalPrice(totalPrice));
        }
    }, [data, dispatch]);

    if (isLoading) {
        return <p className="text-center text-3xl">Loading....</p>
    }

    const totalPrice = data?.reduce((acc, booking) => acc + (booking?.totalAmount || 0), 0);

    console.log('Total Price of All Bookings:', totalPrice);


    return (
        <Table className="max-w-screen-xl mx-auto mt-24">
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]"></TableHead>
                    <TableHead className="w-[120px]">Room Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead className="w-[100px] text-right">Price</TableHead>
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
                        <TableCell className="text-right capitalize">{booking?.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    )
}

export default CheckoutItem