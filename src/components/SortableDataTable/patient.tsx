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

export const tabColumns: Record<string, (keyof PatientData)[]> = {
	overview: ['name', 'age', 'ews_score', 'admin_note','ward_name', 'room_name', 'bed_name', 'bed_type', 'pathway', 'speciality', 'consultant', 'early_discharge_notification',
	'needs_based_assessment',
	'medically_optimised',
	'criteria_to_reside',
	'date_medically_optimised',
	'anticipated_discharge_date', 'transport_booking', 'transport_status', 'transport_date', 'transport_mobility', 'equipment', 'district_nurse_referral', 'fast_track', 'initial_therapy_contact'],
	patient: ['name', 'age', 'ews_score', 'admin_note'],
	location: ['name', 'ward_name', 'room_name', 'bed_name', 'bed_type'],
	'care pathway': ['name', 'pathway', 'speciality', 'consultant'],
	discharge: ['name', 'early_discharge_notification', 'needs_based_assessment', 'medically_optimised', 'criteria_to_reside', 'date_medically_optimised', 'anticipated_discharge_date'],
	transport: ['name','transport_booking', 'transport_status', 'transport_date', 'transport_mobility'],
	'community care': ['name','equipment', 'district_nurse_referral', 'fast_track', 'initial_therapy_contact'],
};