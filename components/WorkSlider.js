import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Pagination } from "swiper"
import { BsArrowRight } from "react-icons/bs"
import Image from "next/image"

const workSlides = {
    slides: [
        {
            images: [
                {
                    title: "title",
                    path: "/thumb1.jpg",
                },
                {
                    title: "title",
                    path: "/thumb2.jpg",
                },
                {
                    title: "title",
                    path: "/thumb3.jpg",
                },
                {
                    title: "title",
                    path: "/thumb4.jpg",
                },
            ],
        },
        {
            images: [
                {
                    title: "title",
                    path: "/thumb4.jpg",
                },
                {
                    title: "title",
                    path: "/thumb1.jpg",
                },
                {
                    title: "title",
                    path: "/thumb2.jpg",
                },
                {
                    title: "title",
                    path: "/thumb3.jpg",
                },
            ],
        },
    ],
}

const WorkSlider = () => {
    return (
        <Swiper
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="h-[280px] sm:h-[480px]"
        >
            {workSlides.slides.map((slide, slideIndex) => {
                return (
                    <SwiperSlide key={slideIndex}>
                        {/* With grid row and grid col we can modify the number that we need to show on slides*/}
                        <div className="grid grid-cols-2 grid-rows-2 gap-4">
                            {slide.images.map((image, imageIndex) => {
                                return (
                                    <div
                                        key={imageIndex}
                                        className="group relative flex items-center justify-center overflow-hidden rounded-lg"
                                    >
                                        <div className="group relative flex items-center justify-center overflow-hidden">
                                            {/*image*/}
                                            <Image
                                                src={image.path}
                                                alt=""
                                                width={500}
                                                height={300}
                                            />
                                            {/*    overlay gradient*/}
                                            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 transition-all duration-700 group-hover:opacity-60"></div>
                                            {/*    title*/}
                                            <div className="absolute bottom-0 translate-y-full transition-all duration-300 group-hover:-translate-y-10 group-hover:xl:-translate-y-20">
                                                <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                                    {/*    title part 1*/}
                                                    <div className="delay-100">
                                                        LIVE
                                                    </div>
                                                    {/*    title part 2*/}
                                                    <div className="translate-y-[500%] transition-all delay-150 duration-300 group-hover:translate-y-0">
                                                        PROJECT
                                                    </div>
                                                    {/*    icon*/}
                                                    <div className="translate-y-[500%] text-xl transition-all delay-200 duration-300 group-hover:translate-y-0">
                                                        <BsArrowRight />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default WorkSlider
