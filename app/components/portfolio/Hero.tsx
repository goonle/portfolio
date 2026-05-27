"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LuArrowDown, LuGithub, LuLinkedin, LuMail, LuMapPin } from "react-icons/lu";

export default function Hero() {
    const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background grid effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-32 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    {/* Status badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 border border-border/50 text-sm text-muted-foreground"
                    >
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <LuMapPin className="w-3.5 h-3.5" />
                        <span>Based in New Zealand</span>
                        <span className="text-foreground/40">·</span>
                        <span>Open to opportunities</span>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                    >
                        <span className="text-foreground">Hi, I'm </span>
                        <span className="text-gradient">Junhyung</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    >
                        Full-stack developer with 3 years of experience building web applications.
                        I enjoy creating <span className="text-foreground font-medium">practical systems</span> that solve real problems
                        and I'm always learning something new along the way.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        className="font-mono text-sm text-primary/80"
                    >
                        React · TypeScript · Node.js · Python · PostgreSQL
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <button
                            onClick={() => scrollTo('#projects')}
                            className="group px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-primary/20"
                        >
                            View Projects
                            <LuArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                        </button>
                        <button
                            onClick={() => scrollTo('#contact')}
                            className="px-6 py-3 bg-secondary/60 text-foreground font-medium rounded-lg border border-border/50 hover:bg-secondary hover:border-border transition-all duration-200"
                        >
                            Contact Me
                        </button>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="flex items-center justify-center gap-4 pt-6"
                    >
                        {[
                            { icon: LuGithub, href: 'https://github.com', label: 'GitHub' },
                            { icon: LuLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                            { icon: LuMail, href: '#contact', label: 'Email' },
                        ].map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith('http') ? '_blank' : undefined}
                                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                onClick={!href.startsWith('http') ? (e) => { e.preventDefault(); scrollTo(href); } : undefined}
                                className="w-10 h-10 rounded-lg bg-secondary/60 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                                aria-label={label}
                            >
                                <Icon className="w-4.5 h-4.5" />
                            </a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}