import { useForm } from "react-hook-form";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UpdateRoomForm = ({ onSubmit, formMethods, roomData }: any) => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            ...roomData,
            floorNo: Number(roomData.floorNo),
            roomNo: Number(roomData.roomNo),
            amenities: roomData.amenities.join(', ')
        }
    });

    formMethods.current = handleSubmit(onSubmit);

    return (
        <form>
            <div className="mb-4">
                <label className="block text-neutral-700 dark:text-neutral-300">Room Name</label>
                <input
                    {...register('name')}
                    className="mt-1 p-2 w-full border rounded"
                />
            </div>

            <div className="mb-4">
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block text-neutral-700 dark:text-neutral-300">Capacity</label>
                        <input
                            {...register('capacity')}
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-neutral-700 dark:text-neutral-300">Price</label>
                        <input
                            {...register('pricePerSlot')}
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-neutral-700 dark:text-neutral-300">Floor no</label>
                        <input
                            {...register('floorNo')}
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label className="block text-neutral-700 dark:text-neutral-300">Room no</label>
                        <input
                            {...register('roomNo')}
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-neutral-700 dark:text-neutral-300">Amenities</label>
                        <textarea
                            {...register('amenities')}
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default UpdateRoomForm