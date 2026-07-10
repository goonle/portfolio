"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/app/hooks/useInView';
import ProjectCard from './ProjectCard';

type Project = {
    title: string,
    tagline: string,
    description: string,
    techStack: String[],
    features: String[],
    challenges: string,
    learned: string,
    color: string
    codeUrl: string,
    demoUrl: string,
}

const projects: Project[] = [
    // {
    //     title: 'RoutineFlow',
    //     tagline: 'Daily routine tracking web application',
    //     description:
    //         'A web app for building and tracking daily routines. Designed around a hybrid serverless architecture with background job processing for reminders and data aggregation.',
    //     techStack: ['Next.js', 'PostgreSQL', 'BullMQ', 'Redis', 'TypeScript', 'Tailwind CSS'],
    //     features: [
    //         'Custom routine builder with drag-and-drop ordering',
    //         'Background job processing for daily summaries',
    //         'Streak tracking and habit analytics',
    //         'Responsive, lightweight UX',
    //     ],
    //     challenges:
    //         'Handling background job reliability and retry logic with BullMQ, and designing the serverless + persistent worker hybrid architecture.',
    //     learned:
    //         'Learned how to integrate message queues into a serverless-friendly stack, and the trade-offs between serverless and always-on services.',
    //     color: 'primary',
    //     codeUrl: '',
    //     demoUrl: '',
    // },
    // {
    //     title: 'AI Fridge Manager',
    //     tagline: 'OCR-based grocery & food management',
    //     description:
    //         'A mobile-first concept app that scans grocery receipts using OCR, tracks food items and expiry dates, and provides AI-assisted recommendations to reduce food waste.',
    //     techStack: ['React', 'Python', 'OpenAI API', 'OCR', 'Node.js', 'PostgreSQL'],
    //     features: [
    //         'Receipt scanning with OCR text extraction',
    //         'Automatic food item categorization',
    //         'Expiry date tracking and notifications',
    //         'AI-powered recipe suggestions based on available items',
    //     ],
    //     challenges:
    //         'OCR accuracy on messy receipt formats, and building a useful AI recommendation pipeline that doesn\'t feel gimmicky.',
    //     learned:
    //         'Gained hands-on experience integrating AI APIs into real workflows, and understood the importance of data preprocessing for OCR quality.',
    //     color: 'accent',
    //     codeUrl: '',
    //     demoUrl: '',

    // },
    {
        title: 'Cafe Order System',
        tagline: 'Simple supplier order management for cafes',
        description:
            'A practical web application built for a real cafe workflow. It helps manage vendors, orderable items, order history, and generates supplier order messages to reduce repetitive manual work.',
        techStack: ['Next.js', 'React', 'JavaScript', 'PostgreSQL', 'REST API'],
        features: [
            'Vendor and item management',
            'Vendor-based order history tracking',
            'One-click message generation for suppliers',
            'Reusable order templates for common purchases',
        ],
        challenges:
            'Understanding a real cafe ordering workflow from a non-technical user and translating repetitive manual tasks into a simple, usable web application.',
        learned:
            'Learned how to build practical software around a real business workflow, focusing on usability, simplicity, and solving daily operational problems rather than adding unnecessary features.',
        color: 'chart-4',
        codeUrl: 'https://github.com/goonle/order_history',
        demoUrl: 'https://order-history-two.vercel.app/',

    },
];

const filters = ['All', 'Frontend', 'Backend', 'Full-Stack', 'AI'];

function getProjectFilter(project: Project) {
    const t = project.techStack.map((s) => s.toLowerCase());
    const tags = [];
    if (t.some((s: string) => ['react', 'next.js', 'tailwind css', 'typescript'].includes(s))) tags.push('Frontend');
    if (t.some((s: string) => ['node.js', 'spring boot', 'java', 'bullmq', 'redis', 'postgresql'].includes(s))) tags.push('Backend');
    if (tags.includes('Frontend') && tags.includes('Backend')) tags.push('Full-Stack');
    if (t.some((s: string) => ['openai api', 'ocr', 'python'].includes(s))) tags.push('AI');
    return tags;
}

export default function Projects() {
    const { ref, isInView } = useInView(0.1);
    const [activeFilter, setActiveFilter] = useState('All');

    const filtered = activeFilter === 'All'
        ? projects
        : projects.filter((p) => getProjectFilter(p).includes(activeFilter));

    return (
        <section id="projects" className="py-24 sm:py-32">
            <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-primary font-mono text-sm mb-2">// projects</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Featured projects
                    </h2>
                    <p className="text-muted-foreground max-w-xl mb-2">
                        A selection of projects I've built. Each one taught me something different.
                    </p>
                    <div className="w-16 h-1 bg-primary/30 rounded-full mb-8" />
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-2 mb-10"
                >
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`px-4 py-2 text-sm rounded-lg border transition-all duration-200 ${activeFilter === f
                                ? 'bg-primary/10 border-primary/30 text-primary'
                                : 'bg-secondary/40 border-border/50 text-muted-foreground hover:text-foreground hover:border-border'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </motion.div>

                {/* Project grid */}
                <div className="space-y-8">
                    <AnimatePresence>
                        {filtered.map((project, i) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                            >
                                <ProjectCard project={project} index={i} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}