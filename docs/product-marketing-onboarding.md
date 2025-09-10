# Product Marketing & Onboarding Extensions Guide

This document outlines the additional components, patterns, layouts, and tokens recommended to evolve the Design System into a robust backbone for a product marketing and user onboarding site.

---

## 1. Page & Layout Shells

High‑level layout templates (define grid, breakpoints, chromes, and semantic regions).

| Layout | Purpose | Key Regions |
| ------ | ------- | ----------- |
| Marketing Home | Acquisition landing | Hero, value props, feature sections, testimonials, CTA, footer |
| Feature / Solution Detail | Deep dive | Hero (alt), problem/solution blocks, use cases, CTA |
| Pricing & Plan Comparison | Conversion | Plan matrix, billing toggle, FAQs, upgrade CTA |
| Case Study | Credibility | Hero quote, narrative sections, metrics, related stories |
| Blog / News Index | Content discovery | Filters, search, card grid, pagination |
| Blog / Article | Long form | Title block, byline/meta, in-page TOC, body, feedback, related |
| Docs / Guides Index | Self‑serve | Category nav, search, taxonomy filters |
| Docs Article | Structured learning | Side TOC, content body, version badge, feedback |
| Changelog / What’s New | Transparency | Chronological entries, filters (type / impact) |
| Legal / Policy | Compliance | Section nav, effective dates, revision history |
| Support / Help Center | Triage | Category tiles, search, contact options |
| Auth Shell (Sign in/Up) | Access | Panel, brand header, footer links |
| Onboarding Wizard | Guided setup | Step sidebar / horizontal stepper, main panel, help slot |
| Dashboard Shell | Post‑activation hub | Global app header, sidebar nav, breadcrumb, content area |
| Account & Billing Settings | Self‑management | Section nav, form area, sticky summary |
| 404 / 500 / Maintenance | Resilience | Message, actions, status context |

---

## 2. Marketing Content Blocks (Composable Sections)

Re-usable slice components to assemble marketing pages.

- Hero (variants: centered, split media, minimal)
- Value proposition trio / grid
- Feature grid (icon and heading and body)
- “How it works” step sequence
- Metrics / KPI highlight banner
- Testimonial / quote (single, carousel, wall)
- Customer logo strip / trust badges
- Case study teaser card
- Pricing table and plan comparison matrix
- FAQ accordion group
- Timeline / roadmap strip
- Resource card grid (filterable)
- CTA band (primary/secondary)
- Newsletter signup block
- Security & compliance badges section
- Partner / integration gallery (logo and category filter)
- Media embed (video / responsive iframe wrapper)
- Announcement / promo ribbon

---

## 3. Navigation & Discovery Patterns

- Global marketing nav (mega menu support)
- Footer (multi-column and micro legal bar)
- In‑page table of contents (auto-generated from headings)
- Breadcrumbs (marketing and app variants)
- Site search bar and results list (result type tagging)
- Tag/category chips (filter & active state)
- Side rail (affixed TOC / related / actions)

---

## 4. Onboarding & Activation

- Stepper / progress indicator (linear and non-linear)
- Onboarding checklist (track completion; accessible state changes)
- Guided tour / hotspots (beacon and popover)
- Contextual inline tips (dismissible; preference persistence)
- Empty states (taxonomy: informational, permission, action, error)
- Data import panel (drag/drop and progress and error list)
- Success / celebration state (confetti hook or subtle animation)
- Usage milestone nudge component

---

## 5. Account / Auth / Security

- Multi-step signup form (progressive disclosure)
- Password strength meter
- Email / code verification input (auto-focus advance)
- 2FA enrollment flow (QR and backup codes)
- Consent acknowledgment block (policies, versioning)
- Role / persona selection stage
- Avatar menu (profile, org switch, sign out)
- Usage quota indicator (progress bar and thresholds)
- Billing summary card & payment method form
- Plan upgrade / downgrade modal (diff highlights)
- Session timeout warning modal

---

## 6. Form & Data Capture Enhancements

- Form section header and description pattern
- Inline validation with summary error panel
- Save & resume draft banner
- Autosave status indicator (idle / saving / error)
- Input masks (org codes, phone, NHS specific)
- Multi-select with token chips
- Tag input (create and select with keyboard)
- Rich text editor (minimal and docs variant)
- Address finder (suggestions)
- File uploader (drag-drop, queue, statuses)
- Verification code 6-cell input
- Date range picker (relative preset support)

---

## 7. Communication & Feedback

- Global announcement banner (info / warning / critical variants)
- Toast notifications (stack manager)
- Inline status pill (new / beta / deprecated)
- Feedback widget (page helpful? / NPS micro form)
- Contact/support card (channels and SLA)
- “Was this helpful?” doc feedback controls
- Changelog entry component (version badge and tags)
- Release badge component (NEW / UPDATED) for nav items

---

## 8. Content & Media Utilities

- Responsive image / `<picture>` wrapper (srcset tokens)
- Illustration component (token-based palette)
- Code snippet block (copy button, language badge)
- Definition list styling (glossary)
- Comparison table (column highlight and mobile stacking)
- Expandable “Read more” truncation
- Structured data (JSON-LD injector helper)

---

## 9. Data Visualisation Onboarding Extensions

- Skeleton loaders (charts and tables)
- Sample data placeholder overlay
- Data freshness badge (timestamp and relative label)
- Export actions dropdown (CSV/PDF/image)
- Inline anomaly flag and tooltip pattern

---

## 10. System Patterns & Behaviours

- Progressive disclosure toggles (advanced options)
- Feature flag gating wrapper
- Empty state taxonomy documentation
- Upsell / upgrade prompt pattern (non-intrusive)
- Responsive breakpoint content swap helpers
- Dark mode / high contrast roadmap placeholder
- Performance budget guidelines (image, LCP targets)
- SEO metadata helper (title, meta, OG, canonical, schema)
- Analytics event naming conventions and hook
- Accessibility checklist integration (page preflight)

---

## 11. Token & Design Asset Extensions

| Domain | Additions |
| ------ | --------- |
| Spacing | Extended fine & macro scales for marketing grids |
| Elevation | Shadow tiers (card, overlay, floating nav) |
| Motion | Duration & easing tokens (enter/exit/subtle) |
| Gradients | Hero, CTA, overlay gradient tokens |
| Accent Palette | Illustrations / highlights (softer neutrals and brights) |
| Opacity / Blur | Backdrop surfaces (modals, tours) |
| Layout Widths | Content container, wide, full‑bleed max-width tokens |
| Z-Index Map | Layer roles (nav, dropdown, modal, toast, beacon) |
| Density | Compact / comfortable / spacious spacing mode tokens |

---

## 12. System / State Pages

- 404 Not Found
- 500 Error
- Maintenance / scheduled downtime
- Unsupported browser / region notice
- Consent revoked / access denied

---

## 13. Out-of-App & Email

- Transactional email template tokens (typography, colors, spacing)
- Verification / magic link template partials
- Digest / newsletter layout guidance

---

## 14. Accessibility & Internationalization

- Locale switcher component
- Language detection pattern
- Date/time/number formatting helpers
- Direction (LTR/RTL) preparedness guidelines
- Motion reduction (prefers-reduced-motion) behavior matrix

---

## 15. Instrumentation, Trust & Compliance

- Cookie / preference center (granular categories)
- Audit / activity log list
- Security incident banner (high priority styling)
- Version badge (API / library version) component
- SLA / status badge (operational / degraded / outage)

---

## 16. Prioritised Delivery Phases

**Phase 1 (Acquisition Core)**  
Hero, Feature Grid, Testimonials, Logo Strip, Pricing Table, CTA Band, FAQ, Footer, Global Nav, Announcement Banner.

**Phase 2 (Onboarding Core)**  
Stepper, Onboarding Checklist, Empty States, Password Strength, Verification Code, Toasts, Usage Quota Indicator.

**Phase 3 (Engagement & Content)**  
Blog/Article templates, In‑page TOC, Resource Card Grid, Tag Chips, Feedback Widget, Changelog, Code Snippet.

**Phase 4 (Account & Billing)**  
Billing Summary Card, Plan Upgrade Modal, Payment Method Form, 2FA Enrollment, Consent Block.

**Phase 5 (Data & Productivity)**  
Skeleton Loaders, Data Freshness Badge, Export Menu, File Uploader, Data Import Panel.

**Phase 6 (Advanced & Trust)**  
Feature Flag Wrapper, Cookie Center, Audit Log, Security Incident Banner, Internationalization components.

---

## 17. Implementation Guidelines

- **Section Components First**: Implement marketing slices as isolated section components with well-defined props (content, media alignment, theme variant).
- **Token-Driven Spacing & Color**: Avoid hardcoded pixel values; introduce marketing spacing / gradient / elevation tokens early.
- **Composable Over Monolithic**: Pricing table = core `<PricingTable>` and `<PlanCard>` and optional `<FeatureMatrix>`; each unit testable.
- **A11y baked-in**: TOC auto-generates from heading map; steppers announce progress; carousels provide reduced motion fallback.
- **Responsive Strategy**: Document content reflow rules (hero swaps illustration variant; pricing matrix stacks into accordion on narrow viewports).
- **Content Skeletons**: Provide `<SkeletonBlock>` primitives (rect, text line, circular) for consistent loading states.
- **Analytics Hook**: Single `useAnalytics()` hook orchestrating event dispatch with typed event catalog.
- **Feature Flags**: `FeatureGate` component receiving flag key and fallback UI ensures consistent gating semantics.

---

## 18. Mapping to Existing System (Initial Alignment)

| Needed | Potential Reuse / Baseline | Gap |
| ------ | -------------------------- | --- |
| Hero / Feature Sections | Grid, Heading, Typography tokens | Need composite layout components |
| FAQ | Existing Accordion (if available) | Style and semantics enhancements |
| Stepper | Progress (if exists) | New component |
| Pricing Table | Table tokens | Complex comparison styling, mobile behavior |
| Testimonials / Quotes | Blockquote styles | Carousel / rotation mechanics |
| Logo Strip | Flex / grid utilities | Auto scroll / wrap, contrast tokens |
| Onboarding Checklist | List and Checkbox | Progress logic & persistence |
| Toasts | Alert styles | Portal manager & stacking |
| File Uploader | Button, Progress, Icon | Drag/drop, file list states |
| Rich Text Editor | Typography | External integration and DS theming |

---

## 19. Status Tracking Template

Embed in backlog / project board:

```yaml
item: Pricing Table
status: proposed  # proposed | in-progress | beta | stable | deprecated
phase: 1
owner: TBD
notes: Mobile stacking pattern to finalise
```

---

## 20. Risks & Mitigations

| Risk | Impact | Mitigation |
| ---- | ------ | ---------- |
| Over-specified early | Rework cost | Phase delivery and usage feedback loops |
| Token sprawl | Inconsistency | Token naming taxonomy & review gate |
| Accessibility regressions | User exclusion | A11y checklist & axe CI pass gates |
| Fragmented analytics events | Poor insights | Central typed event registry |
| Bloated bundle (marketing-only code) | Performance | Code-split marketing routes & lazy load heavy blocks |

---

## 21. Next Immediate Actions

1. Approve Phase 1 scope & token additions (spacing, elevation, gradients).
2. Define prop contracts for: HeroSection, FeatureGrid, TestimonialBlock, PricingTable.
3. Create skeleton loaders and usage guidelines.
4. Establish analytics event schema baseline.
5. Introduce FeatureGate primitive (simple boolean flag) for future extensibility.

---

## 22. Glossary (Selective)

| Term | Meaning |
| ---- | ------- |
| Slice | Self-contained marketing content section |
| Slot | Named region within a layout shell |
| Gate | Conditional UI boundary controlled by feature flag |
| Empty State | UI shown when no data or first-run scenario |

---

## 23. Maintenance Strategy

- Quarterly audit: remove unused marketing tokens.
- Version badges for newly launched components (NEW for one release cycle).
- Deprecation policy: mark components as `deprecated` then remove after 2 minor versions.
- Add Storybook accessibility stories per interactive component.

---
*Document version: 0.1 (initial draft).*
