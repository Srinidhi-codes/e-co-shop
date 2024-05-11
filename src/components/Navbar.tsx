'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import {navList} from '@/constants/NavConstants'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()
    const [search, setSearch] = useState("")
    return (
        <>
            <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-400'>
                <nav className='flex items-center justify-between gap-2 h-full max-w-screen-xl mx-auto px-4 xl:px-0'>
                    <Link href={'/'}>
                        <Image src={'/assets/e-co-shop-logo.png'} alt='logo' width={80} height={0} className='w-20' />
                    </Link>
                    <div className='relative w-full hidden lg:inline-flex lg:w-[600px] h-10 text-base text-primeColor border-[1px] border-black/30 items-center gap-2 justify-between px-6 rounded-md'>
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            type='text' placeholder='Search' className='flex-1 h-full outline-none bg-transparent placeholder:text-gray-600' />
                        {search ? (<IoClose onClick={() => setSearch('')} className='w-5 h-5 hover:cursor-pointer hover:text-red-500 duration-200' />) : (<FaSearch className='w-5 h-5 hover:cursor-pointer' />)}
                    </div>
                    <div className='hidden md:inline-flex items-center gap-2'>
                       {navList.map((item)=>(
                        <Link href={item?.link} key={item?._id}
                        className={`flex hover:font-medium w-20 h-6 justify-center items-center px-12 text-gray-600 hover:underline-offset-4 decoration-[1px] hover:text-gray-950 md:border-r-[2px] border-r-gray-200 duration-200 last:border-r-0 ${pathname===item?.link && "text-gray-950 underline"}`}
                        >
                        {item?.title}
                        </Link>
                       ))}
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar