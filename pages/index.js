import React from "react";
import { Header, Landing, Trending, Offres } from "../components/index";
import CartCheckOut from "../components/CartCheckOut";
import Head from "next/head";
import Basket from "../components/Basket";
//import WebgiViewer from "../components/WebgiViewer.js";
/**const DynamicWebgiViewer = dynamic(() => import("../components/WebgiViewer"), {
  ssr: false, // Disable server-side rendering for this component
});**/

const HomePage = () => {
  return (
    <>
      <Head>
        {" "}
        <title>Sumsung Redesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Basket />

      <main className="relative  bg-[#E7ECEE]">
        <Landing />
      </main>
      <Offres />
      <Trending />
    </>
  );
};
export default HomePage;
// etc
