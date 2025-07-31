import { promises as fs } from 'fs';
import path from 'path';

// Core components for initial testing
const coreComponents = [
  { name: 'Button', kebabCase: 'button' },
  { name: 'Footer', kebabCase: 'footer' },
  { name: 'Breadcrumb', kebabCase: 'breadcrumb' },
  { name: 'Tag', kebabCase: 'tag' },
  { name: 'Pagination', kebabCase: 'pagination' },
  { name: 'Header', kebabCase: 'header' },
  { name: 'Card', kebabCase: 'card' },
  { name: 'Panel', kebabCase: 'panel' },
];

function generateComponentHTML(kebabCase: string): string {
  const templates: Record<string, string> = {
    'button': '<button class="nhsuk-button" data-module="nhsuk-button" type="submit">Save and continue</button>',
    'footer': `<footer class="nhsuk-footer" id="nhsuk-footer">
      <div class="nhsuk-width-container">
        <h2 class="nhsuk-u-visually-hidden">Support links</h2>
        <ul class="nhsuk-footer__list">
          <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="#">NHS sites</a></li>
          <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="#">NHS App</a></li>
          <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="#">About us</a></li>
          <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="#">Contact us</a></li>
        </ul>
        <p class="nhsuk-footer__copyright">&copy; Crown copyright</p>
      </div>
    </footer>`,
    'breadcrumb': `<nav class="nhsuk-breadcrumb" aria-label="Breadcrumb">
      <div class="nhsuk-width-container">
        <ol class="nhsuk-breadcrumb__list">
          <li class="nhsuk-breadcrumb__item"><a class="nhsuk-breadcrumb__link" href="/">Home</a></li>
          <li class="nhsuk-breadcrumb__item"><a class="nhsuk-breadcrumb__link" href="/level-one">Level one</a></li>
          <li class="nhsuk-breadcrumb__item"><a class="nhsuk-breadcrumb__link" href="/level-one/level-two">Level two</a></li>
        </ol>
        <p class="nhsuk-breadcrumb__back">
          <a class="nhsuk-breadcrumb__backlink" href="/level-one/level-two">
            <span class="nhsuk-u-visually-hidden">Back to </span>Level two
          </a>
        </p>
      </div>
    </nav>`,
    'tag': '<strong class="nhsuk-tag">New</strong>',
    'pagination': `<nav class="nhsuk-pagination" role="navigation" aria-label="Pagination">
      <ul class="nhsuk-list nhsuk-pagination__list">
        <li class="nhsuk-pagination__item nhsuk-pagination__item--previous">
          <a class="nhsuk-pagination__link nhsuk-pagination__link--prev" href="/page1">
            <span class="nhsuk-pagination__title">Previous</span>
            <span class="nhsuk-u-visually-hidden">:</span>
            <span class="nhsuk-pagination__page">Page 1</span>
          </a>
        </li>
        <li class="nhsuk-pagination__item nhsuk-pagination__item--next">
          <a class="nhsuk-pagination__link nhsuk-pagination__link--next" href="/page3">
            <span class="nhsuk-pagination__title">Next</span>
            <span class="nhsuk-u-visually-hidden">:</span>
            <span class="nhsuk-pagination__page">Page 3</span>
          </a>
        </li>
      </ul>
    </nav>`,
    'header': `<header class="nhsuk-header" role="banner">
      <div class="nhsuk-width-container nhsuk-header__container">
        <div class="nhsuk-header__logo">
          <a class="nhsuk-header__link" href="/" aria-label="NHS homepage">
            <svg class="nhsuk-logo nhsuk-logo--white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 16" height="40" width="100">
              <path fill="#fff" d="M0 0h40v16H0z"/>
              <path fill="#005eb8" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5L25.4 15h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"/>
            </svg>
          </a>
        </div>
      </div>
    </header>`,
    'card': `<div class="nhsuk-card">
      <div class="nhsuk-card__content">
        <h3 class="nhsuk-card__heading">If you need help now, but it's not an emergency</h3>
        <p class="nhsuk-card__description">Go to 111.nhs.uk or call 111.</p>
      </div>
    </div>`,
    'panel': `<div class="nhsuk-panel">
      <h3>If you need help now, but it's not an emergency</h3>
      <p>Go to <a href="#">111.nhs.uk</a> or call 111.</p>
    </div>`,
  };
  
  return templates[kebabCase] || `<div class="nhsuk-${kebabCase}">Sample ${kebabCase} component</div>`;
}

function createHTMLTemplate(title: string, componentHTML: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - NHS UK Reference</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nhsuk-frontend@8.3.0/packages/nhsuk.css">
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: "Noto Sans", Arial, sans-serif;
        }
        .component-wrapper {
            max-width: 1020px;
            margin: 0 auto;
        }
        
        /* NHS UK Responsive breakpoints */
        @media (max-width: 767px) {
            body { padding: 10px; }
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
            body { padding: 15px; }
        }
        
        @media (min-width: 1024px) {
            body { padding: 20px; }
        }
    </style>
</head>
<body>
    <div class="component-wrapper">
        <h1>NHS UK ${title} Component</h1>
        <div class="component-example">
            ${componentHTML}
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/nhsuk-frontend@8.3.0/packages/nhsuk.min.js"></script>
    <script>
        window.NHSFrontend.initAll();
    </script>
</body>
</html>`;
}

async function generateCoreComponents() {
  const baseDir = './tests/visual/reference';
  
  console.log(`🏗️ Generating core NHS UK reference files for ${coreComponents.length} components...`);
  
  for (const component of coreComponents) {
    const { name, kebabCase } = component;
    const componentDir = path.join(baseDir, kebabCase);
    
    await fs.mkdir(componentDir, { recursive: true });
    
    const componentHTML = generateComponentHTML(kebabCase);
    const fullHTML = createHTMLTemplate(name, componentHTML);
    
    const defaultFile = path.join(componentDir, `${kebabCase}-default.html`);
    await fs.writeFile(defaultFile, fullHTML, 'utf8');
    
    console.log(`✅ Generated: ${defaultFile}`);
  }
  
  // Generate index file
  const indexHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NHS UK Reference Components</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nhsuk-frontend@8.3.0/packages/nhsuk.css">
</head>
<body>
    <div class="nhsuk-width-container">
        <h1>NHS UK Reference Components</h1>
        <p>Core reference library for visual testing comparison.</p>
        
        <h2>Available Components (${coreComponents.length} total)</h2>
        <ul class="nhsuk-list">
            ${coreComponents.map(c => `<li><a href="/${c.kebabCase}/${c.kebabCase}-default.html">${c.name}</a></li>`).join('\n            ')}
        </ul>
    </div>
</body>
</html>`;
  
  await fs.writeFile(path.join(baseDir, 'index.html'), indexHTML, 'utf8');
  
  console.log(`🎉 Generated ${coreComponents.length} NHS UK reference components!`);
  console.log(`📁 Files saved to: ${baseDir}`);
}

generateCoreComponents().catch(console.error);
