'use client';
import { motion } from 'framer-motion';
import { C } from '@/lib/palette';
import { EXPERIENCE } from '@/lib/data';
import type { RefObject } from 'react';

export default function Experience({ sectionRef }: { sectionRef: RefObject<HTMLElement | null> }) {
  return (
    <section
      ref={sectionRef}
      data-section="experience"
      className="max-w-5xl mx-auto px-6 py-20"
      style={{ borderTop: `1px solid ${C.border}` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="mono-text text-xs uppercase mb-2" style={{ color: C.accent2, letterSpacing: '0.1em' }}>
          My journey
        </p>
        <h2 className="display-text text-2xl sm:text-3xl font-semibold mb-12">Experience</h2>
      </motion.div>

      <div className="space-y-10">
        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={i}
            className="gap-4 sm:gap-8"
            style={{ display: 'grid', gridTemplateColumns: '110px 1fr' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p className="mono-text text-xs sm:text-sm" style={{ color: C.textMuted }}>
              {exp.date}
            </p>
            <div style={{ borderLeft: `1px solid ${C.border}`, paddingLeft: '1.5rem' }}>
              <h3 className="display-text text-lg font-semibold">{exp.role}</h3>
              <p className="mono-text text-xs sm:text-sm mb-3" style={{ color: C.accent }}>
                {exp.org}
              </p>
              <ul className="space-y-1 mb-4">
                {exp.points.map((pt, j) => (
                  <li key={j} className="text-sm leading-relaxed" style={{ color: C.text }}>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono-text text-xs px-2 py-1 rounded-full"
                    style={{ border: `1px solid ${C.border}`, color: C.textMuted }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
