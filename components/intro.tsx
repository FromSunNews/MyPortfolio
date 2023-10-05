"use client";

import Image from "next/image";
import React from "react";
import myAvatar from "@/public/my-avatar.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              alt="FromSunNews"
              src={myAvatar}
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="rounded-full h-24 w-24 border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-3xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            ✌️
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-5 px-4 text-base font-medium !leading-[1.5] sm:text-xl sm:w-1/2 w-8/12 text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">
          Hello, I'm Phương and my nickname is FromSunNews.
        </span>{" "}
        I'm a <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">1 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 transition"
        >
          Contact me here!
          <BsArrowRight className="group-hover:translate-x-1 transition opacity-70" />
        </Link>
        <a
          href="/CV_EN.pdf"
          download
          className="group bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full hover:scale-105 cursor-pointer transition border-black/10"
        >
          Download CV{" "}
          <HiDownload className="group-hover:translate-x-1 transition opacity-70" />
        </a>
        <a
          href="https://www.linkedin.com/in/ph%C6%B0%C6%A1ng-t%E1%BB%AB-926384268"
          target="_blank"
          className=" bg-white p-4 flex items-center gap-2 rounded-full text-gray-700 cursor-pointer hover:scale-110 transition hover:text-gray-900 border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/FromSunNews"
          target="_blank"
          className="bg-white p-4 flex items-center gap-2 rounded-full text-gray-700 cursor-pointer hover:scale-110  hover:text-gray-900 transition border-black/10"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};
