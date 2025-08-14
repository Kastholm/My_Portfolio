"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import FadeBlurAnimation from "./animation/fadeblur";
import { introData } from "../data/intro";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import PTEST from "./p5test";

function Intro() {
  const [isDragging, setIsDragging] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState<{
    left: number;
    right: number;
    top: number;
    bottom: number;
  }>({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const imageWidth = 70;
      const imageHeight = 70;

      setConstraints({
        left: -(containerRect.width - imageWidth) / 2,
        right: (containerRect.width - imageWidth) / 2,
        top: -(containerRect.height - imageHeight) / 2,
        bottom: (containerRect.height - imageHeight) / 2,
      });
    }
  }, []);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    controls.start({
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    });
  };

  return (
    <FadeBlurAnimation>
      <div className="flex items-center" ref={containerRef}>
        <div className="relative z-50">
          <div
            className={`absolute inset-0 w-[70px] h-[70px] flex items-center justify-center rounded-full bg-gray-300 transition-opacity duration-300 ${
              isDragging ? "opacity-100" : "opacity-100"
            }`}
            style={{ zIndex: 0 }}
          >
            <span className="text-sm font-bold text-black rounded-full">M</span>
          </div>

          <motion.div
            drag
            dragConstraints={constraints}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={controls}
            className="relative cursor-grab"
            style={{ zIndex: 1 }}
          >
            <Zoom>
              <img
                src="/img/me.jpg"
                width={90}
                height={90}
                alt="AS"
                className="rounded-full cursor-not-allowed"
              />
            </Zoom>
          </motion.div>
        </div>
        <div className="ml-3 md:ml-4 lg:ml-5">
          {introData.map((data, index) => (
            <div key={index}>
              <h1 className="font-medium">{data.name}</h1>
              <p className="text-neutral-600 dark:text-neutral-400">
                {data.job}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="absolute top-0 right-0 -z-10">
        <PTEST />
      </div> */}
    </FadeBlurAnimation>
  );
}

export default Intro;
