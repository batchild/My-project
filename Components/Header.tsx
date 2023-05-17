import React from 'react'
import Image from "next/image";
import Link from 'next/link'

import {
    SearchIcon,
    ShoppingBagIcon,
    UserIcon,
} from "@heroicons/react/outline";
import { useSelector } from 'react-redux';
import { selectBasketItems } from '@/redux/basketSlice';

function Header() {
    const session = false
    const items = useSelector(selectBasketItems)

    return (
        <header className='sticky top-0 z-25 flex w-full items-center justify-between bg-[#E7ECEE] p-0.5'>
            <div className='flex items-center justify-center md:w-1/5'>
                <Link href='/'>
                    <div className='relative h-20 w-10 cursor-pointer opacity-75 transition hover:opacity-100'>
                        <Image alt='' src='https://github.com/batchild/Xaft-logo/blob/main/batc1-1.png?raw=true' layout='fill' objectFit='contain' />
                    </div>
                </Link>
            </div>
            <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
                <a className='headerLink'>Product</a>
                <a className='headerLink'>Explore</a>
                <a className='headerLink'>Support</a>
                <a className='headerLink'>Business</a>
            </div>
            <div className='flex items-center justify-center gap-x-4 md:w-1/5'>
                <SearchIcon className="headerIcon" />
                <Link href='/checkout'>
                    <div className='relative cursor-pointer'>
                        {items.length > 0 && (<span className='absolute rounded-full -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white'>{items.length}</span>)}
                        <ShoppingBagIcon className='headerIcon' />
                    </div>
                </Link>

                {session ? (
                    <Image
                        src={
                            // session.user?.image ||
                            "http://www.w3.org/2000/svg"
                        }
                        alt=''
                        className='cursor-pointer rounded-full'
                        width={34}
                        height={34}
                        // onClick={() => signOut()}
                    />
                ) : (
                    <UserIcon className='headerIcon' 
                    // onClick={() => signIn()}
                    />
                )}
            </div>
        </header>
    )
}

export default Header