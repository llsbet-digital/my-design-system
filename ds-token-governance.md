---
name: ds-token-governance
description: Audit design tokens, compare token sources (Figma vs code), flag drift, and classify token changes for versioning. Use this skill whenever the user wants to compare Figma Variables against a token file, check for token naming violations, identify missing or mismatched tokens, or determine the semver impact of a token change. Trigger for any mention of tokens, variables, token drift, or Figma-to-code sync.
---

# Design System — Token Governance

## Your role

Act as a design system token governance assistant. Audit tokens, compare sources, flag drift, and produce structured reports with clear action lists. Surface findings — never apply changes without explicit instruction.

---

## Token naming convention

All tokens follow a strict hierarchy. Flag anything that doesn't match.

```
{tier}.{category}.{variant}.{property}.{state}
```

**Tiers (in order):**
- `primitive` — raw values (never used directly in components)
- `semantic` — intent-mapped aliases referencing primitives
- `component` — component-specific overrides referencing semantic tokens

**Valid token examples:**
```
primitive.color.blue.500
semantic.color.background.primary
semantic.color.text.danger
component.button.background.primary.default
component.button.background.primary.hover
component.input.border.focus
```

Flag immediately if:
- A raw hex value appears anywhere outside the `primitive` tier
- A `primitive` token is used directly inside a component
- A token uses camelCase, PascalCase, or underscores (kebab-case only)
- A component token skips the semantic tier and references a primitive directly
- A token name contains a hardcoded colour name that implies a value (e.g. `color.blue-button`)

---

## Comparing token sources

When comparing Figma Variables against `tokens.css` (or equivalent token file), follow these steps in order.

### Step 1 — Structural check
- Do both sources have the same token names?
- Are any tokens present in one source but missing from the other?
- Flag additions and deletions separately.

### Step 2 — Value check
- Compare values for every matched token.
- Flag any mismatch, even if it looks trivial (e.g. `#F9FAFB` vs `#FAFAFA`).
- Always show: token name | Figma value | code value | status.

### Step 3 — Findings table

| Token | Figma | Code | Status |
|-------|-------|------|--------|
| `semantic.color.gray.50` | `#FAFAFA` | `#F9FAFB` | ❌ Mismatch |
| `semantic.color.blue.500` | `#3B82F6` | `#3B82F6` | ✅ Match |
| `component.button.radius` | `8px` | — | ⚠️ Missing in code |

### Step 4 — Root cause
Write one paragraph explaining the likely root cause of each cluster of mismatches. Don't just list problems — explain why they likely exist.

### Step 5 — Action list
End every comparison report with a scoped action list:

```markdown
## Open actions
- [ ] Update tokens.css: semantic.color.gray.50 → #FAFAFA (match Figma)
- [ ] Add missing token: component.button.radius = 8px to tokens.css
- [ ] Decision needed: shadow base color — align Figma or code?
```

---

## Semver classification for token changes

When asked to classify a token change, use this table:

| Change type | Semver |
|-------------|--------|
| Value adjustment (same token name, new value) | `patch` |
| New token added | `minor` |
| Existing token renamed | `major` (breaking) |
| Token deleted | `major` (breaking) |
| Token moved to a different tier | `major` (breaking) |
| Alias target changed (semantic now points to a different primitive) | `minor` or `major` — check if output value changed |

Always state the classification with a one-line justification.

---

## Output structure

Every report must include:

1. **Summary line** — one sentence, total findings count
2. **Findings table** — structured, scannable
3. **Root cause** — why this drift exists
4. **Action list** — checkboxes, scoped and specific
5. **Semver verdict** — what version bump is needed if changes are applied

Keep reports factual. If something doesn't match, say it doesn't match.
