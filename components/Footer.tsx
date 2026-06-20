'use client';
import { Mail } from 'lucide-react';
import { C } from '@/lib/palette';
import { NAME, EMAIL, GITHUB_URL, LINKEDIN_URL } from '@/lib/data';

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.09.682-.218.682-.483 0-.237-.009-.866-.014-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.349-1.088.635-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10Z" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer
      className="max-w-5xl mx-auto px-6 py-12"
      style={{ borderTop: `1px solid ${C.border}` }}
    >
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="flex gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full"
            style={{ border: `1px solid ${C.border}`, color: C.text }}
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full"
            style={{ border: `1px solid ${C.border}`, color: C.text }}
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="p-2 rounded-full"
            style={{ border: `1px solid ${C.border}`, color: C.text }}
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
        <p className="mono-text text-xs" style={{ color: C.textMuted }}>
          © 2026 {NAME} · Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
