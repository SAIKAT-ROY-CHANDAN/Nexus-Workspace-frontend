/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "@/components/ui/animated-modal";
import { EditIcon } from "@/svgs/GlobalSvg";
import UpdateRoomForm from "./UpdateRoomForm";
import { useRef } from "react";
import { useGetSingleRoomQuery, useUpdateRoomMutation } from "@/redux/api/baseApi";
import { useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";

export function RoomUpdateModal({ roomId }: any) {
    const { data: roomData } = useGetSingleRoomQuery(roomId)
    const token = useAppSelector((state) => state.auth.token)
    const [updateRoom] = useUpdateRoomMutation()
    const formMethods = useRef<(() => void) | null>(null);

    const onSubmit = async (data: any) => {
        const updatedData = {
            ...data,
            amenities: data.amenities.split(',').map((item: string) => item.trim()),
        };

        
        try {
            const res = await updateRoom({ updatedData, token, roomId })
            
            console.log(res);
            if (res.data.success) {
                toast.success('Update Room Successfully')
            } else {
                console.error('Update failed:', res.data.message);
            }
        } catch (error) {
            console.error('An error occurred during upgrade:', error);
        }
    };

    return (
        <div className="flex items-center justify-center">
            <Modal>
                <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
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
                            Revamp Your Room
                        </h4>
                        <UpdateRoomForm onSubmit={onSubmit} formMethods={formMethods} roomData={roomData} />
                    </ModalContent>
                    <ModalFooter className="gap-4">
                        <button
                            onClick={() => {
                                if (formMethods.current) {
                                    formMethods.current();
                                } else {
                                    console.warn("formMethods.current is null");
                                }
                            }}
                            className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                            Update
                        </button>
                    </ModalFooter>
                </ModalBody>
            </Modal>
        </div>
    );
}

