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
                            decodedRole == 'user' ?
                                <>
                                    <Link to='/myBookings'>
                                        <DropdownMenuItem className="cursor-pointer">
                                            My Bookings
                                        </DropdownMenuItem>
                                    </Link>
                                 {/* User Dashboard */}
                                    <Link to='/userDashboard'>
                                        <DropdownMenuItem className="cursor-pointer">
                                            Dashboard
                                        </DropdownMenuItem>
                                    </Link>
                                </>
                                : 
                                // Admin Dashboard
                                <Link to='/dashboard'>
                                    <DropdownMenuItem className="cursor-pointer">
                                        Dashboard
                                    </DropdownMenuItem>
                                </Link>
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