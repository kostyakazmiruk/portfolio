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
    const [index, setIndex] = useState()
    return (
        <div>
            <Circles />
        </div>
    )
}

export default About
