# Design System Changelog

All notable changes to the design system are recorded here.
Entries are generated automatically by the design-system-sync agent from Figma change detection.

---

## [v1.3.2] — 2026-03-26

### Changed
- **Figma**: Renamed internal CTA utility frames — separator updated from hyphen (U+002D) to en-dash (U+2013)
  - `_CTA - Get the full version` → `_CTA – Get the full version`
  - `_CTA - Untitled UI intro video` → `_CTA – Untitled UI intro video`
  - `_CTA - Get the full version of Untitled UI Icons` → `_CTA – Get the full version of Untitled UI Icons`

**Impact:** Figma-internal utility frames only (prefixed `_`). No exported component API, CSS, or Storybook changes.

---

## [v1.3.1] — 2026-03-28

### Changed
- **Tokens**: Gray palette (`--gray-25` through `--gray-900`) values synced to Figma Variables snapshot from 2026-03-26
- **Storybook**: `Colors.stories.jsx` updated to reflect new gray values and semantic color references

### Documentation
- Added `CLAUDE.md` with skill routing context for design system automation
- Added `.claude/skills/` directory with governance skill files:
  - `ds-token-governance` — token drift detection and semver classification
  - `ds-component-audit` — component library audit against canonical scope
  - `ds-pr-review` — PR classification and changelog authoring
  - `ds-governance-session` — full session log consolidation

---

## [v1.3.0] — 2026-03-18

### Initial release
- 18 canonical components: Accordion, Avatar, Badge, Breadcrumb, Button, Card, Checkbox, DataGrid, Dropdown, Input, Modal, Pagination, Radio, Tabs, Tag, Toast, Toggle, Tooltip
- Full Storybook coverage (React + Vite)
- Token file `src/tokens.css` with 13 color palettes, semantic aliases, typography, spacing, border radius, shadows
- Storybook addons: Chromatic, a11y, docs, vitest
