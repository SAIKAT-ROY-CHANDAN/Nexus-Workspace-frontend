import RegisterForm from "@/components/RegisterForm"
import { Apple, Facebook, Google } from "@/svgs/GlobalSvg"


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
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}

export default Register