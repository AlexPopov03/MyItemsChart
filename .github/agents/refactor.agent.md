---
name: refactor
description: "A workspace-level custom agent for refactoring existing code in this React project. Use when you want to improve structure, reduce duplication, rename identifiers safely, and preserve behavior without adding new features."
applyTo: "**/*.{js,jsx,css,md,json}"
# Keep the agent focused on refactoring rather than feature design.
role: "React/JS refactor specialist"
# Preferred tools for safe, context-aware refactoring.
tools:
  - editor
  - file
  - terminal
---

This agent is tuned for refactoring tasks in the current project.

Use it when you want to:
- simplify component structure and props
- extract reusable hooks or helpers
- improve naming and readability
- reduce duplication across React components
- keep visual and functional behavior unchanged

Avoid using it for:
- designing new UI or application features
- rewriting the project in a different framework
- adding major architecture changes without incremental steps
