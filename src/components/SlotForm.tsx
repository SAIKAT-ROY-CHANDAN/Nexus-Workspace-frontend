import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "@/components/ui/animated-modal";
import { PlusIcon } from "@/svgs/GlobalSvg";
import CreateSlotFrom from "./CreateSlotFrom";

const SlotForm = () => {
    return (
        <div className="flex items-center justify-center">
            <Modal>
                <ModalTrigger
                    className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                    <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                        Add
                    </span>
                    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        <PlusIcon />
                    </div>
                </ModalTrigger>
                <ModalBody>
                    <ModalContent>
                        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            Add New Slot
                        </h4>
                        {/* Create Slot Form */}
                        <CreateSlotFrom />
                    </ModalContent>
                    <ModalFooter className="gap-4">
                        <></>
                    </ModalFooter>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default SlotForm