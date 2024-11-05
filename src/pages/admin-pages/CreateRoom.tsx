import ImageUpload from "@/components/ImageUpload"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCreateRoomMutation } from "@/redux/api/baseApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addAmenity, removeAmenity } from "@/redux/slices/amenites";
import { TRoom } from "@/types/global";
import { roomSchema } from "@/validation/room.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

type RoomFormValues = z.infer<typeof roomSchema>;

const CreateRoom = () => {
  const images = useAppSelector((state) => state.imageLink.links);
  // const images = useAppSelector((state) => state.imageLink.files);
  const amenitiesFromRedux = useAppSelector((state) => state.amenities.amenities);
  const loading = useAppSelector((state) => state.imageLink.loading);
  const token = useAppSelector((state) => state.auth.token);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  const [createRoom] = useCreateRoomMutation()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RoomFormValues>({
    resolver: zodResolver(roomSchema),
    defaultValues: {
      amenities: [],
    },
  });

  console.log(errors);

  useEffect(() => {
    setValue('amenities', amenitiesFromRedux);
  }, [amenitiesFromRedux, setValue]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      event.preventDefault();
      dispatch(addAmenity(inputValue.trim()));
      setInputValue('');
    }
  };

  const handleRemove = (index: number) => {
    dispatch(removeAmenity(index));
  };

  const onSubmit = async (data: RoomFormValues) => {
    const roomData: TRoom = {
      name: data.name,
      roomNo: Number(data.roomNo),
      floorNo: Number(data.floorNo),
      capacity: data.capacity,
      pricePerSlot: data.price,
      amenities: data.amenities,
      isDeleted: false,
      image: images,
    };
    console.log(roomData, 'room-data');
    try {
      const response = await createRoom({
        roomData,
        token,
      }).unwrap();

      toast.success('Room created successfully')
      console.log("Room create successfully:", response);

    } catch (error) {
      console.error("Room creation failed:", error);
      toast.success('Room creation failed')
    }
  };


  return (
    <section className="w-full h-screen overflow-auto">
      <div className="flex mt-10 justify-center">
        <div className="flex w-11/12 md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-2/5 items-center border justify-center p-10 rounded-lg bg-slate-200/20 flex-col gap-6">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">
            <Input
              type="text"
              className="p-2 w-full focus-within:ring-1 outline-none rounded-lg text-gray-800 text-sm"
              placeholder="Name"
              {...register("name")}
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}

            <Input
              type="text"
              className="p-2 w-full focus-within:ring-1 outline-none rounded-lg text-gray-800 text-sm"
              placeholder="Room No"
              {...register("roomNo")}
            />
            {errors.roomNo && <p className="text-red-500 text-xs">{errors.roomNo.message}</p>}

            <div className="grid grid-cols-3 2xl:grid-cols-4 gap-4 w-full">
              <Input
                type="text"
                className="p-2 w-full focus-within:ring-1 outline-none rounded-lg text-gray-800 text-sm"
                placeholder="Floor No"
                {...register("floorNo")}
              />
              {errors.floorNo && <p className="text-red-500 text-xs">{errors.floorNo.message}</p>}

              <Input
                type="text"
                className="p-2 w-full focus-within:ring-1 outline-none rounded-lg 2xl:col-span-2 text-gray-800 text-sm"
                placeholder="Capacity"
                {...register("capacity", { valueAsNumber: true })}
              />
              {errors.capacity && <p className="text-red-500 text-xs">{errors.capacity.message}</p>}

              <Input
                type="text"
                className="p-2 w-full focus-within:ring-1 outline-none rounded-lg text-gray-800 text-sm"
                placeholder="Price"
                {...register("price", { valueAsNumber: true })}
              />
              {errors.price && <p className="text-red-500 text-xs">{errors.price.message}</p>}
            </div>

            <div className="w-full col-span-2">
              <Input
                type="text"
                className="p-2 w-full focus-within:ring-1 outline-none rounded-lg text-gray-800 text-sm"
                placeholder="Amenities"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <div className="mt-4 flex gap-2">
                {amenitiesFromRedux.map((amenity, index) => (
                  <div key={index} className="p-1 bg-slate-200 rounded-lg text-xs mt-2 capitalize flex items-center justify-between">
                    <span>{amenity}</span>
                    <button
                      onClick={() => handleRemove(index)}
                      className="ml-4 text-red-500 hover:text-red-700 focus:outline-none"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <ImageUpload />
            <Button type="submit" disabled={loading}>
              {loading ? <span>Loading...</span> : <span>Submit</span>}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CreateRoom