"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { IconType } from "react-icons";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import {
  SiAndroid,
  SiCockroachlabs,
  SiCplusplus,
  SiCsharp,
  SiExpress,
  SiFigma,
  SiGit,
  SiMongodb,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiSpring,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import {
  FaBootstrap,
  FaJava,
  FaNode,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { DiDotnet } from "react-icons/di";

const belt_1: IconType[] = [
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  SiTypescript,
  FaJava,
  FaPython,
  SiCplusplus,
  SiCsharp,
  DiDotnet,
  TbBrandNextjs,
  SiVite,
  FaReact,
  SiTailwindcss,
  FaBootstrap,
];

const belt_2 = [
  SiExpress,
  FaNode,
  SiSpring,
  SiTrpc,
  SiMysql,
  SiCockroachlabs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPandas,
  SiNumpy,
  SiAndroid,
  SiGit,
  SiPostman,
  SiFigma,
];

type Props = {};

const Belt = (props: Props) => {
  return (
    <div className="pt-24 w-full px-8 md:max-w-none flex flex-col items-center justify-center">
      <InfiniteMovingCards
        className="w-full"
        items={belt_1}
        speed="slow"
        direction="right"
      />
      <InfiniteMovingCards
        className="w-full"
        items={belt_2}
        speed="slow"
        direction="left"
      />
    </div>
  );
};

export default Belt;
