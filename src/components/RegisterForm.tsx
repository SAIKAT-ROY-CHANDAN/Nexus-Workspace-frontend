import { Eye, Mail, Mobile, Person } from "@/svgs/GlobalSvg"
import { Link } from "react-router-dom"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "./ui/button"
import { registerFormSchema } from "@/validation/auth.validation"
import { FaAddressBook } from "react-icons/fa";
import { FormData } from "@/pages/Register"

type RegisterFormProps = {
    onSubmit: (data: FormData) => Promise<void>;
  };
  

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {

    const form = useForm({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            phone: "",
            address: ""
        },
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="mb-8">
                    <h3 className="text-gray-800 text-2xl font-bold">Register</h3>
                </div>

                <div className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <div className="relative flex items-center">
                                        <Input
                                            placeholder="Enter name"
                                            {...field}
                                            className="bg-white border border-gray-300 w-full text-sm text-gray-800 pl-4 pr-10 py-2.5 rounded-md outline-blue-500"
                                        />
                                        <Person />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Id</FormLabel>
                                <FormControl>
                                    <div className="relative flex items-center">
                                        <Input
                                            placeholder="Enter email"
                                            {...field}
                                            className="bg-white border border-gray-300 w-full text-sm text-gray-800 pl-4 pr-10 py-2.5 rounded-md outline-blue-500"
                                        />
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
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <div className="relative flex items-center">
                                        <Input
                                            type="text"
                                            placeholder="Enter password"
                                            {...field}
                                            className="bg-white border border-gray-300 w-full text-sm text-gray-800 pl-4 pr-10 py-2.5 rounded-md outline-blue-500"
                                        />
                                        <Eye />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <div className="relative flex items-center">
                                        <Input
                                            type="text"
                                            placeholder="Enter number"
                                            {...field}
                                            className="bg-white border border-gray-300 w-full text-sm text-gray-800 pl-4 pr-10 py-2.5 rounded-md outline-blue-500"
                                        />
                                        <Mobile />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <div className="relative flex items-center">
                                        <Input
                                            type="text"
                                            placeholder="Enter Address"
                                            {...field}
                                            className="bg-white border border-gray-300 w-full text-sm text-gray-800 pl-4 pr-10 py-2.5 rounded-md outline-blue-500"
                                        />
                                        <FaAddressBook className="w-4 h-4 absolute right-4 cursor-pointer text-gray-800" />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md" />
                        <label className="text-gray-800 ml-3 block text-sm">
                            I accept the <a className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
                        </label>
                    </div>
                </div>

                <div className="!mt-8">
                    <Button type="submit" className="w-full py-2.5 px-4 text-sm tracking-wider font-semibold rounded-md bg-slate-600 hover:bg-slate-700 text-white focus:outline-none">
                        Create Account
                    </Button>
                </div>
                <p className="text-gray-800 text-sm mt-6 text-center">
                    Already have an account?
                    <Link to='/login' className="text-slate-600 font-semibold hover:underline ml-1">Login here</Link>
                </p>
            </form>
        </Form>
    )
}

export default RegisterForm