import Image from "next/image"
import topLeftImage from "../public/top-left-img.png"
const TopLeftImg = () => {
    return (
        <div className="pointer-events-none absolute left-0 top-0 z-10 w-[200px] select-none opacity-50 mix-blend-color-dodge xl:w-[400px]">
            <Image
                src={topLeftImage}
                height={400}
                width={400}
                alt="colors image"
            />
        </div>
    )
}

export default TopLeftImg
