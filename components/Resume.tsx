'use client';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { C } from '@/lib/palette';
import { RESUME_DOCS } from '@/lib/data';
import type { RefObject } from 'react';

export default function Resume({ sectionRef }: { sectionRef: RefObject<HTMLElement> }) {
  return (
    <section
      ref={sectionRef}
      data-section="resume"
      className="max-w-5xl mx-auto px-6 py-20"
      style={{ borderTop: `1px solid ${C.border}` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="display-text text-2xl sm:text-3xl font-semibold mb-12">
          Resume &amp; cover letter
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {RESUME_DOCS.map((doc, i) => (
          <motion.a
            key={doc.title}
            href={doc.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.18)' }}
            className="block p-6 rounded-2xl"
            style={{ border: `1px solid ${C.border}`, background: C.surface }}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="display-text text-lg font-semibold">{doc.title}</h3>
              <Download size={16} style={{ color: C.accent2 }} />
            </div>
            <p className="text-sm" style={{ color: C.textMuted }}>
              {doc.desc}
            </p>
            <p className="mono-text text-xs mt-4" style={{ color: C.accent2 }}>
              View PDF →
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
