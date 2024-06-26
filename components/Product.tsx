import React from 'react'
import Image from 'next/image';
import { ShoppingCartIcon } from "@heroicons/react/outline";
interface Props{
    product: Product;
}
    

function Product({product}:Props) {

  const addItemToBasket =()=>{}
  return (
    <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10">
    <div className="relative h-64 w-full md:h-72">
      <Image
        src="/iphone.png"
        layout="fill"
        objectFit="contain"
        alt='img'
      />
    </div>

    <div className="flex flex-1 items-center justify-between space-x-3">
      <div className="space-y-2 text-xl text-white md:text-2xl">
        <p>title</p>
        <p>price</p>
      </div>

      <div
        className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 md:h-[70px] md:w-[70px]"
       /** onClick={addItemToBasket}*/ 
      >
        <ShoppingCartIcon className="h-8 w-8 text-white" />
      </div>
    </div>
  </div>
);
}

export default Product