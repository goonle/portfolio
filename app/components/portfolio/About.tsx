"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/app/hooks/useInView';
import { Code2, GraduationCap, Globe, Lightbulb } from 'lucide-react';

const highlights = [
  { icon: Code2, label: '3+ Years', desc: 'Development Experience' },
  { icon: Globe, label: 'Full-Stack', desc: '30% Frontend · 70% Backend' },
  { icon: GraduationCap, label: "Master's", desc: 'IT in New Zealand' },
  { icon: Lightbulb, label: 'AI & Cloud', desc: 'Current Focus Areas' },
];

export default function About() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="about" className="py-24 sm:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-mono text-sm mb-2">// about me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            A bit about myself
          </h2>
          <div className="w-16 h-1 bg-primary/30 rounded-full mb-10" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              I'm <span className="text-foreground font-medium">Junhyung Huh</span>, a full-stack developer from South Korea currently based in New Zealand.
              I moved here to pursue a Master's in Information Technology, driven by a desire to grow both as a developer and as a person.
            </p>
            <p>
              Over the past three years, I've worked as a full-stack developer building an enterprise security dashboard platform — primarily in Python (CherryPy) for backend services processing large-scale security data, and Java (Spring Boot) for authentication and workflow systems
            </p>
            <p>
              Along the way, I've taken ownership of frontend structuring and CSS modularization, and I'm now expanding into modern frontend frameworks like React and Next.js through personal projects.
            </p>
            <p>
              I care about writing code I can fully explain and defend — not just code that works.
            </p>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-2 gap-3"
          >
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={label}
                className="group p-4 rounded-xl bg-card border border-border/50 hover:border-primary/20 hover:bg-primary/[0.03] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-semibold text-sm">{label}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}