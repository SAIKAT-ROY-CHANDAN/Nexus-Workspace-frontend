import { useAppSelector } from "@/redux/hooks";

const UserInfoForm = ({ handleSlotBooking }) => {
    const { address, email, name, phone } = useAppSelector((state) => state.auth);
    return (
        <section className="">
            <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
                <form>
                    <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Name</label>
                            <input name="name" type="text" defaultValue={name} className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-slate-500/85 transition-all" placeholder="Enter name" />
                        </div>

                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                            <input name="email" type="text" defaultValue={email} className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-slate-500/85 transition-all" placeholder="Enter email" />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Mobile No.</label>
                            <input name="number" type="text" defaultValue={phone} className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-slate-500/85 transition-all" placeholder="Enter mobile number" />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Address</label>
                            <input name="address" type="text" defaultValue={address} className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-slate-500/85 transition-all" placeholder="Address" />
                        </div>
                    </div>

                    <div className="!mt-12">
                        <button type="button" onClick={handleSlotBooking} className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-slate-900 hover:bg-slate-800/90 focus:outline-none">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default UserInfoForm