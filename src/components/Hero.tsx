import { Button } from "./ui/button"
import workspaceVideo from '/video/workspace.mp4'

const Hero = () => {
    return (
        <div className="w-full">
            <video className="w-full h-[100vh] relative object-cover" autoPlay loop muted>
                <source src={workspaceVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/40 to-slate-200/25">
                <div className="flex flex-col items-center justify-center translate-y-64 gap-y-8 2xl:gap-y-10 mx-3 md:mx-10 lg:w-9/12 lg:mx-auto">
                    <h1 className="font-bold text-5xl text-center text-white">Book Your Ideal Meeting Room with <span className="">Ease</span></h1>
                    <p className=" text-[#e6e6e6] text-3xl text-center sm:mx-10 xl:w-10/12 2xl:w-8/12">Efficient, hassle-free room booking for all your meeting needs.</p>
                    <Button variant='outline' className="font-semibold text-md">
                        Book Now
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero