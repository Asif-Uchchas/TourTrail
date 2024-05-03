"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import useRentModal from "@/app/hooks/useRentModal";
import { FaPlusCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import usePaymentModal from "@/app/hooks/usePaymentModal";

export interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const paymentModal = usePaymentModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);
  return (
    <div className=" relative">
      <div className=" flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:flex items-center md:block text-sm font-semibold py-3 px-3 rounded-full hover:bg-neutral-100 transition cursor-pointer border-2"
        >
          <FaPlusCircle size={20} className="mr-2" />
          Add Hotels
        </div>

        <div
          onClick={toggleOpen}
          className=" p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex  flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className=" hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className=" absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className=" flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => router.push("/trips")} label="My trips" />
                <MenuItem onClick={() => router.push("/favourites")} label="My favourites" />
                <MenuItem onClick={() => router.push("/reservations")} label="My reservatons" />
                <MenuItem onClick={() => router.push("/properties")} label="My properties" />
                <MenuItem onClick={rentModal.onOpen} label="TourTrail home" />
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Log In" />
                <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
                <MenuItem onClick={paymentModal.onOpen} label="Payment" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
