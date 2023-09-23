import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='w-full bg-[#100B20] px-4 py-12'>
            <div className="ai-container">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20'>
                    <div>
                        <div className='mb-4'>
                            <h2 className='text-xl md:text-3xl'>get<span className='text-orchid'>linked</span></h2>
                        </div>
                        <p className='text-xs leading-6 md:leading-7 mb-8'>
                            Getlinked Tech Hackathon is a technology innovation program established by a group of
                            organizations with the aim of showcasing young and talented individuals in the field of technology
                        </p>
                        <div className="flex justify-start items-center text-xs leading-6 sm:leading-7">
                            <Link href="/#terms" className='md:hover:text-orchid pr-4 border-r-orchid border-r'>Terms of use</Link>
                            <Link href="/#terms" className='md:hover:text-orchid pl-4'>Privacy Policy</Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <p className="text-lg font-bold text-orchid md:text-xl mb-4">Useful links</p>
                            <ul className='text-xs space-y-4'>
                                <li>Overview</li>
                                <li>Timeline</li>
                                <li>FAQs</li>
                                <li>Register</li>
                            </ul>
                            <div className='flex justify-start items-center gap-6 mt-5'>
                                <span className='text-xs font-bold text-orchid'>Follow Us</span>
                                <div className="flex-center h-fit">
                                    <Image
                                        src='/icons/instagram.svg'
                                        alt='Instagram'
                                        width={20}
                                        height={20}
                                    />
                                </div>
                                <div className="flex-center h-fit">
                                    <Image
                                        src='/icons/x.svg'
                                        alt='Twitter'
                                        width={20}
                                        height={20}
                                    />
                                </div>
                                <div className="flex-center h-fit">
                                    <Image
                                        src='/icons/facebook.svg'
                                        alt='Facebook'
                                        width={12}
                                        height={12}
                                    />
                                </div>
                                <div className="flex-center h-fit">
                                    <Image
                                        src='/icons/linkedin.svg'
                                        alt='Linkedin'
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-bold text-orchid md:text-xl mb-4">Contact Us</p>
                            <ul>
                                <li className='grid-max-auto gap-4 mb-7 text-xs'>
                                    <Image
                                        src={"/icons/phone.svg"}
                                        alt="phone"
                                        width={18}
                                        height={18}
                                    />
                                    <p>+234 679 81819</p>
                                </li>
                                <li className='grid-max-auto gap-4 mb-7 text-xs'>
                                    <Image
                                        src={"/icons/location.svg"}
                                        alt="location"
                                        width={18}
                                        height={18}
                                    />
                                    <p>
                                        27,Alara Street
                                        Yaba 100012
                                        Lagos State
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex-center mt-8 md:mt-16 text-xs">
                    <p>All rights reserved. © getlinked Ltd.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer