import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import { FaQuoteLeft } from "react-icons/fa"
import Image from "next/image"

import "swiper/css"
import "swiper/css/navigation"

// testimonial data
const testimonialData = [
    {
        image: "/t-avt-1.png",
        name: "Anne Smith",
        position: "Customer",
        message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
    },
    {
        image: "/t-avt-2.png",
        name: "Jane Doe",
        position: "Customer",
        message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
    },
    {
        image: "/t-avt-3.png",
        name: "Jhon Doe",
        position: "Customer",
        message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
    },
]

const TestimonialsSlider = () => {
    return (
        <Swiper
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="h-[400px]"
        >
            {testimonialData.map((person, personIndex) => {
                return (
                    <SwiperSlide key={personIndex}>
                        <div className="flex h-full flex-col items-center gap-x-8 px-16 md:flex-row">
                            {/*  avatar name, position*/}
                            <div className="relative mx-auto flex w-full max-w-[300px] flex-col items-center xl:mx-0 xl:justify-center">
                                <div className="flex flex-col justify-center text-center">
                                    <div className="mx-auto mb-2">
                                        <Image
                                            src={person.image}
                                            width={100}
                                            height={100}
                                            alt="avatar of client"
                                        />
                                    </div>
                                    {/*  name*/}
                                    <div className="text-lg">{person.name}</div>
                                    {/*  position*/}
                                    <div className="text-[12px] font-extralight uppercase tracking-widest">
                                        {person.position}
                                    </div>
                                </div>
                            </div>
                            {/*  quote and message*/}
                            <div className="relative flex flex-1 flex-col items-center justify-center before:w-[1px] xl:pl-20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] xl:before:bg-white/20">
                                {/*    quite icon*/}
                                <div className="mb-4">
                                    <FaQuoteLeft className="mx-auto text-4xl text-white/20 md:mx-0 xl:text-6xl" />
                                </div>
                                {/*    message*/}
                                <div className="text-center md:text-left xl:text-lg">
                                    {person.message}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default TestimonialsSlider
