'use client'

import Link from "next/link"
import {usePathname} from "next/navigation"
import {useEffect, useRef, useState} from "react"

export default function NavBar(){
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

    const navLinks = [
        {key: 0, name: "Home", href: "/"},
        {key: 1, name: "Projects", href: "/projects"},
        {key: 2, name: "Experience", href: "/experience"},
        {key: 3, name: "Contact", href: "/contact"}
    ]

    const socials = [
      {key: 4, name: "GitHub Social", href: "https://github.com/BranStile", src: "GitHub_Invertocat_White.svg", alt: "GitHub Logo"},
      {key: 5, name: "LinkedIn Social", href: "https://www.linkedin.com/in/brandon-stile", src: "linkedin-svgrepo-com.svg", alt: "LinkedIn Logo"}
    ]
    

  return (
    
    <nav ref={navRef} role="navigation" className="bg-navigation-background sticky top-0 z-50 rounded-xl mx-3 min-[1072px]:mx-10 drop-shadow-black drop-shadow-lg">
      <div className="px-3 min-[1072px]:px-6">
        <div className="flex min-h-18 items-center justify-between">
          
          <div>
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-wider min-[1072px]:gap-3 min-[1072px]:text-4xl">
              {/* <img src={"favicon.ico"} alt="Brandon Stile logo" width={"72px"} className=""></img> */}
              {/* <img src={"favicon.ico"} alt="Brandon Stile logo" width={"100px"} className=""></img> */}
              <img src={"/favicon.ico"} alt="Brandon Stile logo" width={"120px"} className="w-16 translate-y-4 min-[1072px]:w-[120px] min-[1072px]:translate-y-7"></img>
              <h1 className="text-navigation-title">Brandon Stile</h1>
            </Link>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md text-navigation-text min-[1072px]:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </button>

          <div className={`${isOpen ? "flex" : "hidden"} absolute right-0 top-full mt-2 w-56 flex-col gap-1 rounded-xl bg-navigation-background p-3 shadow-lg min-[1072px]:static min-[1072px]:mt-0 min-[1072px]:flex min-[1072px]:w-auto min-[1072px]:flex-row min-[1072px]:items-baseline min-[1072px]:gap-3 min-[1072px]:p-0 min-[1072px]:shadow-none`}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.key}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-md px-3 py-3 text-lg transition-colors min-[1072px]:py-2 min-[1072px]:text-xl ${
                      isActive
                        ? 'bg-navigation-active text-navigation-active-text'
                        : 'text-navigation-text hover:bg-navigation-hover hover:text-navigation-hover-text'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              {socials.map((social) => {
                return (
                  <a key={social.key} href={social.href} className="p-2 min-[1072px]:translate-y-1.5 min-[1072px]:p-0" aria-label={social.name}>
                    <img src={social.src} width={"30px"} alt={social.alt}/>
                  </a>
                );
              })}
            </div>                 
          </div>
        </div>
    </nav>
    
  );
}