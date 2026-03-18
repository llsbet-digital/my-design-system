import React from 'react';
import '../tokens.css';

export default {
  title: 'Foundation/Typography',
  parameters: { layout: 'fullscreen' },
};

const wrap = { padding: '32px 40px', fontFamily: 'var(--font-sans)', background: '#fff', minHeight: '100vh' };
const h2 = { fontSize: 22, fontWeight: 700, color: 'var(--gray-900)', margin: '0 0 4px' };
const sub = { fontSize: 14, color: 'var(--gray-500)', margin: '0 0 32px' };
const divider = { height: 1, background: 'var(--gray-100)', margin: '0 0 32px' };

const TYPE_SCALE = [
  { token: '--text-xs',   size: '12px', lh: '18px', label: 'Text XS' },
  { token: '--text-sm',   size: '14px', lh: '20px', label: 'Text SM' },
  { token: '--text-md',   size: '16px', lh: '24px', label: 'Text MD' },
  { token: '--text-lg',   size: '18px', lh: '28px', label: 'Text LG' },
  { token: '--text-xl',   size: '20px', lh: '30px', label: 'Text XL' },
  { token: '--text-2xl',  size: '24px', lh: '32px', label: 'Display XS' },
  { token: '--text-3xl',  size: '30px', lh: '38px', label: 'Display SM' },
  { token: '--text-4xl',  size: '36px', lh: '44px', label: 'Display MD' },
  { token: '--text-5xl',  size: '48px', lh: '60px', label: 'Display LG' },
  { token: '--text-6xl',  size: '60px', lh: '72px', label: 'Display XL' },
];

const WEIGHTS = [
  { token: '--font-regular',  value: 400, label: 'Regular' },
  { token: '--font-medium',   value: 500, label: 'Medium' },
  { token: '--font-semibold', value: 600, label: 'Semibold' },
  { token: '--font-bold',     value: 700, label: 'Bold' },
];

export const TypeScale = {
  render: () => (
    <div style={wrap}>
      <h2 style={h2}>Type Scale</h2>
      <p style={sub}>10 sizes from 12px (xs) to 60px (6xl). Token → CSS custom property.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {TYPE_SCALE.map(({ token, size, lh, label }) => (
          <div
            key={token}
            style={{
              display: 'grid',
              gridTemplateColumns: '160px 1fr',
              alignItems: 'center',
              gap: 24,
              padding: '16px 0',
              borderBottom: '1px solid var(--gray-100)',
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-400)', fontWeight: 600 }}>{token}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-300)' }}>{size} / {lh}</div>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: size,
                lineHeight: lh,
                fontWeight: 400,
                color: 'var(--gray-900)',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              {label} — The quick brown fox
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const FontWeights = {
  render: () => (
    <div style={wrap}>
      <h2 style={h2}>Font Weights</h2>
      <p style={sub}>Four weights using Inter. Applied via CSS custom properties.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {WEIGHTS.map(({ token, value, label }) => (
          <div
            key={token}
            style={{
              display: 'grid',
              gridTemplateColumns: '160px 1fr',
              alignItems: 'center',
              gap: 24,
              padding: '20px 0',
              borderBottom: '1px solid var(--gray-100)',
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-400)', fontWeight: 600 }}>{token}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-300)' }}>{value}</div>
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 24, fontWeight: value, color: 'var(--gray-900)' }}>
              {label} — The quick brown fox jumps over
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const FontFamilies = {
  render: () => (
    <div style={{ ...wrap, maxWidth: 720 }}>
      <h2 style={h2}>Font Families</h2>
      <p style={sub}>Two families available — sans for UI, mono for code.</p>

      <div style={{ marginBottom: 40 }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'baseline', marginBottom: 8 }}>
          <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, background: 'var(--gray-100)', padding: '2px 8px', borderRadius: 4, color: 'var(--gray-700)' }}>--font-sans</code>
          <span style={{ fontSize: 12, color: 'var(--gray-400)' }}>Inter, system-ui, -apple-system, sans-serif</span>
        </div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 18, color: 'var(--gray-900)', lineHeight: 1.6 }}>
          ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
          abcdefghijklmnopqrstuvwxyz<br />
          0123456789 !@#$%^&*()
        </div>
      </div>

      <div style={divider} />

      <div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'baseline', marginBottom: 8 }}>
          <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, background: 'var(--gray-100)', padding: '2px 8px', borderRadius: 4, color: 'var(--gray-700)' }}>--font-mono</code>
          <span style={{ fontSize: 12, color: 'var(--gray-400)' }}>ui-monospace, Cascadia Code, Consolas</span>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 16, color: 'var(--gray-900)', lineHeight: 1.8 }}>
          const token = '--color-primary';<br />
          background: var(--brand-600);<br />
          font-size: var(--text-md);
        </div>
      </div>
    </div>
  ),
};

export const TextStyles = {
  name: 'Text Styles (Live)',
  render: () => (
    <div style={{ ...wrap, maxWidth: 720 }}>
      <h2 style={h2}>Text Styles</h2>
      <p style={sub}>Common pairings of size + weight used throughout the system.</p>

      {[
        { label: 'Display LG / Bold',   fs: 'var(--text-5xl)',  fw: 700, desc: 'Hero headings' },
        { label: 'Display SM / Semibold', fs: 'var(--text-3xl)', fw: 600, desc: 'Page titles' },
        { label: 'Text XL / Semibold',  fs: 'var(--text-xl)',  fw: 600, desc: 'Section headings' },
        { label: 'Text LG / Medium',    fs: 'var(--text-lg)',  fw: 500, desc: 'Subheadings' },
        { label: 'Text MD / Regular',   fs: 'var(--text-md)',  fw: 400, desc: 'Body text' },
        { label: 'Text SM / Regular',   fs: 'var(--text-sm)',  fw: 400, desc: 'Supporting text, labels' },
        { label: 'Text XS / Medium',    fs: 'var(--text-xs)',  fw: 500, desc: 'Captions, badges' },
      ].map(({ label, fs, fw, desc }) => (
        <div key={label} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 16, padding: '16px 0', borderBottom: '1px solid var(--gray-100)', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--gray-500)' }}>{label}</div>
            <div style={{ fontSize: 11, color: 'var(--gray-300)', fontFamily: 'var(--font-mono)' }}>{desc}</div>
          </div>
          <div style={{ fontSize: fs, fontWeight: fw, color: 'var(--gray-900)', lineHeight: 1.3 }}>
            The quick brown fox
          </div>
        </div>
      ))}
    </div>
  ),
};
