import LoginForm from "@/components/LoginForm"

const Login = () => {
  return (
    <div className="font-[sans-serif]">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 items-center gap-4">
        <div className="max-md:order-1 h-screen min-h-full">
          <img src="https://rb.gy/gizq4y" className="w-full h-full object-cover" alt="login-image" />
        </div>

        <LoginForm />
      </div>
    </div>
  )
}

export default Login