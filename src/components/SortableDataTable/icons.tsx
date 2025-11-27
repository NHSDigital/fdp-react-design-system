import React from 'react';

export interface IconConfig {
	value: string | boolean;
	icon: React.ReactNode;
}

export const bedIcon: IconConfig[] = [
	{
		value: "bed",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="34">
				<rect x="5" y="10" width="14" height="5" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
				<rect x="5" y="7" width="5" height="3" stroke="#000" strokeWidth="2" strokeLinecap="round" fill="none"/>
				<line x1="5" y1="15" x2="5" y2="19" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
				<line x1="19" y1="15" x2="19" y2="19" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
			</svg>
		),
	},
	{
		value: "cot",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="34">
				<rect x="5" y="7" width="14" height="10" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
				<line x1="7" y1="7" x2="7" y2="17" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
				<line x1="17" y1="7" x2="17" y2="17" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
			</svg>
		),
	},
	{
		value: "swap space",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="34">
				<line x1="7" y1="8" x2="17" y2="8" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
				<polyline points="13 4 17 8 13 12" stroke="#000" strokeWidth="2" strokeLinecap="round" fill="none"/>
				<line x1="17" y1="16" x2="7" y2="16" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
				<polyline points="11 20 7 16 11 12" stroke="#000" strokeWidth="2" strokeLinecap="round" fill="none"/>
			</svg>
		),
	},
	{
		value: "trolley",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="34">
				<rect x="5" y="7" width="14" height="5" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
				<line x1="8" y1="12" x2="8" y2="17" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
				<line x1="16" y1="12" x2="16" y2="17" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
				<circle cx="8" cy="19" r="1.5" fill="#000"/>
				<circle cx="16" cy="19" r="1.5" fill="#000"/>
			</svg>
		),
	},
];

export const completeIcon: IconConfig[] = [
	{
		value: "due",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="34">
				<rect x="3" y="4" width="18" height="16" stroke="#000" strokeWidth="2" strokeLinecap="round" fill="none"/>
				<line x1="3" y1="9" x2="21" y2="9" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
				<line x1="7" y1="13" x2="7" y2="17" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
				<line x1="12" y1="13" x2="12" y2="17" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
				<line x1="17" y1="13" x2="17" y2="17" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
			</svg>
		),
	},
	{
		value: "overdue",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="34">
				<path d="M12 2L2 20H22L12 2Z" stroke="#ffbf47" strokeWidth="2" strokeLinecap="round" fill="none"/>
				<line x1="12" y1="8" x2="12" y2="14" stroke="#ffb81c" strokeWidth="2" strokeLinecap="round"/>
				<circle cx="12" cy="17" r="1" fill="#ffb81c"/>
			</svg>
		),
	},
	{
		value: "complete",
		icon: (
			<svg className="nhsuk-icon__tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="34">
				<path strokeWidth="4" strokeLinecap="round" d="M18.4 7.8l-8.5 8.4L5.6 12" stroke="#007f3b"></path>
			</svg>
		),
	},
];

export const transportStatusIcon: IconConfig[] = [
	{
		value: "Confirmed",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="34">
				<rect x="3" y="4" width="18" height="16" stroke="#000" strokeWidth="2" strokeLinecap="round" fill="none"/>
				<line x1="3" y1="9" x2="21" y2="9" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
				<line x1="7" y1="13" x2="7" y2="17" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
				<line x1="12" y1="13" x2="12" y2="17" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
				<line x1="17" y1="13" x2="17" y2="17" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
			</svg>
		),
	},
	{
		value: "Pending",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" aria-hidden="true" width="100%" height="34">
				<g id="pending-group">
					<circle id="pending-oval" stroke="none" fill="rgb(255, 184, 28)" cx="27" cy="50" r="6" />
					<circle id="pending-oval2" stroke="none" fill="rgb(255, 184, 28)" cx="50.5" cy="50" r="6" />
					<circle id="pending-oval3" stroke="none" fill="rgb(255, 184, 28)" cx="73.5" cy="50" r="6" />
				</g>
			</svg>
		),
	},
	{
		value: "In Progress",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="34">
				<rect x="3" y="8" width="16" height="8" stroke="#007f3b" strokeWidth="2" strokeLinecap="round" fill="none"/>
				<rect x="16" y="10" width="5" height="6" stroke="#007f3b" strokeWidth="2" strokeLinecap="round" fill="none"/>
				<circle cx="7" cy="18" r="2" fill="#007f3b"/>
				<circle cx="17" cy="18" r="2" fill="#007f3b"/>
				<line x1="6" y1="12" x2="10" y2="12" stroke="#007f3b" strokeWidth="2" strokeLinecap="round"/>
				<line x1="8" y1="10" x2="8" y2="14" stroke="#007f3b" strokeWidth="2" strokeLinecap="round"/>
				<line x1="10" y1="6" x2="14" y2="6" stroke="#007f3b" strokeWidth="2" strokeLinecap="round"/>
			</svg>
		),
	},
];

export const booleanIcon: IconConfig[] = [
	{
		value: true,
		icon: (
			<svg className="nhsuk-icon nhsuk-icon__tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="34">
				<path strokeWidth="4" strokeLinecap="round" d="M18.4 7.8l-8.5 8.4L5.6 12" stroke="#007f3b"></path>
			</svg>
		),
	},
	{
		value: false,
		icon: (
			<svg className="nhsuk-icon nhsuk-icon__cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="100%" height="34">
				<path d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z" fill="#d5281b"></path>
				<path d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z" fill="#d5281b"></path>
			</svg>
		),
	},
];
