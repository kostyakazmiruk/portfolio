import Link from "next/link"
import {
    RiDribbbleLine,
    RiFacebookBoxLine,
    RiInstagramLine,
    RiPinterestLine,
    RiYoutubeLine,
} from "react-icons/ri"

const Socials = () => {
    return (
        <div className="flex items-center gap-x-5 text-lg">
            <Link
                href={"/"}
                className="transition-all duration-300 hover:text-accent"
            >
                <RiYoutubeLine />
            </Link>
            <Link
                href={"/"}
                className="transition-all duration-300 hover:text-accent"
            >
                <RiInstagramLine />
            </Link>
            <Link
                href={"/"}
                className="transition-all duration-300 hover:text-accent"
            >
                <RiFacebookBoxLine />
            </Link>
            <Link
                href={"/"}
                className="transition-all duration-300 hover:text-accent"
            >
                <RiDribbbleLine />
            </Link>
            <Link
                href={"/"}
                className="transition-all duration-300 hover:text-accent"
            >
                <RiPinterestLine />
            </Link>
        </div>
    )
}

export default Socials
