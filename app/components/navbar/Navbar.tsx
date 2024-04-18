'use client'
import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'
import Categories from './Categories'
import { User } from '@prisma/client'


interface NavbarProps{
  currentUser?:User | null;
}

const Navbar = ({currentUser}:NavbarProps) => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm h-[200px]'>
      <div className='py-1 border-b-[1px]'>
        <Container>
            <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                <Logo />
                <Search />
                <UserMenu currentUser = {currentUser} />
            </div>
        </Container>
      </div>
      <Categories />
    </div>
  )
}

export default Navbar
