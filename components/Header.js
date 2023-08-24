import React from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-5  ">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div
            className="relative w-5 cursor-pointer  h-10
      opacity-75 treansition hover:opacity-100 "
          >
            <Image
              src="https://rb.gy/vsvv2o"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>

      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a href="/products" className="headerLink">
          Product
        </a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Explore</a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md::w-1/5">
        <Search />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            <span
              className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full 
         bg-gradient-to-r from-pink-500 to-violet-500
         text-[10px] text-white "
            >
              5
            </span>
            <ShoppingCartIcon href="/ff" className="headerIcon" />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
