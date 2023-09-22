import { useState } from 'react'
import Image from 'next/image'
import Header from '@/src/components/Nav/Header'

const faqs = [
    'Can I work on a project I started before the hackathon?',
    'What happens if I need help during the hackathon?',
    "What happens if I don't have an idea for a project ?",
    "Can I join a team or do I have to come with one?",
    "What happens after the hackathon ends",
    "Can I work on a project I started before the hackathon?"
]

const timeline = [
    {
        event: "Hackathon Announcement",
        details: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
        date: "November 18, 2023"
    },
    {
        event: "Team Registeration begins",
        details: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
        date: "November 18, 2023"
    },
    {
        event: "Team Registeration ends",
        details: "Interested Participants are no longer Allowed to register",
        date: "November 18, 2023"
    },
    {
        event: "Announcement of the accepted teams and ideas",
        details: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
        date: "November 18, 2023"
    },
    {
        event: "Getlinked Hackathon 1.0 Offically Begins",
        details: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
        date: "November 18, 2023"
    },
    {
        event: "Demo Day",
        details: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
        date: "November 18, 2023"
    }
]

type Timeline = {
    event: string;
    details: string;
    date: string;
}

export default function Home() {

    const [activeFaq, setActiveFaq] = useState(0);

    const handleFaqClick = (index: number) => {
        if (activeFaq === index + 1) {
            setActiveFaq(0);
        } else {
            setActiveFaq(index + 1)
        }
    }

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
                            src={'/rulez.png'}
                            alt='Guidelines'
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className='flex flex-col md:justify-center'>
                        <div className='text-center md:text-left text-xl md:text-2xl lg:text-3xl relative'>
                            <h2>Rules and</h2>
                            <h3 className='text-orchid'>Guidelines</h3>
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
                <div className="ai-container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16">
                    <div className="flex-center">
                        <Image
                            src={'/attributez.png'}
                            alt='Key Attributes'
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className='flex flex-col md:justify-center'>
                        <div className='text-center md:text-left text-xl md:text-2xl lg:text-3xl relative'>
                            <h2>Judging Criteria</h2>
                            <h3 className='text-orchid'>Key attributes</h3>
                        </div>
                        <div className='mt-4 md:mt-6 flex flex-col gap-5 text-center md:text-left'>
                            <p className='text-xs lg:text-sm leading-6'>
                                <span className="text-pink font-bold text-sm lg:text-base">Innovation and Creativity: </span>
                                Evaluate the uniqueness and creativity of the
                                solution. Consider whether it addresses a real-world problem in a novel
                                way or introduces innovative features.
                            </p>
                            <p className='text-xs lg:text-sm leading-6'>
                                <span className="text-pink font-bold text-sm lg:text-base">Functionality: </span>
                                Assess how well the solution works. Does it perform its
                                intended functions effectively and without major issues? Judges would
                                consider the completeness and robustness of the solution.
                            </p>
                            <p className='text-xs lg:text-sm leading-6'>
                                <span className="text-pink font-bold text-sm lg:text-base">Impact and Relevance: </span>
                                Determine the potential impact of the solution
                                in the real world. Does it address a significant problem, and is it relevant
                                to the target audience? Judges would assess the potential social,
                                economic, or environmental benefits.
                            </p>
                            <p className='text-xs lg:text-sm leading-6'>
                                <span className="text-pink font-bold text-sm lg:text-base">Technical Complexity: </span>
                                Evaluate the technical sophistication of the solution.
                                Judges would consider the complexity of the code, the use of advanced
                                technologies or algorithms, and the scalability of the solution.
                            </p>
                            <p className='text-xs lg:text-sm leading-6'>
                                <span className="text-pink font-bold text-sm lg:text-base">Adherence to Hackathon Rules: </span>
                                Judges will Ensure that the team adhered
                                to the rules and guidelines of the hackathon, including deadlines, use of
                                specific technologies or APIs, and any other competition-specific requirements.
                            </p>
                        </div>
                        <button className="button !h-12 lg:!h-14 mt-8 lg:mt-12 mx-auto md:ml-0">Read More</button>
                    </div>
                </div>
            </section>
            <section className="section-alt border-b border-b-black-border">
                <div className="ai-container-alt grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16">
                    <div>
                        <div className='text-center md:text-left text-xl md:text-2xl lg:text-3xl relative'>
                            <Image
                                src={'/icons/star-pu.png'}
                                alt='star'
                                width={30}
                                height={36}
                                className='absolute -top-4 md:-top-10 lg:-top-14 left-0 md:-left-4 lg:-left-8'
                            />
                            <h2>Frequently asked</h2>
                            <h3 className='text-orchid'>Questions</h3>
                            <p className='text-center md:text-left mt-3 md:mt-4 text-xs md:text-sm leading-6 md:leading-7'>We got answers to the questions that you might
                                want to ask about <span className='font-bold text-sm'>getlinked Hackathon 1.0</span>
                            </p>
                        </div>
                        <div className="mt-8 lg:mt-14">
                            {faqs.map((faq: string, index) => (
                                <div key={index} className='border-b border-b-orchid pb-3 mb-4 lg:mb-6'>
                                    <div onClick={() => handleFaqClick(index)} className='flex justify-between items-center gap-8 cursor-pointer md:hover:text-orchid'>
                                        <p className='text-sm'>{faq}</p>
                                        <span className='font-bold text-xl text-orchid'>+</span>
                                    </div>
                                    {activeFaq === index + 1 &&
                                        <div className='mt-4'>
                                            <p className="text-xs leading-6 font-normal">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum placeat perspiciatis,
                                                nisi maiores sint quibusdam rerum exercitationem optio aliquid quos qui consequuntur dolores non vero!
                                            </p>
                                        </div>
                                    }
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-center">
                        <Image
                            src={'/faqs.png'}
                            alt='FAQs'
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="ai-container">
                    <div className='text-center relative'>
                        <h2 className='text-xl md:text-2xl lg:text-3xl'>Timeline</h2>
                        <p className='mt-3 text-center text-xs md:text-base leading-6 md:leading-7 max-w-md mx-auto'>
                            Here is the breakdown of the time we anticipate
                            using for the upcoming event.
                        </p>
                    </div>
                    <div className="mt-8 px-4 md:hidden">
                        {timeline.map((timeline: Timeline, index) => (
                            <div key={index} className='mb-6'>
                                <div className='border-l-2 border-l-orchid px-6 pb-2'>
                                    <p className='text-xs font-bold text-orchid mb-2'>{timeline.event}</p>
                                    <p className='text-xs leading-5 font-medium'>{timeline.details}</p>
                                </div>
                                <div className='flex justify-start items-center gap-4 -ml-2 mt-1'>
                                    <div className="w-5 h-5 text-xs font-bold rounded-full bg-orchid text-white flex-center">{index}</div>
                                    <p className='text-xs font-bold text-orchid'>{timeline.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 px-6 hidden md:block relative">
                        <Image
                            src={'/icons/star-pu.png'}
                            alt='star'
                            width={30}
                            height={36}
                            className='absolute -top-4 left-0 lg:left-12'
                        />
                        {timeline.map((timeline: Timeline, index) => (
                            <div key={index} className='mb-2 grid-auto-max-auto items-end gap-8 lg:gap-16'>
                                <div>
                                    {index % 2 === 0 ? (
                                        <div className='text-right'>
                                            <p className='text-lg font-bold text-orchid mb-2'>{timeline.event}</p>
                                            <p className='text-sm leading-5 font-medium'>{timeline.details}</p>
                                        </div>
                                    ) : (
                                        <div className='text-right'>
                                            <p className='text-lg font-bold text-orchid'>{timeline.date}</p>
                                        </div>
                                    )}
                                </div>
                                <div className='flex flex-col items-center'>
                                    <div className={`${index === 0 ? 'h-36' : "h-24"} w-[3px] bg-orchid`}></div>
                                    <div className="w-14 h-14 text-lg mt-2 font-bold rounded-full bg-orchid text-white flex-center">{index}</div>
                                </div>
                                <div>
                                    {index % 2 === 0 ? (
                                        <div className='text-left'>
                                            <p className='text-lg font-bold text-orchid'>{timeline.date}</p>
                                        </div>
                                    ) : (
                                        <div className='text-left'>
                                            <p className='text-lg font-bold text-orchid mb-2'>{timeline.event}</p>
                                            <p className='text-sm leading-5 font-medium'>{timeline.details}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="section-alt relative">
                <div className="bg-[url('/bg.svg')] bg-transparent bg-opacity-20 -z-[1] bg-center bg-cover absolute top-0 left-0 w-full h-full"></div>
                <div className="ai-container">
                    <div className='text-center md:text-left text-xl md:text-2xl lg:text-3xl relative lg:flex lg:justify-end'>
                        <div>
                            <h2>Prizes and</h2>
                            <h3 className='text-orchid'>Rewards</h3>
                            <p className='mt-4 text-xs md:text-base'>Highlight of the prizes or rewards for winners and for participants.</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-32 md:gap-8 mt-12 lg:mt-24'>
                        <div className="flex-center">
                            <Image
                                src={'/prize.png'}
                                alt='Rewards'
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className='grid grid-cols-3 gap-4 md:items-center'>
                            <div className="h-fit text-center border border-orchid rounded-lg py-6 lg:py-12 relative bg-orchid bg-opacity-10 text-2xl font-bold">
                                <div className='flex-center -mt-28'>
                                    <Image
                                        src={'/silver_medal.png'}
                                        alt="medal"
                                        width={80}
                                        height={80}
                                        className='w-20 h-20 lg:w-36 lg:h-36'
                                    />
                                </div>
                                <div className="px-4">
                                    <p className="mt-3">2nd</p>
                                    <p className="mb-2">Runner</p>
                                    <p className="text-2xl text-orchid">N400,000</p>
                                </div>
                            </div>
                            <div className="h-fit text-center border border-blue rounded-lg py-8 lg:py-16 relative bg-blue bg-opacity-10 text-2xl font-bold">
                                <div className='flex-center scale-150 -mt-24'>
                                    <Image
                                        src={'/gold_medal.png'}
                                        alt="medal"
                                        width={80}
                                        height={80}
                                        className='w-20 h-20 lg:w-32 lg:h-32'
                                    />
                                </div>
                                <div className="px-4 mt-10">
                                    <p className="mt-3">1st</p>
                                    <p className="mb-2">Runner</p>
                                    <p className="text-2xl text-blue">N400,000</p>
                                </div>
                            </div>
                            <div className="h-fit text-center border border-orchid rounded-lg py-6 lg:py-12 relative bg-orchid bg-opacity-10 text-2xl font-bold">
                                <div className='flex-center -mt-28'>
                                    <Image
                                        src={'/bronze_medal.png'}
                                        alt="medal"
                                        width={80}
                                        height={80}
                                        className='w-20 h-20 lg:w-36 lg:h-36'
                                    />
                                </div>
                                <div className="px-4">
                                    <p className="mt-3">3rd</p>
                                    <p className="mb-2">Runner</p>
                                    <p className="text-2xl text-orchid">N400,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
