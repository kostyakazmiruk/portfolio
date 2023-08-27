import "../styles/globals.css"
import Layout from "../components/Layout"
import { useRouter } from "next/router"
import { AnimatePresence } from "framer-motion"
import Transition from "../components/Transition"
import { motion } from "framer-motion"
import { Toaster } from "react-hot-toast"

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    return (
        <Layout>
            <AnimatePresence mode="wait">
                <motion.div key={router.route} className="h-full">
                    <Transition />
                    <Component {...pageProps} />
                    <Toaster />
                </motion.div>
            </AnimatePresence>
        </Layout>
    )
}

export default MyApp
