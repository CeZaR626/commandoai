
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from '@/components/Icons';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const checkDarkMode = () => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode(true);
        document.documentElement.classList.add('dark');
      }
    };

    window.addEventListener('scroll', handleScroll);
    checkDarkMode();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-ai-darkBlue/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="#" className="font-montserrat font-bold text-xl md:text-2xl gradient-text">
              AI-командир
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-foreground"
              onClick={toggleDarkMode}
            >
              {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Button>
            
            <Button className="bg-gradient-to-r from-ai-blue to-ai-purple hover:opacity-90 transition-opacity">
              Связаться
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
