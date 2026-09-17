// app/components/Experience.tsx
'use client';

import { useState } from 'react';

export interface ExperienceItem {
    id:          string | number;
    role:        string;
    company:     string;
    startDate:   string;
    endDate:     string | null;
    description: string;
    createdAt:   string;
    photoLink:   string;
    photoAlt:    string;
    skillsUsed:  string;
    pageURL:     string;
    pageID:      string;
}

function formatDate(dateStr: string | null) {
    if (!dateStr) return 'Present';
    return new Date(dateStr).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
    });
}

export default function Experience({ initialExperience }: { initialExperience: ExperienceItem[] }) {
    const [experience] = useState(initialExperience);

    return (
        <div className="grid min-[1072px]:grid-cols-2 gap-20 max-w-4/5 mx-auto py-8 text-center">
            
            {experience.map((item) => (

                <div key={item.id} className="rounded-4xl hover:scale-102 hover:outline-navigation-active 
                                              hover:shadow-navigation-active overflow-hidden outline-black 
                                              outline-3 bg-navigation-background hover:shadow-[0_0_28px_6px_var(--navigation-active)]">
                    <a href={item.pageURL}>
                    <div className="h-80 w-auto">
                        <img className="object-cover h-full w-full object-center" src={item.photoLink} alt={item.photoAlt} />
                    </div>

                    <div className="px-6 py-4">
                        <div className="justify-between items-start flex-wrap gap-2 mb-1">
                            <h3 className="text-2xl font-semibold text-navigation-title"> {item.role}</h3>
                            <h3 className="text-xl text-navigation-hover-text whitespace-nowrap">
                                {formatDate(item.startDate)} - {formatDate(item.endDate)}
                            </h3>
                        </div>
                        {/* <div className="text-text-primary text-base">
                            {item.description
                                .split('•')
                                .map((line) => line.trim())
                                .filter(Boolean)
                                .map((line, i) => (
                                    <p key={i} className='p-1.5'>• {line}</p>
                                ))}</div> */}
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        {item.skillsUsed
                            .split(',')
                            .map((item) => item.trim())
                            .map((item, i) => (
                                <span key={i} className="inline-block bg-navigation-active rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item}</span>
                            ))}
                    </div>
                </a>
                </div>))}

        </div>
    );
}