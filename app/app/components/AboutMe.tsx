// app/components/AboutMe.tsx
'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface AboutMeItem{
  id: string;
  resumeLink: string;
  summary: string;
  photoLink: string;
  photoAlt: string;
}

export default function AboutMe() {
  const [item, setItem] = useState<AboutMeItem | null>(null);

  useEffect(() => {
    fetch('/api/aboutMe')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch About Me data');
        }
        return response.json();
      })
      .then((data: AboutMeItem | null) => setItem(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
    <div className="flex flex-col-reverse min-[1072px]:flex-row items-center justify-center gap-10 max-w-5xl mx-auto px-6 py-16">

      {/* Card: name, description, resume download — same div as the photo */}
      <div className="rounded-4xl outline-black outline-3 bg-navigation-background px-10 py-10 flex-1 max-w-xl">
        <h2 className="text-5xl font-bold text-navigation-title mb-6">
          Brandon Stile
        </h2>

        <p className="text-lg font-light text-text-primary leading-relaxed mb-8">
          {item?.summary}
        </p>

        <a
          href={item?.resumeLink}
          download
          aria-label="Download resume PDF"
          className="group inline-flex items-center gap-3 rounded-full bg-navigation-active
                     px-8 py-3 text-lg font-semibold text-navigation-active-text
                     hover:scale-[1.03] hover:shadow-[0_0_28px_6px_var(--navigation-active)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5">
            <path d="M12 3v12" />
            <path d="m7 10 5 5 5-5" />
            <path d="M5 21h14" />
          </svg>
          Download Resume
        </a>
      </div>

      <div className="h-72 w-72 min-[1072px]:h-80 min-[1072px]:w-80 shrink-0 overflow-hidden rounded-full outline-4 outline-navigation-hover-text">
        <Image
          src={item?.photoLink || '/BrandonStilePhoto.jpg'}
          alt={item?.photoAlt || 'Brandon Stile'}
          width={320}
          height={320}
          className="h-full w-full object-cover"
          priority
        />
      </div>
    </div>
    </div>
  );
}