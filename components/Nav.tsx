'use client';
import { motion } from 'framer-motion';
import { C } from '@/lib/palette';
import { NAV_ITEMS, type SectionId } from '@/lib/data';

interface NavProps {
  active: SectionId;
  onSelect: (id: SectionId) => void;
}

export default function Nav({ active, onSelect }: NavProps) {
  return (
    <header
      style={{
        position: 'fixed',
        top: 20,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 50,
        pointerEvents: 'none',
      }}
    >
      <nav
        className="mono-text"
        style={{
          pointerEvents: 'auto',
          display: 'flex',
          gap: 2,
          background: 'rgba(255,255,255,0.04)',
          border: `1px solid ${C.border}`,
          borderRadius: 9999,
          padding: 6,
          backdropFilter: 'blur(16px)',
        }}
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            style={{
              position: 'relative',
              padding: '8px 14px',
              borderRadius: 9999,
              fontSize: 12,
              border: 'none',
              cursor: 'pointer',
              background: 'transparent',
              color: active === item.id ? C.text : C.textMuted,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              transition: 'color 0.2s ease',
            }}
          >
            {active === item.id && (
              <motion.span
                layoutId="nav-pill"
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 9999,
                  background: C.surfaceAlt,
                }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
              />
            )}
            <span style={{ position: 'relative', zIndex: 1 }}>{item.label}</span>
          </button>
        ))}
      </nav>
    </header>
  );
}
