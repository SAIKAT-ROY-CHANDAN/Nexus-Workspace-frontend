import { Apple, Eye, Facebook, Google, Mail, Person } from "@/svgs/GlobalSvg"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="font-[sans-serif] bg-gray-50 flex items-center md:h-screen p-4">
      <div className="w-full max-w-4xl max-md:max-w-xl mx-auto">
        <div className="bg-white grid md:grid-cols-2 gap-16 w-full sm:p-8 p-6 shadow-md rounded-md overflow-hidden">
          <div className="max-md:order-1 space-y-6">
            <div className="md:mb-16 mb-8">
              <h3 className="text-gray-800 text-2xl font-bold">Instant Access</h3>
            </div>

            <div className="space-y-6">
              <button type="button"
                className="w-full px-5 py-2.5 flex items-center justify-center rounded-md text-white text-base tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700">
                <Facebook />
                Continue with Facebook
              </button>
              <button type="button"
                className="w-full px-5 py-2.5 flex items-center justify-center rounded-md text-gray-800 text-base tracking-wider font-semibold border-none outline-none bg-gray-100 hover:bg-gray-200">
                <Google />
                Continue with Google
              </button>
              <button type="button"
                className="w-full px-5 py-2.5 flex items-center justify-center rounded-md text-white text-base tracking-wider font-semibold border-none outline-none bg-black hover:bg-[#333]">
                <Apple />
                Continue with Apple
              </button>
            </div>
          </div>

          <form className="w-full">
            <div className="mb-8">
              <h3 className="text-gray-800 text-2xl font-bold">Register</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Name</label>
                <div className="relative flex items-center">
                  <input name="name" type="text" required className="bg-white border border-gray-300 w-full text-sm text-gray-800 pl-4 pr-10 py-2.5 rounded-md outline-blue-500" placeholder="Enter name" />
                  <Person />
                </div>
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                <div className="relative flex items-center">
                  <input name="email" type="email" required className="bg-white border border-gray-300 w-full text-sm text-gray-800 pl-4 pr-10 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" />
                  <Mail />
                </div>
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input name="password" type="password" required className="bg-white border border-gray-300 w-full text-sm text-gray-800 pl-4 pr-10 py-2.5 rounded-md outline-blue-500" placeholder="Enter password" />
                  <Eye />
                </div>
              </div>
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md" />
                <label className="text-gray-800 ml-3 block text-sm">
                  I accept the <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
                </label>
              </div>
            </div>

            <div className="!mt-8">
              <button type="button" className="w-full py-2.5 px-4 text-sm tracking-wider font-semibold rounded-md bg-slate-600 hover:bg-slate-700 text-white focus:outline-none">
                Create Account
              </button>
            </div>
            <p className="text-gray-800 text-sm mt-6 text-center">
               Already have an account?
              <Link to='/login' className="text-slate-600 font-semibold hover:underline ml-1">Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register