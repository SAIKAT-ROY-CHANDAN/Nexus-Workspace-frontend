import DateSelect from "@/components/DateSelect"
import TimeSelect from "@/components/TimeSelect"
import UserInfoForm from "@/components/UserInfoForm"
import { useAppSelector } from "@/redux/hooks";



const SlotBooking = () => {
    const { selectedTime, selectedDate } = useAppSelector((state) => state.timeAndDate);
    console.log(selectedTime, selectedDate);
    return (
        <section className="flex justify-center items-center h-[100vh]">
            <div className="border grid grid-cols-3 w-8/12 h-[55vh] p-10">
                <div className="flex items-center justify-center">
                    <div>
                        <DateSelect />
                        <div className="mt-6">
                            <TimeSelect />
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <UserInfoForm />
                </div>
            </div>
        </section>
    )
}

export default SlotBooking