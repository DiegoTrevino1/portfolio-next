'use client';
import dynamic from 'next/dynamic';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';
import { C } from '@/lib/palette';
import { NAME, EMAIL } from '@/lib/data';
import type { RefObject } from 'react';

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false });

const nameStyle = {
  fontSize: 'clamp(3rem, 11vw, 7.5rem)',
  fontWeight: 700,
  letterSpacing: '0.03em',
  margin: 0,
  lineHeight: 1,
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

interface HeroProps {
  sectionRef: RefObject<HTMLElement>;
  onResumeClick: () => void;
}

export default function Hero({ sectionRef, onResumeClick }: HeroProps) {
  return (
    <section
      ref={sectionRef}
      data-section="about"
      className="relative max-w-5xl mx-auto px-6"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 96,
        paddingBottom: 96,
      }}
    >
      <HeroScene />

      <motion.div
        className="relative text-center"
        style={{ maxWidth: 720, zIndex: 1 }}
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* Badge */}
        <motion.div variants={fadeUp}>
          <div
            className="inline-flex items-center gap-2 mono-text text-xs uppercase px-4 py-1.5 rounded-full mb-10"
            style={{
              border: `1px solid ${C.border}`,
              color: C.textMuted,
              background: 'rgba(255,255,255,0.02)',
              letterSpacing: '0.05em',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: C.accent,
                display: 'inline-block',
              }}
            />
            Open to new-grad software engineering roles
          </div>
        </motion.div>

        {/* Name with glitch */}
        <motion.div variants={fadeUp} style={{ position: 'relative', display: 'inline-block' }}>
          <h1 className="display-text name-iridescent" style={nameStyle}>
            {NAME.toUpperCase()}
          </h1>
          <h1
            aria-hidden
            className="display-text glitch-layer glitch1"
            style={{ ...nameStyle, color: C.accent2, mixBlendMode: 'screen' }}
          >
            {NAME.toUpperCase()}
          </h1>
          <h1
            aria-hidden
            className="display-text glitch-layer glitch2"
            style={{ ...nameStyle, color: C.accent, mixBlendMode: 'screen' }}
          >
            {NAME.toUpperCase()}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mono-text"
          style={{
            color: C.accent2,
            fontSize: 'clamp(0.9rem, 2vw, 1.15rem)',
            marginTop: '1.25rem',
            marginBottom: '1.5rem',
            letterSpacing: '0.04em',
          }}
        >
          Full-Stack Software Engineer · CWU Class of 2026
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          className="mx-auto"
          style={{
            maxWidth: 600,
            color: C.textMuted,
            fontSize: '1.05rem',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
          }}
        >
          I build full-stack web applications that solve real problems — from educational platforms
          used by students at CWU to bilingual business sites across the Yakima Valley. Computer
          Science grad with a Math minor, a 3.60 GPA, and a bias toward shipping things that work.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="mono-text text-sm px-6 py-3 rounded-full inline-flex items-center gap-2"
            style={{ background: C.accent, color: '#06060B', fontWeight: 600 }}
          >
            Get in touch <ArrowUpRight size={14} />
          </a>
          <button
            onClick={onResumeClick}
            className="mono-text text-sm px-6 py-3 rounded-full inline-flex items-center gap-2"
            style={{
              border: `1px solid ${C.border}`,
              color: C.text,
              background: 'rgba(255,255,255,0.02)',
              cursor: 'pointer',
            }}
          >
            Resume <Download size={14} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
