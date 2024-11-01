import { useAppSelector } from "@/redux/hooks"

const Profile = () => {
    const name = useAppSelector((state) => state.auth.name)
    const email = useAppSelector((state) => state.auth.email)
    const address = useAppSelector((state) => state.auth.address)
    const phone = useAppSelector((state) => state.auth.phone)

    return (
     <div>
        {name}
        {email}
        {address}
        {phone}
     </div>
    )
}

export default Profile