import { HiHome, HiUser } from "react-icons/hi"
import {
    HiChatBubbleBottomCenterText,
    HiEnvelope,
    HiRectangleGroup,
    HiViewColumns,
} from "react-icons/hi2"
import Link from "next/link"
import { useRouter } from "next/router"
//  links
const links = [
    { name: "home", path: "/", icon: <HiHome /> },
    { name: "about", path: "/about", icon: <HiUser /> },
    { name: "services", path: "/services", icon: <HiRectangleGroup /> },
    { name: "work", path: "/work", icon: <HiViewColumns /> },
    {
        name: "testimonials",
        path: "/testimonials",
        icon: <HiChatBubbleBottomCenterText />,
    },
    {
        name: "contact",
        path: "/contact",
        icon: <HiEnvelope />,
    },
]

const Nav = () => {
    const router = useRouter()
    const pathname = router.pathname
    return (
        <nav className="gap-4-y fixed bottom-0 top-0 z-50  mt-auto flex h-max w-full flex-col items-center p-20 xl:right-[2%] xl:h-screen xl:w-16 xl:max-w-md xl:justify-center">
            <div className="flex h-80 w-full items-center justify-between gap-y-10 bg-red-200/10 bg-white/10 px-4 py-8 text-3xl backdrop-blur-sm md:px-40 xl:h-max xl:flex-col xl:justify-center xl:rounded-full xl:px-0 xl:text-xl">
                {links.map((link, index) => {
                    return <Link href={link.path}>{link.icon}</Link>
                })}
            </div>
        </nav>
    )
}

export default Nav
