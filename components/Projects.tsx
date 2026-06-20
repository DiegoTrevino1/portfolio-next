'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import { C } from '@/lib/palette';
import { PROJECTS } from '@/lib/data';
import type { RefObject } from 'react';

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Projects({ sectionRef }: { sectionRef: RefObject<HTMLElement | null> }) {
  return (
    <section
      ref={sectionRef}
      data-section="projects"
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
          Selected work
        </p>
        <h2 className="display-text text-2xl sm:text-3xl font-semibold mb-12">Projects</h2>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {PROJECTS.map((p) => (
          <motion.div
            key={p.title}
            variants={cardVariants}
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.18)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="p-6 rounded-2xl flex flex-col"
            style={{ border: `1px solid ${C.border}`, background: C.surface }}
          >
            <div
              className="rounded-xl mb-5 h-28 flex items-center justify-center display-text text-xl"
              style={{ background: C.surfaceAlt, color: C.textMuted }}
            >
              {p.title.split(' ').map((w) => w[0]).join('')}
            </div>
            <h3 className="display-text text-lg font-semibold mb-2">{p.title}</h3>
            <p className="text-sm mb-4 flex-1" style={{ color: C.textMuted }}>
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="mono-text text-xs px-2 py-1 rounded-full"
                  style={{ border: `1px solid ${C.border}`, color: C.text }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mono-text text-xs" style={{ color: C.accent2 }}>
              <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
                GitHub <ArrowUpRight size={12} />
              </a>
              <a href={p.demo} className="inline-flex items-center gap-1">
                Live demo <ArrowUpRight size={12} />
              </a>
            </div>
          </motion.div>
        ))}

        <motion.div
          variants={cardVariants}
          className="p-6 rounded-2xl flex flex-col items-center justify-center text-center"
          style={{ border: `1px dashed ${C.border}`, color: C.textMuted, minHeight: '220px' }}
        >
          <Plus size={20} className="mb-3" />
          <p className="mono-text text-sm">Add your next project here</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
