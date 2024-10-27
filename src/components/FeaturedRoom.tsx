import { useGetRoomsQuery } from "@/redux/api/baseApi";
import FeatureCard from "./FeatureCard"


const FeaturedRoom = () => {
    const { data: featureData, isLoading } = useGetRoomsQuery({})

    if (isLoading) return <div>Loading...</div>;
    console.log(featureData);
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-9/12 items-center justify-center mx-auto py-20">
          {featureData && [...featureData].reverse().slice(0, 6).map((feature, index) => (
            <FeatureCard feature={feature} key={feature._id} index={index}/>
        ))}
        </section>
    )
}

export default FeaturedRoom