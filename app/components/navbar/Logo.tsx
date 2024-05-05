'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"
import NavButton from "./NavButton";

const Logo = () => {
    const router = useRouter();

    return (
        <div className="flex items-center">
        <Image 
        onClick={()=>router.push("/")}
        alt="Logo" 
        className="md:block cursor-pointer" 
        height="70" width="70" 
        src="/logo1.jpg" />

            <div className="flex ml-10">
                  <NavButton onClick={() => router.push("/trips")} label="My trips" link/>
                  <NavButton onClick={() => router.push("/favourites")} label="My favourites" link/>
                  <NavButton onClick={() => router.push("/reservations")} label="My reservatons" link/>
                  <NavButton onClick={() => router.push("/properties")} label="My properties" link/>
            </div>



        </div>

    )
}

export default Logo;