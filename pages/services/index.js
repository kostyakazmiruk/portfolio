import Circles from "../../components/Circles"
import Bulb from "../../components/Bulb"
import ServiceSlider from "../../components/ServiceSlider"
import { fadeIn } from "../../variants"
import { motion } from "framer-motion"

const Services = () => {
    return (
        <div className="flex h-full items-center bg-primary/30 py-36">
            <Circles />
            <div className="container mx-auto">
                <div className="flex flex-col gap-x-8 xl:flex-row">
                    {/*    text*/}
                    <div className="mb-4 flex flex-col text-center lg:text-left xl:mb-0 xl:w-[30vw]">
                        <motion.h2
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="h2 xl:mt-8"
                        >
                            My Service <span className="text-accent">.</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="maxw-[400px] mx-auto mb-4 lg:mx-0"
                        >
                            In a world driven by technology, the choice of a
                            development partner can define the trajectory of
                            your digital journey. It's not just about code; it's
                            about the expertise, dedication, and innovation that
                            come together to craft exceptional solutions.
                        </motion.p>
                    </div>
                    {/*    slider*/}
                    <motion.div
                        variants={fadeIn("down", 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="w-full xl:max-w-[65%]"
                    >
                        <ServiceSlider />
                    </motion.div>
                </div>
            </div>
            <Bulb />
        </div>
    )
}

export default Services
