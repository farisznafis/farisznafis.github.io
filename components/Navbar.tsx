import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineMenu, AiFillAndroid, AiOutlineClose} from 'react-icons/ai'

export default function Navbar() {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        {/* <Image
          src='/../assets/himakom.png'
          alt='logo'
          width={50}
          height={50}
        /> */}
        <AiFillAndroid className='text-3xl ml-2' />
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>
          <div className='md:hidden text-3xl mr-2'>
            <AiOutlineMenu />
          </div>
        </div>
      </div>

      {/*  */}
      <div className='fixed left-0 top-0 w-full h-screen bg-black/70'>
        {/* menu */}
        <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'>
          <div>
            {/* logo in menu */}
            <div className='flex w-full items-center justify-between'>
              <AiFillAndroid className='text-3xl' />
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose/>
              </div>
            </div>
            
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Let's build something awesome</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
