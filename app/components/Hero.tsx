"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import { motion } from "motion/react"
import Navbar from './Navbar'
import { Divide, Equal, Minus, Plus, X } from 'lucide-react';



const Hero = () => {

    return (
        <div className='w-screen relative h-screen bg-gradient-to-r from-bg-black/85 bg-black/95 text-white'>
            {/* --- Animated Blurred Gradient Background Blobs --- */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1 }}
                className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-r from-black to-teal-500 rounded-full filter blur-[156px] opacity-20 z-0"
            />


            <div className='absolute w-full mt-14 rounded-2xl'>
                <Navbar />
            </div>


            <motion.div
                initial={{ y: 0, rotate: 0, filter: "blur(6px)", opacity: 0 }}
                animate={{
                    y: [0, -10, 0],
                    rotate: [0, 12, 0],
                    filter: ["blur(6px)", "blur(0px)"],
                    opacity: 1,
                }}
                transition={{
                    y: { repeat: Infinity, duration: 1.2, ease: "easeInOut" },
                    rotate: { repeat: Infinity, duration: 1.2, ease: "easeInOut" },
                    filter: { duration: 0.6 },
                    opacity: { duration: 0.6 },
                }}
                className="absolute top-60 left-60 w-12 h-12 bg-gradient-to-r from-teal-400 to-yellow-200 backdrop-blur rounded-md flex items-center justify-center text-black "
            >
                <Plus className="w-6 h-6" />
            </motion.div>

            {/* Bottom Left - Minus Icon */}
            <motion.div
                initial={{ y: 0, rotate: 0, filter: "blur(6px)", opacity: 0 }}
                animate={{
                    y: [0, -10, 0],
                    rotate: [0, 20, 0],
                    filter: ["blur(6px)", "blur(0px)"],
                    opacity: 1,
                }}
                transition={{
                    y: { repeat: Infinity, duration: 1.4, ease: "easeInOut" },
                    rotate: { repeat: Infinity, duration: 1.4, ease: "easeInOut" },
                    filter: { duration: 0.6 },
                    opacity: { duration: 0.6 },
                }}
                className="absolute bottom-32 left-80 w-12 h-12 bg-gradient-to-r from-teal-400 to-yellow-200 backdrop-blur rounded-md flex items-center justify-center text-black"
            >
                <Minus className="w-6 h-6" />
            </motion.div>

            {/* Top Right - Equal Icon */}
            <motion.div
                initial={{ y: 0, rotate: 0, filter: "blur(6px)", opacity: 0 }}
                animate={{
                    y: [0, -10, 0],
                    rotate: [0, 15, 0],
                    filter: ["blur(6px)", "blur(0px)"],
                    opacity: 1,
                }}
                transition={{
                    y: { repeat: Infinity, duration: 1.1, ease: "easeInOut" },
                    rotate: { repeat: Infinity, duration: 1.1, ease: "easeInOut" },
                    filter: { duration: 0.6 },
                    opacity: { duration: 0.6 },
                }}
                className="absolute top-24 right-10 w-12 h-12 bg-gradient-to-r from-teal-400 to-yellow-200 backdrop-blur rounded-md flex items-center justify-center text-black"
            >
                <Equal className="w-6 h-6" />
            </motion.div>

            {/* Bottom Right - X Icon */}
            <motion.div
                initial={{ y: 0, rotate: 0, filter: "blur(6px)", opacity: 0 }}
                animate={{
                    y: [0, -10, 0],
                    rotate: [0, -15, 0],
                    filter: ["blur(6px)", "blur(0px)"],
                    opacity: 1,
                }}
                transition={{
                    y: { repeat: Infinity, duration: 1.3, ease: "easeInOut" },
                    rotate: { repeat: Infinity, duration: 1.3, ease: "easeInOut" },
                    filter: { duration: 0.6 },
                    opacity: { duration: 0.6 },
                }}
                className="absolute bottom-28 right-80 w-12 h-12 bg-gradient-to-r from-teal-400 to-yellow-200 backdrop-blur rounded-md flex items-center justify-center text-black"
            >
                <X className="w-6 h-6" />
            </motion.div>

            {/* Center Right - Divide Icon */}
            <motion.div
                initial={{ y: 0, rotate: 0, filter: "blur(6px)", opacity: 0 }}
                animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, 0],
                    filter: ["blur(6px)", "blur(0px)"],
                    opacity: 1,
                }}
                transition={{
                    y: { repeat: Infinity, duration: 1.2, ease: "easeInOut" },
                    rotate: { repeat: Infinity, duration: 1.2, ease: "easeInOut" },
                    filter: { duration: 0.6 },
                    opacity: { duration: 0.6 },
                }}
                className="absolute right-56 top-48 w-12 h-12 bg-gradient-to-r from-teal-400 to-yellow-200 backdrop-blur rounded-md flex items-center justify-center text-black"
            >
                <Divide className="w-6 h-6" />
            </motion.div>


            <div className='w-full h-72  pt-96 flex flex-col justify-center items-center text-center'>
                <motion.div
                    initial={{
                        opacity: 0,
                        filter: 'blur(8px)'
                    }}
                    animate={{
                        opacity: 1,
                        filter: 'blur(0px)',
                    }}
                    transition={{ duration: 0.3 }}
                    className='font-sans text-7xl pt-8 font-extrabold tracking-tighter bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent'>
                    Introducing <motion.span
                        initial={{
                            opacity: 0,
                            filter: 'blur(8px)'
                        }}
                        animate={{
                            opacity: 1,
                            filter: 'blur(0px)',
                        }}
                        transition={{ duration: 0.4 }}
                        className='bg-gradient-to-r font-extrabold from-teal-400 to-yellow-200 bg-clip-text text-transparent font-mono'>
                        Matiks
                    </motion.span>
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                        x: 0
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
                    className='font-sans text-2xl font-normal  tracking-tighter mt-10 max-w-3xl'>
                    Matiks is a community for mathletes, turning math into an accessible, exciting sport for everyone 🚀
                </motion.div>

                <motion.div

                    initial={{
                        opacity: 0,
                        y: 20,
                        x: 0
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        x: 0
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: 0.1
                    }}
                    className='flex gap-5 pt-20'>
                    <Button className='px-8 py-6 rounded-lg font-sans hover:bg-emerald-400 font-medium cursor-pointer bg-gradient-to-r from-teal-400 to-yellow-200 text-black'>
                        Sign in with Google
                    </Button>

                    <Button className='px-8 py-6 rounded-lg font-sans font-medium cursor-pointer bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent border'>
                        Continue as Guest
                    </Button>
                </motion.div>
            </div>
        </div >
    )
}

export default Hero
