'use client'
import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'
import Categories from '../Categories'
import { SafeUser } from '@/app/types'
import Button from '../Button'
import { useRouter } from 'next/navigation'
import NavButton from './NavButton'




interface NavbarProps{
  currentUser?:SafeUser | null;
}

const Navbar = ({currentUser}:NavbarProps) => {
  const router=useRouter()

  return (

    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-1 border-b-[1px]'>
        <Container>
            <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                <Logo />
                
                {/* <Search /> */}
                <UserMenu currentUser = {currentUser} />
            </div>
        </Container>
      </div>
      
    </div>
  )
}

export default Navbar
