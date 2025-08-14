'use client'
import React from 'react';
import { skillsData } from '../data/skills';
import FadeBlurAnimation from './animation/fadeblur';

function Skills() {
  return (
    <FadeBlurAnimation>
    <div className='mt-14'>
      <h1 className='mb-3 font-medium'>Færdigheder</h1>
      <div className='flex flex-wrap gap-2'>
        {skillsData.map((skill, index) => {
          const Icon = skill.icon; 
          return (
            <span key={index} className='bg-neutral-100 dark:bg-zinc-900 font-medium text-xs px-3 py-1 rounded flex items-center gap-2'>
              <Icon className='text-neutral-600 dark:text-neutral-200' /> 
              {skill.name}
            </span>
          );
        })}
      </div>
    </div>
    </FadeBlurAnimation>
  );
}

export default Skills;
