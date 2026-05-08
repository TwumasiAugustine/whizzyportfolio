---
applyTo: "src/**/*.{ts,tsx,css},index.html,public/**/*,.github/prompts/*.prompt.md"
description: "Portfolio quality guardrails for premium, non-generic frontend implementation, accessibility, SEO, and conversion"
---
# Portfolio Quality Guardrails

Use these rules when generating or editing portfolio code and content in this workspace.

## Design and Brand
- Prioritize distinctive, handcrafted composition over template-like symmetry.
- Avoid cookie-cutter section patterns, repetitive card grids, and generic hero structures.
- Maintain a clear visual narrative and purposeful hierarchy.
- Prefer strong editorial typography and deliberate spacing rhythm.

## Frontend Architecture
- Keep implementation frontend-only; do not add backend servers, databases, or backend auth.
- Use modular, reusable React + TypeScript components.
- Favor data-driven sections via local data files for projects, testimonials, services, and FAQs.
- Preserve maintainability with clear naming and low coupling.

## UX and Conversion
- Ensure each major section has a clear conversion purpose.
- Place high-intent CTAs strategically across the scroll journey.
- Include trust elements: proof, outcomes, social validation, and process clarity.
- Keep forms short and friction-aware; include clear success and error states.

## SEO and Discoverability
- Use semantic HTML landmarks and heading hierarchy.
- Ensure metadata completeness: title, description, Open Graph, and social sharing essentials.
- Include schema markup recommendations when appropriate.
- Keep content keyword-aware but natural and readable.

## Accessibility and Performance
- Meet accessibility basics: keyboard navigation, visible focus, labels, contrast, and reduced-motion support.
- Optimize assets: responsive images, lazy loading where suitable, and minimal layout shift.
- Keep animation meaningful; avoid motion noise that hurts readability or performance.

## Delivery Standard
- Explain key decisions briefly with UX/CRO rationale.
- Default to mobile-first responsiveness while maintaining premium desktop composition.
- Do not produce generic placeholder copy when business context is available.
