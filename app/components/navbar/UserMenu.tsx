"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";


export interface UserMenuProps{
  currentUser?: SafeUser | null
}

const UserMenu = ({currentUser}: UserMenuProps) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className=" relative">
      <div className=" flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-3 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Tour Trail your home
        </div>
        <div
          onClick={toggleOpen}
          className=" p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex  flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className=" hidden md:block">
            <Avatar src={currentUser?.image}/>
          </div>
        </div>
          </div>

          {isOpen && (
              <div className=" absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                  <div className=" flex flex-col cursor-pointer">
            {currentUser ? (
                  <>
                  <MenuItem
                      onClick={()=> {}}
                      label="My trips"
                  />
                  <MenuItem
                      onClick={()=> {}}
                      label="My favourites"
                  />
                  <MenuItem
                      onClick={()=> {}}
                      label="My reservatons"
                  />
                  <MenuItem
                      onClick={()=> {}}
                      label="My properties"
                  />
                  <MenuItem
                      onClick={()=> {}}
                      label="TourTrail my home"
                />
                <hr />
                <MenuItem
                      onClick={()=> signOut()}
                      label="Logout"
                />
      </>
            ) : (
                      <>
                          <MenuItem
                              onClick={loginModal.onOpen}
                              label="Log In"
                          />
                          <MenuItem
                              onClick={registerModal.onOpen}
                              label="Sign Up"
                          />
                      </>
              )}
                  </div>
              </div>
          )}
    </div>
  );
};

export default UserMenu;