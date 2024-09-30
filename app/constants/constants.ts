"use client";
import CommentImg from "../images/fa-commenting-o.png";
import DiamondImg from "../images/fa-commenting-o(1).png";
import Effect1 from "../images/Screen Effects.png";
import Effect2 from "../images//images.png";
import Effect3 from "../images/images11.png";
import Effect4 from "../images/images22.png";
import Mac from "../images/Change MacBook Color (Optional).png";
import { Blogs, Features, HomeHeroData, NavLinks } from "../types/types";
import KitImg from "../images/Photo@2x1.png";
import FrameImg from "../images/Photo@2x2.png";
import PhotoImg from "../images/Photo@2x3.png";
import picImg from "../images/Photo@2x4.png";

export const NAV_LINKS: NavLinks[] = [
  { title: "Home", path: "/" },
  { title: "Features", path: "/features" },
  { title: "Pricing", path: "/pricing" },
  { title: "Blog", path: "/blog" },
];
export let HOME_HERO_DATA: HomeHeroData[] = [
  {
    title: "Startup 1",
    h1: "Forget About Code",
    desc: " Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
    id: 0,
  },
  {
    title: "Startup 2",
    h1: "Choose The Way",
    desc: " Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
    id: 1,
  },
  {
    title: "Startup 3",
    h1: "Begin The Tour",
    desc: " Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
    id: 2,
  },
];
export const Home_Arr: { id: number }[] = [{ id: 0 }, { id: 1 }, { id: 2 }];
export const Features_Arr: { id: number }[] = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
];

export const FEATURES_HERO_DATA: Features[] = [
  {
    title1: "We Create Something New",
    subtitle1: `  We have created a new product that will help designers,developers and companies create websites for their startups quickly and easily.`,
    title2: "30 New feature pages",
    subtitle2: ` Startup Framework contains components and complex blocks which can easily.`,
    title3: "Useful Symbol Components",
    subtitle3: ` Samples will show you the feeling on how to play around using the components.`,
    icon1: CommentImg,
    icon2: DiamondImg,
    mac: Mac,
    effect: Effect1,
  },
  {
    title1: "We Built Different Features",
    subtitle1: `  We have created a new product that will help designers,developers and companies create websites for their startups quickly and easily.`,
    title2: "25 Permanent feature builds",
    subtitle2: ` Startup Framework contains components and complex blocks which can easily.`,
    title3: "Useful Symbol Builds",
    subtitle3: ` Samples will show you the feeling on how to play around using the components.`,
    icon1: CommentImg,
    icon2: DiamondImg,
    mac: Mac,
    effect: Effect2,
  },
  {
    title1: "WE Organize Best Supports",
    subtitle1: `  We have created a new product that will help designers,developers and companies create websites for their startups quickly and easily.`,
    title2: "More than 100 organizations",
    subtitle2: ` Startup Framework contains components and complex blocks which can easily.`,
    title3: "Accurate Organized Components",
    subtitle3: ` Samples will show you the feeling on how to play around using the components.`,
    icon1: CommentImg,
    icon2: DiamondImg,
    mac: Mac,
    effect: Effect3,
  },
  {
    title1: "We Help Your Company",
    subtitle1: `  We have created a new product that will help designers,developers and companies create websites for their startups quickly and easily.`,
    title2: "30 New helper pages",
    subtitle2: ` Startup Framework contains components and complex blocks which can easily.`,
    title3: "Useful Helper Components",
    subtitle3: ` Samples will show you the feeling on how to play around using the components.`,
    icon1: CommentImg,
    icon2: DiamondImg,
    mac: Mac,
    effect: Effect4,
  },
];
export const PRICING_HERO_DATA = [
  {
    id: 1,
    category: "Starter",
    price: "9.99$",
    options: [
      { id: 1, title: "2 GB of space", chosenFlag: true },
      { id: 2, title: "14 days of backups", chosenFlag: true },
      { id: 3, title: "Social integrations", chosenFlag: true },
      { id: 4, title: "Client billing", chosenFlag: true },
      { id: 5, title: "Remote access", chosenFlag: false },
      { id: 6, title: "Custom domain", chosenFlag: false },
      { id: 7, title: "24 hours support", chosenFlag: false },
      { id: 8, title: "Admin tools", chosenFlag: false },
      { id: 9, title: "Collaboration tools", chosenFlag: false },
      { id: 10, title: "User management", chosenFlag: false },
    ],
  },
  {
    id: 2,
    category: "Professional",
    price: "19.99$",
    options: [
      { id: 1, title: "2 GB of space", chosenFlag: true },
      { id: 2, title: "14 days of backups", chosenFlag: true },
      { id: 3, title: "Social integrations", chosenFlag: true },
      { id: 4, title: "Client billing", chosenFlag: true },
      { id: 5, title: "Remote access", chosenFlag: true },
      { id: 6, title: "Custom domain", chosenFlag: true },
      { id: 7, title: "24 hours support", chosenFlag: true },
      { id: 8, title: "Admin tools", chosenFlag: false },
      { id: 9, title: "Collaboration tools", chosenFlag: false },
      { id: 10, title: "User management", chosenFlag: false },
    ],
  },
  {
    id: 3,
    category: "Team",
    price: "49.99%",
    options: [
      { id: 1, title: "2 GB of space", chosenFlag: true },
      { id: 2, title: "14 days of backups", chosenFlag: true },
      { id: 3, title: "Social integrations", chosenFlag: true },
      { id: 4, title: "Client billing", chosenFlag: true },
      { id: 5, title: "Remote access", chosenFlag: true },
      { id: 6, title: "Custom domain", chosenFlag: true },
      { id: 7, title: "24 hours support", chosenFlag: true },
      { id: 8, title: "Admin tools", chosenFlag: true },
      { id: 9, title: "Collaboration tools", chosenFlag: true },
      { id: 10, title: "User management", chosenFlag: true },
    ],
  },
];
export const BLOGS: Blogs[] = [
  { id: 0, title: "UI KIT", subtitle: "Mozart Project", pic: KitImg },
  {
    id: 0,
    title: "FRAMEWORKS",
    subtitle: "Startup Framework 2.0",
    pic: FrameImg,
  },
  { id: 0, title: "PHOTOS", subtitle: "From the Sky", pic: PhotoImg },
  { id: 0, title: "PICTURES", subtitle: "Air Forces", pic: picImg },
];
