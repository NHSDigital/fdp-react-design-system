import { SlotMatrixSlot, SlotMatrixSession } from './SlotMatrix.types';
export interface GenerateSlotMatrixOptions {
    date: Date;
    days?: number;
    sessionsPerDay?: number;
    slotIntervalMins?: number;
    slotsPerSession?: number;
}
export declare function generateSessions(opts: GenerateSlotMatrixOptions): SlotMatrixSession[];
export declare function generateSlots(sessions: SlotMatrixSession[], opts: GenerateSlotMatrixOptions): SlotMatrixSlot[];
