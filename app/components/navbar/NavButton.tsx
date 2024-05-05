'use client'
import React from "react";
import { IconType } from "react-icons";

export interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  icon?: IconType;
  link?:boolean;
}

const NavButton = ({
  label,
  onClick,
  disabled,
  icon: Icon,
  link,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-auto
        hidden md:flex 
        p-1
        mx-2
        ${
            link
              ? "text-sm py-1 font-semibold   bg-white text-black hover:underline "
              : "py-3 text-md font-bold "
          }
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3
          "
        />
          )}
          {label}
    </button>
  );
};

export default NavButton;
