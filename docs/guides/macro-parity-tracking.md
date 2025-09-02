# Macro Parity Tracking

Authoritative living list of components and their multi‑render parity status (React SSR ⇄ Nunjucks macro ⇄ static HTML baseline).

Status Legend:

- ✅ Complete (schema, macro generated/copied, parity tests passing)
- 🛠️ In Progress (schema or macro under development, tests pending)
- ⏭️ Planned (queued in upcoming batch)
- ⏳ Deferred (intentionally postponed; rationale noted)
- 🚫 React‑only (no macro planned – complexity / dynamic nature)


## Batch 0 (Done)

✅ Button  
✅ Tag  
✅ Label  
✅ Hint  
✅ Heading  
✅ ErrorMessage  
✅ Input (incl. range variant)  
✅ Textarea  
✅ Select  
✅ Radios (with conditional reveal)  
✅ CharacterCount (initial SSR state parity)  
✅ Checkboxes (conditional reveal; escaped conditional content)  
✅ Fieldset  

## Batch 1 (Next Focus)

✅ ErrorSummary – Aggregated form errors block; high a11y value.
✅ DateInput – Composite day/month/year inputs inside Fieldset pattern.
✅ Panel – Generic content container.
✅ InsetText – Simple styled container.
✅ Details – Disclosure component (initial SSR parity; behaviour layer to follow).

## Batch 2 (Navigation & Structural)

⏭️ Pagination  
⏭️ Breadcrumb  
⏭️ BackLink  
⏭️ ActionLink  
⏭️ SkipLink  

## Batch 3 (Lists / Complex Groupings)

⏭️ SummaryList  
⏭️ TaskList  
⏭️ Tabs (will need ARIA roles + behaviour parity)  
⏭️ WarningCallout  
⏭️ CareCard  

## Batch 4 (Presentational / Content)

⏭️ Card  
⏭️ Hero  
⏭️ List  
⏭️ DoDontList  

## Batch 5 (Layouts / Utilities – evaluate macro value)

⏭️ PageTemplate  
⏭️ TransactionalPageTemplate  
⏭️ MainWrapper  
⏭️ WidthContainer  
⏭️ SpacingUtilities / WidthUtilities (may document usage only)  

## Deferred (Reassess After Core Complete)

⏳ Panel (if any advanced variant emerges beyond Batch 1 quick win)  
⏳ InsetText (if advanced options introduced)  

## React‑Only (Initial Phase)

🚫 DataVisualisation (charts & metrics – dynamic rendering, data joins)  
🚫 SortableDataTable (complex ARIA + stateful sorting & focus management)  
🚫 ResponsiveDataGrid  
🚫 SlotMatrix  
🚫 GanttChart  
🚫 ProductRoadmap  
🚫 DashboardSummaryGrid  
🚫 NavigationSplitView  

## Tracking Rules

1. Add schema first; run generator with `--generate` to create/update macro.
2. Add parity test in `tests/macroParity/<component>.macroParity.test.tsx` (test‑first preferred).
3. Only mark component ✅ once tests pass and macro is auto‑generated (or intentional manual macro copied) and committed.
4. If a component is intentionally React‑only, record rationale here to avoid repeated churn.
5. When moving a component between statuses, update this file in the same commit as the code/tests change.

## Metrics Snapshot

- Total React components (excluding internal utilities): (see `src/components/` directory)
- Covered so far: 18
- Coverage (% of targeted macro-capable components): will update after Batch 1 (add simple script later).

## Next Steps Automation Ideas

- Script to generate a coverage table (schemas vs React exports) for CI.
- Parity diff reporter suggesting macro adjustments on failure.
- Optional `allowHtml` flag for conditional reveal items (Checkboxes/Radios) to selectively mark safe content.

---

Update this document as batches progress; keep `CHANGELOG.md` high‑level and reference this file for detail.
