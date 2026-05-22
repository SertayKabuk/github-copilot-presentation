---
description: "Use when refactoring, migrating APIs, or implementing feature changes in this project. Prefer breaking changes over backward compatibility and avoid legacy fallbacks or shims."
name: "No Legacy Compatibility"
applyTo: "**/*.{ts,tsx,js,jsx}"
---
# No Legacy Compatibility

- Hard rule: never add backward-compatibility layers in this project.
- Prefer clean replacements over compatibility layers.
- Do not add shims, aliases, deprecated wrappers, or dual code paths.
- Remove obsolete code in the same change when replacing behavior.
- Update all call sites, tests, and docs to the new behavior instead of supporting both old and new forms.
- Prefer explicit failures over silent fallback behavior.
