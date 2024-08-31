import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "./ui/select"

type OnSelectType = (time: string | null) => void;

interface SelectTimeProps {
    title: string;
    onSelect: OnSelectType;
}

const SelectTime = ({ title, onSelect }: SelectTimeProps) => {

    const generateTimeOptions = () => {
        const times = [];
        for (let i = 0; i < 24; i++) {
            const timeLabel = `${i.toString().padStart(2, '0')}:00`;
            times.push({ value: timeLabel, label: timeLabel });
        }
        return times;
    };

    const timeOptions = generateTimeOptions();
    return (
        <Select onValueChange={onSelect}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={title} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Time</SelectLabel>
                    {timeOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default SelectTime


