/* eslint-disable @typescript-eslint/no-explicit-any */
import DateSelect from "@/components/DateSelect"
import UserInfoForm from "@/components/UserInfoForm"
import { useCreateBookingMutation } from "@/redux/api/bookingApi";
import { useGelSlotsByQueryIdQuery } from "@/redux/api/slotApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setDate, setTime, toggleSlotSelection } from "@/redux/slices/timeAndDate";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const SlotBooking = () => {
    const { selectedTime, selectedDate, selectedSlots } = useAppSelector((state) => state.timeAndDate);
    const dispatch = useAppDispatch()
    const { id } = useParams();
    const { data, refetch } = useGelSlotsByQueryIdQuery({ date: selectedDate, id: id },
        { refetchOnFocus: true, refetchOnMountOrArgChange: true, refetchOnReconnect: true })
    const [createBooking] = useCreateBookingMutation()
    const token = useAppSelector((state) => state.auth.token)

    console.log(data);

    const handleSlotSelection = (slot: { _id: string; date: string; startTime: string; endTime: string }) => {
        dispatch(toggleSlotSelection(slot._id));
        dispatch(setDate(slot.date));
        dispatch(setTime({ start: slot.startTime, end: slot.endTime }));
    };

    const handleSlotBooking = async (formData: any) => {
        const slotDetails = {
            date: selectedDate || "2025-12-12",
            startTime: selectedTime.start,
            endTime: selectedTime.end,
            room: id,
            user: formData.user,
            slots: selectedSlots,
        };


        try {
            const response = await createBooking({
                slotDetails,
                token,
            }).unwrap();
            toast.success('Booking successful')

            window.location.href = response.data.payment_url
            console.log("Booking successful:", response);
        } catch (error) {
            console.error("Booking failed:", error);
            toast.success('Booking failed')
        }

    };


    return (
        <section className="flex justify-center items-center h-[100vh]">
            <div className="border grid justify-center items-center 2xl:grid-cols-3 2xl:w-8/12 2xl:h-[55vh] p-10">
                <div className="flex flex-row items-center justify-center">
                    <div>
                        <DateSelect refetch={refetch} />
                        <div className="mt-2">
                            <div className="">
                                <div className="grid grid-cols-3 gap-y-3">
                                    {data?.map((slot: any) => (
                                        <div
                                            key={slot._id}
                                            className={`border w-3/4 text-center border-slate-800 p-1 rounded-md cursor-pointer 
                                           ${selectedSlots.includes(slot._id) || slot.isBooked ? 'bg-blue-200' : ''} 
                                           ${slot.isBooked ? 'cursor-not-allowed' : ''}`}
                                            onClick={() => !slot.isBooked && handleSlotSelection(slot)}
                                        >
                                            <p className="text-sm text-gray-900/85 font-medium">{slot.date}</p>
                                            <div className="flex text-xs items-center justify-center">
                                                <p>{slot.startTime}</p>
                                                <span className="ml-1 mr-1">-</span>
                                                <p>{slot.endTime}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="2xl:col-span-2">
                    <UserInfoForm handleSlotBooking={handleSlotBooking} selectedSlot={selectedSlots} />
                </div>
            </div>
        </section>
    )
}

export default SlotBooking