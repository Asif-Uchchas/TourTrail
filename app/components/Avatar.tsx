'use client'
import Image from 'next/image'
import React from 'react'

const Avatar = () => {
  return (
      <Image
          src='/images/avatar.png'
          alt="Avatar"
          width={30}
          height={30}
          className='rounded-full'
      />
  )
}

export default Avatar