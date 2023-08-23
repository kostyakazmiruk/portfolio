import ProjectsBtn from "../components/ProjectsBtn"
import { motion } from "framer-motion"
import { fadeIn } from "../variants"
import Avatar from "../components/Avatar"
import ParticlesContainer from "../components/ParticlesContainer"

const Home = () => {
    return (
        <div className="h-full bg-primary/60">
            <div className="h-full w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
                <div className="container mx-auto flex h-full flex-col justify-center text-center xl:pt-40 xl:text-left">
                    {/* title*/}
                    <motion.h1
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="h1"
                    >
                        Transforming Ideas <br /> Into{" "}
                        <span className="text-accent">Digital Reality</span>
                    </motion.h1>
                    {/* subtitle */}
                    <motion.p
                        variants={fadeIn("down", 0.3)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="mx-auto mb-10 max-w-sm uppercase xl:mx-0 xl:mb-16 xl:max-w-xl"
                    >
                        Forging Digital Views Where Imagination Blends with
                        Code's Canvas
                    </motion.p>
                    {/*    btn*/}
                    <div className="relative flex justify-center xl:hidden">
                        <ProjectsBtn />
                    </div>
                    <motion.div
                        variants={fadeIn("down", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="hidden xl:flex"
                    >
                        <ProjectsBtn />
                    </motion.div>
                </div>
            </div>
            {/*image*/}
            <div className="absolute bottom-0 right-0 h-full w-[1200px]">
                {/*bg image*/}
                <div className="translate-z-0 absolute h-full w-full bg-none mix-blend-color-dodge mix-blend-color-dodge xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat"></div>
                {/*    particles*/}
                <ParticlesContainer />
                {/*    avatar image */}
                <motion.div
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute -bottom-32 h-full max-h-[678px] w-full max-w-[737px] lg:bottom-0 lg:right-[8%]"
                >
                    <Avatar />
                </motion.div>
            </div>
        </div>
    )
}

export default Home
