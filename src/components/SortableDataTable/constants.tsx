import React from 'react';

// Focus area types for better type safety
export type FocusArea = 'tabs' | 'headers' | 'table';

// Screen reader only styles
export const srOnlyStyles = {
	position: 'absolute' as const,
	width: '1px',
	height: '1px',
	padding: '0',
	margin: '-1px',
	overflow: 'hidden',
	clip: 'rect(0, 0, 0, 0)',
	whiteSpace: 'nowrap' as const,
	border: '0'
};

// Tab styling configuration
export const tabStyles = {
	tabsList: "js-enabled nhsuk-tabs__list",
	tabsItem: "js-enabled nhsuk-tabs__list-item",
	tabsLink: "nhsuk-tabs__tab",
	activeTab: "nhsuk-tabs__list-item--selected"
};

// NHS Focus color for accessibility
export const NHS_FOCUS_COLOR = '#005eb8';

// Tab configuration with consistent icons
export const tabs = [
	{
		name: 'overview',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				width="100%"
				height="30"
				aria-hidden="true"
			>
				<path id="overview-bezier2" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeMiterlimit="10" fill="rgb(255, 255, 255)" d="M 0,-13.9 C -7.68,-13.9 -13.9,-7.68 -13.9,-0 -13.9,7.68 -7.68,13.9 0,13.9 7.68,13.9 13.9,7.68 13.9,-0 13.9,-6.27 9.75,-11.57 4.05,-13.3 2.77,-13.69 1.41,-13.9 0,-13.9 Z M 13.99,-23.41 C 28.62,-16.06 39,-0 39,-0 39,-0 21.54,27 0,27 -21.54,27 -39,-0 -39,-0 -39,-0 -21.54,-27 0,-27 4.93,-27 9.64,-25.59 13.99,-23.41 Z M 13.99,-23.41" transform="translate(50, 50)"  />
			</svg>
		),
	},
	{
		name: 'patient',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				width="100%"
				height="30"
				aria-hidden="true"
			>
				<g id="patient-group" transform="translate(50, 50)">
					<circle
						id="patient-oval"
						stroke="rgb(0, 0, 0)"
						strokeWidth="2"
						strokeMiterlimit="10"
						fill="rgb(255, 255, 255)"
						cx="0.03"
						cy="-29.7"
						r="9.3"
					/>
					<path
						id="patient-bezier"
						stroke="rgb(0, 0, 0)"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeMiterlimit="2"
						fill="rgb(255, 255, 255)"
						d="M 0,-14.75 L 0,-14.75 C -10.7,-14.75 -19.38,-6.08 -19.38,4.62 L -19.38,12 C -19.38,15.31 -16.69,18 -13.38,18 L -13.38,39 13.38,39 13.38,18 C 16.69,18 19.38,15.31 19.38,12 L 19.38,4.62 C 19.38,-6.08 10.7,-14.75 0,-14.75 Z M 0,-14.75"
					/>
				</g>
			</svg>
		),
	},
	{
		name: 'location',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				width="100%"
				height="30"
				aria-hidden="true"
			>
				<g id="patient-group" transform="translate(50, 50)">
					<path id="location-bezier2" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeMiterlimit="10" fill="rgb(255, 255, 255)" d="M 0.1,-28.05 C -7.69,-28.05 -14,-21.74 -14,-13.95 -14,-6.16 -7.69,0.15 0.1,0.15 7.89,0.15 14.2,-6.16 14.2,-13.95 14.2,-21.74 7.89,-28.05 0.1,-28.05 Z M 27.39,-11.53 C 27.39,10.02 -0.01,39 -0.01,39 -0.01,39 -27.4,10.17 -27.4,-11.53 -27.4,-26.7 -15.14,-39 -0.01,-39 15.12,-39 27.39,-26.7 27.39,-11.53 Z M 27.39,-11.53" />
				</g>
			</svg>
		),
	},
	{
		name: 'care pathway',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				width="100%"
				height="30"
				aria-hidden="true"
			>
				<g id="carePathway-group" transform="translate(50, 50)" >
					<g id="carePathway-group2">
						<path id="carePathway-bezier7" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" fill="rgb(255, 255, 255)" d="M -19,31 L -39,31 -39,-39 19,-39 19,-30.05" />
						<rect id="carePathway-rectangle" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeMiterlimit="10" fill="rgb(255, 255, 255)" x="-19" y="-29.5" width="58" height="68.5" />
						<path id="carePathway-bezier" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" fill="none" d="M -10.99,-12.72 L 0.19,-1.54" />
						<path id="carePathway-bezier2" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" fill="none" d="M 0.19,-12.72 L -10.99,-1.54" />
						<path id="carePathway-bezier3" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" fill="none" d="M 19.81,12.82 L 30.99,24.01" />
						<path id="carePathway-bezier4" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" fill="none" d="M 30.99,12.82 L 19.81,24.01" />
						<path id="carePathway-bezier5" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" fill="none" d="M -10.99,24.01 L 1.18,24.01 C 5.29,24.01 8.63,20.67 8.63,16.56 L 8.63,-0.58 C 8.63,-4.69 11.96,-8.03 16.07,-8.03 L 30.18,-8.03" />
						<path id="carePathway-bezier6" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" fill="none" d="M 24.51,-14.51 L 30.99,-8.03 24.51,-1.54" />
					</g>
				</g>
			</svg>
		),
	},
	{
		name: 'transport',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				width="100%"
				height="30"
				aria-hidden="true"
			>
				<path id="discharge-bezier10" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeMiterlimit="10" fill="rgb(255, 255, 255)" d="M 46.11,25.05 L 33.4,25.05 33.4,34.78 23.67,34.78 23.67,47.48 33.4,47.48 33.4,57.21 46.11,57.21 46.11,47.48 55.83,47.48 55.83,34.78 46.11,34.78 46.11,25.05 Z M 69.46,10.65 C 69.46,10.65 69.46,27.41 69.46,27.41 L 71.34,27.41 C 81.08,27.41 88.97,35.33 88.97,45.1 L 88.97,77.35 11.03,77.35 11.03,10.65 69.46,10.65 69.46,10.65 Z M 69.46,10.65" />
				<path id="discharge-bezier3" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" fill="none" d="M 62.12,77.35 L 36.7,77.35" />
				<ellipse id="discharge-oval" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeMiterlimit="10" fill="rgb(255, 255, 255)" cx="26.53" cy="78.45" rx="10.2" ry="10.15" />
				<ellipse id="discharge-oval2" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeMiterlimit="10" fill="rgb(255, 255, 255)" cx="72.28" cy="78.45" rx="10.2" ry="10.15" />
				<path id="discharge-bezier4" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" fill="none" d="M 69.46,27.41 L 69.46,68.27" />
				<path id="discharge-bezier5" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" fill="rgb(255, 255, 255)" d="M 69.94,49.65 L 88.53,49.65" />
				<path id="discharge-bezier6" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" fill="rgb(255, 255, 255)" d="M 69.94,12.14 C 73.06,12.14 75.59,14.67 75.59,17.79 75.59,20.9 73.06,23.43 69.94,23.43" />
				<path id="discharge-bezier7" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" fill="none" d="M 79.81,17.77 L 82.05,17.77" />
				<path id="discharge-bezier8" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" fill="none" d="M 77.98,22.82 L 79.51,24.35" />
				<path id="discharge-bezier9" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" fill="none" d="M 78.21,12.63 L 79.51,11.33" />
			</svg>
		),
	},
	{
		name: 'discharge',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				width="100%"
				height="30"
				aria-hidden="true"
			>
				<path id="discharge-bezier" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" fill="rgb(255, 255, 255)" d="M 0,-39 L -39,-2.82 -29.81,-2.82 -29.81,39 -10.15,39 -10.15,7.94 10.15,7.94 10.15,39 29.81,39 29.81,26.63 29.81,-2.82 39,-2.82 0,-39 Z M 0,-39" transform="translate(50, 50)"  />
			</svg>
		),
	},
	{
		name: 'community care',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				width="100%"
				height="30"
				aria-hidden="true"
			>
				<g id="occupationalHealth-group2" transform="translate(50, 50)" >
					<path id="occupationalHealth-bezier" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeMiterlimit="2" fill="rgb(255, 255, 255)" d="M 35.58,25.65 L 35.58,-21.47 C 35.58,-31.76 27.24,-40.09 16.95,-40.09 L 15.12,-40.09 15.12,-33.61 C 22.38,-33.61 28.26,-27.73 28.26,-20.47 L 28.26,25.65" />
					<path id="occupationalHealth-bezier2" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeMiterlimit="2" fill="rgb(255, 255, 255)" d="M -35.56,25.65 L -35.56,-21.47 C -35.56,-31.76 -27.22,-40.09 -16.93,-40.09 L -15.1,-40.09 -15.1,-33.61 C -22.36,-33.61 -28.24,-27.73 -28.24,-20.47 L -28.24,25.65" />
					<rect id="occupationalHealth-rectangle" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeMiterlimit="10" fill="rgb(255, 255, 255)" x="-14.92" y="-42.13" width="29.85" height="10.25" />
					<rect id="occupationalHealth-rectangle2" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeMiterlimit="10" fill="rgb(255, 255, 255)" x="-28.25" y="-4.33" width="56.5" height="8.65" />
					<path id="occupationalHealth-bezier3" stroke="none" fill="rgb(255, 255, 255)" d="M -26.25,28.85 L -26.25,35.9 -37.3,35.9 -37.3,28.85 C -37.3,23.93 -26.25,23.93 -26.25,28.85 Z M -26.25,28.85" />
					<path id="occupationalHealth-bezier4" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" fill="none" d="M -26.25,28.85 L -26.25,35.9 -37.3,35.9 -37.3,28.85 C -37.3,23.93 -26.25,23.93 -26.25,28.85 Z M -26.25,28.85" />
					<path id="occupationalHealth-bezier5" stroke="none" fill="rgb(255, 255, 255)" d="M 37.43,28.85 L 37.43,35.9 26.38,35.9 26.38,28.85 C 26.38,23.93 37.43,23.93 37.43,28.85 Z M 37.43,28.85" />
					<path id="occupationalHealth-bezier6" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" fill="none" d="M 37.43,28.85 L 37.43,35.9 26.38,35.9 26.38,28.85 C 26.38,23.93 37.43,23.93 37.43,28.85 Z M 37.43,28.85" />
				</g>
			</svg>
		),
	},
];

// EWS color coding function - extracted for reusability
export const getEWSColor = (score: number): string => {
	if (score >= 7) return '#d5281b'; // Red
	if (score >= 5) return '#ffb81c'; // Amber  
	if (score >= 1) return '#007f3b'; // Green
	return '#000'; // Default for zero
};
