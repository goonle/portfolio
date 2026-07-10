"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/app/hooks/useInView';

type Skill = {
    name: string,
    level : number
}

type SkillCategory = {
    title: string,
    emoji: string,
    skills: Skill[] 
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    emoji: '🎨',
    skills: [
      { name: 'React', level: 40 },
      { name: 'Next.js', level: 50 },
      { name: 'TypeScript', level: 40 },
      { name: 'JavaScript', level: 70 },
      { name: 'Jquery', level: 70 },
      { name: 'HTML/CSS', level: 70 },
      { name: 'Tailwind CSS', level: 40 },
    ],
  },
  {
    title: 'Backend',
    emoji: '⚙️',
    skills: [
      { name: 'Node.js', level: 30 },
      { name: 'Spring Boot', level: 60 },
      { name: 'Java', level: 70 },
      { name: 'Python', level: 70 },
      { name: 'REST APIs', level: 80 },
    ],
  },
  {
    title: 'Database',
    emoji: '🗄️',
    skills: [
      { name: 'PostgreSQL', level: 75 },
      { name: 'Redis', level: 20 },
      { name: 'MongoDB', level: 20 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    emoji: '☁️',
    skills: [
      { name: 'Docker', level: 40 },
      { name: 'Git/GitHub', level: 85 },
      { name: 'CI/CD', level: 60 },
      { name: 'Vercel', level: 40 },
    ],
  },
  {
    title: 'AI & Tools',
    emoji: '🤖',
    skills: [
      { name: 'AI Integration', level: 40 },
      { name: 'ML Concepts', level: 20 },
      { name: 'Prompt Engineering', level: 20 },
    ],
  },
];


type SkillBarProps = {
    name: string,
    level: number,
    delay: number
}
function SkillBar({ name, level, delay }: SkillBarProps) {
  const { ref, isInView } = useInView(0.3);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-foreground font-medium">{name}</span>
        <span className="text-xs text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: delay * 0.05, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
        />
      </div>
    </div>
  );
}

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
          <p className="text-muted-foreground max-w-xl mb-2">
            Levels reflect honest self-assessment, not perfection. I value growth over claiming mastery.
          </p>
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
              <div className="space-y-4">
                {cat.skills.map((skill: Skill, i : number) => (
                  <SkillBar key={skill.name} {...skill} delay={catIdx * 3 + i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}