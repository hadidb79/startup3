"use client";
import { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import {
  Features_Arr,
  FEATURES_HERO_DATA,
  Home_Arr,
  HOME_HERO_DATA,
} from "@/app/constants/constants";
import { ChevronRight, Translate } from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React, { useEffect, useState } from "react";
import FeaturesToggleDots from "./FeaturesToggleDots";
import Image from "next/image";
const Hero = () => {
  const [initialIndex, setInitialIndex] = useState<number>(0);
  // let initialIndex = 0;

  function handleClick() {
    setInitialIndex(initialIndex + 1);
    console.log(initialIndex);
  }
  return (
    <div
      style={{
        position: "absolute",
        top: "55%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: "10",
        color: "white",
        display: "grid",
        gridTemplateColumns: "90% 10%",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
        height: "535px",
        // border:"1px solid white"
      }}
    >
      {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
      <div
        style={{
          display: `flex`,
          justifyContent: "space-between",
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "85%",
          height: "100%",
          marginLeft: "-120px",
          marginTop: "60px",
        }}
      >
        <div className="left ">
          <Image
            style={{ position: "absolute", top: "0%" }}
            src={FEATURES_HERO_DATA[initialIndex].mac}
            alt=""
          />
          <Image
            style={{
              position: "absolute",
              top: "5%",
              objectFit: "cover",
              width: "350px",
              height: "84%",
            }}
            src={FEATURES_HERO_DATA[initialIndex].effect}
            alt=""
          />
        </div>

        <div className="right w-50  " style={{ marginTop: "70px" }}>
          <span style={{ fontSize: "42px" }}>
            {FEATURES_HERO_DATA[initialIndex].title1}
          </span>
          <p className="w-75">{FEATURES_HERO_DATA[initialIndex].subtitle1}</p>

          <div className="btm d-flex justify-content-between w-75 mt-5">
            <div className="left w-50">
              <Image
                style={{ display: "block", marginBottom: "20px" }}
                src={FEATURES_HERO_DATA[initialIndex].icon1}
                alt="commenting"
              />
              <span>{FEATURES_HERO_DATA[initialIndex].title2}</span>
              <p style={{ marginTop: "20px" }}>
                {FEATURES_HERO_DATA[initialIndex].subtitle2}
              </p>
            </div>

            <div className="right w-50">
              <Image
                style={{ display: "block", marginBottom: "20px" }}
                src={FEATURES_HERO_DATA[initialIndex].icon2}
                alt="diamond"
              />
              <span>{FEATURES_HERO_DATA[initialIndex].title3}</span>
              <p style={{ marginTop: "20px" }}>
                {FEATURES_HERO_DATA[initialIndex].subtitle3}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
      <FeaturesToggleDots
        onClick={handleClick}
        initialIndex={initialIndex}
        setInitialIndex={setInitialIndex}
      />
    </div>
  );
};

export default Hero;
