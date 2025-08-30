# Learning Management System (LMS) Extensions Guide

This guide enumerates the additional components, design patterns, transactional workflows, tokens, and templates recommended to extend the Design System to cover core LMS user journeys (learner, instructor, administrator, content author, assessor).

---

## 1. Core Page & Layout Templates

High‑level shells defining structural regions (nav, progress, side panels, contextual tools).

| Template | Audience | Purpose | Key Regions |
| -------- | -------- | ------- | ----------- |
| Learning Dashboard | Learner | Personal learning hub | Header, progress summary, recommended modules, deadlines, announcements |
| Course Catalog | Learner | Discover & search courses | Filters, search bar, category tree, result cards, pagination |
| Course Overview | Learner | Course landing / enroll | Hero, description, objectives, outline, instructors, prerequisites, enroll CTA |
| Module / Lesson Player | Learner | Primary content consumption | Content viewport, transcript / notes panel, progress bar, navigation rail, actions (bookmark, speed) |
| Assessment (Quiz/Test) | Learner | Formative/summative assessment | Question area, timer, progress indicator, flag for review list, submission bar |
| Practical Task / Assignment | Learner | Submission workflow | Brief, resources, submission form/status, rubric preview |
| Submission Review | Instructor | Evaluate learner work | Submission artifact viewer, rubric panel, comments thread, grade entry, version history |
| Discussion / Forum Thread | Learner/Instructor | Asynchronous collaboration | Thread list, post composer, sorting/filtering, moderation tools |
| Live Session / Webinar | Learner/Instructor | Synchronous session | Stream container (external), chat, Q&A, attendance status, resources |
| Learning Path / Program Overview | Learner | Structured pathway view | Sequence roadmap, gating indicators, completion % |
| Certificate / Achievement Page | Learner | Credential display | Credential details, share/download actions |
| Analytics Dashboard | Admin/Instructor | Performance & engagement insights | KPI tiles, charts, filters, cohort selector |
| Content Authoring Workspace | Author | Create/manage learning objects | Object tree, editor panel, metadata sidebar, validation alerts |
| Question Bank Manager | Author | Item repository | Filters, bulk select actions, difficulty taxonomy, tagging |
| User & Enrollment Admin | Admin | Manage cohorts & enrolments | User table, batch actions, import/export, status filters |
| Compliance / Mandatory Training Tracker | Admin | Compliance status | Aggregated completion, overdue lists, exception export |
| Notifications Center | All | Centralised messages | Tabs (system, course, forum), filters, read/unread state |
| Settings (Learner Profile) | Learner | Preferences | Profile info, notification prefs, accessibility options |

---
## 2. Learning Content Components

Atomic & composite building blocks for lesson material.

- ContentBlock (text, media, mixed)
- MediaPlayer (audio/video) with speed, captions, transcript toggle
- InteractiveEmbed (scorm/xapi/lti wrapper, sandboxed iframe)
- SlideDeckViewer (pagination, keyboard nav)
- CodeExercisePanel (editor + run/test area) *if technical training*
- TranscriptPanel (searchable, highlight sync)
- ReadingProgressBar (scroll-based for articles)
- GlossaryTerm (popover definition, inline)
- LearningObjectiveList (with achieved indicators)
- ResourceDownloadList (file type icons, size, accessibility labels)
- EstimatedTimeBadge
- AccessibilityNotice (e.g., ‘Video contains flashing content’)

---
## 3. Navigation & Progress Patterns

- CourseOutlineTree (expand/collapse, completion ticks, locked states)
- LessonPager (prev / next lesson CTA w/ status)
- ProgressSummaryWidget (overall %, modules complete X/Y)
- Breadcrumb (Program > Course > Module > Lesson)
- SectionJumpMenu / in-page TOC for long-form lessons
- LearningPathRoadmap (visual track with milestones)
- RecentlyViewedList
- Bookmark / Favorites system (toggle + list)

---
## 4. Enrollment & Access Control

- EnrollButton (states: enroll, pending approval, waitlisted, full)
- EnrollmentStatusBanner (e.g., ‘Pending manager approval’)
- SeatAvailabilityIndicator
- CohortSelector (role-based visibility)
- AccessGate (prerequisites unmet messaging + CTA)
- LicenseAllocationMeter (org-wide usage)

---
## 5. Assessment & Evaluation Components

- Question types: MultipleChoice, MultipleSelect, TrueFalse, ShortAnswer, LongAnswer, Matching, Ordering, Hotspot (image), FillInBlank, CodeChallenge
- QuestionNavigationPanel (list with answered/flagged badges)
- AttemptTimer (accessible live region updates)
- FlagForReviewToggle
- AnswerFeedbackPanel (correct/incorrect rationale)
- SubmissionSummary (score, time spent, breakdown)
- Rubric (criteria rows, performance levels, weightings, inline rating capture)
- InlineGrader (navigate submissions + quick grade entry)
- PlagiarismStatusBadge
- RetakeRulesNotice

---
## 6. Practical Task / Assignment Workflow Patterns

Stages: Brief → Work → Submit → Review → Feedback → Revision → Final grade.

Components / Patterns:

- AssignmentBrief (metadata: due date, weighting, allowed file types)
- FileSubmissionWidget (drag/drop, version list, virus scan status, progress)
- TextSubmissionEditor (rich text, word count, autosave)
- SubmissionStatusPanel (states: draft, submitted, returned, graded, late)
- PeerReviewAllocation (assignment of peers + anonymity notice)
- FeedbackThread (annotated comments, resolved status)
- RubricInlineViewer
- LateSubmissionBadge & GracePeriodNotice

---
## 7. Engagement & Interaction

- DiscussionThread (nested replies, collapse, moderation)
- ReactionBar (like/helpful flags with accessible counts)
- QandAAccordion (question with accepted answer highlighting)
- Poll / MicroSurvey component
- LivePresenceAvatars (count + overflow indicator)
- NoteTakingPanel (learner private notes + export)
- In-lesson InlineQuiz (low-stakes knowledge checks)
- Gamification: PointsBadge, StreakIndicator, LevelProgressBar, AchievementUnlockToast
- ShareCertificateModal (social share metadata)

---
## 8. Communication & Notifications
- AnnouncementBanner (course / global scope)
- NotificationToast (types: reminder, deadline, forum reply)
- NotificationInboxList (filter by type, bulk mark read)
- MessagingPanel (instructor ↔ learner direct messages)
- DigestEmailTemplate tokens (summary of activity)
- ReminderScheduleConfigurator (choose reminder intervals)
- EscalationNotice (mandatory training nearing deadline)

---
## 9. Analytics & Reporting
- KPI Tiles (avg completion time, active learners, pass rate)
- TrendChart (enrolment/engagement over time)
- FunnelChart (enrolled → started → completed)
- Heatmap (activity by day/time)
- CohortComparisonTable
- DrillDownPanel (select data point → details)
- ExportMenu (CSV, XLSX, PDF)
- DataFreshnessBadge
- AtRiskLearnerList (prediction tags)

---
## 10. Personalization & Recommendations
- RecommendedCoursesCarousel (based on skill gap)
- SkillGapMatrix (skills vs proficiency, highlight deficits)
- LearningGoalSetter (set goal hours/week, track)
- AdaptiveNextLessonCard (rule-based or ML-driven)
- ResumeLearningCTA (jump to last activity)

---
## 11. Accessibility & Inclusive Design Enhancements
- AdjustableFontSizeControl (persisted preference)
- MediaAccessibilityPanel (captions, transcript, audio description toggle)
- KeyboardShortcutPalette (list + enable/disable)
- ReducedMotionModeNotice
- DyslexiaFriendlyTheme toggle (token theme variant)
- HighContrastTheme tokens
- AutoTranscriptGeneratorStatus (processing indicator)

---
## 12. Internationalization & Localization Helpers
- LocaleSwitcher (course content vs UI language)
- DateFormatSelector
- TimeZoneSelector (for due dates synchronisation)
- Multi-language LessonVersionSwitcher
- Right-to-left (RTL) layout support tokens

---
## 13. Search & Discovery
- GlobalSearch (unified: courses, lessons, discussions, resources)
- FacetFilters (difficulty, duration, modality, tags, language)
- SavedSearches & Alerts
- SuggestionChips (recent searches)
- SearchResultCard variants (course, lesson, post, user)

---
## 14. Administrative & Authoring Tools
- CourseBuilder (drag reorder modules, inline edit)
- ModuleEditor (metadata + schedule)
- LessonEditor (rich text / media embed / assessments insertion toolbar)
- QuestionEditor (type-specific forms, validation, preview)
- BulkImportWizard (CSV mapping + validation errors table)
- ContentVersionHistory (diff view)
- PermissionMatrixEditor (roles × actions grid)
- EnrollmentBulkActionBar (assign, revoke, waitlist)
- AuditLogTable (filterable events)
- ScheduledReleaseConfigurator (timed content unlocking)

---
## 15. Compliance & Credentialing
- MandatoryTrainingBadge (applies to course cards)
- ComplianceProgressDashboard (org-level summarisation)
- ExpiryReminderBanner (credential nearing expiry)
- RecertificationWorkflow (auto-enroll & notify)
- CertificateRenderer (templated PDF/HTML with tokens)
- DigitalBadge (OpenBadge metadata) component

---
## 16. Data & State Management Patterns
- Optimistic submission (autosave drafts offline → sync)
- Progressive enhancement for media (poster → lazy load player)
- Prefetch next lesson strategy (improved continuity)
- Event pipeline: uniform analytics event schema (e.g., `lesson.viewed`, `quiz.submitted`, `assignment.feedback_added`)
- Feature flag gating for experimental question types

---
## 17. Tokens & Theming Additions
| Domain | Need | Examples |
| ------ | ---- | -------- |
| Progress | Visual feedback | progress.track.bg, progress.complete.fg |
| Gamification | Motivation accents | gamification.gold, gamification.xp.bar |
| Assessment | Status colors | assessment.correct, assessment.incorrect, assessment.partial |
| Accessibility | Alternate themes | theme.dyslexia.background, theme.high-contrast.text |
| Media | Overlays & controls | media.overlay.gradient.start, media.control.active |
| Deadline | Temporal states | deadline.soon, deadline.overdue |
| Skill | Proficiency levels | skill.level.beginner, skill.level.expert |

---
## 18. Transactional Workflows (End-to-End)
Outlined as state machines to validate component coverage.

### 18.1 Enrollment Flow
States: anonymous → authenticated → eligibility check → enrollment pending (optional approval) → enrolled → in-progress.
Components: EnrollButton, EnrollmentStatusBanner, AccessGate, NotificationToast.

### 18.2 Lesson Consumption Flow
States: not started → in-progress (time tracked) → paused → completed.
Components: LessonPlayer, ProgressSummaryWidget, BookmarkButton, NoteTakingPanel.

### 18.3 Assessment Flow
States: not started → attempting (N questions answered) → submitted → graded → review (feedback visible) → retake eligible / locked.
Components: Question types, QuestionNavigationPanel, AttemptTimer, SubmissionSummary, AnswerFeedbackPanel.

### 18.4 Assignment Lifecycle
States: draft → submitted → under review → feedback issued → resubmitted (optional) → graded → archived.
Components: FileSubmissionWidget, SubmissionStatusPanel, FeedbackThread, Rubric, NotificationInboxList.

### 18.5 Certification Flow
States: criteria incomplete → criteria met pending issuance → issued → expiring → expired → recertification in progress.
Components: AchievementUnlockToast, CertificateRenderer, ExpiryReminderBanner, RecertificationWorkflow.

### 18.6 Peer Review Flow
States: allocation pending → review in progress → submitted → consolidated feedback → revisions submitted → final grade.
Components: PeerReviewAllocation, FeedbackThread, RubricInlineViewer.

---
## 19. Analytics & Telemetry Event Catalog (Sample Subset)
| Event | Context | Critical Properties |
| ----- | ------- | ------------------ |
| lesson.viewed | lesson player | lessonId, moduleId, durationExpected |
| lesson.completed | lesson player | lessonId, completionTime, timeSpent |
| quiz.started | assessment | quizId, attemptNumber |
| quiz.submitted | assessment | quizId, scoreRaw, scorePercent, duration |
| assignment.submitted | assignment | assignmentId, onTime (bool), fileCount |
| assignment.graded | grading | assignmentId, grade, rubricComplete (bool) |
| discussion.post_created | forum | threadId, postId, length |
| certificate.issued | credentialing | certificateId, courseId |
| enrollment.created | enrollment | courseId, source (catalog / bulk / auto) |
| feature.flag_exposed | experiment | flagKey, variant |

---
## 20. Prioritised Phases
**Phase 1 (MVP Learner)**: Course Catalog, Course Overview, Lesson Player (basic), Progress widgets, Enrollment controls, Basic quiz (MCQ), Notifications (toast), DiscussionThread (minimal), Accessibility baseline.

**Phase 2 (Assessment & Assignments)**: Full question type set (incremental), Attempt timer, Submission summary, Assignment workflow core, Rubrics.

**Phase 3 (Authoring & Admin)**: CourseBuilder, QuestionBank, Enrollment admin, Bulk import, Analytics baseline.

**Phase 4 (Engagement & Personalization)**: Recommendations, Learning path roadmap, Gamification badges, Peer review.

**Phase 5 (Compliance & Credentialing)**: Mandatory training dashboard, Certificate renderer, Recertification, Audit log enhancements.

**Phase 6 (Advanced & Optimization)**: Adaptive next lesson, Skill gap matrix, Predictive at-risk flags, Enhanced telemetry reporting.

---
## 21. Risks & Mitigations
| Risk | Impact | Mitigation |
| ---- | ------ | ---------- |
| Scope creep on question types | Delays core launch | Phase gating & prioritisation | 
| Media performance (video heavy) | Poor UX | Lazy load, adaptive bitrate, prefetch manifest |
| Accessibility regressions | Exclusion | Automated audits + manual testing scripts |
| Fragmented analytics naming | Low insight | Central schema & typed event helpers |
| Authoring complexity | Steep learning curve | Progressive disclosure; inline validation |
| Gamification misuse | Superficial engagement | Align badges with meaningful outcomes |

---
## 22. Immediate Next Actions
1. Approve Phase 1 scope & token additions (progress, assessment, media controls).
2. Define API contracts for LessonPlayer, Question components, CourseOutlineTree.
3. Draft analytics event schema & TypeScript enums.
4. Establish accessibility acceptance criteria for player & assessments.
5. Prototype CourseOverview + LessonPlayer integration with progress tracking.

---
## 23. Glossary (Selective)
| Term | Definition |
| ---- | ---------- |
| Learning Object (LO) | Reusable unit (lesson, assessment, asset) |
| Module | Grouping of lessons/assessments within a course |
| Cohort | Group of learners enrolled with shared schedule |
| Rubric | Structured evaluation criteria set |
| Attempt | A single user’s execution of an assessment |
| Credential | Issued evidence (certificate/badge) of completion |

---
## 24. Maintenance Strategy
- Quarterly review: retire unused question types / tokens.
- Deprecation flow: mark experimental → beta → stable → deprecated.
- Analytics drift check: compare emitted schema vs registry.
- Accessibility re-audit before each minor release.
- Version badges (NEW) for components one release cycle.

---
*Document version: 0.1 (initial draft).*
