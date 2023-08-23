import Image from "next/image"

const Circles = () => {
    return (
        <div className="absolute -bottom-2 -right-16 z-10 w-[200px] animate-pulse mix-blend-color-dodge duration-75 xl:w-[300px]">
            <Image
                className="pointer-events-none h-full w-full select-none"
                src={"/circles.png"}
                width={260}
                height={200}
            />
        </div>
    )
}

export default Circles
