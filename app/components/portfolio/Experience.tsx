"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/app/hooks/useInView';
import { MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Full-Stack Developer',
    company: ' Security Dashboard Platform for Enterprise Clients',
    location: 'Seoul, South Korea',
    period: '2021 – 2024',
    type: 'Full-time',
    members: 'Worked as a junior developer in a security-focused engineering team of 10, mentored by principal engineers specializing in security, systems, and big data — within a larger 40-person organization spanning engineering, data operations, and sales.',
    description: [
      'Built and maintained a third-party application on top of Splunk, working within its dashboard-only extension constraints by embedding a custom-built app via iframe',
      'Developed backend services in Python (CherryPy) to query and process large-scale security log data through the Splunk SDK, transforming raw data into actionable insights for security officers',
      'Designed and implemented a separate Java Spring Boot application to handle the report justification/approval workflow for staff without direct Splunk access, including SSO integration for enterprise banking clients — validating employee IDs against internal records and enforcing report-level access control via email-based permission mapping',
      'Worked closely with senior engineers to understand the reasoning behind authentication and authorization design decisions, rather than just implementing to spec — this shaped how I approach new codebases today',
      'Took ownership of frontend implementation (CSS structuring, component modularization) on new client projects after demonstrating strength in this area',
      'Refactored a heavily legacy justification workflow module by identifying repeated UI/logic patterns across features and consolidating them into reusable components — significantly reducing code duplication and improving maintainability, done incrementally alongside ongoing feature work',
      'Operated in a fast-growing, resource-constrained team where productivity was prioritized over rigid structure (no formal test suite, flexible parameter-based logic instead of strict data modeling) — gained firsthand understanding of the tradeoffs this creates at scale, which now informs my emphasis on test coverage and data modeling in personal projects',
      `Collaborated with an external client on 3D visualization requirements outside the team's core frontend strength, adapting and integrating externally provided code`
    ],
  },
  {
    role: 'Research & Study',
    company: 'Auckland Institute of Studies',
    location: 'New Zealand',
    period: '2024 – 2026',
    type: 'Graduate Student',
    description: [
      'Pursuing Master of Information Technology with a focus on serverless architectures and asynchronous systems',
      'Working on academic projects involving cloud computing and AI integration',
      'Building personal projects to explore new technologies and deepen practical skills',
      'Engaging with the local developer community and attending tech meetups',
    ],
  },
];

export default function Experience() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="experience" className="py-24 sm:py-32 bg-card/30">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-mono text-sm mb-2">// experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Work & journey
          </h2>
          <div className="w-16 h-1 bg-primary/30 rounded-full mb-10" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-border/50 hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 sm:left-6 top-6 w-5 h-5 rounded-full bg-background border-2 border-primary hidden sm:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/15 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                      <p className="text-primary/80 font-medium text-sm">{exp.company}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-secondary border border-border/50 text-muted-foreground">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {exp.members}
                  </p>

                  <ul className="space-y-2">
                    {exp.description.map((line) => (
                      <li key={line} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}