import { SlotMatrixSlot, SlotMatrixSession } from './SlotMatrix.types';

// Simple deterministic pseudo-random generator (mulberry32)
function mulberry32(seed: number) {
  return function() {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

export interface GenerateSlotMatrixOptions {
  date: Date;
  days?: number;
  sessionsPerDay?: number;
  slotIntervalMins?: number;
  slotsPerSession?: number; // fallback if interval not dividing
}

export function generateSessions(opts: GenerateSlotMatrixOptions): SlotMatrixSession[] {
  const {
    date,
    days = 1,
    sessionsPerDay = 3
  } = opts;
  const sessions: SlotMatrixSession[] = [];
  const base = new Date(date);
  for (let d = 0; d < days; d++) {
    for (let s = 0; s < sessionsPerDay; s++) {
      const day = new Date(base.getTime() + d * 86_400_000);
      const start = new Date(day);
      start.setHours(8 + s * 2, 0, 0, 0);
      const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
      sessions.push({
        id: `S-${d}-${s}`,
        specialty: ['ENT','Cardiology','Ophthalmology'][s % 3],
        start: start.toISOString(),
        end: end.toISOString()
      });
    }
  }
  return sessions;
}

export function generateSlots(sessions: SlotMatrixSession[], opts: GenerateSlotMatrixOptions): SlotMatrixSlot[] {
  const { slotIntervalMins = 30 } = opts;
  const rand = mulberry32(42);
  const slots: SlotMatrixSlot[] = [];
  sessions.forEach(session => {
    const start = new Date(session.start).getTime();
    const end = new Date(session.end).getTime();
    for (let t = start; t < end; t += slotIntervalMins * 60 * 1000) {
      const cap = 1;
      const booked = rand() < 0.3 ? 1 : 0;
      const status: SlotMatrixSlot['status'] = booked >= cap ? 'full' : 'available';
      slots.push({
        id: `${session.id}-${t}`,
        sessionId: session.id,
        start: new Date(t).toISOString(),
        end: new Date(t + slotIntervalMins * 60 * 1000).toISOString(),
        capacity: cap,
        booked,
        status
      });
    }
  });
  return slots;
}
