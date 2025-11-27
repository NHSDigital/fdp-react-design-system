declare module '*.html?raw' {
  const content: string;
  export default content;
}

// Generic fallback for any asset imported with the Vite `?raw` query
// This helps Storybook/editor TS resolve modules like '*.njk?raw', '*.md?raw', etc.
declare module '*?raw' {
  const content: string;
  export default content;
}

// Explicit support for relative imports used in stories, e.g.
// import x from '../../../docs/static-html/Heading.html?raw'
declare module '../../../docs/static-html/*.html?raw' {
  const content: string;
  export default content;
}
