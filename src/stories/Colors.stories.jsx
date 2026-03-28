import React from 'react';
import '../tokens.css';

export default {
  title: 'Foundation/Colors',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'All color tokens from the design system. Click any swatch to copy the CSS variable.' } },
  },
};

const copy = (text) => navigator.clipboard?.writeText(text);

const Swatch = ({ name, value, textColor = '#fff' }) => (
  <div
    title={`Click to copy ${name}`}
    onClick={() => copy(`var(${name})`)}
    style={{
      backgroundColor: value,
      borderRadius: 8,
      padding: '10px 12px',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      minHeight: 64,
      border: '1px solid rgba(0,0,0,0.06)',
      transition: 'transform 100ms',
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
  >
    <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, color: textColor, opacity: 0.9, lineHeight: 1.3 }}>
      {name}
    </span>
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: textColor, opacity: 0.7 }}>
      {value}
    </span>
  </div>
);

const Palette = ({ title, steps }) => (
  <div style={{ marginBottom: 32 }}>
    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, color: 'var(--gray-700)', marginBottom: 12, textTransform: 'capitalize' }}>
      {title}
    </h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: 8 }}>
      {steps.map(({ step, value, dark }) => (
        <Swatch
          key={step}
          name={`--${title}-${step}`}
          value={value}
          textColor={dark ? '#fff' : '#101828'}
        />
      ))}
    </div>
  </div>
);

const SemanticRow = ({ name, cssVar, value }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: '1px solid var(--gray-100)' }}>
    <div style={{ width: 40, height: 40, background: value, borderRadius: 8, border: '1px solid rgba(0,0,0,0.08)', flexShrink: 0 }} />
    <div style={{ flex: 1 }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--gray-900)', fontWeight: 600 }}>{name}</div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-400)' }}>{cssVar}</div>
    </div>
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-500)' }}>{value}</div>
  </div>
);

const PALETTES = [
  { title: 'gray', steps: [
    { step: 25, value: '#FCFCFD' }, { step: 50, value: '#FAFAFA' },
    { step: 100, value: '#F2F4F7' }, { step: 200, value: '#E9EAEB' },
    { step: 300, value: '#D5D7DA' }, { step: 400, value: '#A4A7AE' },
    { step: 500, value: '#717680', dark: true }, { step: 600, value: '#535862', dark: true },
    { step: 700, value: '#414651', dark: true }, { step: 800, value: '#1D2939', dark: true },
    { step: 900, value: '#181D27', dark: true },
  ]},
  { title: 'brand', steps: [
    { step: 25, value: '#FCFAFF' }, { step: 50, value: '#F9F5FF' },
    { step: 100, value: '#F4EBFF' }, { step: 200, value: '#E9D7FE' },
    { step: 300, value: '#D6BBFB' }, { step: 400, value: '#B692F6' },
    { step: 500, value: '#9E77ED', dark: true }, { step: 600, value: '#7F56D9', dark: true },
    { step: 700, value: '#6941C6', dark: true }, { step: 800, value: '#53389E', dark: true },
    { step: 900, value: '#42307D', dark: true },
  ]},
  { title: 'error', steps: [
    { step: 25, value: '#FFFBFA' }, { step: 50, value: '#FEF3F2' },
    { step: 100, value: '#FEE4E2' }, { step: 200, value: '#FECDCA' },
    { step: 300, value: '#FDA29B' }, { step: 400, value: '#F97066' },
    { step: 500, value: '#F04438', dark: true }, { step: 600, value: '#D92D20', dark: true },
    { step: 700, value: '#B42318', dark: true }, { step: 800, value: '#912018', dark: true },
    { step: 900, value: '#7A271A', dark: true },
  ]},
  { title: 'warning', steps: [
    { step: 25, value: '#FFFCF5' }, { step: 50, value: '#FFFAEB' },
    { step: 100, value: '#FEF0C7' }, { step: 200, value: '#FEDF89' },
    { step: 300, value: '#FEC84B' }, { step: 400, value: '#FDB022' },
    { step: 500, value: '#F79009' }, { step: 600, value: '#DC6803', dark: true },
    { step: 700, value: '#B54708', dark: true }, { step: 800, value: '#93370D', dark: true },
    { step: 900, value: '#7A2E0E', dark: true },
  ]},
  { title: 'success', steps: [
    { step: 25, value: '#F6FEF9' }, { step: 50, value: '#ECFDF3' },
    { step: 100, value: '#D1FADF' }, { step: 200, value: '#A6F4C5' },
    { step: 300, value: '#6CE9A6' }, { step: 400, value: '#32D583' },
    { step: 500, value: '#12B76A', dark: true }, { step: 600, value: '#039855', dark: true },
    { step: 700, value: '#027A48', dark: true }, { step: 800, value: '#05603A', dark: true },
    { step: 900, value: '#054F31', dark: true },
  ]},
  { title: 'blue-gray', steps: [
    { step: 25, value: '#FCFCFD' }, { step: 50, value: '#F8F9FC' },
    { step: 100, value: '#EAECF5' }, { step: 200, value: '#D5D9EB' },
    { step: 300, value: '#B3B8DB' }, { step: 400, value: '#717BBC' },
    { step: 500, value: '#4E5BA6', dark: true }, { step: 600, value: '#3E4784', dark: true },
    { step: 700, value: '#363F72', dark: true }, { step: 800, value: '#293056', dark: true },
    { step: 900, value: '#101323', dark: true },
  ]},
  { title: 'blue-light', steps: [
    { step: 25, value: '#F5FBFF' }, { step: 50, value: '#F0F9FF' },
    { step: 100, value: '#E0F2FE' }, { step: 200, value: '#B9E6FE' },
    { step: 300, value: '#7CD4FD' }, { step: 400, value: '#36BFFA' },
    { step: 500, value: '#0BA5EC', dark: true }, { step: 600, value: '#0086C9', dark: true },
    { step: 700, value: '#026AA2', dark: true }, { step: 800, value: '#065986', dark: true },
    { step: 900, value: '#0B4A6F', dark: true },
  ]},
  { title: 'blue', steps: [
    { step: 25, value: '#F5FAFF' }, { step: 50, value: '#EFF8FF' },
    { step: 100, value: '#D1E9FF' }, { step: 200, value: '#B2DDFF' },
    { step: 300, value: '#84CAFF' }, { step: 400, value: '#53B1FD' },
    { step: 500, value: '#2E90FA', dark: true }, { step: 600, value: '#1570EF', dark: true },
    { step: 700, value: '#175CD3', dark: true }, { step: 800, value: '#1849A9', dark: true },
    { step: 900, value: '#194185', dark: true },
  ]},
  { title: 'indigo', steps: [
    { step: 25, value: '#F5F8FF' }, { step: 50, value: '#EEF4FF' },
    { step: 100, value: '#E0EAFF' }, { step: 200, value: '#C7D7FE' },
    { step: 300, value: '#A4BCFD' }, { step: 400, value: '#8098F9' },
    { step: 500, value: '#6172F3', dark: true }, { step: 600, value: '#444CE7', dark: true },
    { step: 700, value: '#3538CD', dark: true }, { step: 800, value: '#2D31A6', dark: true },
    { step: 900, value: '#2D3282', dark: true },
  ]},
  { title: 'purple', steps: [
    { step: 25, value: '#FAFAFF' }, { step: 50, value: '#F4F3FF' },
    { step: 100, value: '#EBE9FE' }, { step: 200, value: '#D9D6FE' },
    { step: 300, value: '#BDB4FE' }, { step: 400, value: '#9B8AFB' },
    { step: 500, value: '#7A5AF8', dark: true }, { step: 600, value: '#6938EF', dark: true },
    { step: 700, value: '#5925DC', dark: true }, { step: 800, value: '#4A1FB8', dark: true },
    { step: 900, value: '#3E1C96', dark: true },
  ]},
  { title: 'pink', steps: [
    { step: 25, value: '#FEF6FB' }, { step: 50, value: '#FDF2FA' },
    { step: 100, value: '#FCE7F6' }, { step: 200, value: '#FCCEEE' },
    { step: 300, value: '#FAA7E0' }, { step: 400, value: '#F670C7' },
    { step: 500, value: '#EE46BC', dark: true }, { step: 600, value: '#DD2590', dark: true },
    { step: 700, value: '#C11574', dark: true }, { step: 800, value: '#9E165F', dark: true },
    { step: 900, value: '#851651', dark: true },
  ]},
  { title: 'rose', steps: [
    { step: 25, value: '#FFF5F6' }, { step: 50, value: '#FFF1F3' },
    { step: 100, value: '#FFE4E8' }, { step: 200, value: '#FECDD6' },
    { step: 300, value: '#FEA3B4' }, { step: 400, value: '#FD6F8E' },
    { step: 500, value: '#F63D68', dark: true }, { step: 600, value: '#E31B54', dark: true },
    { step: 700, value: '#C01048', dark: true }, { step: 800, value: '#A11043', dark: true },
    { step: 900, value: '#89123E', dark: true },
  ]},
  { title: 'orange', steps: [
    { step: 25, value: '#FEFAF5' }, { step: 50, value: '#FEF6EE' },
    { step: 100, value: '#FDEAD7' }, { step: 200, value: '#F9DBAF' },
    { step: 300, value: '#F7B27A' }, { step: 400, value: '#F38744' },
    { step: 500, value: '#EF6820', dark: true }, { step: 600, value: '#E04F16', dark: true },
    { step: 700, value: '#B93815', dark: true }, { step: 800, value: '#932F19', dark: true },
    { step: 900, value: '#772917', dark: true },
  ]},
];

const SEMANTIC = [
  { name: '--color-primary',          cssVar: 'var(--brand-600)',  value: '#7F56D9' },
  { name: '--color-primary-hover',    cssVar: 'var(--brand-700)',  value: '#6941C6' },
  { name: '--color-primary-light',    cssVar: 'var(--brand-50)',   value: '#F9F5FF' },
  { name: '--color-destructive',      cssVar: 'var(--error-600)',  value: '#D92D20' },
  { name: '--color-fg-primary',       cssVar: 'var(--gray-900)',   value: '#181D27' },
  { name: '--color-fg-secondary',     cssVar: 'var(--gray-700)',   value: '#414651' },
  { name: '--color-fg-tertiary',      cssVar: 'var(--gray-500)',   value: '#717680' },
  { name: '--color-fg-disabled',      cssVar: 'var(--gray-400)',   value: '#A4A7AE' },
  { name: '--color-bg-primary',       cssVar: '#ffffff',           value: '#ffffff' },
  { name: '--color-bg-secondary',     cssVar: 'var(--gray-50)',    value: '#FAFAFA' },
  { name: '--color-border-primary',   cssVar: 'var(--gray-300)',   value: '#D5D7DA' },
  { name: '--color-border-secondary', cssVar: 'var(--gray-200)',   value: '#E9EAEB' },
];

const wrap = { padding: '32px 40px', fontFamily: 'var(--font-sans)', background: '#fff', minHeight: '100vh' };
const h2 = { fontSize: 22, fontWeight: 700, color: 'var(--gray-900)', margin: '0 0 4px' };
const sub = { fontSize: 14, color: 'var(--gray-500)', margin: '0 0 24px' };

export const Palettes = {
  render: () => (
    <div style={wrap}>
      <h2 style={h2}>Color Palettes</h2>
      <p style={sub}>11 steps per palette (25–900). Click a swatch to copy the CSS variable.</p>
      {PALETTES.map((p) => <Palette key={p.title} {...p} />)}
    </div>
  ),
};

export const Semantic = {
  render: () => (
    <div style={{ ...wrap, maxWidth: 640 }}>
      <h2 style={h2}>Semantic Tokens</h2>
      <p style={sub}>Role-based aliases — use these in components instead of raw palette values.</p>
      {SEMANTIC.map((s) => <SemanticRow key={s.name} {...s} />)}
    </div>
  ),
};
