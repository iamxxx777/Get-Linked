import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navigationData = [
    'Timeline',
    'Overview',
    'FAQs',
    'Contact'
]

const Header = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <header className='w-full py-8 px-6 lg:py-6'>
            <div className="ai-container flex justify-between items-center">
                <div>
                    <h2 className='text-lg md:text-4xl'>get<span className='text-orchid'>linked</span></h2>
                </div>
                <div className='hidden lg:flex justify-end items-center gap-16'>
                    {navigationData.map((item: string) => (
                        <Link key={item} href={'/'} className='text-base font-medium'>{item}</Link>
                    ))}
                    <button className='button !h-14'>Get Started</button>
                </div>
                <div className='lg:hidden'>
                    <button onClick={() => setShowNav(true)}>
                        <Image 
                            src={'/icons/menu.svg'}
                            alt='Menu Icon'
                            width={20}
                            height={15}
                        />
                    </button>
                </div>
            </div>
            <div className={`${showNav ? 'block' : 'hidden'} lg:hidden bg-black ai-container fixed z-10 top-0 left-0 h-screen w-full`}>
                <div className='w-full px-8 py-12'>
                    <div className='flex justify-end mb-10'>
                        <button className='text-3xl' onClick={() => setShowNav(false)}><h2>&#x2715;</h2></button>
                    </div>
                    <div className='flex flex-col gap-8 items-start'>
                        {navigationData.map((item: string) => (
                            <Link key={item} href={'/'} className='font-medium text-lg'>{item}</Link>
                        ))}
                        <button className='button'>Get Started</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header