/* eslint-disable @typescript-eslint/no-explicit-any */
import DateSelect from "@/components/DateSelect"
import UserInfoForm from "@/components/UserInfoForm"
import { useGelSlotsByQueryIdQuery } from "@/redux/api/slotApi";
import { useAppSelector } from "@/redux/hooks";
import { useParams } from "react-router-dom";

const SlotBooking = () => {
    const { selectedTime, selectedDate } = useAppSelector((state) => state.timeAndDate);
    const { id } = useParams();
    // const [createSlot] = useCreateSlotMutation()
    const { data } = useGelSlotsByQueryIdQuery({ date: selectedDate, id: id })
    console.log(id);
    console.log(data);

    const handleSlotBooking = async () => {
        const slotDetails = {
            date: selectedDate,
            startTime: selectedTime.start,
            endTime: selectedTime.end,
            room: id,
        };

        console.log(slotDetails);

        // try {
        //     const response = await createSlot(slotDetails);
        //     console.log(response);
        //     if (response.data.success) {
        //         console.log('Slot booked successfully', response.data);
        //     } else {
        //         console.log('Failed to book the slot', response.error);
        //     }
        // } catch (error) {
        //     console.log('Error occurred while booking slot:', error);
        // }
    };

    return (
        <section className="flex justify-center items-center h-[100vh]">
            <div className="border grid justify-center items-center 2xl:grid-cols-3 2xl:w-8/12 2xl:h-[55vh] p-10">
                <div className="flex flex-row items-center justify-center">
                    <div>
                        <DateSelect />
                        <div className="mt-6">
                            {/* <TimeSelect /> */}
                            <div className="">
                                <div className="grid grid-cols-3 gap-3">
                                    {data?.map((slot: any) => (
                                        <div className="border w-full text-center border-slate-800 rounded-lg" key={slot._id}>
                                            <p className="text-sm">{slot.date}</p>
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
                    <UserInfoForm handleSlotBooking={handleSlotBooking} />
                </div>
            </div>
        </section>
    )
}

export default SlotBooking