import React from 'react';
import '../tokens.css';

export default {
  title: 'Foundation/Spacing',
  parameters: { layout: 'fullscreen' },
};

const SPACING = [
  { token: '--space-1',  value: '4px',  raw: 4 },
  { token: '--space-2',  value: '8px',  raw: 8 },
  { token: '--space-3',  value: '12px', raw: 12 },
  { token: '--space-4',  value: '16px', raw: 16 },
  { token: '--space-5',  value: '20px', raw: 20 },
  { token: '--space-6',  value: '24px', raw: 24 },
  { token: '--space-8',  value: '32px', raw: 32 },
  { token: '--space-10', value: '40px', raw: 40 },
  { token: '--space-12', value: '48px', raw: 48 },
  { token: '--space-16', value: '64px', raw: 64 },
  { token: '--space-20', value: '80px', raw: 80 },
];

const RADIUS = [
  { token: '--radius-sm',   value: '4px' },
  { token: '--radius-md',   value: '8px' },
  { token: '--radius-lg',   value: '12px' },
  { token: '--radius-xl',   value: '16px' },
  { token: '--radius-2xl',  value: '20px' },
  { token: '--radius-full', value: '9999px' },
];

const wrap = { padding: '32px 40px', fontFamily: 'var(--font-sans)', background: '#fff', minHeight: '100vh' };
const h2 = { fontSize: 22, fontWeight: 700, color: 'var(--gray-900)', margin: '0 0 4px' };
const sub = { fontSize: 14, color: 'var(--gray-500)', margin: '0 0 32px' };

export const Scale = {
  render: () => (
    <div style={wrap}>
      <h2 style={h2}>Spacing Scale</h2>
      <p style={sub}>4pt base grid. All values are CSS custom properties on :root.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {SPACING.map(({ token, value, raw }) => (
          <div
            key={token}
            style={{
              display: 'grid',
              gridTemplateColumns: '140px 60px 1fr',
              alignItems: 'center',
              gap: 16,
              padding: '12px 0',
              borderBottom: '1px solid var(--gray-100)',
            }}
          >
            <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--gray-600)', fontWeight: 600 }}>{token}</code>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--gray-400)' }}>{value}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: raw,
                  height: 24,
                  background: 'var(--brand-400)',
                  borderRadius: 3,
                  flexShrink: 0,
                  transition: 'width 200ms',
                }}
              />
              <span style={{ fontSize: 11, color: 'var(--gray-300)', fontFamily: 'var(--font-mono)' }}>{raw}px</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const BorderRadius = {
  render: () => (
    <div style={wrap}>
      <h2 style={h2}>Border Radius</h2>
      <p style={sub}>Six radius tokens from sharp corners to fully rounded pills.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        {RADIUS.map(({ token, value }) => (
          <div key={token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 80,
                height: 80,
                background: 'var(--brand-100)',
                border: '2px solid var(--brand-300)',
                borderRadius: value,
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-600)', fontWeight: 600, display: 'block' }}>{token}</code>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-400)' }}>{value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
