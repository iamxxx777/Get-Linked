import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Image from 'next/image'

import Header from '@/src/components/Nav/Header'
import Spinner from '@/src/components/Spinner'
import { queryClient } from '@/src/queryClient'

const Contact = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [showSucess, setShowSuccess] = useState(false);

    const submit = async (values: any) => {
        setLoading(true);
        const { data } = await queryClient().post("hackathon/contact-form", values);

        if (data.id) {
            setShowSuccess(true);
            setLoading(true);
            reset();
        }
    }

    return (
        <main className='w-full'>
            <Header />
            <div className='max-w-6xl mx-auto px-6 sm:px-8 py-8 md:py-16 lg:py-20 grid grid-cols-1 md:gap-8 md:prize-grid'>
                <div className='hidden md:flex items-center'>
                    <div className="max-w-xs text-base">
                        <h2 className='text-lg md:text-2xl mb-6'>Get in Touch</h2>
                        <div className='mb-6'>
                            <p className="mb-2">Contact</p>
                            <p className="mb-2">Information</p>
                        </div>
                        <div className='mb-6'>
                            <p className="mb-2">27,Alara Street</p>
                            <p className="mb-2">Yaba 100012</p>
                            <p className="mb-2">Lagos State</p>
                        </div>
                        <div className="mb-6">
                            <p>Call Us : 07067981819</p>
                        </div>
                        <div className="mb-6">
                            <p>we are open from Monday-Friday 08:00am - 05:00pm</p>
                        </div>
                        <div className='mt-8'>
                            <p className='text-xs font-bold text-orchid mb-2 text'>Share on</p>
                            <div className='flex justify-start items-center gap-3'>
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
                                        width={10}
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
                    </div>
                </div>
                <div className='px-3'>
                    <button onClick={() => router.back()} className='relative md:hidden mb-10 w-10 h-10 rounded-full bg-gradient-ai border-0 outline-none p-[1px]'>
                        <div className='flex-center w-full h-full rounded-full bg-black text-white'>
                            <Image
                                src="/icons/angle-left.svg"
                                alt='icon'
                                width={10}
                                height={12}
                            />
                        </div>
                    </button>
                    <div className='md:bg-white md:bg-opacity-[0.03] md:drop-shadow-ai md:p-16'>
                        <h3 className='text-lg md:text-xl text-orchid font-clash-semibold'>Questions or need assistance?</h3>
                        <h3 className='text-lg md:text-xl text-orchid font-clash-semibold'>Let us know about it</h3>
                        <p className='mt-5 text-xs md:hidden'>Email us below to any question related to our event</p>

                        <form className="w-full mt-6" onClick={handleSubmit(submit)}>
                            <input 
                                type="text" 
                                className='input' 
                                placeholder='First Name' 
                                {...register("first_name", {
                                    required: true,
                                })}
                            />
                            <input
                                type="text"
                                className='input'
                                placeholder='Phone Number'
                                {...register("phone_number", {
                                    required: true,
                                })}
                            />
                            <input 
                                type="text" 
                                className='input' 
                                placeholder='Email' 
                                {...register("email", {
                                    required: true,
                                })}
                            />
                            <textarea 
                                placeholder='Message' 
                                className='textarea'
                                {...register("message", {
                                    required: true,
                                })}
                            ></textarea>
                            <button disabled={loading} type='submit' className="button mx-auto">{loading ? <Spinner /> : "Submit"}</button>
                        </form>
                    </div>
                    <div className='mt-8 md:hidden'>
                        <p className='text-xs font-bold text-orchid mb-2 text-center'>Share on</p>
                        <div className='flex justify-center items-center gap-3'>
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
                                    width={10}
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
                </div>
                <Image 
                    src={'/lens-left.png'}
                    alt='lens'
                    width={600}
                    height={600}
                    className='absolute top-0 lg:-top-4 left-0 opacity-60 -z-[1]'
                />
                <Image
                    src={'/lens-right.png'}
                    alt='lens'
                    width={600}
                    height={600}
                    className='hidden lg:block absolute right-0 opacity-60 -z-[1]'
                />
                {showSucess &&
                    <div className='w-full h-full fixed top-0 left-0 flex-center p-5 bg-black bg-opacity-75'>
                        <div className='border border-orchid rounded p-6 md:px-10 max-w-md'>
                            <div className="flex-center mb-8">
                                <Image
                                    src={"/congratulation.png"}
                                    alt='congratulations'
                                    width={300}
                                    height={300}
                                />
                            </div>
                            <div className='text-center'>
                                <p className='text-base md:text-lg leading-7 font-semibold mb-4'>Message Sent</p>
                                <p className='text-xs md:text-sm leading-5 md:leading-6'>Your message has been sent successfully</p>
                            </div>
                            <button className="button w-full mt-8 !h-12" onClick={() => setShowSuccess(false)}>Back</button>
                        </div>
                    </div>
                }
            </div>
        </main>
    )
}




export default Contact