import FeaturedRoom from "@/components/FeaturedRoom"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import Services from "@/components/Services"
import Testimonial from "@/components/Testimonials"


const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedRoom />
            <Services />
            <HowItWorks />
            <Testimonial />
        </>
    )
}

export default Home