"use client";
import Image from "next/image";
import React from "react";
import PricingBg from "../images/Mask.png";
import Hero from "./Hero";
const Pricing = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Hero />
      <Image
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          backgroundColor: "#2F1893",
        }}
        src={PricingBg}
        alt="aa"
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#2F1893",
          zIndex: "10",
          opacity: ".5",
        }}
      ></div>
    </div>
  );
};

export default Pricing;
