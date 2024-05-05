'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Container from './Container';
import { TbBeach, TbCategoryPlus, TbMountain, TbPool } from 'react-icons/tb';
import { GiCastle, GiForest, GiForestCamp} from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from './CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';
import { IoDiamond } from 'react-icons/io5';
import Main from "./Main"

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is modern!'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside!'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This property has a pool!'
    },
    {
        label: 'Old-School',
        icon: GiCastle,
        description: 'This property has the theme of old school!'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This property has camping activities!'
    },
    {
        label: 'Green',
        icon: GiForest,
        description: 'This property is near caves!'
    },
    {
        label: 'Luxury',
        icon: IoDiamond,
        description: 'This property is luxurious!'
    },
]
const Categories = () => {

    const params = useSearchParams()
    const category = params?.get('category');
    const pathname = usePathname()
    
    const [showCategories, setShowCategories] = useState(false);

    const isMainPage = pathname === '/'

    if (!isMainPage) {
        return null
    }



    const toggleCategories = () => {
        setShowCategories(!showCategories);
    };
  
  return (
    <div>
    <div id="categories" className="flex items-center cursor-pointer">
      <TbCategoryPlus onClick={toggleCategories} size={70} />

      <div
        className={`flex flex-row items-center justify-start overflow-x-auto gap-9 ml-4 ${
          showCategories ? 'flex' : 'hidden'
        }`}
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  </div>
  );
}

export default Categories; 