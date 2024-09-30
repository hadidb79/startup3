"use client";
import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "../../constants/constants";
import { usePathname } from "next/navigation";
const NavLinks = () => {
  const pathName = usePathname();
  return (
    <ul
      className="col-md-3  d-none  d-md-flex"
      style={{
        position: "absolute",
        top: "5%",
        left: "31%",
        zIndex: "11",
        display: "flex",
        listStyle: "none",
        width: "35%",
        justifyContent: "space-between",
      }}
    >
      {NAV_LINKS.map((link: { title: string; path: string }) => {
        return (
          <li key={link.path}>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                opacity: `${link.path === pathName ? ".2" : "1"} `,
              }}
              href={link.path}
            >
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
