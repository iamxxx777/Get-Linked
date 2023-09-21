import Image from 'next/image'
import Header from '@/src/components/Nav/Header'

export default function Home() {
    return (
        <main className='w-full'>
            <Header />
            <section className='section md:pt-8 !pb-0 border-t border-t-black-border border-b border-b-black-border'>
                <div className="ai-container">
                    <div className='w-full flex-center md:justify-end'>
                        <div className='max-w-[21rem] lg:max-w-none'>
                            <p className='text-base lg:text-3xl font-bold italic text-center'>Igniting a Revolution in HR Innovation</p>
                            <span className='flex justify-end'>
                                <Image
                                    src={'/icons/stroke.svg'}
                                    alt='stroke'
                                    width={150}
                                    height={20}
                                    className='w-36 lg:w-56'
                                />
                            </span>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
                        <div className='flex flex-col items-center md:items-start md:justify-center'>
                            <h1 className='text-3xl md:text-4xl md:text-left lg:text-7xl text-center mb-1'>getLinked Tech</h1>
                            <div className="flex justify-center md:justify-start items-center mb-4">
                                <h2 className='text-3xl md:text-4xl md:text-left lg:text-[68px]'>Hackathon <span className='text-orchid'>1.0</span></h2>
                                <Image
                                    src={"/icons/chain.svg"}
                                    alt='icon'
                                    width={32}
                                    height={32}
                                    className='w-8 h-8 md:w-14 md:h-14 lg:w-16 lg:h-16'
                                />
                                <Image
                                    src={"/icons/star.svg"}
                                    alt='icon'
                                    width={22}
                                    height={22}
                                    className='w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12'
                                />
                            </div>
                            <p className='text-sm md:text-base lg:text-lg font-medium leading-6 text-center md:text-left px-5 md:px-0'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                            <div className="mt-8 lg:mt-10">
                                <button className="button w-fit">Register</button>
                            </div>
                            <div className="mt-8 lg:mt-16 flex justify-center md:justify-start items-center gap-6">
                                <div className='flex justify-start items-end'>
                                    <p className='text-5xl font-medium'>00</p>
                                    <span className='uppercase'>H</span>
                                </div>
                                <div className='flex justify-start items-end'>
                                    <p className='text-5xl font-medium'>00</p>
                                    <span className='uppercase'>M</span>
                                </div>
                                <div className='flex justify-start items-end'>
                                    <p className='text-5xl font-medium'>00</p>
                                    <span className='uppercase'>S</span>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <img 
                                src={'/hackathon_guy.webp'}
                                alt='Hackathon Guy'
                                className='w-full'
                            />
                            {/* <Image
                                src={'/hackathon_guy.webp'}
                                alt='Hackathon Guy'
                                width={700}
                                height={500}
                            /> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="section border-b border-b-black-border">
                <div className="ai-container-alt grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16">
                    <div className="flex-center">
                        <Image 
                            src={'/idea.svg'}
                            alt='The big idea'
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className='flex flex-col md:justify-center'>
                        <div className='text-center md:text-left text-xl md:text-2xl lg:text-3xl relative'>
                            <h2>Introduction to getLinked</h2>
                            <h3 className='text-orchid'>tech Hackathon 1.0</h3>
                            <Image 
                                src={'/icons/star-pu.png'}
                                alt='star'
                                width={30}
                                height={36}
                                className='hidden lg:block absolute top-4 right-0'
                            />
                        </div>
                        <div className='mt-4 md:mt-6'>
                            <p className='text-center md:text-left text-sm leading-6 md:leading-7'>
                                Our tech hackathon is a melting pot of visionaries, and its purpose is as
                                clear as day: to shape the future. Whether you&apos;re a coding genius, a
                                design maverick, or a concept wizard, you&apos;ll have the chance to transform
                                your ideas into reality. Solving real-world problems, pushing the boundaries
                                of technology, and creating solutions that can change the world,
                                that&apos;s what we&apos;re all about!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section border-b border-b-black-border">
                <div className="ai-container-alt grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16">
                    <div className="flex-center md:order-2">
                        <Image
                            src={'/rules.png'}
                            alt='Guidelines'
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className='flex flex-col md:justify-center'>
                        <div className='text-center md:text-left text-xl md:text-2xl lg:text-3xl relative'>
                            <h2>Rules and</h2>
                            <h3 className='text-orchid'>Guidelines</h3>
                            <Image
                                src={'/icons/star-pu.png'}
                                alt='star'
                                width={30}
                                height={36}
                                className='hidden lg:block absolute top-4 right-0'
                            />
                        </div>
                        <div className='mt-4 md:mt-6'>
                            <p className='text-center md:text-left text-sm leading-6 md:leading-7'>
                                Our tech hackathon is a melting pot of visionaries, and its purpose is as
                                clear as day: to shape the future. Whether you&apos;re a coding genius, a
                                design maverick, or a concept wizard, you&apos;ll have the chance to transform
                                your ideas into reality. Solving real-world problems, pushing the boundaries
                                of technology, and creating solutions that can change the world,
                                that&apos;s what we&apos;re all about!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section border-b border-b-black-border">
                <div className="ai-container-alt grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16">
                    <div className="flex-center md:order-2">
                        <Image
                            src={'/rules.png'}
                            alt='Guidelines'
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}
