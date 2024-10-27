import FeaturedRoom from "@/components/FeaturedRoom"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import InfoTab from "@/components/InfoTab"
import Services from "@/components/Services"
import Testimonial from "@/components/Testimonials"


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