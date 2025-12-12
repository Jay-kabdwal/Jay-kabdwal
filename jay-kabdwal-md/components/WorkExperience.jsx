'use client';
import { useState } from 'react';
import Image from 'next/image';

function ExperienceCard({ id, company, title, duration, description, type }) {
    return (
        <div className="pt-3 space-y-1 md:space-y-2">
            <div className="flex items-start flex-col md:flex-row gap-2 justify-between">
                <div className="flex items-center space-x-4">
                    <div className="relative w-10 h-10 flex-shrink-0 rounded-full overflow-hidden">
                        <Image
                            src={`/${type}/${id}.png`}
                            alt={`${company} logo`}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold leading-tight">{company}</h3>
                        <p className="text-sm text-muted-foreground">{title}</p>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">{duration}</p>
            </div>
            {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
            )}
        </div>
    );
}

export default function Experience() {
    const [activeTab, setActiveTab] = useState('education');

    // const workExperience = [
    //     {
    //         id: 'inclearsite',
    //         company: 'InClearSite',
    //         title: 'Freelance Developer',
    //         duration: 'Jan 2024 - Present',
    //         description:
    //            'Worked with small businesses to enhance their online presence and drive conversions. Built full-stack, conversion-focused websites with responsive design, backend functionality, and deployment. Delivered websites that helped clients grow their business, with 90% satisfaction.'
    //     },
    //     {
    //         id: 'cantilever',
    //         company: 'Cantilever',
    //         title: 'Software Development Intern',
    //         duration: 'Jun 2025 - Jul 2025',
    //         description:
    //             'Developed and optimized React components for core product features, integrated REST APIs and collaborated on endpoint/data design with backend engineers, and applied performance and resiliency improvements to enhance stability and user experience.',
    //     },
    //     {
    //         id: 'vigovia',
    //         company: 'Vigovia',
    //         title: 'Software Development Intern',
    //         duration: 'Oct 2025 - Present',
    //         description:
    //             'Developed and optimized React components for critical sections of the web application, improving performance and user experience. Implemented responsive designs and collaborated with backend developers to integrate APIs, resulting in a 25% increase in user engagement.',
    //     }
    // ];

    const educationExperience = [
        {
            id: 'BIAS',
            company: 'Birla Institute of Applied Science, Bhimtal',
            title: 'B.Tech (CSE)',
            duration: 'Aug 2022 - Jul 2026',
            description: 'Pursuing core CS subjects including Data Structures, Operating Systems, and Software Engineering. Actively involved in development.',
        },
    ];

    // const data = activeTab === 'work' ? workExperience : educationExperience;
    const data = educationExperience;

    return (
        <section className="max-w-6xl mx-auto p-6 cursor-default">
            {/* <div className="flex w-full rounded-lg overflow-hidden mb-2">
                <button
                    className={`w-1/2 px-4 py-2 text-sm font-medium transition-all rounded-none cursor-pointer ${activeTab === 'work'
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                            : 'text-muted-foreground'
                        }`}
                    onClick={() => setActiveTab('work')}
                >
                    Work Experience
                </button>
                <button
                    className={`w-1/2 px-4 py-2 text-sm font-medium transition-all rounded-none cursor-pointer ${activeTab === 'education'
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                            : 'text-muted-foreground'
                        }`}
                    onClick={() => setActiveTab('education')}
                >
                    Education
                </button>
            </div> */}

            <div className="text-3xl font-bold mb-4">
                Education
            </div>
            <div className="rounded-lg p-4 gap-4 flex flex-col-reverse">
                {data.map((item, index) => (
                    <ExperienceCard
                        key={index}
                        {...item}
                        type={activeTab === 'work' ? 'workexperience' : 'education'}
                    />
                ))}
            </div>
        </section>
    );
}
