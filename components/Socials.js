import Link from "next/link"
import {
    RiDribbbleLine,
    RiFacebookBoxLine,
    RiInstagramLine,
    RiPinterestLine,
    RiYoutubeLine,
} from "react-icons/ri"
import { BsLinkedin, BsTelegram } from "react-icons/bs"

const Socials = () => {
    return (
        <div className="flex items-center gap-x-5 text-lg">
            {/*<Link*/}
            {/*    href={"/"}*/}
            {/*    className="transition-all duration-300 hover:text-accent"*/}
            {/*>*/}
            {/*    <RiYoutubeLine />*/}
            {/*</Link>*/}
            {/*<Link*/}
            {/*    href={"/"}*/}
            {/*    className="transition-all duration-300 hover:text-accent"*/}
            {/*>*/}
            {/*    <RiInstagramLine />*/}
            {/*</Link>*/}
            {/*<Link*/}
            {/*    href={"/"}*/}
            {/*    className="transition-all duration-300 hover:text-accent"*/}
            {/*>*/}
            {/*    <RiFacebookBoxLine />*/}
            {/*</Link>*/}
            <Link
                href={"https://t.me/kostyakazmiruk"}
                className="transition-all duration-300 hover:text-accent"
            >
                <BsTelegram />
            </Link>
            <Link
                href={"https://www.linkedin.com/in/kostya-kazmiruk-7301a11b6/"}
                className="transition-all duration-300 hover:text-accent"
            >
                <BsLinkedin />
            </Link>
        </div>
    )
}

export default Socials
