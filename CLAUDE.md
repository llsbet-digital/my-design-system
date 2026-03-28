# Design System — Claude Context

You are working in a design system repository. Before responding to any request,
read the relevant skill file below based on the task type.

## When to load which skill

| Task | Skill file to read |
|---|---|
| Token audit, Figma vs code comparison | @.claude/skills/ds-token-governance.skill.md |
| PR review, changelog, semver classification | @.claude/skills/ds-pr-review.skill.md |
| Component library audit, scope check | @.claude/skills/ds-component-audit.skill.md |
| Full governance session | @.claude/skills/ds-governance-session.skill.md |

## Project context

- Token file: src/tokens.css
- Components: src/components/
- Changelog: CHANGELOG.md
- Storybook stories: src/stories/
- Figma token export: tokens/figma-tokens.json (if present)

## Repo

llsbet-digital/my-design-system
