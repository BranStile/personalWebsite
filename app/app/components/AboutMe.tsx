'use client'
import Image from "next/image";
export default function AboutMe() {

  const aboutMeInfo = {
    key: 0,
    text: "Studying Computer Science at the Universtity of Central Florida to further the development of software engineering in robotics and website development",
    src: "/brandon2025-5.jpg",
    alt: "Picture of Brandon",
    title: "Brandon Stile"
  }
  return (
    
    <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 min-[640px]:px-10 min-[1072px]:grid-cols-2 min-[1072px]:gap-16 min-[1072px]:px-12 min-[1072px]:py-24">

      <div className="text-navigation-hover-text text-lg min-[1072px]:col-span-1">
        <div className="pb-6 text-center text-4xl font-bold min-[640px]:text-5xl min-[1072px]:pb-10"><h1>{aboutMeInfo.title}</h1></div>
        <div className="mx-auto max-w-2xl text-center leading-relaxed min-[1072px]:text-left">{aboutMeInfo.text}</div>
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-sm min-[1072px]:col-span-1 min-[1072px]:max-w-lg">
        <Image
          src={aboutMeInfo.src}
          alt={aboutMeInfo.alt}
          fill
          sizes="(max-width: 1071px) 85vw, 45vw"
          className="object-cover rounded-full border-15 border-border-color"
          priority
        />
      </div>



    </div>
  );
}