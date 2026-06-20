'use client';
import { motion } from 'framer-motion';
import { C } from '@/lib/palette';
import { SKILL_GROUPS } from '@/lib/data';
import type { RefObject } from 'react';

const tagContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const tagItem = {
  hidden: { opacity: 0, y: 10 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Skills({ sectionRef }: { sectionRef: RefObject<HTMLElement | null> }) {
  return (
    <section
      ref={sectionRef}
      data-section="skills"
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
          What I work with
        </p>
        <h2 className="display-text text-2xl sm:text-3xl font-semibold mb-12">Skills</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-10">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: gi * 0.08 }}
          >
            <p className="mono-text text-sm mb-4" style={{ color: C.accent }}>
              // {group.label}
            </p>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={tagContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {group.items.map((skill) => (
                <motion.span
                  key={skill}
                  variants={tagItem}
                  className="mono-text text-xs px-3 py-1.5 rounded-full"
                  style={{ border: `1px solid ${C.border}`, color: C.text }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
