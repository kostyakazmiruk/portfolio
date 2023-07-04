import Image from "next/image"
import Socials from "./Socials"
import Link from "next/link"

const Header = () => {
    return (
        <header className="absolute z-30 flex w-full items-center px-16 xl:h-[90px] xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col content-around items-center items-center justify-between gap-y-6 py-8 lg:flex-row">
                    {/*    logo*/}
                    <Link href={"/"}>
                        <Image
                            src={"/logo.svg"}
                            width={220}
                            height={48}
                            priority={true}
                            alt=""
                        />
                    </Link>
                    {/*    socials*/}
                    <Socials />
                </div>
            </div>
        </header>
    )
}

export default Header
