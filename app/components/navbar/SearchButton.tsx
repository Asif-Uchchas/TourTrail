'use client'

import useCountries from '@/app/hooks/useCountries'
import useSearchModal from '@/app/hooks/useSearchModal'
import { differenceInDays } from 'date-fns'
import { useSearchParams } from 'next/navigation'
import React, { useMemo } from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchButton = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const {getByValue} = useCountries();
  
  const locationValue = params?.get('locationValue');
  const startDate = params?.get('startDate');
  const endDate = params?.get('endDate');
  const guestCount = params?.get('guestCount');


  const locationLabel = useMemo(()=>{
    if(locationValue){
      return getByValue(locationValue as string)?.label;
    }

    return 'Anywhere';
  },[getByValue,locationValue]);
  
  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string)
      const end = new Date(endDate as string)
      let diff = differenceInDays(end, start)

      if (diff === 0) {
        diff = 1
      }

      return `${diff} night${diff !== 1 ? 's' : ''}`
    }

    return "Any Week"
  }, [startDate, endDate])
  
  const guestLabel = useMemo(() => {
    if (guestCount) { 
      return `${Number(guestCount)} Guests`
    }

    return "Add Guests"
  }, [guestCount])

  return (
    <div onClick={searchModal.onOpen} className='border-[1px] w-full md:w-auto py-2 px-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
      <div className='flex flex-row items-center justify-between'>
            <div className='p-2 bg-blue-400 rounded-full text-white'>
                <BiSearch size={18} />
            </div>
      </div>
    </div>
  )
}

export default SearchButton
