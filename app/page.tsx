"use client";

import Image from "next/image";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import AppWrapper from "./ui/AppWrapper";

export default function Home() {
  return (
<div className="flex h-screen flex-col">
  <Header></Header>
  <main className="flex-1 flex bg-gray-100">
    <div className="w-8 bg-gray-900 text-white p-2">
      <button>ic1</button>
      <button>ic2</button>
      <div>{ '>>' }</div>
    </div>
    <div className="flex-1 overflow-auto">
      <AppWrapper/>
    </div>
  </main>
  <Footer></Footer>
</div>
  );
}
