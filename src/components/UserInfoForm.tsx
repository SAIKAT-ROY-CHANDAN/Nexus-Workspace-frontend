/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from "@/redux/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const userInfoSchema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Invalid email address"),
    number: z.string().min(10, "Mobile number must be at least 10 digits"),
    address: z.string().nonempty("Address is required"),
});

const UserInfoForm = ({ handleSlotBooking, selectedSlot }: any) => {
    const { address, email, name, phone, _id } = useAppSelector((state) => state.auth);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(userInfoSchema),
        defaultValues: {
            name,
            email,
            number: phone,
            address,
        },
    });

    const onSubmit = (data: any) => {
        const formData = {
            ...data,
            user: _id,
            slots: selectedSlot ? [selectedSlot] : [],
        };

        // console.log("Form Data:", formData);
        handleSlotBooking(formData);
    };

    return (
        <section className="">
            <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Name</label>
                            <input
                                {...register("name")}
                                type="text"
                                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-slate-500/85 transition-all"
                                placeholder="Enter name"
                            />
                            {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                            <input
                                {...register("email")}
                                type="text"
                                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-slate-500/85 transition-all"
                                placeholder="Enter email"
                            />
                            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Mobile No.</label>
                            <input
                                {...register("number")}
                                type="text"
                                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-slate-500/85 transition-all"
                                placeholder="Enter mobile number"
                            />
                            {errors.number && <p className="text-red-600 text-sm">{errors.number.message}</p>}
                        </div>

                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Address</label>
                            <input
                                {...register("address")}
                                type="text"
                                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-slate-500/85 transition-all"
                                placeholder="Enter address"
                            />
                            {errors.address && <p className="text-red-600 text-sm">{errors.address.message}</p>}
                        </div>
                    </div>

                    <div className="!mt-12">
                        <button type="submit" className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-slate-900 hover:bg-slate-800/90 focus:outline-none">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default UserInfoForm