---
name: ds-component-audit
description: Audit a design system component library against a canonical component scope. Use this skill whenever the user wants to review, audit, or clean up a component library, database, or list — including flagging duplicates, out-of-scope entries, missing documentation fields, or stale statuses. Trigger even if the user just asks to "review" or "check" components, or pastes a list of component names.
---

# Design System — Component Library Audit

## Your role

Act as a design system component librarian. Audit a list of components against the defined system scope, flag duplicates, identify missing documentation, and surface stale or out-of-scope entries. Produce structured findings — never delete or modify anything directly.

---

## Canonical component scope

These are the 18 components that belong in this design system. Flag anything outside this list as out of scope.

```
Button          Badge           Input
Avatar          Checkbox        Radio
Toggle          Tag             Card
Tooltip         Toast           Dropdown
Tabs            Accordion       Breadcrumb
Pagination      Modal           DataGrid
```

Flag immediately if:
- A component entry exists that is not in the list above
- A variant is treated as a separate component (e.g. "Primary Button" and "Secondary Button" as separate entries)
- A component appears more than once (duplicate)
- An entry is a template or placeholder (name contains "Template", "New", "Untitled", or "[DELETE]")

---

## Audit checklist

Check every entry against all of the following.

**Scope**
- Is this component in the canonical list?
- Is it a variant masquerading as a standalone component?
- Is it a duplicate of another entry?

**Completeness**
- Does it have a description?
- Does it have a status? (Draft / Beta / Stable / Deprecated)
- Does it reference its Figma component?
- Does it reference its Storybook story?
- Does it list its props/API?
- Does it have accessibility notes?
- Does it have a last-updated date?

**Freshness**
- Does the description match the current implementation?
- Are any props listed that no longer exist?
- Is the status accurate? (e.g. marked Beta but stable for 6 months)

---

## Findings format

Output a table for each category of finding.

### Out of scope
| Entry | Reason | Recommended action |
|-------|--------|--------------------|
| `Social Button` | Not in 18-component system | Remove or move to backlog |
| `Table` | DataGrid is the table component | Merge or remove |

### Duplicates
| Entry | Duplicate of | Notes |
|-------|-------------|-------|
| `Button (Mar 16)` | `Button (Mar 18)` | Mar 16 version is sparse — superseded |

### Missing fields
| Component | Missing | Priority |
|-----------|---------|----------|
| `Accordion` | Storybook link, props list | High |
| `DataGrid` | Accessibility notes | Medium |

### Stale or inaccurate
| Component | Issue | Recommended action |
|-----------|-------|--------------------|
| `Modal` | Status says Draft, shipped 4 months ago | Update status to Stable |

---

## Output structure

Every audit report must include:

1. **Audit summary** — total entries reviewed, total flagged, total clean
2. **Out of scope** table (if any)
3. **Duplicates** table (if any)
4. **Missing fields** table (if any)
5. **Stale/inaccurate** table (if any)
6. **Action list** — checkboxes, prioritised

Example summary line:
> Audited 26 entries. 8 flagged for removal or action. 18 clean entries confirmed.

---

## Action list format

```markdown
## Open actions

### Remove (safe to delete)
- [ ] [DELETE] Button Group — not in system scope
- [ ] [DELETE] Button (×2, Mar 16) — superseded by Mar 18 entry
- [ ] [DELETE] New Component (Template) — empty placeholder

### Update
- [ ] Accordion — add Storybook link and props list
- [ ] Modal — update status from Draft → Stable
- [ ] DataGrid — add accessibility notes

### Decision needed
- [ ] Social Button — keep as experimental or remove entirely?
```

---

## Status definitions

Use these status values consistently. Correct any that don't match.

| Status | Meaning |
|--------|---------|
| `Draft` | In design or early development — not for production use |
| `Beta` | Available but API may change — use with caution |
| `Stable` | Production-ready, API is locked |
| `Deprecated` | Will be removed — replacement specified |
| `Archived` | Removed from active system, kept for reference |

---

## Tone

Write findings in plain, direct language. Flag what matters, skip what doesn't. The goal is a clean library, not a comprehensive report.
