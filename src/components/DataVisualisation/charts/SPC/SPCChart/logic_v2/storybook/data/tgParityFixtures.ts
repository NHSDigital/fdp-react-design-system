// Minimal fixtures for T & G parity vignettes

export const tgEventDates = [
	"2025-09-01",
	"2025-09-02",
	"2025-09-02",
	"2025-09-03",
	"2025-09-03",
	"2025-09-03",
	"2025-09-04",
].map((d) => ({ x: d + "T00:00:00Z" }));

export const tgHits = [
	{ x: 1, occurred: 0 },
	{ x: 2, occurred: 0 },
	{ x: 3, occurred: 1 },
	{ x: 4, occurred: 0 },
	{ x: 5, occurred: 0 },
	{ x: 6, occurred: 0 },
	{ x: 7, occurred: 1 },
	{ x: 8, occurred: 0 },
	{ x: 9, occurred: 0 },
	{ x: 10, occurred: 0 },
	{ x: 11, occurred: 0 },
	{ x: 12, occurred: 1 },
];
