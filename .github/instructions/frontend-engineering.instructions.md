---
applyTo: "src/**/*.{ts,tsx,css},index.html,vite.config.ts,tsconfig*.json"
description: "Frontend architecture, folder structure, reusability, scalability, and engineering best practices for this portfolio"
---
# Frontend Engineering Standards

Use these rules for all implementation work in this repository.

## 1. Folder Structure and Module Boundaries

Target structure:
- `src/app`: app shell, providers, global config, routing bootstrap
- `src/pages`: route-level compositions (thin orchestration only)
- `src/sections`: homepage and marketing sections composed from reusable components
- `src/components`: shared UI primitives and cross-section reusable components
- `src/features`: feature modules with co-located UI, hooks, and logic
- `src/lib`: framework-agnostic utilities, formatters, validators, constants
- `src/hooks`: cross-feature reusable hooks
- `src/data`: static or semi-static typed content (projects, testimonials, services, faq)
- `src/types`: shared domain and view-model types
- `src/styles`: tokens, global layers, and utility classes
- `src/assets`: images, icons, and media grouped by feature when possible

Rules:
- Keep route files thin; move business logic to features/hooks/lib.
- Prefer feature co-location for private internals; export public API from index files.
- Avoid circular dependencies between features.
- Keep import paths stable and intention-revealing.

## 2. Reusability Patterns

- Build small composable components with explicit props contracts.
- Separate headless logic from presentational UI where complexity grows.
- Use composition over inheritance and avoid prop explosion.
- Prefer controlled components for forms and deterministic state updates.
- Co-locate section-specific variants while keeping base primitives generic.
- Promote repeated literals to typed constants or config objects.

## 3. Scalability Rules

- Model all content entities with TypeScript interfaces or types.
- Use typed data sources for projects/testimonials/services to enable future CMS swap.
- Keep side effects isolated in hooks or service helpers.
- Normalize transformation logic in `src/lib` to avoid duplicate mapping code.
- Design components for extension points (slots, render props, variant props) when needed.
- Keep files focused; split files that mix data, view, and orchestration responsibilities.

## 4. State and Data Flow

- Keep server-like state out of components when possible.
- Prefer local state for local interactions; lift state only when shared.
- Avoid deeply nested prop passing by introducing feature-level context only when justified.
- Derive view state from source state instead of storing duplicated state.
- Handle loading, empty, success, and error states explicitly.

## 5. Styling System

- Use design tokens for color, spacing, typography, radius, and motion.
- Centralize tokens in a shared style layer and reuse across sections.
- Keep utility usage consistent; avoid one-off arbitrary values unless justified.
- Build responsive behavior mobile-first with intentional breakpoint transitions.
- Preserve visual consistency with documented spacing rhythm and type scale.

## 6. Accessibility by Default

- Use semantic landmarks and correct heading hierarchy.
- Ensure full keyboard navigation and visible focus states.
- Label all controls and inputs clearly.
- Respect `prefers-reduced-motion` for all non-essential animations.
- Maintain accessible color contrast in all themes.

## 7. Performance Standards

- Use responsive images and modern formats where practical.
- Lazy-load below-the-fold media and non-critical sections.
- Avoid unnecessary re-renders via memoization only where measured benefit exists.
- Keep bundle size in check with route/section-level splitting when useful.
- Avoid layout shift by reserving media dimensions and stabilizing async UI.

## 8. SEO and Metadata Standards

- Keep one clear `h1` per page and semantic section structure.
- Maintain complete title, meta description, and Open Graph metadata.
- Prepare structured data blocks (Person, Service, FAQ, CreativeWork) when relevant.
- Keep copy readable and intent-aligned; avoid keyword stuffing.

## 9. Error Handling and Resilience

- Fail gracefully with user-friendly fallback states.
- Validate form input on the client with clear inline feedback.
- Provide integration fallbacks for third-party form and tracking services.
- Guard rendering paths against undefined or malformed content data.

## 10. Code Quality and Delivery

- Keep functions pure where possible and side effects explicit.
- Prefer descriptive naming over comments; comment only non-obvious decisions.
- Enforce lint-clean and type-safe changes before completion.
- Include brief rationale for major architectural or UX-impacting decisions.
- Do not introduce backend dependencies in this frontend-only portfolio.
