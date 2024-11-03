import FeaturedRoom from "@/components/home/FeaturedRoom"
import Hero from "@/components/home/Hero"
import HowItWorks from "@/components/HowItWorks"
import InfoTab from "@/components/home/InfoTab"
import Services from "@/components/home/Services"
import Testimonial from "@/components/home/Testimonials"


const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedRoom />
            <Services />
            <HowItWorks />
            <InfoTab />
            <Testimonial />
        </>
    )
}

export default Home