"use client";
import Image from "next/image";
import FeaturesBg from "../images/Rectangle.png";
import FeaturesToggleDots from "./FeaturesToggleDots";
import Hero from "./Hero";

const Features = () => {
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
        src={FeaturesBg}
        alt="aa"
      />
    </div>
  );
};

export default Features;
