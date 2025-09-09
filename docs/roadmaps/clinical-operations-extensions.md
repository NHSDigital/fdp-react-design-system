# Clinical Operations (Waiting Lists, Outpatient Booking & Clinic Resources) Extensions Guide

This guide enumerates the additional components, patterns, workflows, tokens, events, and templates recommended to extend the Design System for NHS hospital trust operational use‑cases: managing patient waiting lists, booking & rebooking outpatient appointments, and administering clinic rooms/resources.

---

## 1. Scope & Target Roles

| Role | Primary Goals |
| ---- | ------------- |
| Booking Clerk / Scheduler | Offer, confirm, amend appointments; resolve conflicts |
| RTT / Waiting List Validator | Maintain accurate pathways, validate entries, apply pauses/resets |
| Outpatient Manager | Balance capacity vs demand, monitor KPIs, reduce backlog |
| Service / Specialty Lead | Oversee specialty waiting times & risk distribution |
| Clinician | View clinic lists, review referrals, flag priorities, add notes |
| Operations / Site Manager | Allocate rooms, equipment, staffing, resolve clashes |
| Patient Communications | Run campaigns (validation drives, reminders) |
| Data Quality / Governance | Audit trail, compliance, accuracy, RTT integrity |

---

## 2. Core Page & Layout Templates

| Template | Purpose | Key Regions |
| -------- | ------- | ----------- |
| Waiting List Dashboard | Backlog overview & prioritisation | KPI tiles, filters, list table, risk heatmap |
| Referral Review Board | Triage & prioritisation of new referrals | Queue lanes (by status), detail drawer |
| Appointment Booking Screen | Find & allocate an appointment slot | Patient summary, slot finder, availability matrix, conflict panel |
| Partial Booking Offer Wizard | Offer choices to patient (2-week response) | Stepper, contact attempt log, offer list |
| Rebooking / Cancellation Workspace | Manage bulk cancellations & reassign | Impact summary, affected list, slot suggestions, batch actions |
| DNA (Did Not Attend) Management View | Resolve DNAs & apply next actions | DNA queue, reason capture, pathway impact panel |
| Validation Drive Console | Bulk validate waiting list entries | Validation cohort table, action sidebar, status counters |
| Clinic Session Template Editor | Define recurring clinic sessions | Calendar, session form, resource constraints, capacity rules |
| Capacity Planning Dashboard | Forecast & adjust capacity | Demand trend charts, session utilization, what-if controls |
| Room & Resource Allocation Board | Allocate rooms/equipment | Timeline lanes (rooms), drag & drop sessions, conflict badges |
| Multi-Appointment Coordination Screen | Bundle linked appointments (e.g. pre-op) | Dependency graph, joint slot finder, confirmation summary |
| Communication Campaign Builder | Bulk notifications (validation / reminders) | Audience filters, template picker, schedule panel, preview |
| Operational Handover / Huddle Board | Daily operational snapshot | Today’s clinics, escalations, cancellations, risk flags |
| Audit & Event Log Explorer | Governance & traceability | Filter panel, timeline, diff/metadata drawer |
| KPI / RTT Compliance Dashboard | Track RTT clocks & breaches | RTT risk buckets, clock timers, trajectory charts |

---

## 3. Core Domain Objects & Metadata

| Object | Key Attributes |
| ------ | -------------- |
| Patient | NHS number, demographics, consent flags, safeguarding, communication needs, accessibility needs |
| Referral | Source, specialty, priority, triage status, pathway start date (RTT clock), clinical notes |
| Waiting List Entry | Referral link, priority group, clock state, validation status, pauses (reason, dates) |
| Appointment | Patient, clinic session, room, status (booked/cancelled/DNA), arrival status, outcome |
| Clinic Session | Date/time, specialty, consultant, template capacity, overbooking allowance, room, staff roster |
| Slot | Start/end, capacity unit, booking state, overbook flag, constraints (equipment) |
| Room | Type, location, capacity, equipment profile, infection control status |
| Resource (Equipment/Staff) | Availability schedule, requirements, tags |
| Communication Template | Channel, content, variables, version, approval state |
| Validation Record | Entry checked by, method (call/SMS), result, timestamp |
| Audit Event | Actor, object type/id, action, timestamp, diff payload |

---

## 4. Component Inventory

### 4.1 Patient & Referral Components

- PatientSummaryCard
- PatientFlagChips (safeguarding, infection control, reasonable adjustments)
- AccessibilityNeedsPanel
- CommunicationPreferenceBadge
- ReferralCard (priority, specialty, triage state)
- RTTClockIndicator (target pathway days, elapsed, remaining, breach risk color)
- PathwayStageTracker (referral → triage → waiting → booked → attended → outcome)
- ClinicalNotesSnippet (expandable preview)
- RiskScoreBadge (algorithmic or rule-based)
- DuplicatePatientAlertBanner / MergePatientRecordsDialog

### 4.2 Waiting List & Prioritisation

- WaitingListTable (virtualised, sticky columns, inline edit)
- PriorityBadge (Urgent, 2WW, Routine, Surveillance)
- ValidationStatusTag (validated, due soon, overdue)
- BulkSelectionToolbar (actions: validate, pause, reprioritise, remove)
- PauseReasonModal (with RTT clock impact summary)
- ValidationChecklistDrawer
- EquityDistributionChart (priority mix vs targets)
- BacklogAgingHistogram

### 4.3 Scheduling & Slot Discovery

- SlotSearchFilters (date range, site, consultant, modality, room type)
- SlotMatrix (grid of sessions × time bands with availability counts)
- CapacityHeatmap (color-coded fill %)
- OverbookingIndicator (tooltip: policy, current count)
- SlotDetailPopover (constraints, capacity text, remaining)
- SuggestedSlotsList (ranked suggestions scored by rules)
- MultiSlotSelector (for linked appointments)
- SlotHoldTimer (temporary reservation countdown)
- ConflictResolutionPanel (listing clashes & actions)
- LinkedAppointmentBundleCard

### 4.4 Clinic Session & Capacity Management

- SessionTemplateCard (recurrence summary)
- SessionCalendar (week & list views)
- SessionCapacityEditor (planned vs actual vs utilised)
- SessionOverbookRuleEditor
- SessionCancellationDialog (impact forecast)
- AdditionalCapacityWizard (add ad-hoc sessions)
- CapacityScenarioComparisonTable
- UtilisationTrendChart

### 4.5 Rooms & Resources

- RoomAvailabilityTimeline (rooms as swimlanes)
- RoomAttributeChips (wheelchair access, negative pressure)
- RoomConflictBadge (overlap, cleaning window violation)
- EquipmentRequirementList
- EquipmentBookingPanel
- SterilizationStatusBadge
- CleaningTurnaroundTimer

### 4.6 Risk, Safety & Flags

- InfectionControlBadge
- SafeguardingAlertBanner
- AllergyFlagChip
- ProcedureComplexityBadge
- EscalationAlertToast (capacity crisis, breach risk)
- BreachRiskMeter (RTT / waiting time threshold proximity)

### 4.7 Communication & Notifications

- CommunicationTemplatePicker
- ChannelSelector (SMS / Letter / Email)
- MergeFieldTokenList (dynamic variables)
- PatientContactAttemptLog (call attempts, outcomes)
- BulkSendProgressTracker
- DeliveryStatusBadge (sent, failed, queued)
- ReminderScheduleConfigurator (pre-appointment sequence)

### 4.8 Workflow & Wizards

- PartialBookingWizard (steps: patient confirm → choice offer → capture response)
- BulkRebookingWizard (cancellation set → slot selection → allocation rules → confirm)
- DNAResolutionPanel (reason capture, reschedule policy rules)
- ValidationDriveWizard (sample selection → contact attempts → outcomes logging)
- MultiAppointmentWizard (define dependencies → search → allocate → confirm)
- RoomConflictResolutionWizard (select alternative, adjust, notify)

### 4.9 Data Quality & Audit

- AuditEventLogTable
- ChangeDiffViewer
- DataQualityIssueBadge (missing RTT clock, missing priority)
- DataQualityQueuePanel
- ExportRequestStatusList

### 4.10 Analytics & Reporting

- KPITrendTiles (median wait, 92nd percentile, backlog size, breach forecast)
- WaitTimeDistributionChart
- SpecialtyComparisonBarChart
- SessionUtilisationBarStack
- DNAReasonParetoChart
- CapacityDemandOverlayChart
- RTTBreachForecastGraph
- OperationalAlertFeed

---

## 5. Cross-Cutting Design Patterns

| Pattern | Description | Notes |
| ------- | ----------- | ----- |
| High-Density Data Tables | Condensed row height + responsive column priority | Keyboard nav, accessible focus outlines |
| Progressive Filtering | Filters applied incrementally with recalc summary | Show counts for each filter chip |
| Inline Validation & Impact Preview | Show RTT & priority impacts before commit | Use diff-style preview panel |
| Conflict Resolution Dialogues | Standard layout: issue list → recommended actions → apply | Reusable for room, slot, resource conflicts |
| Batch Operations with Undo | Bulk actions enqueue with timed undo | Server event queue feedback |
| Timeline & Swimlane Views | Visual sessions/rooms/equipment occupancy | Scroll + sticky current time indicator |
| State Badges Set | Standard visual semantics for statuses & risks | Align with token color scale |
| Wizard Stepper Consistency | Uniform step structure; summary at end | Use Step pattern across all wizards |
| Optimistic Updates | Immediate UI feedback for booking edits | Rollback on error surfaced in toast |
| Privacy & Sensitive Flag Gating | Mask sensitive data until role validated | ARIA live notice on reveal |

---

## 6. Transactional Workflows (State Machines)

### 6.1 Referral → Waiting List → Appointment

States: referral_received → triaged → wait_listed → validated_cycle (loop) → slot_search → slot_held → booked → attended → outcome_recorded.
Key Actions: triage_decision, validate_entry, apply_pause, release_pause, hold_slot, confirm_booking, cancel_booking.

### 6.2 Waiting List Validation Cycle

States: unvalidated → due_for_validation → validation_in_progress → validated_ok / removal_recommended / paused.
Transitions triggered by scheduled batch or manual selection.

### 6.3 Partial Booking (Choice Offer)

States: offer_prepared → contact_attempt (loop) → awaiting_patient_choice → choice_received → booked / expired.
Timers for response window; audit all attempts.

### 6.4 Appointment Rebooking After Cancellation

States: cancelled → rebooking_pending → slot_search → slot_selected → booked_new / unresolved.
Automations for priority rebalancing & cascade notifications.

### 6.5 DNA (Did Not Attend) Handling

States: dna_detected → reason_capture → policy_evaluation → discharge / rebook_offer / escalate.
Incorporates policy rules (e.g. 2xDNA discharge).

### 6.6 Clinic Session Template Lifecycle

States: template_draft → active_recurrence → modified_pending_effective_date → retired.
Versioning controls; future sessions regenerate with new parameters.

### 6.7 Room Conflict Resolution

States: conflict_detected → resolution_in_progress → resolved (reassigned / adjusted / cancelled) → communicated.
Conflict types (double-book, cleaning_overlap, equipment_mismatch).

### 6.8 Resource (Equipment) Booking

States: request_raised → availability_check → reserved → released / expired.
Expiration on unused holds.

### 6.9 Validation Drive Campaign

States: cohort_identified → communications_sent → responses_processing → entries_validated → report_finalised.
KPIs: response rate, invalid removal count, backlog delta.

---

## 7. Token & Semantic Additions

| Domain | Token Group | Examples |
| ------ | ----------- | -------- |
| Priority | priority.* | priority.urgent, priority.two_week_wait, priority.routine |
| RTT | rtt.clock.* | rtt.clock.safe, rtt.clock.warning, rtt.clock.breach |
| Risk Flags | risk.* | risk.infection, risk.safeguarding, risk.allergy |
| Session Capacity | session.capacity.* | session.capacity.low, session.capacity.full |
| Overbooking | overbook.* | overbook.allowed, overbook.limit_exceeded |
| Validation | validation.status.* | validation.status.due, validation.status.overdue |
| DNA | dna.reason.* | dna.reason.transport, dna.reason.communication |
| Communication | comm.channel.* | comm.channel.sms, comm.channel.letter |
| Conflict | conflict.type.* | conflict.type.room, conflict.type.equipment |

---

## 8. Event & Telemetry Catalogue (Sample)

| Event | Context | Critical Properties |
| ----- | ------- | ------------------ |
| referral.created | referral intake | referralId, specialty, priority |
| referral.triaged | triage | referralId, triageOutcome, priorityChanged (bool) |
| waitinglist.entry.added | waiting list | entryId, priority, rttClockStart |
| waitinglist.entry.validated | validation | entryId, method, result |
| waitinglist.entry.paused | validation | entryId, pauseReason, pauseDays |
| appointment.slot_search | booking | patientId, specialty, filterCriteriaHash |
| appointment.hold_created | booking | holdId, slotId, ttlSeconds |
| appointment.booked | booking | appointmentId, slotId, overbook (bool) |
| appointment.canceled | booking | appointmentId, reasonCategory |
| appointment.rebooked | booking | oldAppointmentId, newAppointmentId |
| appointment.dna_recorded | dna | appointmentId, reasonCaptured (bool) |
| session.template.created | session template | templateId, recurrencePattern |
| session.capacity_added | capacity | sessionId, deltaSlots |
| room.conflict_detected | allocation | sessionId, roomId, conflictType |
| room.conflict_resolved | allocation | conflictId, resolutionType |
| resource.equipment_reserved | equipment | reservationId, equipmentType |
| communication.sent | comms | templateId, channel, audienceSize |
| validation.drive.started | validation | driveId, cohortSize |
| validation.drive.completed | validation | driveId, validatedCount, removedCount |
| audit.event_logged | audit | objectType, action, userRole |

---

## 9. Implementation Phases

**Phase 1 (Foundational)**: WaitingListTable, PatientSummaryCard, PriorityBadge, SlotMatrix (basic), AppointmentBooking Screen, RTTClockIndicator, KPITrendTiles, audit logging base.

**Phase 2 (Scheduling & Capacity)**: SessionCalendar, Overbooking rules, RoomAvailabilityTimeline, ConflictResolutionPanel, AdditionalCapacityWizard.

**Phase 3 (Validation & Quality)**: ValidationDriveWizard, ValidationChecklistDrawer, DataQualityIssueBadge, PauseReasonModal, equity & aging charts.

**Phase 4 (Advanced Booking)**: PartialBookingWizard, MultiAppointmentWizard, SlotHoldTimer, DNAResolutionPanel, BulkRebookingWizard.

**Phase 5 (Resources & Communication)**: EquipmentBookingPanel, CommunicationTemplatePicker, BulkSendProgressTracker, ReminderScheduleConfigurator.

**Phase 6 (Predictive & Optimisation)**: RTTBreachForecastGraph, RiskScoreBadge integration, CapacityScenarioComparisonTable, automated prioritisation suggestions.

---

## 10. Risks & Mitigations

| Risk | Impact | Mitigation |
| ---- | ------ | ---------- |
| Overly complex booking UI | User errors, slow throughput | Progressive disclosure, contextual help, keyboard flows |
| Data quality drift (RTT clocks) | Breach reporting errors | Scheduled validation drives + diff alerts |
| Performance on large lists | Slow rendering | Virtualisation + column pruning tokens |
| Audit gaps | Compliance exposure | Central audit middleware & required event assertions in tests |
| Excessive color for risk states | Accessibility issues | Token contrast thresholds, semantic grouping |
| Overbooking misuse | Clinic overruns | Policy reinforcement UI + limit tokens + alerts |
| Inconsistent priority logic | Unsafe clinical delays | Priority rule engine + controlled vocab tokens |

---

## 11. Immediate Next Actions

1. Confirm Phase 1 scope + priority token definitions.
2. Draft TypeScript interfaces for Patient, Referral, WaitingListEntry, Appointment, ClinicSession.
3. Create design tokens for priority & RTT statuses (align with accessibility contrast).
4. Scaffold WaitingListTable & SlotMatrix stories (data mocks, a11y notes).
5. Define telemetry event TypeScript enum & helper for booking workflow.
6. Draft conflict taxonomy (room, equipment, overbook) for consistent handling.

---

## 12. Glossary (Selected)

| Term | Definition |
| ---- | ---------- |
| RTT (Referral to Treatment) Clock | Time from initial referral to treatment start; NHS target 18 weeks |
| Partial Booking | Process offering patient choice of appointment options before confirmation |
| Overbooking | Adding extra patients beyond nominal slot capacity to mitigate DNAs |
| DNA (Did Not Attend) | Patient fails to attend without notice |
| Validation Drive | Focused initiative to confirm waiting list accuracy |
| Session Template | Recurring clinic session definition used to generate future clinics |
| Breach | Exceeding RTT target threshold |
| Hold | Temporary reservation of slot pending confirmation |
| Pause | Legitimate suspension of RTT clock for patient-related reasons |

---

## 13. Maintenance Strategy

- Quarterly review of priority & risk token usage for consistency.
- Accessibility audit of high-density data components each minor release.
- Event schema contract tests to prevent telemetry drift.
- Performance benchmarks (render time, interaction latency) on large (50k+) waiting list datasets.
- Deprecation pathway for legacy components (mark experimental → stable → deprecated → removed).
- Centralised conflict resolution pattern library kept in sync with new resource types.

---

*Document version: 0.1 (initial draft).*
