"use client";
import React, { useEffect, useState } from "react";
import useGetData from "../../query/fetchData";
import { useInView } from "react-intersection-observer";
import { Blogs } from "@/app/types/types";

const Works = () => { 
  
  const { data, fetchNextPage } = useGetData();
  console.log(data && data);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <div
      style={{
        backgroundColor: "#2F1893",
        width: "100vw",
        height: "100vh",
        position: "absolute",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "80vh",
          margin: "0 auto",
          // border: "1px solid white",
          marginTop: "100px",
          overflow: "scroll",
          display: "grid",
          gridTemplateColumns: "490px 490px",
          columnGap: "150px",
          rowGap: "30px",
        }}
      >
        {data?.pages?.map((item: Blogs[]) => {
          return item.map((i: Blogs) => {
            return (
              <div
                key={i.title}
                style={{ color: "white", textAlign: "center" }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "200px ",
                    borderRadius: "10px",
                  }}
                  src={i.pic}
                  alt={i.title}
                />
                <h5 style={{ marginTop: "10px" }}>{i.title}</h5>
                <span>{i.subtitle}</span>
              </div>
            );
          });
        })}
        <div ref={ref}></div>
      </div>
    </div>
  );
};

export default Works;
