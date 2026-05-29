"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/app/hooks/useInView';
import { LuSend, LuGithub, LuLinkedin, LuMail, LuLoader } from "react-icons/lu";
import { Input } from "@/app/components/ui/Input"
import { Textarea } from '@/app/components/ui/Textarea';
import { Button } from '@/app/components/ui/Button';
import { toast } from 'sonner';
import { sendEmail } from '@/app/lib/sendEmail';

type EmailForm = {
  name: string,
  email: string,
  message: string,
}

const defaultEmailForm: EmailForm = {
  name: '', email: '', message: ''
}

export default function Contact() {

  const { ref, isInView } = useInView(0.2);

  const [form, setForm] = useState(defaultEmailForm);
  const [sending, setSending] = useState(false);


  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields');
      return;
    }
    setSending(true);
    
    try {
      const result = await sendEmail(form)
      toast.success('Message sent! I\'ll get back to you soon.');
    } catch (e) {
      toast.error('Error occured.. Please try again.');
    } finally {
      setForm({ name: '', email: '', message: ''});
      setSending(false);
    }

  };

  const socials = [
    { icon: LuGithub, label: 'GitHub', href: 'https://github.com/goonle', username: 'github.com/goonle' },
    { icon: LuLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/junhyung-huh-165019266/', username: 'https://www.linkedin.com/in/junhyung-huh-165019266' },
    { icon: LuMail, label: 'Email', href: 'mailto:strongwill.jun@gmail.com', username: 'strongwill.jun@gmail.com' },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-card/30">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-mono text-sm mb-2">// contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's connect
          </h2>
          <p className="text-muted-foreground max-w-xl mb-2">
            I'm always open to discussing new projects, opportunities, or just having a friendly conversation about tech.
            Feel free to reach out!
          </p>
          <div className="w-16 h-1 bg-primary/30 rounded-full mb-10" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 p-6 sm:p-8 rounded-xl bg-card border border-border/50"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name</label>
                <Input
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-secondary/60 border-border/50 focus:border-primary/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-secondary/60 border-border/50 focus:border-primary/50"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Message</label>
              <Textarea
                placeholder="What's on your mind?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-secondary/60 border-border/50 focus:border-primary/50 min-h-[140px] resize-none"
              />
            </div>
            <Button
              type="submit"
              disabled={sending}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {sending ? (
                <LuLoader className="w-4 h-4 animate-spin mr-2" />
              ) : (
                <LuSend className="w-4 h-4 mr-2" />
              )}
              {sending ? 'Sending...' : 'Send Message'}
            </Button>
          </motion.form>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="p-6 sm:p-8 rounded-xl bg-card border border-border/50 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Get in touch</h3>
                <p className="text-sm text-muted-foreground">
                  Whether it's a project idea, job opportunity, or just a hello — I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                {socials.map(({ icon: Icon, label, href, username }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/40 border border-border/40 hover:border-primary/20 hover:bg-primary/[0.03] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{label}</p>
                      <p className="text-xs text-muted-foreground">{username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-secondary/30 border border-border/30 text-center">
              <p className="text-sm text-muted-foreground">
                💡 Currently open to <span className="text-foreground font-medium">full-time positions</span>,
                <span className="text-foreground font-medium"> freelance work</span>, and
                <span className="text-foreground font-medium"> collaborations</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}