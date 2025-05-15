import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"


const Navbar = () => {
    return (
        <motion.nav
            initial={{
                opacity: 0,
                y: -50,
            }}
            animate={{
                opacity: 1,
                y: 0,
                x: 0
            }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: 0.3
            }}
            className="z-10 backdrop-filter bg-opacity-30  border-teal-300 text-center border-2 max-w-5xl  mx-auto rounded-3xl backdrop-blur-3xl bg-transparent/30">
            <div className="mx-auto px-4">
                <div className="flex items-center justify-between h-16 gap-5">
                    <span className="text-2xl text-gray-900 font-semibold font-sans flex gap-3">
                        <Image src={"/matiks.png"} alt='logo' width={15} height={15} />
                        <span className='font-sans text-teal-500 text-base'>Matiks</span>
                    </span>
                    <div className="flex space-x-4 text-gray-900 gap-8">
                        <a href="#" className='font-sans bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent'>Blogs</a>
                        <a href="#" className='font-sans bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent'>Privacy Policy</a>
                    </div>
                </div>
            </div>
        </motion.nav>

    )
}

export default Navbar
