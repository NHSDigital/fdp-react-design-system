// Central mapping of component CSS alias -> provider component name.
// If a component re-uses another component's styles, list it here so that:
// 1. Parity checks can account for it.
// 2. Exports can intentionally point at the provider CSS.
// 3. Alias verification ensures correctness and prevents accidental stub files.
// Provider names must match the folder names in dist/components.
module.exports = {
  'Checkboxes': 'Checkbox',
  'PageTemplate': 'MainWrapper',
  'TransactionalPageTemplate': 'MainWrapper',
  'WidthContainer': 'Grid',
};
