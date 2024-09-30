"use client ";
import React, { useState } from "react";
import { PRICING_HERO_DATA } from "../constants/constants";
import Image from "next/image";
import Checked from "../images/Check Icon.png";
import Link from "next/link";
const Hero = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      style={{
        position: "absolute",
        top: "55%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: "11",
        display: "flex",
        width: "80%",
        height: "570px",
        justifyContent: "space-between",
      }}
    >
      {PRICING_HERO_DATA.map((data: any, index: number) => {
        return (
          <div
            key={index}
            style={{
              height: "100%",
              border: "1px solid white",
              borderRadius: "10px",
              width: "30%",
              paddingLeft: "100px",
              paddingTop: "60px",
            }}
          >
            <span style={{ color: "white" }}>{data.category}</span>
            <h1 style={{ marginTop: "20px", color: "white" }}>{data.price}</h1>
            <ul
              style={{
                marginTop: "30px",
                listStyleType: "none",
                paddingLeft: 0,
              }}
            >
              {data.options.map((option: any) => {
                return (
                  <li
                    style={{
                      marginTop: "10px",
                      color: "white",
                      fontSize: "13px",
                    }}
                  >
                    {option.chosenFlag ? (
                      <Image
                        style={{ marginLeft: "-15px" }}
                        src={Checked}
                        alt="checked"
                      />
                    ) : null}
                    <span
                      style={{
                        color: `${
                          option.chosenFlag ? "rgb(151, 142, 142)" : "white"
                        }`,
                      }}
                    >
                      {" "}
                      {option.title}
                    </span>
                  </li>
                );
              })}
            </ul>
            <button
              className="x">
              <Link href="/start" style={{ textDecoration: "none" }}>
                Get Started
              </Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};
//#E93A7D
export default Hero;
