'use client' 

import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

const Toggle: React.FC = () => {
  const { theme, setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle Dark Mode">
        <SunIcon className="h-[1.2rem] w-[1.2rem] dark:hidden text-neutral-800 dark:text-neutral-200" />
        <MoonIcon className="h-[1.2rem] w-[1.2rem] hidden dark:block text-neutral-800 dark:text-neutral-200" />
    </button>
  )
}

export default Toggle;
