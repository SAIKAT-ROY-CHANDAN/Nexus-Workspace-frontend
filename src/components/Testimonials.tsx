/* eslint-disable @typescript-eslint/no-explicit-any */
import DotShape from "@/svgs/DotShape";
import LeftArrow from "@/svgs/LeftArrow";
import RightARrow from "@/svgs/RightARrow";
import { useCallback, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
    const sliderRef = useRef<any>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <>
            <section className="pb-20 pt-20 dark:bg-dark lg:pb-[120px] lg:pt-[120px]">
                <div className="container mx-auto">
                    <Swiper slidesPerView={1} ref={sliderRef}>
                        <SwiperSlide>
                            <SingleTestimonial
                                image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                                reviewImg="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                                reviewAlt="lineicon"
                                details="Velit est sit voluptas eum sapiente omnis! Porro, impedit minus quam reprehenderit tempore sint quaerat id! Mollitia perspiciatis est asperiores commodi labore!"
                                name="Larry Diamond"
                                position="Chief Executive Officer."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleTestimonial
                                image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                                reviewImg="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                                reviewAlt="lineicon"
                                details="Velit est sit voluptas eum sapiente omnis! Porro, impedit minus quam reprehenderit tempore sint quaerat id! Mollitia perspiciatis est asperiores commodi labore!"
                                name="Larry Diamond"
                                position="Chief Executive Officer."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleTestimonial
                                image="https://img.freepik.com/free-photo/serious-confident-red-haired-business-lady-wearing-jacket-standing-with-arms-folded_74855-10381.jpg?t=st=1724607207~exp=1724610807~hmac=5e6383df160d66e01412818d2681181b3362a9a4079169e005978b1d2392b28b&w=740"
                                reviewImg="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                                reviewAlt="lineicon"
                                details="Velit est sit voluptas eum sapiente omnis! Porro, impedit minus quam reprehenderit tempore sint quaerat id! Mollitia perspiciatis est asperiores commodi labore!"
                                name="Larry Diamond"
                                position="Chief Executive Officer."
                            />
                        </SwiperSlide>
                        <div className="absolute left-0 right-0 z-10 flex items-center justify-center gap-5 sm:bottom-0">
                            <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
                                <button className="d flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke bg-white text-dark transition-all hover:border-transparent hover:drop-shadow-testimonial dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:hover:drop-shadow-none">
                                    <LeftArrow />
                                </button>
                            </div>
                            <div className="next-arrow cursor-pointer" onClick={handleNext}>
                                <button className="d flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke bg-white text-dark transition-all hover:border-transparent hover:drop-shadow-testimonial dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:hover:drop-shadow-none">
                                    <RightARrow />
                                </button>
                            </div>
                        </div>
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default Testimonial;

interface Review {
    image?: string;
    reviewImg?: string;
    reviewAlt?: string;
    details?: string;
    name?: string;
    position?: string;
}

const SingleTestimonial = ({
    image,
    reviewImg,
    reviewAlt,
    details,
    name,
    position,
}: Review) => {
    return (
        <div className="relative flex justify-center ">
            <div className="relative w-full pb-16 md:w-11/12 lg:w-10/12 xl:w-8/12">
                <div className="w-full items-center md:flex">
                    <div className="relative mb-12 w-full max-w-[310px] md:mb-0 md:mr-12 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16">
                        <img src={image} alt="image" className="w-full" />
                        <span className="absolute -left-6 -top-6 z-[-1] hidden sm:block">
                            <DotShape />
                        </span>
                        <span className="absolute -bottom-6 -right-6 z-[-1]">
                            <svg
                                width="64"
                                height="64"
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
                                    stroke="#13C296"
                                    strokeWidth="6"
                                />
                            </svg>
                        </span>
                    </div>
                    <div className="w-full">
                        <div>
                            <div className="mb-7">
                                <img src={reviewImg} alt={reviewAlt} />
                            </div>

                            <p className="mb-11 text-base font-normal italic leading-[1.81] text-body-color dark:text-dark-6 sm:text-[22px]">
                                {details}
                            </p>

                            <h4 className="mb-2 text-[22px] font-semibold leading-[27px] text-dark dark:text-white">
                                {name}
                            </h4>
                            <p className="text-base text-body-color dark:text-dark-6">
                                {position}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

