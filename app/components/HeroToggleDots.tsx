"use client";
import React, { useState } from "react";
import { Home_Arr } from "../constants/constants";

interface Props {
  translate: number;
  setTranslate: React.Dispatch<React.SetStateAction<number>>;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}
const HeroToggleDots = ({
  translate,
  setTranslate,
  active,
  setActive,
}: Props) => {
  function handleActive(name: number) {
    setActive(name);
  }
  return (
    <>
      {Home_Arr.map((item: { id: number }) => {
        return (
          <div
            key={item.id}
            onClick={() => {
              handleActive(item.id);
              setTranslate(100 * item.id);
            }}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: `${
                item.id === active && translate === item.id * 100
                  ? "white"
                  : "transparent"
              }`,
              border: "1px solid rgba(216, 216, 216,.4)",
              cursor: "pointer",
            }}
          ></div>
        );
      })}
    </>
  );
};

export default HeroToggleDots;
