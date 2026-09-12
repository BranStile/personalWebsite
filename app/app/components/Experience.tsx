// app/components/Experience.tsx
'use client';

import { useEffect, useState } from 'react';

interface ExperienceItem {
    id: string | number;
    role: string;
    company: string;
    startDate: string;
    endDate: string | null;
    description: string;
    createdAt: string;
    photoLink: string;
    photoAlt: string;
    skillsUsed: string;
}

function formatDate(dateStr: string | null) {
    if (!dateStr) return 'Present';
    return new Date(dateStr).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
    });
}

export default function Experience() {
    const [experience, setExperience] = useState<ExperienceItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/experience')
            .then((res) => {
                if (!res.ok) throw new Error(`API returned ${res.status}`);
                return res.json();
            })
            .then((data: ExperienceItem[]) => {
                setExperience(data);
            })
            .catch((err: unknown) => {
                console.error(err);
                setError('Unable to load experiences.');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading experiences...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="flex flex-col gap-20 max-w-2/3 mx-auto py-8">
            {experience.map((item) => (

                <div key={item.id} className="rounded-4xl overflow-hidden shadow-lg outline-black outline-10 bg-navigation-background">
                    <div className="h-80 w-auto">
                        <img className="object-cover h-full w-full object-center" src={item.photoLink} alt={item.photoAlt} />
                    </div>

                    <div className="px-6 py-4">
                        <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                            <h3 className="text-2xl font-semibold text-navigation-title"> {item.role} </h3>
                            <span className="text-sm text-text-primary whitespace-nowrap">
                                {formatDate(item.startDate)} — {formatDate(item.endDate)}
                            </span>
                        </div>
                        <div className="text-text-primary text-base">
                            {item.description
                                .split('•')
                                .map((line) => line.trim())
                                .filter(Boolean)
                                .map((line, i) => (
                                    <p key={i} className='p-1.5'>• {line}</p>
                                ))}</div>
                    </div>
                    <div className="px-6 pt-4 pb-2">
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