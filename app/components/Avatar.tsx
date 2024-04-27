'use client'
import Image from 'next/image'
import React from 'react'

interface AvatarProps{
  src?:string | null | undefined;
};


const Avatar = ({src}:AvatarProps) => {
  return (
      <Image
          src={src || '/avatar.png'}
          alt="Avatar"
          width={40}
          height={40}
          className='rounded-full'
      />
  )
}

export default Avatar