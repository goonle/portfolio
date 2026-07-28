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
    addtionalInfo: AdditaionalInfo,
    // challenges: string,
    // learned: string,
    color: string
    codeUrl: string,
    demoUrl: string,
}

type AdditaionalInfo = {
    summary: string,
    techChoice: string,
    problems: string,
    decisions: String[],
    currentStatus : string
}
const projects: Project[] = [
    {
        title: 'RoutineFlow',
        tagline: 'Daily routine tracking web app with a C#/.NET Core backend',
        description:
            'A routine and habit tracking application. Originally designed and built as a Next.js full-stack app, then re-architected into a C#/.NET Core MVC backend — I directed the architecture and translated the original design into .NET, using AI-assisted development to implement the C# code while reviewing every generated piece myself.',
        techStack: ['Next.js', 'React', 'TypeScript', 'C#', '.NET Core', 'Entity Framework Core', 'JWT'],
        features: [
            'MVC-structured backend translated from an original Next.js design',
            'EF Core data modeling with composite indexes',
            'JWT-based authentication',
            'Separate frontend (Next.js/React) and backend (C#/.NET Core) repositories',
        ],
        addtionalInfo: {
            summary: 'This started as a Next.js side project. I later chose to rebuild the backend in C#/.NET Core to deliberately push myself into a stack more aligned with NZ backend hiring, translating the MVC structure and data model I\'d already designed rather than starting from scratch.',
            techChoice: 'I used AI-assisted development to implement the C# code, but the architecture — MVC structure, EF Core entity/DTO separation, JWT auth flow — was my own design carried over from the original Next.js version. My Java background made reading and reasoning about the generated C# straightforward, since the OOP model is very similar.',
            problems: 'The main challenge wasn\'t writing C# syntax, it was making sure I actually understood every architectural decision in the generated code rather than accepting it as a black box — so I went through EF Core relationships, DTO/Entity separation, and JWT token handling piece by piece and questioned each one.',
            decisions: [
                'Chose to rebuild in C#/.NET Core rather than continuing in Next.js, specifically to build backend depth in a stack commonly used in NZ enterprise environments',
                'Kept the frontend and backend as separate repositories to mirror a realistic full-stack project structure',
            ],
            currentStatus: 'Backend architecture and core flows are implemented; ongoing work is focused on deepening my own hands-on C# fluency alongside the AI-assisted implementation.'
        },
        color: 'primary',
        codeUrl: 'https://github.com/goonle/routineFlow_backend',
        demoUrl: 'https://routine-flow-frontend.vercel.app/',
    },
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
        addtionalInfo: {
            summary: 'This was a self-initiated project. I noticed a repetitive pain point at a cafe and proposed building a lightweight tool for it, rather than responding to a formal request.',
            techChoice: 'I chose Next.js on Vercel with PostgreSQL specifically for zero-cost, zero-maintenance deployment — no backend server to manage, minimal ongoing changes needed once live. Since this was an unpaid side project for a small business, keeping infrastructure and operational cost at zero was a hard requirement, not just a preference.',
            problems: `The real complexity wasn't the code — it was the vendor landscape. The cafe orders from 10+ suppliers (straws/napkins, food, syrup, coffee beans, matcha powder, etc.), and each vendor expects a different ordering channel — some by text, some by email, some through their own app. There's no single integration point.`,
            decisions: [
                'Originally planned SMS-based ordering, but dropped it after finding (a) per-message costs, and (b) NZ regulations restricting personal numbers from sending business SMS from a PC',
                'Also ruled out direct email automation due to handling personal/business contact data without a clear need',
                `Landed on a simpler, safer scope for v1: store each vendor's items in the DB, and auto-generate a formatted order message (with reusable header/footer templates) that the user copies and sends manually through whatever channel that vendor uses`
            ],
            currentStatus: 'Inventory tracking was a known future need (the cafe mentioned checking stock daily) but I deliberately left it out of v1 to keep the first version shippable and low-risk.'
        },
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