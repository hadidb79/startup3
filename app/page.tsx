"use client";
import Image from "next/image";
import HomeBg from "./images/Image.png";
import NavLinks from "./components/home/NavLinks";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Hero />
      <Image
        style={{ width: "100vw", height: "100vh" ,position:"relative",backgroundColor: "#1E0E62" , }}
        src={HomeBg}
        alt="aa"
      />
    </div>
  );
}
