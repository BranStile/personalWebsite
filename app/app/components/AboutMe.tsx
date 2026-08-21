'use client'
import Image from "next/image";
import { title } from "process";
export default function AboutMe() {

  const aboutMeInfo = {
    key: 0,
    text: "Studying Computer Science at the Universtity of Central Florida to further the development of software engineering in robotics and website development",
    src: "/brandon2025-5.jpg",
    alt: "Picture of Brandon",
    title: "Brandon Stile"
  }
  return (
    <div className="grid min-[67rem]:grid-cols-2 items-center gap-8 p-25 ml-20">

      <div className="min-[67rem]:col-span-1 text-left text-text-primary text-lg ">
        <div className="text-5xl font-bold text-center pb-10"> <h1>{aboutMeInfo.title}</h1> </div>
        <div>{aboutMeInfo.text}</div>
      </div>

      <div className="relative aspect-square min-[67rem]:col-span-1 ml-10 mr-30">
        <Image
          src={aboutMeInfo.src}
          alt={aboutMeInfo.alt}
          fill
          sizes=""
          className="object-cover rounded-full border-15 border-border-color"
          priority
        />
      </div>



    </div>
  );
}