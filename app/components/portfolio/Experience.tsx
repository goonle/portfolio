"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/app/hooks/useInView';
import { MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Full-Stack Developer',
    company: 'Software Company',
    location: 'Seoul, South Korea',
    period: '2021 – 2023',
    type: 'Full-time',
    description: [
      'Built and maintained web applications focused on MVP delivery for B2B clients',
      'Worked on frontend-heavy projects using React and TypeScript, with backend support in Node.js and Spring Boot',
      'Collaborated closely with designers and product managers to turn business requirements into working software',
      'Participated in code reviews and helped onboard junior developers',
      'Focused on practical solutions — shipping features that actually solved customer problems',
    ],
  },
  {
    role: 'Research & Study',
    company: 'University of New Zealand',
    location: 'New Zealand',
    period: '2023 – Present',
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