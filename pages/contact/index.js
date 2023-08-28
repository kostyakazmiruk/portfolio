// "use client"
import Circles from "../../components/Circles"
import { motion } from "framer-motion"
import { BsArrowRight } from "react-icons/bs"
import { fadeIn } from "../../variants"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    useEffect(() => {
        console.log("DATA", data)
    }, [data])
    const handleChange = ({ target }) => {
        // console.log("target", target)

        setData((prev) => ({ ...prev, [target.name]: target.value }))
    }
    const sendContactFrom = () => {
        const response = fetch("/api/contact2", {
            method: "POST",
            body: {
                name: "kostya",
                email: "kostyakazmirukk@gmail.com",
                subject: "new work",
                message: "message",
            },
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
        console.log("DATA SEND", data)
        console.log("response", response)
        if (response.status === 200) {
            setData({})
        }
        toast.success(`Hey ${data.name}, your message was sent successfully`)
    }

    // const onSubmit = async () => {
    //     sendContactFrom()
    // }
    return (
        <div className="h-full bg-primary/30">
            <div className="container mx-auto flex h-full items-center justify-center py-32 text-center xl:text-left">
                {/*text and form*/}
                <div className="flex w-full max-w-[700px] flex-col">
                    {/*  text*/}
                    <motion.h2
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="h2 mb-12 text-center"
                    >
                        Let's <span className="text-accent">connect.</span>
                    </motion.h2>
                    {/*  form*/}
                    {/*TODO: Add form action, to send it to my email*/}
                    <motion.form
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="mx-auto flex w-full flex-1 flex-col gap-6"
                    >
                        {/*  input group*/}
                        <div className="flex w-full gap-x-6">
                            <input
                                type="text"
                                placeholder="name"
                                className="input"
                                name="name"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="email"
                                className="input"
                                name="email"
                                onChange={handleChange}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="subject"
                            className="input"
                            name="subject"
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="message"
                            className="textarea"
                            onChange={handleChange}
                        ></textarea>
                        <button
                            onClick={sendContactFrom}
                            className="btn group flex max-w-[170px] items-center justify-center overflow-hidden rounded-full border border-white/50 px-8 transition-all duration-300 hover:border-accent"
                        >
                            <span className="transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0">
                                Let's talk
                            </span>
                            <BsArrowRight className="absolute -translate-y-[120%] text-[22px] opacity-0 transition-all duration-300 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100" />
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    )
}

export default Contact
