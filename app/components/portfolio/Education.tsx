"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/app/hooks/useInView';
import { GraduationCap, BookOpen, FlaskConical } from 'lucide-react';

export default function Education() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="education" className="py-24 sm:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-mono text-sm mb-2">// education</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-16 h-1 bg-primary/30 rounded-full mb-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl"
        >
          <div className="p-6 sm:p-8 rounded-xl bg-card border border-border/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Master of Information Technology
                  </h3>
                  <p className="text-primary/80 font-medium text-sm">
                    University in New Zealand
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    2023 – Present · New Zealand
                  </p>
                </div>

                <div className="pt-2 space-y-3">
                  <div className="flex items-start gap-3">
                    <FlaskConical className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Research Focus</p>
                      <p className="text-sm text-muted-foreground">
                        Serverless architecture patterns and asynchronous processing systems — 
                        exploring how modern cloud platforms handle background jobs, event-driven workflows, 
                        and scalable data pipelines.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Key Coursework</p>
                      <div className="flex flex-wrap gap-2 mt-1.5">
                        {[
                          'Cloud Computing',
                          'Distributed Systems',
                          'Machine Learning',
                          'Software Engineering',
                          'Data Analytics',
                        ].map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 text-xs bg-secondary/60 border border-border/40 rounded-md text-muted-foreground"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}