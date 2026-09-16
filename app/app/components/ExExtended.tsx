'use client'

import { ExperienceItem } from "./Experience";
import { useState, useEffect } from "react";

export default function ExExtended(){

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
        <div>
            {experience.map((item) => (
                <div key={item.id} id={item.pageID} > 
                                            <div className="text-text-primary text-base">
                            {item.description
                                .split('•')
                                .map((line) => line.trim())
                                .filter(Boolean)
                                .map((line, i) => (
                                    <p key={i} className='p-20'>• {line}</p>
                                ))}</div>
                                <img src={item.photoLink}></img>
                </div>

                
            ))}
        </div>
        );
}