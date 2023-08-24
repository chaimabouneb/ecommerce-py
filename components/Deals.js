import React from "react";
import Link from "next/link";
function Deals() {
  return (
    <section className=" bg-black top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
      <div className="space-y-8">
        <h1 className="space-y-3 text-2xl font-semibold tracking-wide lg:text-4xl xl:text-5xl">
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Hottest This Summer
          </span>
          <span className="block">By Intellect</span>
          <span className="block">Driven By Values</span>
        </h1>
        <Link href="/promotions" className="link">
          Explore our Deals
        </Link>
      </div>
    </section>
  );
}

export default Deals;
