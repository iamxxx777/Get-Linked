import { useState } from 'react'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { useForm } from "react-hook-form";

import Header from '@/src/components/Nav/Header'
import Spinner from '@/src/components/Spinner';
import { queryClient } from '@/src/queryClient'

type TRegister = {
    email: string,
    phone_number: string,
    team_name: string,
    group_size: number,
    project_topic: string,
    category: number,
    privacy_poclicy_accepted: boolean
}

const Register = ({ data }: any) => {
    const teamSize = [2, 3, 4, 5, 8, 10]

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [loading, setLoading] = useState(false);
    const [showSucess, setShowSuccess] = useState(false);

    const submit = async (values: TRegister) => {
        setLoading(true);
        const { data } = await queryClient().post("hackathon/registration", values);

        if (data.id) {
            setShowSuccess(true);
            setLoading(true);
            reset();
        }
    }

    return (
        <main className='relative'>
            <Header />
            <div className="ai-container-alt py-12 md:py-16 lg:py-20">
                <div>
                    <h1 className='text-lg pl-4 md:hidden text-orchid mb-6'>Register</h1>
                </div>
                <div className='grid grid-cols-1 gap-8 md:prize-grid'>
                    <div className="flex-center">
                        <Image
                            src="/register.png"
                            alt='register'
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className='px-2 md:bg-white md:bg-opacity-[0.03] md:drop-shadow-ai md:p-16'>
                        <h1 className='hidden md:block text-2xl text-orchid mb-6'>Register</h1>
                        <div className="flex justify-start items-end mb-3 gap-2">
                            <p className='leading-1 text-xs md:text-sm'>Be part of this movement</p>
                            <div className='border-b border-dotted border-b-orchid px-8 flex justify-start items-end'>
                                <Image
                                    src="/icons/hombre.svg"
                                    alt='movement'
                                    width={24}
                                    height={24}
                                    className='mr-2 md:w-8 md:h-8'
                                />
                                <Image
                                    src="/icons/mujer.svg"
                                    alt='movement'
                                    width={24}
                                    height={24}
                                    className=' md:w-8 md:h-8'
                                />
                            </div>
                        </div>
                        <p className='uppercase text-lg'>Create Your Account</p>
                        {/*@ts-ignore */}
                        <form onSubmit={handleSubmit(submit)} className="w-full mt-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-x-8">
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-xs mb-2">Teams Name</label>
                                    <input
                                        type="text"
                                        className='input !h-12 text-sm placeholder:text-xs placeholder:text-white placeholder:text-opacity-25'
                                        placeholder='Enter the name of your group'
                                        {...register("team_name", {
                                            required: true,
                                        })}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-xs mb-2">Phone</label>
                                    <input
                                        type="text"
                                        className='input !h-12 text-sm placeholder:text-xs placeholder:text-white placeholder:text-opacity-25'
                                        placeholder='Enter your phone number'
                                        {...register("phone_number", {
                                            required: true,
                                        })}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-x-8">
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-xs mb-2">Email</label>
                                    <input
                                        type="text"
                                        className='input !h-12 text-sm placeholder:text-xs placeholder:text-white placeholder:text-opacity-25'
                                        placeholder='Enter your email address'
                                        {...register("email", {
                                            required: true,
                                        })}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-xs mb-2">Project Topic</label>
                                    <input
                                        type="text"
                                        className='input !h-12 text-sm placeholder:text-xs placeholder:text-white placeholder:text-opacity-25'
                                        placeholder='What is your group project topic'
                                        {...register("project_topic", {
                                            required: true,
                                        })}
                                    />
                                </div>
                            </div>
                            <div className="grid register-grid lg:grid-cols-2 gap-4 lg:gap-8">
                                <div className='w-full flex flex-col gap-2'>
                                    <label className="text-xs">Category</label>
                                    <select className='input !h-12 text-xs'
                                        {...register("category", {
                                            required: true,
                                        })}
                                    >
                                        {data && data.map((data: any) => (
                                            <option key={data.id} value={data.id} className='text-white text-xs bg-black'>{data.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='w-full flex flex-col gap-2'>
                                    <label className="text-xs">Group Size</label>
                                    <select className='input !h-12 text-xs'
                                        {...register("group_size", {
                                            required: true,
                                        })}
                                    >
                                        {teamSize.map((size: any) => (
                                            <option key={size} value={size} className='text-white text-xs bg-black'>{size}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <p className='font-medium text-pink text-xs'>Please review your registration details before submitting</p>
                            <div className='text-xs flex justify-start items-center gap-3 mt-3'>
                                <input
                                    type="checkbox"
                                    {...register("privacy_poclicy_accepted", {
                                        required: true,
                                    })}
                                />
                                <p>I agreed with the event terms and conditions  and privacy policy</p>
                            </div>
                            <button disabled={loading} type='submit' className="button mt-8 mx-auto md:w-full">{loading ? <Spinner /> : "Register"}</button>
                        </form>
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
                                <p className='text-base md:text-lg leading-7 font-semibold mb-4'>Congratulations you have successfully Registered!</p>
                                <p className='text-xs md:text-sm leading-5 md:leading-6'>Yes, it was easy and you did it!</p>
                                <p className='text-xs md:text-sm leading-5 md:leading-6'>check your mail box for next step 😉</p>
                            </div>
                            <button className="button w-full mt-8 !h-12" onClick={() => setShowSuccess(false)}>Back</button>
                        </div>
                    </div>
                }
            </div>
        </main>
    )
}


export const getStaticProps: GetStaticProps = async () => {

    const { data } = await queryClient().get("/hackathon/categories-list");

    return {
        props: {
            data
        }
    }
}

export default Register