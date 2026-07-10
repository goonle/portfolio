"use client";

import React, { useState } from 'react';
import { LuGithub, LuExternalLink, LuChevronDown, LuChevronUp, LuZap, LuBookOpen } from "react-icons/lu";

export default function ProjectCard({ project, index }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="group rounded-xl bg-card border border-border/50 hover:border-primary/15 transition-all duration-300 overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary/50" />

            <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="font-mono text-xs text-muted-foreground">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                                {project.title}
                            </h3>
                        </div>
                        <p className="text-primary/80 text-sm font-medium">{project.tagline}</p>
                    </div>

                    <div className="flex gap-2">
                        <a
                            href={project.codeUrl}
                            target="_blank"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-secondary/60 border border-border/50 rounded-lg text-muted-foreground hover:text-foreground hover:border-border transition-all"
                        >
                            <LuGithub className="w-4 h-4" />
                            Code
                        </a>
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-primary/10 border border-primary/20 rounded-lg text-primary hover:bg-primary/20 transition-all"
                        >
                            <LuExternalLink className="w-4 h-4" />
                            Demo
                        </a>
                    </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-5">
                    {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-xs font-mono bg-secondary/60 border border-border/40 rounded-md text-muted-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Features */}
                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                        <LuZap className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-foreground">Key Features</span>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-2">
                        {project.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-primary shrink-0">▸</span>
                                {f}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Expandable details */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="flex items-center gap-1.5 text-sm text-primary/80 hover:text-primary transition-colors mt-2"
                >
                    <LuBookOpen className="w-3.5 h-3.5" />
                    {expanded ? 'Show less' : 'Challenges & learnings'}
                    {expanded ? <LuChevronUp className="w-3.5 h-3.5" /> : <LuChevronDown className="w-3.5 h-3.5" />}
                </button>

                {expanded && (
                    <div className="mt-4 pt-4 border-t border-border/50 space-y-4">
                        <div>
                            <p className="text-sm font-semibold text-foreground mb-1">🔧 Challenges & 📚 Learnings</p>
                            <p className="text-sm text-muted-foreground">{project.addtionalInfo.summary}</p>
                            <p className="text-sm font-semibold text-muted-foreground mt-1 mb-1">Tech Choice</p>
                            <p className="text-sm text-muted-foreground">{project.addtionalInfo.techChoice}</p>
                            <p className="text-sm font-semibold text-muted-foreground mt-1 mb-1">Scoping decisions</p>
                            <ul className="grid gap-2">
                                {project.addtionalInfo.decisions.map((f) => (
                                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <span className="text-primary shrink-0">▸</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground">{project.currentStatus}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}