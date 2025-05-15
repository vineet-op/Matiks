"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import { motion } from "motion/react"
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div className='w-screen relative h-screen bg-gradient-to-r from-bg-black/85 bg-black/95 text-white'>
            <div className='absolute w-full mt-14 rounded-2xl'>
                <Navbar />
            </div>
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
                    className='font-sans text-3xl font-normal tracking-tighter mt-10 max-w-4xl'>
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
