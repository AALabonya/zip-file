import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonial = () => {

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-10">
                <SwiperSlide >
                    <section className="">
                        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                            <figure className="max-w-screen-md mx-auto">
                                <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                </svg>
                                <blockquote>
                                    <p className="text-2xl font-medium text-gray-900 dark:text-white">"I had an exceptional experience with RS Motors International. The team, led by [Designation], went above and beyond to find the perfect car for me. The attention to detail and commitment to quality made my purchase worry-free. I'm now a proud owner of a vehicle that exceeds my expectations. Thank you, RS Motors!"</p>
                                </blockquote>
                                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                    {/* <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" /> */}
                                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div className="pr-3 font-medium text-gray-900 dark:text-white">Sarah K.</div>
                                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Marketing Executive</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="">
                        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                            <figure className="max-w-screen-md mx-auto">
                                <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                </svg>
                                <blockquote>
                                    <p className="text-2xl font-medium text-gray-900 dark:text-white">"RS Motors International made my dream of owning a luxury car a reality. The personalized service and transparency throughout the process were impressive. They delivered on their promise of quality, and I couldn't be happier with my purchase. Highly recommend for anyone in search of excellence!"</p>
                                </blockquote>
                                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                    {/* <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" /> */}
                                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div className="pr-3 font-medium text-gray-900 dark:text-white">Alex M.</div>
                                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">IT Consultant</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="">
                        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                            <figure className="max-w-screen-md mx-auto">
                                <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                </svg>
                                <blockquote>
                                    <p className="text-2xl font-medium text-gray-900 dark:text-white">"RS Motors International stands out for their global reach and expertise. I was looking for a specific model, and they sourced it for me with ease. The professionalism and knowledge of the team, headed by [Designation], made the entire transaction smooth. If you're seeking a unique, high-quality used car, RS Motors is the place to go."</p>
                                </blockquote>
                                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                    {/* <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" /> */}
                                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div className="pr-3 font-medium text-gray-900 dark:text-white">Carlos G.</div>
                                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Financial Analyst</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="">
                        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                            <figure className="max-w-screen-md mx-auto">
                                <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                </svg>
                                <blockquote>
                                    <p className="text-2xl font-medium text-gray-900 dark:text-white">"I want to express my gratitude to RS Motors International for their outstanding service. The team, led by [Designation], guided me through the process, answered all my questions, and provided detailed information about the car's history. The purchase was seamless, and I felt confident in my decision. RS Motors truly values their customers!"</p>
                                </blockquote>
                                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                    {/* <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" /> */}
                                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div className="pr-3 font-medium text-gray-900 dark:text-white"> Emily R.</div>
                                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400"> Human Resources Manager</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Testimonial;