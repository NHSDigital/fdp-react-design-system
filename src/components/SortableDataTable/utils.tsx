// Helper function to format headers
export const formatHeader = (header: string): string =>
	header
		.replace(/([a-z])([A-Z])/g, '$1 $2') // Split camelCase
		.replace(/_/g, ' ') // Replace underscores with spaces
		.replace(/\./g, ' ') // Replace dots with spaces
		.replace(/\b\w/g, char => char.toUpperCase()) // Capitalize the first letter of each word
		.replace(/\b[A-Z]{3}\b/g, match => match.toUpperCase()) // Keep three-letter acronyms capitalised

// Helper function to parse date strings into the format "13th Month 2024"
export const parseDate = (dateString: string | null): string => {
	if (!dateString) return '';
	const date = new Date(dateString);
	if (isNaN(date.getTime())) return dateString; // Return the original if parsing fails

	const day = date.getDate();
	const month = date.toLocaleString('default', { month: 'long' });
	const year = date.getFullYear();

	const suffix =
		day % 10 === 1 && day !== 11
			? 'st'
			: day % 10 === 2 && day !== 12
			? 'nd'
			: day % 10 === 3 && day !== 13
			? 'rd'
			: 'th';

	return `${day}${suffix} ${month} ${year}`;
};
