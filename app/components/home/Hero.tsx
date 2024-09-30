"use client";
import { Home_Arr, HOME_HERO_DATA } from "@/app/constants/constants";
import { ChevronRight, Translate } from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React, { useEffect, useState } from "react";
import HeroToggleDots from "../HeroToggleDots";
import CreateAccBtn from "./CreateAccBtn";

const Hero = () => {
  const [translate, setTranslate] = useState<number>(0);
  const [active, setActive] = useState<number>(0);
  function handleNextSlide() {
    setTranslate(translate + 100);
    active >= Home_Arr.length - 1 ? setActive(0) : setActive(active + 1);
  }
  function handlePrevSlide() {
    setTranslate(translate - 100);
    active <= 0 ? setActive(2) : setActive(active - 1);
  }
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: "10",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "800px",
        height: "330px",
      }}
    >
      <ChevronLeftIcon
        onClick={handlePrevSlide}
        style={{ cursor: "pointer" }}
      />
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
        className="text-center  d-flex "
      >
        {HOME_HERO_DATA.map(
          (
            data: { title: string; h1: string; desc: string },
            index: number
          ) => {
            const { title, h1, desc } = data;
            if (translate === 300) {
              index = 0;
              setTranslate(0);
            }
            if (translate < 0) {
              index = 2;
              setTranslate(200);
            }
            return (
              <>
                <div
                  key={title}
                  className="text-center "
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transform: `translateX( ${100 * index - translate}%)`,
                    width: "100%",
                    height: "100%",
                    transition: ".8s all",
                  }}
                >
                  <span className="fs-4">{title}</span>
                  <span
                    style={{ fontSize: "72px", display: "block" }}
                    className="mt-3 "
                  >
                    {h1}
                  </span>
                  <p className="mt-3 w-75  m-auto">{desc}</p>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "82%",
                    left: "47%",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <HeroToggleDots
                    translate={translate}
                    setTranslate={setTranslate}
                    active={active}
                    setActive={setActive}
                  />
                </div>
              </>
            );
          }
        )}
      </div>

      <ChevronRight onClick={handleNextSlide} style={{ cursor: "pointer" }} />
      <CreateAccBtn />
    </div>
  );
};

export default Hero;
