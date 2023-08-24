// data
import {
    RxArrowTopRight,
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
} from "react-icons/rx"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

import { FreeMode, Pagination } from "swiper"

const serviceData = [
    {
        icon: <RxDesktop />,
        title: "Development",
        description: "FrontEnd, BackEnd - I can do both!!",
    },
    {
        icon: <RxCrop />,
        title: "Branding",
        description: "I am dedicated to crafting your brand.",
    },
    {
        icon: <RxPencil2 />,
        title: "Design",
        description: "Elevating Frontend with a Design Edge.",
    },
    // {
    //     icon: <RxReader />,
    //     title: "Copywriting",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    // },
    {
        icon: <RxRocket />,
        title: "SEO",
        description: "Crafting Code with SEO Excellence.",
    },
]

const ServiceSlider = () => {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
            }}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination]}
            className="h-[240px] sm:h-[340px]"
        >
            {serviceData.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="group flex h-max min-h-[286px] cursor-pointer select-none justify-between gap-x-6 rounded-lg bg-[rgba(65,47,123,0.15)] px-6 py-8 transition-all duration-300 hover:bg-[rgba(89,64,169,0.15)] sm:flex-col sm:gap-x-0">
                            {/*    icon*/}
                            <div className="mb-4 text-4xl text-accent">
                                {item.icon}
                            </div>
                            {/*    title and description*/}
                            <div className="mb-8">
                                <div className="mb-2 text-lg">{item.title}</div>
                                <p className="max-w-[350px] leading-normal">
                                    {item.description}
                                </p>
                            </div>
                            {/*    arrow*/}
                            <div className="text-3xl">
                                <RxArrowTopRight className="transition-all duration-300 group-hover:rotate-45 group-hover:text-accent" />
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default ServiceSlider
