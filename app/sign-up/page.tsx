"use client";
import Image from "next/image";
import React from "react";
import SignUpBg from "../images/Image(1).png";
import Form from "../components/Form";
const SignUp = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "54%",
          left: "46%",
          transform: "translate(-50%,-50%)",
          // border: "1px solid white",
          width: "80%",
          height: "80%",
          zIndex: "11",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            margin: "0 auto",
            textAlign: "start",
            width: "50%",
            padding: "0 40px",
            color: "white",
          }}
        >
          <h2
            style={{
              width: "250px",
              margin: "00px auto",
              marginTop: "120px",
              marginBottom: "20px",
            }}
          >
            We solve digital problems with an outstanding creative flare
          </h2>
          <p
            style={{ width: "310px", margin: "0px auto", marginLeft: "140px" }}
          >
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </p>
        </div>
        <div style={{ color: "white", width: "50%" }}>
          <Form />
        </div>
      </div>
      <Image
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          backgroundColor: "#1E0E62",
        }}
        src={SignUpBg}
        alt="aa"
      />
    </div>
  );
};

export default SignUp;
