import { useEffect, useState } from "react";
import SelectTime from "./SelectTime";
import { timeMinutes } from "@/utils/time";
import { setHours, setTime } from "@/redux/slices/timeAndDate";
import { useAppDispatch } from "@/redux/hooks";


const TimeSelect = () => {
    const dispatch = useAppDispatch()
    const [startTime, setStartTime] = useState<string | null>(null);
    const [endTime, setEndTime] = useState<string | null>(null);
    const [validationError, setValidationError] = useState<string | null>(null);

    useEffect(() => {
        if (startTime && endTime) {
            const startMinutes = timeMinutes(startTime);
            const endMinutes = timeMinutes(endTime);
            const duration = (endMinutes - startMinutes) / 60;

            if (duration > 0) {
                console.log(`Selected duration: ${duration} hours`);
                dispatch(setTime({ start: startTime, end: endTime }))
                dispatch(setHours(duration))
            } else {
                console.log('End time must be after start time');
                setValidationError('End time must be after start time');
            }
        }
    }, [startTime, endTime]);

    return (
        <>
            <div className="flex gap-4">
                <SelectTime title="Select start time" onSelect={setStartTime} />
                <SelectTime title="Select end time" onSelect={setEndTime} />
            </div>
            <p className="text-xs text-red-500 mt-4 text-center">{validationError}</p>
        </>
    );
};
export default TimeSelect