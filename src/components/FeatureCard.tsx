import { TRoom } from "@/types/global";

interface FeatureCardProps {
    feature: TRoom;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {

    const imageUrl = feature?.image[0] || "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";


    return (
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
                alt=""
                src={imageUrl}
                className="h-56 w-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="bg-white p-4 sm:p-6">
                <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

                <a href="#">
                    <h3 className="mt-0.5 text-lg text-gray-900">{feature.name}</h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                    pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                    mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                    dignissimos. Molestias explicabo corporis voluptatem?
                </p>
            </div>
        </article>
    )
}

export default FeatureCard