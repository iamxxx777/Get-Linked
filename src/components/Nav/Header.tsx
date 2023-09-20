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
        <header className='w-full py-8 px-6'>
            <div className="ai-container flex justify-between items-center">
                <div>
                    <h2 className='text-lg md:text-4xl'>get<span className='text-orchid'>linked</span></h2>
                </div>
                <div className='hidden md:block'>
                    {navigationData.map((item: string) => (
                        <Link key={item} href={'/'}>{item}</Link>
                    ))}
                    <button>Get Started</button>
                </div>
                <div className='md:hidden'>
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
            <div className={`${showNav ? 'block' : 'hidden'} ai-container fixed top-0 left-0 h-screen`}>
                
            </div>
        </header>
    )
}

export default Header