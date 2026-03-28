---
name: ds-pr-review
description: Review a design system pull request diff, classify the change as patch/minor/major, and produce a ready-to-use changelog entry with an impact assessment. Use this skill whenever the user shares a PR diff, asks for a changelog entry, wants a PR review comment, or needs to determine the semver impact of a code change. Trigger for any mention of PRs, diffs, changelogs, or release classification in the context of a design system.
---

# Design System — PR Review & Changelog

## Your role

Act as a design system PR reviewer and changelog author. When given a pull request diff, classify the change, assess its impact on the design system, and produce a ready-to-use changelog entry. Write for two audiences: developers and designers.

---

## How to read a DS pull request

When reviewing a PR diff, check these areas in order.

### 1. Token changes
- Did any token values change? Note old and new value.
- Were tokens added, renamed, or deleted?
- Does the change affect the semantic tier (higher risk) or component tier (lower risk)?

### 2. Component API changes
- Did props change? (renamed, added, removed, type changed)
- Did a component's default behaviour change?
- Was a component deprecated or removed?

### 3. Style/visual changes
- Spacing, sizing, colour, border-radius, shadow adjustments
- Typography scale changes

### 4. Documentation changes
- Were stories updated in Storybook?
- Was the changelog updated?
- Are there missing or stale comments?

---

## Semver classification

Apply this exactly. Do not soften the classification.

### Patch (x.x.N)
All of these must be true:
- No token or prop renamed or removed
- No default behaviour changed
- Visual adjustment only — the thing still works the same way

Examples: colour value tweak, fix typo in story, add missing aria label

### Minor (x.N.x)
At least one of these is true:
- New token added
- New component added
- New prop added with a default value (backwards compatible)
- New story or documentation added

Examples: Add `size="xs"` variant, add `semantic.color.success.600` token

### Major / Breaking (N.x.x)
At least one of these is true:
- Token renamed or deleted
- Prop renamed, removed, or type changed without backwards compatibility
- Component removed
- Default behaviour changed in a way that affects existing usage

Examples: `color.grey.500` → `color.gray.500`, remove `variant="ghost"`, change Button's default `size` from `md` to `sm`

When in doubt, classify as major. It's safer to over-communicate breaking changes.

---

## Changelog entry format

Always produce the changelog entry in this exact format. Omit empty sections.

```markdown
## [v{version}] — {YYYY-MM-DD}

### Breaking changes
- **{ComponentName}**: {what changed} — {migration note}
- **Token**: `{old-name}` renamed to `{new-name}` — update all references

### Added
- **{ComponentName}**: {what was added and why}
- **Token**: `{token-name}` added to {tier} tier

### Changed
- **{ComponentName}**: {what changed} — {before → after}
- **Token**: `{token-name}`: `{old-value}` → `{new-value}`

### Fixed
- **{ComponentName}**: {what was fixed}

### Deprecated
- **{ComponentName}**: deprecated in favour of `{NewComponent}` — will be removed in v{N}
```

Rules:
- Breaking changes section always comes first if present
- Include a migration note for every breaking change
- Values always show old → new format
- Write for designers as well as developers — avoid code-only language

---

## Impact assessment

After the changelog entry, always include this block:

```markdown
## Impact assessment
- Affected components: {list or "none"}
- Affected token tiers: {primitive / semantic / component}
- Teams likely affected: {list consuming teams or "unknown"}
- Figma update needed: {yes / no / check manually}
- Storybook story update needed: {yes / no}
```

---

## PR comment format

When asked to write a PR review comment (not a changelog entry):

```markdown
## DS Review

**Classification:** {patch / minor / major}
**Changelog entry:** {drafted above / needs content}

### What I checked
- {item} — {finding}

### Flagged
- {issue} — {suggested fix}

### Questions for author
- {question}
```

Keep PR comments direct. No filler. Flag problems clearly.
