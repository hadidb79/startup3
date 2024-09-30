"use client";
import Link from "next/link";
import React from "react";

const CreateAccBtn = () => {
  return (
    <Link style={{ fontSize: "18px", textDecoration: "none" }} href="/sign-up">
      <button
        style={{
          position: "absolute",
          top: "110%",
          left: "50%",
          transform: "translate(-50%, -50%)",

          width: "230px",
          height: "60px",
          backgroundColor: "#482BE7",
          borderRadius: "32px",
          border: "none",
          color: "white",
        }}
      >
        Create an Account
      </button>
    </Link>
  );
};

export default CreateAccBtn;
