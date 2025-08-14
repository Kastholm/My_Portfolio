'use client'
import React from 'react';
import Image from 'next/image';
import { experienceData } from '../data/experience'; 
import FadeBlurAnimation from './animation/fadeblur';

const Experience: React.FC = () => {

  const handleOpenLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <FadeBlurAnimation>
      <div className="max-w-2xl mt-16">
      <h2 className="mb-6 font-medium">Erfaring</h2>
      <div className="space-y-1">
        {experienceData.map((exp, index) => (
          <div key={index} className="flex">
            <div className="flex flex-col items-center mr-4 relative">
              <div
                className="rounded-full cursor-pointer"
                onClick={() => handleOpenLink(exp.website)}
              >
                <Image
                  src={exp.iconSrc}
                  alt={`${exp.company} logo`}
                  width={78}
                  height={78}
                  className="object-cover h-[50px] w-[50px] rounded-full "
                />
              </div>
              {index !== experienceData.length - 1 && (
                <div className="w-0.5 h-full bg-neutral-300 "></div>
              )}
            </div>
            <div className="flex-grow pb-6 relative">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{exp.company}</h3>
                <div className='flex items-center'>
                {exp.current && ( <div className="w-2 h-2 mr-2 rounded-full bg-green-500 ring-2 ring-black dark:ring-white ring-opacity-10 dark:ring-opacity-20 animate-pulse"></div> )}
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{exp.duration}</p>
                </div>
                
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <p className="text-sm">{exp.position}</p>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 mt-1 text-sm">
                {exp.location} • {exp.employmentType}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </FadeBlurAnimation>

  );
};

export default Experience;
