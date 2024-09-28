"use client";

import Image from "next/image";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import AppWrapper from "./ui/AppWrapper";

export default function Home() {
  return (
<div className="flex h-screen flex-col">
  <Header></Header>
  <main className="flex-1 bg-gray-100">
    <AppWrapper/>
  </main>
  <Footer></Footer>
</div>
  );
}
