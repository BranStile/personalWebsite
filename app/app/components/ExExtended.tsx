'use client'

import { ExperienceItem } from "./Experience";
import { useEffect, useState } from "react";

export default function ExExtended({ initialExperience }: { initialExperience: ExperienceItem[] }) {
    const [experience] = useState(initialExperience);

    useEffect(() => {
        if (experience.length > 0) {
            const hash = window.location.hash.replace('#', '');
            if (hash) {
                const el = document.getElementById(hash);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

                    // Fallback in case images loading afterward shift the layout
                    const timeout = setTimeout(() => {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 300);
                    return () => clearTimeout(timeout);
                }
            }
        }
    }, [experience]);

    return (
        <div className="grid gap-20 max-w-4/5 mx-auto py-8">
            
            {experience.map((item) => (

                <div id={item.pageID} key={item.id} className="rounded-4xl overflow-hidden outline-black outline-10 bg-navigation-background">
                    <div className="h-80 w-auto">
                        <img className="object-cover h-full w-full object-center" src={item.photoLink} alt={item.photoAlt} />
                    </div>

                    <div className="px-8 md:px-12 py-6">
                        {/* 1. Increased bottom margin, removed text-center */}
                        <div className="justify-between items-start flex-wrap gap-2 mb-6">
                            <h3 className="text-4xl font-bold text-navigation-title"> 
                                {item.role}
                            </h3>
                        </div>
                        
                        {/* 2. Switched to <ul>, added leading-relaxed, space-y-4, and list classes */}
                        <ul className="text-text-primary text-lg font-light leading-relaxed space-y-4 list-disc list-outside ml-6">
                            {item.description
                                .split('•')
                                .map((line) => line.trim())
                                .filter(Boolean)
                                .map((line, i) => (
                                    /* 3. Changed <p> to <li> and removed the manual bullet character */
                                    <li key={i}>{line}</li>
                                ))}
                        </ul>
                    </div>
                    <div className="px-6 pt-4 pb-2 text-center">
                        {item.skillsUsed
                            .split(',')
                            .map((item) => item.trim())
                            .map((item, i) => (
                                <span key={i} className="inline-block bg-navigation-active rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item}</span>
                            ))}
                    </div>
                </div>))}
        </div>
    );
}