"use client";
import React from "react";
import FadeBlurAnimation from "./animation/fadeblur";
import { aboutData } from "../data/about";

function About() {
  return (
    <FadeBlurAnimation>
      <div className="mt-16 flex flex-col gap-1">
        <h1>Hvem er jeg?</h1>
        {aboutData.map((about, index) => (
          <p key={index} className="text-neutral-600 dark:text-neutral-400">
            {about}
          </p>
        ))}
      </div>
    </FadeBlurAnimation>
  );
}

export default About;
