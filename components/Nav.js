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
    // {
    //     name: "testimonials",
    //     path: "/testimonials",
    //     icon: <HiChatBubbleBottomCenterText />,
    // },
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
        <nav className="fixed bottom-0 top-0 z-50 mt-auto flex h-max w-full flex-col items-center gap-y-4 xl:right-[2%] xl:h-screen xl:w-16 xl:max-w-md xl:justify-center">
            <div className="flex h-[80px] w-full items-center justify-between gap-y-10 bg-white/10 px-4 py-8 text-3xl backdrop-blur-sm md:px-40 xl:h-max xl:flex-col xl:justify-center xl:rounded-full xl:px-0 xl:text-xl">
                {links.map((link, index) => {
                    return (
                        <Link
                            className={`${
                                link.path === pathname && "text-accent"
                            } group relative flex items-center transition-all duration-300 hover:text-accent`}
                            href={link.path}
                            key={link.name + index}
                        >
                            {/* tooltip*/}
                            <div className="absolute right-0 hidden pr-14 xl:group-hover:flex">
                                <div className="relative flex items-center rounded-[3px] bg-white p-2.5 text-primary">
                                    <div className="text-12px font-semibold capitalize leading-none">
                                        {link.name}
                                    </div>
                                    {/* trianlge */}
                                    <div className="absolute -right-2 border-y-[6px] border-l-8 border-r-0 border-solid border-y-transparent border-l-white"></div>
                                </div>
                            </div>
                            <div>{link.icon}</div>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}

export default Nav
