"use client"

import { Button } from '@/components/ui/button'
import { Download, Trophy, Users, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'


const DownloadCard = () => {
    return (
        <section className='w-screen h-screen bg-gradient-to-r from-bg-black/85 bg-black/95'>
            <div className='text-4xl text-white flex justify-center items-center text-center w-full'>
                <div className='mb-16 mt-24 font-extrabold font-sans text-7xl tracking-tighter  bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent'>
                    Join us now⚡
                </div>
            </div>
            <div className="max-w-6xl h-fit mx-auto rounded-full ">
                <div className="bg-gradient-to-b h-fit from-teal-400 to-yellow-400 rounded-4xl">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <motion.div
                            initial={{
                                opacity: 0,
                                filter: 'blur(8px)'
                            }}
                            animate={{

                                opacity: 1,
                                filter: 'blur(0px)',
                            }}
                            whileInView={{
                                opacity: 1,
                                filter: 'blur(0px)',
                            }}
                            transition={{
                                duration: 0.3
                            }}
                            className="flex flex-col max-w-xl p-10">
                            <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 leading-tight">Download Now and Play</h2>
                            <p className="text-xl md:text-2xl text-slate-800 font-sans font-medium">Challenge your friends and Win Big ⚡</p>

                            <div className="space-y-4 mt-2">
                                <p
                                    className="text-slate-800 font-sans">
                                    Join thousands of players already enjoying our platform. Download our app today and experience:
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-10">
                                <Button
                                    size="lg"
                                    variant="default"
                                    className="bg-slate-900 font-sans hover:bg-slate-800 font-medium text-base flex items-center gap-2"
                                >
                                    <Download size={18} />
                                    Download Our App
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-slate-900 font-sans text-slate-900 hover:bg-slate-900/10 font-medium text-base"
                                >
                                    Join Now
                                </Button>
                            </div>
                        </motion.div>

                        <div className="mt-8 md:mt-0 relative">
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
                                }} className="relative w-[280px] h-[400px] md:w-[320px] md:h-[500px]">
                                <Image src="/Mockup.png" alt="App Mockup" fill className="object-contain" priority />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>



        </section >
    )
}

export default DownloadCard