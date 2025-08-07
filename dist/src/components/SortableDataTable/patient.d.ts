export interface PatientData {
    name: string;
    age: number;
    ews_score: number;
    admin_note?: string;
    ward_name: string;
    room_name: string;
    bed_name: string;
    bed_type: string;
    pathway: string;
    speciality: string;
    consultant: string;
    early_discharge_notification: boolean;
    needs_based_assessment: boolean;
    medically_optimised: boolean;
    criteria_to_reside: boolean;
    date_medically_optimised: string;
    anticipated_discharge_date: string;
    transport_booking: boolean;
    transport_status: string;
    transport_date: string;
    transport_mobility: string;
    equipment: string;
    district_nurse_referral: boolean;
    fast_track: boolean;
    initial_therapy_contact: boolean;
}
export interface SortConfig {
    key: keyof PatientData;
    direction: 'asc' | 'desc';
}
export declare const tabColumns: Record<string, (keyof PatientData)[]>;
