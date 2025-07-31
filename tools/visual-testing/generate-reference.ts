import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * NHS UK Reference Template Generator
 * Generates HTML files using original NHS UK patterns for visual comparison
 */

// Base HTML template with NHS UK styles
const getBaseTemplate = (title: string, body: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>${title} - NHS UK Reference</title>
  <link href="https://service-manual.nhs.uk/nhsuk-frontend/css/nhsuk-4.0.0.min.css" rel="stylesheet">
  <style>
    body { margin: 20px; background: #f0f4f5; }
    .component-container { 
      background: white; 
      padding: 20px; 
      margin: 20px 0; 
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .component-title {
      margin: 0 0 20px 0;
      padding: 10px;
      background: #005eb8;
      color: white;
      font-size: 18px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="component-title">${title} - NHS UK Original</div>
  <div class="component-container">
    ${body}
  </div>
  <script src="https://service-manual.nhs.uk/nhsuk-frontend/js/nhsuk-4.0.0.min.js"></script>
</body>
</html>
`;

// Component templates based on original NHS UK patterns
const componentTemplates = {
  footer: {
    title: 'Footer Component',
    variants: {
      default: `
        <footer class="nhsuk-footer" id="footer">
          <div class="nhsuk-width-container">
            <h2 class="nhsuk-u-visually-hidden">Support links</h2>
            <ul class="nhsuk-footer__list">
              <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="#">NHS sites</a></li>
              <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="#">NHS App</a></li>
              <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="#">About us</a></li>
              <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="#">Contact us</a></li>
              <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="#">Profile editor login</a></li>
            </ul>
            <p class="nhsuk-footer__copyright">&copy; Crown copyright</p>
          </div>
        </footer>
      `,
      multiColumn: `
        <footer class="nhsuk-footer" id="footer">
          <div class="nhsuk-width-container">
            <h2 class="nhsuk-u-visually-hidden">Support links</h2>
            <ul class="nhsuk-footer__list nhsuk-footer__list--three-columns">
              <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="#">NHS sites</a></li>
              <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="#">NHS App</a></li>
              <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="#">About us</a></li>
              <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="#">Contact us</a></li>
              <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="#">Profile editor login</a></li>
              <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="#">Site map</a></li>
            </ul>
            <p class="nhsuk-footer__copyright">&copy; Crown copyright</p>
          </div>
        </footer>
      `
    }
  },
  
  breadcrumb: {
    title: 'Breadcrumb Component',
    variants: {
      default: `
        <nav class="nhsuk-breadcrumb" aria-label="Breadcrumb">
          <div class="nhsuk-width-container">
            <ol class="nhsuk-breadcrumb__list">
              <li class="nhsuk-breadcrumb__item"><a class="nhsuk-breadcrumb__link" href="/">Home</a></li>
              <li class="nhsuk-breadcrumb__item"><a class="nhsuk-breadcrumb__link" href="/section">Health A-Z</a></li>
              <li class="nhsuk-breadcrumb__item"><a class="nhsuk-breadcrumb__link" href="/section/topic">Mental health</a></li>
            </ol>
            <p class="nhsuk-breadcrumb__back">
              <a class="nhsuk-breadcrumb__backlink" href="/section/topic">
                <span class="nhsuk-u-visually-hidden">Go back to </span>Mental health
              </a>
            </p>
          </div>
        </nav>
      `,
      withCurrent: `
        <nav class="nhsuk-breadcrumb" aria-label="Breadcrumb">
          <div class="nhsuk-width-container">
            <ol class="nhsuk-breadcrumb__list">
              <li class="nhsuk-breadcrumb__item"><a class="nhsuk-breadcrumb__link" href="/">Home</a></li>
              <li class="nhsuk-breadcrumb__item"><a class="nhsuk-breadcrumb__link" href="/section">Health A-Z</a></li>
              <li class="nhsuk-breadcrumb__item"><a class="nhsuk-breadcrumb__link" href="/section/topic">Mental health</a></li>
              <li class="nhsuk-breadcrumb__item">Depression</li>
            </ol>
          </div>
        </nav>
      `
    }
  },

  contentsList: {
    title: 'Contents List Component',
    variants: {
      default: `
        <nav class="nhsuk-contents-list" role="navigation" aria-label="Pages in this guide">
          <h2 class="nhsuk-u-visually-hidden">Contents</h2>
          <ol class="nhsuk-contents-list__list">
            <li class="nhsuk-contents-list__item">
              <a class="nhsuk-contents-list__link" href="/guide/introduction">Introduction</a>
            </li>
            <li class="nhsuk-contents-list__item">
              <a class="nhsuk-contents-list__link" href="/guide/symptoms">Symptoms</a>
            </li>
            <li class="nhsuk-contents-list__item">
              <span class="nhsuk-contents-list__current">Treatment</span>
            </li>
            <li class="nhsuk-contents-list__item">
              <a class="nhsuk-contents-list__link" href="/guide/prevention">Prevention</a>
            </li>
          </ol>
        </nav>
      `
    }
  },

  skipLink: {
    title: 'Skip Link Component',
    variants: {
      default: `
        <a class="nhsuk-skip-link" href="#maincontent">Skip to main content</a>
        <div id="maincontent" style="margin-top: 20px; padding: 20px; background: #f0f4f5;">
          <h1>Main content starts here</h1>
          <p>This is the main content area that the skip link targets.</p>
        </div>
      `
    }
  },

  pagination: {
    title: 'Pagination Component',
    variants: {
      default: `
        <nav class="nhsuk-pagination" role="navigation" aria-label="Pagination">
          <ul class="nhsuk-list nhsuk-pagination__list">
            <li class="nhsuk-pagination__item nhsuk-pagination__item--previous">
              <a class="nhsuk-pagination__link nhsuk-pagination__link--prev" href="/guide/symptoms">
                <span class="nhsuk-pagination__title">Previous</span>
                <span class="nhsuk-u-visually-hidden">:</span>
                <span class="nhsuk-pagination__page">Symptoms</span>
                <svg class="nhsuk-icon nhsuk-icon__arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.5 16.5L10 12l4.5-4.5"></path>
                </svg>
              </a>
            </li>
            <li class="nhsuk-pagination__item nhsuk-pagination__item--next">
              <a class="nhsuk-pagination__link nhsuk-pagination__link--next" href="/guide/prevention">
                <span class="nhsuk-pagination__title">Next</span>
                <span class="nhsuk-u-visually-hidden">:</span>
                <span class="nhsuk-pagination__page">Prevention</span>
                <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9.5 7.5L14 12l-4.5 4.5"></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      `,
      nextOnly: `
        <nav class="nhsuk-pagination" role="navigation" aria-label="Pagination">
          <ul class="nhsuk-list nhsuk-pagination__list">
            <li class="nhsuk-pagination__item nhsuk-pagination__item--next">
              <a class="nhsuk-pagination__link nhsuk-pagination__link--next" href="/guide/symptoms">
                <span class="nhsuk-pagination__title">Next</span>
                <span class="nhsuk-u-visually-hidden">:</span>
                <span class="nhsuk-pagination__page">Symptoms</span>
                <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9.5 7.5L14 12l-4.5 4.5"></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      `
    }
  }
};

/**
 * Generate reference HTML files for all components and variants
 */
function generateReferenceFiles() {
  const outputDir = join(__dirname, '../../tests/visual/reference');
  
  // Create output directory if it doesn't exist
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  Object.entries(componentTemplates).forEach(([componentName, config]) => {
    const componentDir = join(outputDir, componentName);
    if (!existsSync(componentDir)) {
      mkdirSync(componentDir, { recursive: true });
    }

    Object.entries(config.variants).forEach(([variantName, html]) => {
      const filename = `${componentName}-${variantName}.html`;
      const fullPath = join(componentDir, filename);
      const fullHtml = getBaseTemplate(`${config.title} - ${variantName}`, html);
      
      writeFileSync(fullPath, fullHtml, 'utf8');
      console.log(`Generated: ${fullPath}`);
    });
  });

  console.log('✅ Reference HTML files generated successfully!');
}

// Generate index file
function generateIndex() {
  const outputDir = join(__dirname, '../../tests/visual/reference');
  const indexHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>NHS UK Component Reference Gallery</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; background: #f0f4f5; }
    h1 { color: #005eb8; }
    .component-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
    .component-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .component-card h2 { margin-top: 0; color: #005eb8; }
    .variant-list { list-style: none; padding: 0; }
    .variant-list li { margin: 10px 0; }
    .variant-link { 
      display: inline-block; 
      padding: 8px 16px; 
      background: #005eb8; 
      color: white; 
      text-decoration: none; 
      border-radius: 4px; 
    }
    .variant-link:hover { background: #003087; }
  </style>
</head>
<body>
  <h1>NHS UK Component Reference Gallery</h1>
  <p>Reference implementations using original NHS UK styles for visual comparison testing.</p>
  
  <div class="component-grid">
    ${Object.entries(componentTemplates).map(([componentName, config]) => `
      <div class="component-card">
        <h2>${config.title}</h2>
        <ul class="variant-list">
          ${Object.keys(config.variants).map(variantName => `
            <li>
              <a class="variant-link" href="${componentName}/${componentName}-${variantName}.html" target="_blank">
                ${variantName}
              </a>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('')}
  </div>
</body>
</html>
  `;

  writeFileSync(join(outputDir, 'index.html'), indexHtml, 'utf8');
  console.log('✅ Index file generated successfully!');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateReferenceFiles();
  generateIndex();
}

export { generateReferenceFiles, generateIndex, componentTemplates };
