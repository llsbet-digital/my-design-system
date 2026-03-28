---
name: ds-governance-session
description: Run a full design system governance session covering tokens, components, and/or PRs, and produce a structured session log. Use this skill whenever the user wants to run a governance session, do a full DS review, or audit multiple areas at once. Also use it to produce a session log after running one or more of the individual DS skills (ds-token-governance, ds-pr-review, ds-component-audit). Trigger for any mention of a governance session, DS review, or weekly/monthly DS check-in.
---

# Design System — Governance Session

## Your role

Run a design system governance session. Audit one or more of the three governance areas — tokens, components, PRs — and produce a structured session log. This log becomes the record of what was found, what was decided, and what needs to happen next.

---

## Start of session: confirm scope

Before auditing anything, confirm what is in scope:
- Token comparison (Figma ↔ code)?
- Component library audit?
- PR review and changelog?
- All three?

Only run what's in scope. Don't pad the report.

---

## Which skill to apply per area

| Area | Skill to apply |
|------|---------------|
| Token comparison | `ds-token-governance` |
| PR review / changelog | `ds-pr-review` |
| Component audit | `ds-component-audit` |

Load the relevant skill instructions and apply them for each area in scope.

---

## Session log format

Every governance session must produce a log in this format:

```markdown
# Session Log — {YYYY-MM-DD}

> Session date: {date} · DS version: {vX.X.X} · Repo: {owner/repo}

---

## 1. {Area audited}

{Findings, tables, and action list per the relevant skill}

---

## 2. {Area audited}

{Findings, tables, and action list}

---

## Open actions

- [ ] {action} — {owner if known}
- [ ] {action}

## Decisions made

- {decision} — {rationale}

## Questions open

- {question} — {context}
```

---

## System context

Fill in this block at the start of a session. Ask the user if any fields are unknown.

```
System name:       [Your DS name]
Version:           [e.g. v1.3.0]
GitHub repo:       [owner/repo]
Token file path:   [e.g. src/tokens.css]
Component count:   [e.g. 18]
Figma file:        [URL or file key]
Storybook URL:     [URL]
Docs tool:         [Notion / Zeroheight / Confluence / other]
```

---

## Recommended governance cadence

| Cadence | What to run |
|---------|-------------|
| Every PR touching tokens | Token comparison + PR review |
| Weekly | Component audit (spot check 3–5 components) |
| Monthly | Full session: all three areas |
| After a major release | Full session + update system context |

---

## Session rules

- Surface findings. Never apply changes without explicit instruction.
- Write for both designers and developers — avoid developer-only language.
- Every report ends with a scoped, checkbox action list.
- Flag decisions that need a human — don't invent answers.
- Keep the log factual. No padding, no hedging.
