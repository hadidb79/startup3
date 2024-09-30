"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Role = "ADMIN" | "USER";
export type User = {
  id: string;
  name: string;
  email: string;
  hashedPassword: string;
  role: Role;
};

export type Post = {
  id: string;
  address: string;
  title: string;
  body: string;
  image: string;
};

export type Features = {
  title1: string;
  title2: string;
  title3: string;
  subtitle1: string;
  subtitle2: string;
  subtitle3: string;
  icon1: StaticImport;
  icon2: StaticImport;
  mac: StaticImport;
  effect: StaticImport;
};
export type NavLinks = {
  title: string;
  path: string;
};
export type HomeHeroData = {
  title: string;
  h1: string;
  desc: string;
  id: number;
};
export type Blogs = {
  id: number;
  title: string;
  subtitle: string;
  pic: any;
};
