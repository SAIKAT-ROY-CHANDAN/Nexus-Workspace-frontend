import { Eye, Google, Mail } from "@/svgs/GlobalSvg"
import { Link, useNavigate } from "react-router-dom"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useLoginUserMutation } from "@/redux/api/authApi"
import { loginFormSchema } from "@/validation/auth.validation"
import { toast } from "sonner"
import { jwtDecode, JwtPayload } from "jwt-decode";
import { setRole, setToken } from "@/redux/slices/authSlice"
import { useAppDispatch } from "@/redux/hooks"

type FormData = z.infer<typeof loginFormSchema>;
interface CustomJwtPayload extends JwtPayload {
    role: string;
}

const LoginForm = () => {
    const [loginUser] = useLoginUserMutation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const form = useForm({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (data: FormData) => {
        try {
            const res = await loginUser(data).unwrap();

            if (res.success) {
                toast.success('Account Create Successfully')

                const decoded = jwtDecode<CustomJwtPayload>(res.token)
                dispatch(setToken(res.token))
                dispatch(setRole(decoded.role))
                navigate('/');

            } else {
                console.error('Login failed:', res.message);
            }
        } catch (error) {
            toast.warning(`${error.data.message}`)
            console.error('An error occurred during login:', error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl w-full p-6 mx-auto">
                <div className="mb-12">
                    <h3 className="text-gray-800 text-4xl font-extrabold">Sign in</h3>
                    <p className="text-gray-800 text-sm mt-6">Don't have an account <Link to='/register' className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link></p>
                </div>

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-800 text-sm block mb-2">Email</FormLabel>
                            <FormControl>
                                <div className="relative flex items-center">
                                    <Input
                                        {...field}
                                        name="email"
                                        type="text"
                                        required
                                        className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                                        placeholder="Enter email" />
                                    <Mail />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="mt-6">
                            <label className="text-gray-800 text-sm block mb-2">Password</label>
                            <FormControl>
                                <div className="relative flex items-center">
                                    <Input
                                        {...field}
                                        name="password"
                                        type="text"
                                        required
                                        className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                                        placeholder="Enter password" />
                                    <Eye />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                    <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                        <label className="ml-3 block text-sm text-gray-800">
                            Remember me
                        </label>
                    </div>
                    <div>
                        <a className="text-blue-600 font-semibold text-sm hover:underline">
                            Forgot Password?
                        </a>
                    </div>
                </div>

                <div className="mt-12">
                    <Button type="submit" className="w-full py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                        Sign in
                    </Button>
                </div>

                <div className="my-6 flex items-center gap-4">
                    <hr className="w-full border-gray-300" />
                    <p className="text-sm text-gray-800 text-center">or</p>
                    <hr className="w-full border-gray-300" />
                </div>

                <button type="button" className="w-full flex items-center justify-center gap-4 py-2.5 px-4 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-transparent hover:bg-gray-50 focus:outline-none">
                    <Google />
                    Continue with google
                </button>
            </form>
        </Form>
    )
}

export default LoginForm