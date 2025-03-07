"use client";

import data from "@/data";
import { cn } from "@/lib/utils";
import { File, Github, Info, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('/');

  useEffect(() => {
    // Set initial active section based on hash or default to home
    const hash = window.location.hash;
    setActiveSection(hash ? `/${hash}` : '/');

    const handleHashChange = () => {
      const newHash = window.location.hash;
      setActiveSection(newHash ? `/${newHash}` : '/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleClick = (href: string) => {
    setActiveSection(href);
  };

  return (
    <div className="h-full border-r bg-muted hidden lg:flex flex-col justify-start flex-shrink-0">
      <Link 
        href="/" 
        className={cn("relative size-14 flex items-center justify-center text-muted-foreground hover:bg-background", 
          activeSection === '/' && "text-foreground bg-background hover:bg-background")}
        onClick={() => handleClick('/')}
      >
        {activeSection === '/' && <BorderActive />} <Info />
      </Link>
      <Link 
        href="/#about" 
        className={cn("relative size-14 flex items-center justify-center text-muted-foreground hover:bg-background", 
          activeSection === '/#about' && "text-foreground bg-background hover:bg-background")}
        onClick={() => handleClick('/#about')}
      >
        {activeSection === '/#about' && <BorderActive />} <User />
      </Link>
      <Link 
        href="/#projects" 
        className={cn("relative size-14 flex items-center justify-center text-muted-foreground hover:bg-background", 
          activeSection === '/#projects' && "text-foreground bg-background hover:bg-background")}
        onClick={() => handleClick('/#projects')}
      >
        {activeSection === '/#projects' && <BorderActive />}<File />
      </Link>
      <Link 
        href="/#contact" 
        className={cn("relative size-14 flex items-center justify-center text-muted-foreground hover:bg-background", 
          activeSection === '/#contact' && "text-foreground bg-background hover:bg-background")}
        onClick={() => handleClick('/#contact')}
      >
        {activeSection === '/#contact' && <BorderActive />}<Github />
      </Link>
      {data.sidebar.links.map(
        (link) =>
          link.link && (
            <Link key={link.name} href={link.link} target="_blank" className={cn("relative size-14 flex items-center justify-center text-muted-foreground hover:bg-background mt-auto")}>
              <link.icon />
            </Link>
          )
      )}
    </div>
  );
}

const BorderActive = () => <div className="absolute left-0 top-0 h-full w-0.5 bg-primary-foreground" />;
