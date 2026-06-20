'use client';
import { useEffect, useRef, useState, useMemo } from 'react';
import type { RefObject } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Skills from './Skills';
import Resume from './Resume';
import Projects from './Projects';
import Experience from './Experience';
import Footer from './Footer';
import { C } from '@/lib/palette';
import { type SectionId } from '@/lib/data';

const STAR_COUNT = 110;
const PARTICLE_COUNT = 6;

type StarfieldEntry = {
  x: number; y: number; size: number; opacity: number; depth: number;
};
type ParticleEntry = {
  x: number; y: number; size: number; color: string;
  depth: number; duration: number; delay: number;
};

export default function Portfolio() {
  const [active, setActive] = useState<SectionId>('about');
  const fieldRef = useRef<HTMLDivElement>(null);

  const aboutRef    = useRef<HTMLElement>(null);
  const skillsRef   = useRef<HTMLElement>(null);
  const resumeRef   = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const expRef      = useRef<HTMLElement>(null);

  const sectionRefs: Record<SectionId, RefObject<HTMLElement | null>> = {
    about:      aboutRef,
    skills:     skillsRef,
    resume:     resumeRef,
    projects:   projectsRef,
    experience: expRef,
  };

  const stars = useMemo<StarfieldEntry[]>(
    () =>
      Array.from({ length: STAR_COUNT }, () => ({
        x:       Math.random() * 100,
        y:       Math.random() * 100,
        size:    Math.random() * 2 + 0.6,
        opacity: Math.random() * 0.5 + 0.25,
        depth:   Math.random(),
      })),
    []
  );

  const particles = useMemo<ParticleEntry[]>(
    () =>
      Array.from({ length: PARTICLE_COUNT }, () => ({
        x:        Math.random() * 100,
        y:        Math.random() * 100,
        size:     Math.random() * 120 + 80,
        color:    Math.random() > 0.5 ? C.accent : C.accent2,
        depth:    Math.random() * 0.5 + 0.5,
        duration: Math.random() * 30 + 30,
        delay:    -(Math.random() * 30),
      })),
    []
  );

  // Starfield parallax via CSS custom properties — no re-renders
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!fieldRef.current) return;
      fieldRef.current.style.setProperty('--mx', ((e.clientX / window.innerWidth - 0.5) * 2).toFixed(3));
      fieldRef.current.style.setProperty('--my', ((e.clientY / window.innerHeight - 0.5) * 2).toFixed(3));
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive((entry.target as HTMLElement).dataset.section as SectionId);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );
    [aboutRef, skillsRef, resumeRef, projectsRef, expRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: SectionId) => {
    sectionRefs[id].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      style={{
        background: C.bg,
        color: C.text,
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Fixed starfield */}
      <div
        ref={fieldRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        {stars.map((s, i) => (
          <span
            key={`s${i}`}
            className="star"
            style={
              {
                position: 'absolute',
                left: `${s.x}%`,
                top:  `${s.y}%`,
                width:  `${s.size}px`,
                height: `${s.size}px`,
                borderRadius: '50%',
                background: '#fff',
                opacity: s.opacity,
                '--depth': s.depth,
              } as React.CSSProperties
            }
          />
        ))}
        {particles.map((p, i) => (
          <span
            key={`p${i}`}
            className="particle"
            style={
              {
                position: 'absolute',
                left: `${p.x}%`,
                top:  `${p.y}%`,
                width:  `${p.size}px`,
                height: `${p.size}px`,
                borderRadius: '50%',
                background: p.color,
                filter: 'blur(50px)',
                opacity: 0.12,
                '--depth': p.depth,
                animationDuration: `${p.duration}s`,
                animationDelay:    `${p.delay}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Foreground */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Nav active={active} onSelect={scrollTo} />
        <Hero sectionRef={aboutRef} onResumeClick={() => scrollTo('resume')} />
        <Skills     sectionRef={skillsRef} />
        <Resume     sectionRef={resumeRef} />
        <Projects   sectionRef={projectsRef} />
        <Experience sectionRef={expRef} />
        <Footer />
      </div>
    </div>
  );
}
