"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/app/hooks/useInView';

type SkillCategory = {
    title: string,
    emoji: string,
    skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    emoji: '🎨',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'jQuery', 'HTML/CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    emoji: '⚙️',
    skills: ['Node.js', 'Spring Boot', 'Java', 'Python', 'REST APIs'],
  },
  {
    title: 'Database',
    emoji: '🗄️',
    skills: [
      'PostgreSQL',
      'Redis',
      // 'MongoDB',
    ],
  },
  {
    title: 'DevOps & Cloud',
    emoji: '☁️',
    skills: ['Docker', 'Git/GitHub', 'CI/CD', 'Vercel'],
  },
  // {
  //   title: 'AI & Tools',
  //   emoji: '🤖',
  //   skills: ['AI Integration', 'ML Concepts', 'Prompt Engineering'],
  // },
];

export default function Skills() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="skills" className="py-24 sm:py-32 bg-card/30">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-mono text-sm mb-2">// skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tech stack & skills
          </h2>
          <div className="w-16 h-1 bg-primary/30 rounded-full mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/15 transition-colors"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-lg">{cat.emoji}</span>
                <h3 className="text-foreground font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-secondary text-sm text-foreground font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
