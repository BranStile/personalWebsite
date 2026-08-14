'use client'

import Link from "next/link"
import {usePathname} from "next/navigation"
import {useState} from "react"

export default function NavBar(){
    
      const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
    
    <nav role="navigation" className="bg-navigation-background sticky top-0 z-50 rounded-xl mx-10  drop-shadow-black drop-shadow-lg">
      <div className="sm:px-6">
        <div className="flex  items-center justify-between h-18 ">
          
          <div className="">
            <Link href="/" className="text-4xl font-bold tracking-wider flex items-center space-x-3">
              {/* <img src={"favicon.ico"} alt="Brandon Stile logo" width={"72px"} className=""></img> */}
              {/* <img src={"favicon.ico"} alt="Brandon Stile logo" width={"100px"} className=""></img> */}
              <img src={"favicon.ico"} alt="Brandon Stile logo" width={"120px"}  className="translate-y-7"></img>
              <h1 className="text-navigation-title">Brandon Stile</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          
            <div className="flex items-baseline space-x-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-xl transition-colors ${
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
                  <a key={social.key} href={social.href} className="translate-1.5" aria-label={social.name}>
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