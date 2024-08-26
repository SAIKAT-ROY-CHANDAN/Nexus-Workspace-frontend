import TeamCircle from "@/svgs/TeamCircle";

const Team = () => {
    return (
        <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                Our Team
                            </span>
                            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                                Our Awesome Team
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap justify-center">
                    <TeamCard
                        name="Coriss Ambady"
                        profession="Web Developer"
                        imageSrc="https://i.ibb.co/T1J9LD4/image-03-2.jpg"
                    />
                    <TeamCard
                        name="Coriss Ambady"
                        profession="Web Developer"
                        imageSrc="https://i.ibb.co/8P6cvVy/image-01-1.jpg"
                    />
                    <TeamCard
                        name="Coriss Ambady"
                        profession="Web Developer"
                        imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
                    />
                    <TeamCard
                        name="Coriss Ambady"
                        profession="Web Developer"
                        imageSrc="https://i.ibb.co/yVVT0Dp/image-02-2.jpg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;

interface TeamCardProps {
    imageSrc: string;
    name: string;
    profession: string;
}

const TeamCard = ({ imageSrc, name, profession }: TeamCardProps) => {
    return (
        <>
            <div className="w-full px-4 md:w-1/2 xl:w-1/4">
                <div className="mx-auto mb-10 group w-full max-w-[370px]">
                    <div className="relative duration-200 group-hover:border-slate-700 group-hover:border-2 overflow-hidden rounded-lg border-2 border-green-100">
                        <img src={imageSrc} alt="" className="w-full group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute bottom-5 left-0 w-full text-center">
                            <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-dark-2">
                                <h3 className="text-base font-semibold text-dark dark:text-white">
                                    {name}
                                </h3>
                                <p className="text-xs text-body-color dark:text-dark-6">
                                    {profession}
                                </p>
                                <div>
                                    <span className="absolute bottom-0 left-0">
                                        <svg
                                            width={61}
                                            height={30}
                                            viewBox="0 0 61 30"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx={16}
                                                cy={45}
                                                r={45}
                                                fill="#13C296"
                                                fillOpacity="0.11"
                                            />
                                        </svg>
                                    </span>
                                    <span className="absolute right-0 top-0">
                                      <TeamCircle />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};