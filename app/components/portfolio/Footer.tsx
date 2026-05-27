import React from 'react';
import { LuTerminal, LuGithub, LuLinkedin, LuMail, LuHeart } from "react-icons/lu";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <LuTerminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              junhyung<span className="text-primary">.dev</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: LuGithub, href: 'https://github.com' },
              { icon: LuLinkedin, href: 'https://linkedin.com' },
              { icon: LuMail, href: 'mailto:junhyung.huh@email.com' },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built with <LuHeart className="w-3 h-3 text-primary" /> by Junhyung · © {year}
          </p>
        </div>
      </div>
    </footer>
  );
}