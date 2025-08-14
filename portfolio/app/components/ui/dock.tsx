'use client'
import React, { useState } from 'react';
import { HiOutlineHome } from "react-icons/hi";
import { CgFileDocument } from "react-icons/cg";
import { LiaGithub } from "react-icons/lia";
import { RiTwitterXLine } from "react-icons/ri";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import Toggle from './toggle'; 
import Link from 'next/link';

interface TooltipProps {
  children: React.ReactNode;
  tooltip: string;
  active: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ children, tooltip, active }) => {
  return (
    <div className="relative flex items-center">
      {children}
      <div
        className={`absolute -top-12 left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-neutral-800 text-white text-xs rounded whitespace-nowrap transition-transform duration-300 ${
          active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        {tooltip}
      </div>
    </div>
  );
};

interface IconProps {
  name: string;
  icon: React.ElementType;
  size?: string;
}

const Icon: React.FC<IconProps> = ({ name, icon: IconComponent, size = 'w-5 h-5' }) => {
  const [isTooltipActive, setTooltipActive] = useState(false);

  return (
    <Tooltip tooltip={name} active={isTooltipActive}>
      <div 
        className="flex items-center justify-center cursor-pointer"
        onMouseEnter={() => setTooltipActive(true)}
        onMouseLeave={() => setTooltipActive(false)}
      >
        <IconComponent className={`${size} text-current hover:text-neutral-400`} />
      </div>
    </Tooltip>
  );
};

const Dock = () => {
  return (
    <div
      className="
        fixed bottom-3 left-1/2 transform -translate-x-1/2 
        px-4  
        rounded-full backdrop-blur-md 
        bg-white/90 text-neutral-800 shadow-lg 
        border border-neutral-200 
        dark:bg-[#08090A] dark:text-white 
        dark:border-neutral-900 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] 
        dark:[--border-color:rgba(255,255,255,0.10)] 
        [--border-color:rgba(0,0,0,0.1)]
        lg:w-auto lg:bottom-4
      "
      style={{
        borderColor: 'var(--border-color)',
      }}
    >
      <div className="flex items-center justify-between space-x-4">
        <div className="flex space-x-5 pl-1 text-neutral-800 dark:text-neutral-200">
          <Link href='/'> <Icon name="Home" icon={HiOutlineHome}/></Link>
          <Link href='/blog'><Icon name="Blog" icon={CgFileDocument} /></Link>
          
        </div>
        <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-600 mx-2"></div>
        <div className="flex items-center space-x-5 text-neutral-800 dark:text-neutral-200">
          <Link href='https://github.com/Kastholm' target='blank'><Icon name="GitHub" icon={LiaGithub} /></Link>
          <Link href='https://www.linkedin.com/in/marc-kastholm-a0a260209' target='blank'><Icon name="LinkedIn" icon={BiLogoLinkedinSquare} /></Link>
        </div>
        <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-600 mx-2"></div>
        <div className="flex items-center justify-center w-8 h-12 cursor-pointer">
          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default Dock;
