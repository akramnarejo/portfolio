"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

interface Props {
  data: {
    title: string;
    thumbnail: string;
    landingpage: string;
    portal: string;
    source: string;
    description: string;
  };
}
const Card = ({ data }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2, type: "tween" }}
      className="dark:bg-[#0f0f0f] border dark:border-[#444] border-[#999] rounded-lg p-2 hover:border-blue-400 dark:hover:border-blue-400 duration-500 hover:scale-x-105"
    >
      <Link href={data.landingpage} target="_blank">
        <div className="h-80 w-full relative overflow-hidden cursor-pointer">
          <Image
            className="rounded-t-lg object-cover"
            src={data.thumbnail}
            alt={data.title}
            fill={true}
          />
        </div>
      </Link>

      <div className="py-5 px-3">
        <Link href={data.landingpage} target="_blank">
          <h5 className="dark:text-white inline font-bold text-2xl tracking-tight mb-2 hover:text-blue-400">
            {data.title}
          </h5>
        </Link>
        <p className="font-normal text-[#666] dark:text-[#999] mb-3">
          {data.description}
        </p>
        {data.portal && (
          <Link
            className="dark:text-[#e2e2e2] hover:text-blue-400 flex gap-1 items-center"
            href={data.portal}
            target="_blank"
          >
            App <GoArrowUpRight />
          </Link>
        )}
        {data.source && (
          <Link
            className="dark:text-[#e2e2e2] hover:text-blue-400 flex gap-1 items-center"
            href={data.source}
            target="_blank"
          >
            Code <GoArrowUpRight />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
