import { useAppSelector } from "@/redux/hooks"

const Profile = () => {
    const name = useAppSelector((state) => state.auth.name)
    const email = useAppSelector((state) => state.auth.email)
    const address = useAppSelector((state) => state.auth.address)
    const phone = useAppSelector((state) => state.auth.phone)

    return (
        <div className="flex items-center justify-center w-full">
            <div className="bg-white shadow-sm p-10 rounded-xl flex w-[800px] gap-x-8">
                <img
                    className="h-40 w-40 rounded-lg ring-0 hover:ring-blue-500 hover:ring-1 transition-all"
                    src="/public/images/contactus.jpg"
                    alt="profile-img"
                />
                <div className="mt-2">
                    <h1 className="capitalize text-slate-700 mb-2 font-medium text-xl">{name}</h1>
                    <p className="text-gray-600 text-sm mb-1">{email}</p>
                    <p className="text-gray-600 text-sm mb-1">{address}</p>
                    <p className="text-gray-600 text-sm mb-1">{phone}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile