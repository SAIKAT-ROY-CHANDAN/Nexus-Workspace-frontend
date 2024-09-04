import { Calendar } from "@/components/ui/calendar"
import { useAppDispatch } from "@/redux/hooks";
import { setDate } from "@/redux/slices/timeAndDate";
import { formatDate } from "@/utils/time";
import { useState } from "react"

const DateSelect = ({ refetch }) => {
    const dispatch = useAppDispatch()
    const [date, setDateState] = useState<Date | undefined>(new Date())

    const handleDateSelect = (selectedDate: Date | undefined) => {
        if (selectedDate) {
            refetch()
            setDateState(selectedDate);
            const formattedDate = formatDate(selectedDate);
            dispatch(setDate(formattedDate))
        }
    };

    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            className="rounded-md border"
        />
    )
}

export default DateSelect