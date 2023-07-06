//  data
import {
    FaCss3,
    FaFigma,
    FaHtml5,
    FaJs,
    FaReact,
    FaWordpress,
} from "react-icons/fa"
import {
    SiAdobephotoshop,
    SiAdobexd,
    SiFramer,
    SiNextdotjs,
} from "react-icons/si"
import { useState } from "react"
import Circles from "../../components/Circles"
import Avatar from "../../components/Avatar"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
import CountUp from "react-countup"

const aboutData = [
    {
        title: "skills",
        info: [
            {
                title: "Web Development",
                icons: [
                    <FaHtml5 key={"index1"} />,
                    <FaCss3 key={"index2"} />,
                    <FaJs key={"index3"} />,
                    <FaReact key={"index4"} />,
                    <SiNextdotjs key={"index5"} />,
                    <SiFramer key={"index6"} />,
                    <FaWordpress key={"index7"} />,
                ],
            },
            {
                title: "UI/UX Design",
                icons: [
                    <FaFigma key={"index8"} />,
                    <SiAdobexd key={"index9"} />,
                    <SiAdobephotoshop key={"index10"} />,
                ],
            },
        ],
    },
    {
        title: "awards",
        info: [
            {
                title: "Webby Awards - Honoree",
                stage: "2011 - 2012",
            },
            {
                title: "Adobe Design Achievement Awards - Finalist",
                stage: "2009 - 2010",
            },
        ],
    },
    {
        title: "experience",
        info: [
            {
                title: "UX/UI Designer - XYZ Company",
                stage: "2012 - 2023",
            },
            {
                title: "Web Developer - ABC Agency",
                stage: "2010 - 2012",
            },
            {
                title: "Intern - DEF Corporation",
                stage: "2008 - 2010",
            },
        ],
    },
    {
        title: "credentials",
        info: [
            {
                title: "Web Development - ABC University, LA, CA",
                stage: "2011",
            },
            {
                title: "Computer Science Diploma - AV Technical Institute",
                stage: "2009",
            },
            {
                title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
                stage: "2006",
            },
        ],
    },
]

const About = () => {
    const [index, setIndex] = useState(0)
    console.log(index)
    return (
        <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
            <Circles />
            {/*    avatar*/}
            <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="absolute -left-[370px] bottom-0 hidden xl:flex"
            >
                <Avatar />
            </motion.div>
            <div className="container mx-auto flex h-full flex-col items-center gap-x-6 xl:flex-row">
                {/*text*/}
                <div className="flex flex-1 flex-col justify-center">
                    <motion.h2
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="h2"
                    >
                        Captivating <span className="text-accent">stories</span>{" "}
                        birth magnigicent designs.
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("right", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="mx-auto mb-6 max-w-[500px] px-2 xl:mx-0 xl:mb-12 xl:px-0"
                    >
                        10 years ago, I began freelancing as a developer. Since
                        then, I've done remote work for agenciec, consulted for
                        startups, and collaborated on digital products for
                        business and consumer use.
                    </motion.p>
                    {/*    counters*/}
                    <motion.div
                        variants={fadeIn("right", 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="mx-auto mb-8 hidden md:flex md:max-w-xl xl:mx-0 xl:max-w-none"
                    >
                        <div className="flex flex-1 xl:gap-x-6">
                            {/*experience*/}
                            <div className="relative flex-1 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-white/10">
                                <div className="mb-2 text-2xl font-extrabold text-accent xl:text-4xl">
                                    <CountUp start={0} end={10} duration={5} />{" "}
                                    +
                                </div>
                                {/*:TODO: Check out why years of experince overlap, and find why icon of avatar doesnt show as in turorial*/}
                                <div className="text-nowrap max-w-[100px] text-xs uppercase leading-[1.4px] tracking-[1px]">
                                    Years of experience
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {/*info*/}
                <motion.div
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex h-[480px] w-full flex-col xl:max-w-[48%]"
                >
                    <div className="mx-auto mb-4 flex gap-x-4 xl:mx-0 xl:gap-x-8">
                        {aboutData.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className={`${
                                        itemIndex === index && "text-accent "
                                    } relative cursor-pointer capitalize xl:text-lg
                                    `}
                                    onClick={() => setIndex(itemIndex)}
                                >
                                    {item.title}
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex flex-col items-center gap-y-2 py-2 xl:items-start xl:gap-y-4 xl:py-6">
                        {aboutData[index].info.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className="flex max-w-max flex-1 flex-col items-center gap-x-2 text-white/60 md:flex-row"
                                >
                                    {/*    title*/}
                                    <div className="mb-2 font-light md:mb-0">
                                        {item.title}
                                    </div>
                                    <div className="hidden md:flex">-</div>
                                    <div>{item.stage}</div>
                                    {/*    icons*/}
                                    <div className="flex gap-x-4">
                                        {item.icons?.map((icon, iconIndex) => {
                                            return (
                                                <div
                                                    key={iconIndex}
                                                    className="text-2xl text-white"
                                                >
                                                    {icon}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About
