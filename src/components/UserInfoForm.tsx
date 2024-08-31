

const UserInfoForm = () => {
    return (
        <section className="">
            <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
                <form>
                    <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">First Name</label>
                            <input name="name" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter name" />
                        </div>

                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                            <input name="email" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter email" />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Mobile No.</label>
                            <input name="number" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter mobile number" />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Address</label>
                            <input name="address" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Address" />
                        </div>
                    </div>

                    <div className="!mt-12">
                        <button type="button" className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                           Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default UserInfoForm