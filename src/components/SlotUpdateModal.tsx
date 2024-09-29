/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "@/components/ui/animated-modal";
import { useUpdatedSlotMutation } from "@/redux/api/slotApi";
import { EditIcon } from "@/svgs/GlobalSvg";
import { generateTimeOptions } from "@/utils/generateTimeOptions";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
    id: string,
    roomId: string
}

const SlotUpdateModal = ({ id, roomId }: Props) => {
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [error, setError] = useState('');
    const [updatedSlot] = useUpdatedSlotMutation()


    const updateSlot = async () => {
        if (!startTime || !endTime) {
            setError('Please select both start and end times.');
            return;
        }

        if (endTime < startTime) {
            setError('End time cannot be before start time.');
            return;
        }

        setError('');

        const updatedData = {
            room: roomId,
            startTime,
            endTime,
        };

        try {
            const res = await updatedSlot({ id, updatedData }).unwrap();

            if (res?.success) {
                toast.success(`${res.message}`);
                console.log('Updated Slot:', res);
            } else {
                toast.warning(`${res.message || 'Failed to update the slot.'}`);
                setError(res.message || 'Failed to update the slot.');
            }
        } catch (err: any) {
            const errorMessage = err?.data?.message || err.message || 'Failed to update the slot.';
            toast.warning(errorMessage);
            console.log('Error:', err);
            setError(errorMessage);
        }

    };

    return (
        <div className="flex items-center justify-center">
            <Modal>
                <ModalTrigger
                    className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                    <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                        Update
                    </span>
                    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        <EditIcon />
                    </div>
                </ModalTrigger>
                <ModalBody>
                    <ModalContent>
                        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            Update Slot
                        </h4>

                        <div className="flex gap-2 items-center justify-center">
                            {/* Start time selection */}
                            <select
                                name="startTime"
                                id="startTime"
                                className="mt-1.5 w-full p-2 rounded-lg border-gray-300 text-gray-700 sm:text-sm border"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                            >
                                <option value="">Start Time</option>
                                {generateTimeOptions()}
                            </select>

                            {/* End time selection */}
                            <select
                                name="endTime"
                                id="endTime"
                                className="mt-1.5 w-full p-2 rounded-lg border-gray-300 text-gray-700 sm:text-sm border"
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                            >
                                <option value="">End Time</option>
                                {generateTimeOptions()}
                            </select>
                        </div>
                    </ModalContent>

                    {error && (
                        <p className="text-red-500 text-center mb-4">{error}</p>
                    )}

                    <ModalFooter className="gap-4">
                        <button
                            onClick={updateSlot}
                            className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                            Update
                        </button>
                    </ModalFooter>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default SlotUpdateModal