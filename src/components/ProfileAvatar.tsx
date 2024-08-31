import { Link } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const ProfileAvatar = () => {
    const decodedRole = useSelector((state: RootState) => state.auth.role);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mr-4 xl:mr-8">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        {
                            decodedRole !== 'user' ?
                                <DropdownMenuItem className="cursor-pointer">
                                    <Link to='/myBookings'>My Bookings</Link>
                                </DropdownMenuItem>
                                :
                                <DropdownMenuItem className="cursor-pointer">
                                    <Link to='/dashboard'>Dashboard</Link>
                                </DropdownMenuItem>
                        }
                    </DropdownMenuGroup>
                    <DropdownMenuItem className="cursor-pointer">
                        <Link to='/'>Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                        Log out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default ProfileAvatar