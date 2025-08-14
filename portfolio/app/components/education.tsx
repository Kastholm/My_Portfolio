'use client'
import React from 'react';
import Image from 'next/image';
import { educationData } from '../data/education';
import FadeBlurAnimation from './animation/fadeblur';

const Education: React.FC = () => {
  return (
    <FadeBlurAnimation>
      <div className="max-w-2xl mt-14">
      <h2 className="mb-6 font-medium">Uddannelse</h2>
      <div className="space-y-1">
        {educationData.map((edu, index) => (
          <div key={index} className="flex">
            <div className="flex flex-col items-center  mr-4 relative">
              <div className="rounded-full">
                <Image
                  src={edu.iconSrc}
                  alt={`${edu.institution} logo`}
                  width={78}
                  height={78}
                  className="object-cover h-[50px] w-[50px] rounded-full "
                />
              </div>
              {index !== educationData.length - 1 && (
                <div className="w-0.5 h-full bg-neutral-300"></div>
              )}
            </div>
            <div className="flex-grow pb-6 relative">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{edu.institution}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{edu.duration}</p>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{edu.degree}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </FadeBlurAnimation>
  );
};

export default Education;
