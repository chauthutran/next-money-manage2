"use client";

import Image from "next/image";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import AppWrapper from "./ui/AppWrapper";
import NavSide from "./ui/nav/NavSide";
import { ContextWrapperNavChoice } from "./context/ContextNavChoice";

export default function Home() {

  return (
    <div className="flex h-screen flex-col">
      <ContextWrapperNavChoice>
        <Header></Header>
        <main className="flex-1 flex bg-black">
          <NavSide></NavSide>
          <div className="flex-1 overflow-auto bg-gray-100">
            <AppWrapper />
          </div>
        </main>
        <Footer></Footer>
      </ContextWrapperNavChoice>
    </div>
  );
}
