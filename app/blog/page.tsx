"use client";

import Image from "next/image";
import { BLOGS } from "../constants/constants";
import Link from "next/link"; 

const Blog = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#2F1893",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "490px 490px",
          // border: "1px solid white",
          width: "70%",
          height: "80vh",
          margin: "110px auto",
          columnGap: "90px",
          rowGap: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "69.5%",
            color: "white",
            margin: "0 auto",
            position: "absolute",
            top: "10%",
          }}
        >
          <span>Last works</span>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="blog/works"
          >
            <button
              style={{
                backgroundColor: "transparent",
                color: "white",
                fontSize: "10px",
                fontWeight: 400,
                padding: "6px 10px",
                border: "1px solid white",
                borderRadius: "15px",
              }}
            >
              View All Works
            </button>
          </Link>
        </div>
        {BLOGS.map((blog) => {
          return (
            <div
              style={{ width: "100%", height: "200px", textAlign: "center" }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                src={blog.pic}
                alt={blog.title}
              />
              <span
                style={{
                  color: "white",
                  display: "block",
                  fontSize: "12px",
                  marginTop: "20px",
                }}
              >
                {blog.title}
              </span>
              <span
                style={{
                  color: "white",
                  display: "block",
                  fontSize: "14px",
                  marginTop: "10px",
                }}
              >
                {blog.subtitle}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
