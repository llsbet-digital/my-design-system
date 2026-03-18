import React from 'react';
import '../tokens.css';

export default {
  title: 'Foundation/Elevation',
  parameters: { layout: 'fullscreen' },
};

const SHADOWS = [
  { token: '--shadow-xs',  value: '0px 1px 2px rgba(16, 24, 40, 0.05)',                                                              usage: 'Inputs, tight containers' },
  { token: '--shadow-sm',  value: '0px 1px 3px rgba(16, 24, 40, 0.10), 0px 1px 2px rgba(16, 24, 40, 0.06)',                         usage: 'Cards, dropdowns' },
  { token: '--shadow-md',  value: '0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',               usage: 'Modals, popovers' },
  { token: '--shadow-lg',  value: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',             usage: 'Floating panels' },
  { token: '--shadow-xl',  value: '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',             usage: 'Large overlays' },
  { token: '--shadow-2xl', value: '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',                                                      usage: 'Full-screen dialogs' },
  { token: '--shadow-3xl', value: '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',                                                      usage: 'Max elevation' },
];

const FOCUS = [
  { token: '--focus-ring-brand', value: '0 0 0 4px var(--brand-100)', color: 'var(--brand-300)', usage: 'Default focus state' },
  { token: '--focus-ring-error', value: '0 0 0 4px var(--error-100)', color: 'var(--error-300)', usage: 'Error field focus' },
];

const wrap = { padding: '32px 40px', fontFamily: 'var(--font-sans)', background: 'var(--gray-50)', minHeight: '100vh' };
const h2 = { fontSize: 22, fontWeight: 700, color: 'var(--gray-900)', margin: '0 0 4px' };
const sub = { fontSize: 14, color: 'var(--gray-500)', margin: '0 0 32px' };

export const Shadows = {
  render: () => (
    <div style={wrap}>
      <h2 style={h2}>Shadows</h2>
      <p style={sub}>Seven elevation levels. All use rgba(16, 24, 40, …) for a warm neutral shadow.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 32 }}>
        {SHADOWS.map(({ token, usage }) => (
          <div key={token} style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
            <div
              style={{
                width: 160,
                height: 100,
                background: '#fff',
                borderRadius: 12,
                boxShadow: `var(${token})`,
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--gray-700)', fontWeight: 600, display: 'block', marginBottom: 2 }}>{token}</code>
              <span style={{ fontSize: 11, color: 'var(--gray-400)' }}>{usage}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const FocusRings = {
  render: () => (
    <div style={{ ...wrap, background: '#fff' }}>
      <h2 style={h2}>Focus Rings</h2>
      <p style={sub}>Used on interactive elements for keyboard and accessibility focus states.</p>
      <div style={{ display: 'flex', gap: 48 }}>
        {FOCUS.map(({ token, color, usage }) => (
          <div key={token} style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
            <div
              style={{
                width: 160,
                height: 44,
                background: '#fff',
                borderRadius: 8,
                border: `1px solid ${color}`,
                boxShadow: `var(${token})`,
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--gray-700)', fontWeight: 600, display: 'block', marginBottom: 2 }}>{token}</code>
              <span style={{ fontSize: 11, color: 'var(--gray-400)' }}>{usage}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
