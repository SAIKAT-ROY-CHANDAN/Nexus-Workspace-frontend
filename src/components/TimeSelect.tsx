import { useEffect, useState } from "react";
import SelectTime from "./SelectTime";
import { timeMinutes } from "@/utils/time";

const TimeSelect = () => {
    const [startTime, setStartTime] = useState<string | null>(null);
    const [endTime, setEndTime] = useState<string | null>(null);
    
    useEffect(() => {
        if (startTime && endTime) {
            const startMinutes = timeMinutes(startTime);
            const endMinutes = timeMinutes(endTime);
            const duration = (endMinutes - startMinutes) / 60;
            if (duration > 0) {
                console.log(`Selected duration: ${duration} hours`);
            } else {
                console.log('End time must be after start time');
            }
        }
    }, [startTime, endTime]);

    return (
        <div className="flex gap-4">
            <SelectTime title="Select start time" onSelect={setStartTime} />
            <SelectTime title="Select end time" onSelect={setEndTime} />
        </div>
    );
};
export default TimeSelect