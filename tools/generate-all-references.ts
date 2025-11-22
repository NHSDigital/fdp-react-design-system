import { promises as fs } from 'fs';
import path from 'path';

/**
 * Generate NHS UK Reference Components for All Available Components
 * Creates reference HTML files for comprehensive visual testing
 */

// All components that need NHS UK reference files
const components = [
  // Core Navigation & Structure
  { name: 'Header', kebabCase: 'header', nhsukClass: 'nhsuk-header', type: 'navigation' },
  { name: 'Footer', kebabCase: 'footer', nhsukClass: 'nhsuk-footer', type: 'links' },
  { name: 'Breadcrumb', kebabCase: 'breadcrumb', nhsukClass: 'nhsuk-breadcrumb', type: 'navigation' },
  { name: 'Skip Link', kebabCase: 'skip-link', nhsukClass: 'nhsuk-skip-link', type: 'simple' },
  
  // Content Components
  { name: 'Hero', kebabCase: 'hero', nhsukClass: 'nhsuk-hero', type: 'content' },
  { name: 'Panel', kebabCase: 'panel', nhsukClass: 'nhsuk-panel', type: 'content' },
  { name: 'Card', kebabCase: 'card', nhsukClass: 'nhsuk-card', type: 'content' },
  { name: 'Contents List', kebabCase: 'contents-list', nhsukClass: 'nhsuk-contents-list', type: 'navigation' },
  { name: 'Summary List', kebabCase: 'summary-list', nhsukClass: 'nhsuk-summary-list', type: 'data' },
  { name: 'Tables', kebabCase: 'table', nhsukClass: 'nhsuk-table', type: 'data' },
  { name: 'Tabs', kebabCase: 'tabs', nhsukClass: 'nhsuk-tabs', type: 'content' },
  
  // Interactive Components  
  { name: 'Button', kebabCase: 'button', nhsukClass: 'nhsuk-button', type: 'simple' },
  { name: 'Tag', kebabCase: 'tag', nhsukClass: 'nhsuk-tag', type: 'simple' },
  { name: 'Pagination', kebabCase: 'pagination', nhsukClass: 'nhsuk-pagination', type: 'navigation' },
  { name: 'Back Link', kebabCase: 'back-link', nhsukClass: 'nhsuk-back-link', type: 'simple' },
  { name: 'Action Link', kebabCase: 'action-link', nhsukClass: 'nhsuk-action-link', type: 'simple' },
  { name: 'Details', kebabCase: 'details', nhsukClass: 'nhsuk-details', type: 'content' },
  
  // Form Components
  { name: 'Input', kebabCase: 'input', nhsukClass: 'nhsuk-input', type: 'form' },
  { name: 'Textarea', kebabCase: 'textarea', nhsukClass: 'nhsuk-textarea', type: 'form' },
  { name: 'Select', kebabCase: 'select', nhsukClass: 'nhsuk-select', type: 'form' },
  { name: 'Checkboxes', kebabCase: 'checkboxes', nhsukClass: 'nhsuk-checkboxes', type: 'form' },
  { name: 'Radios', kebabCase: 'radios', nhsukClass: 'nhsuk-radios', type: 'form' },
  { name: 'Date Input', kebabCase: 'date-input', nhsukClass: 'nhsuk-date-input', type: 'form' },
  { name: 'Character Count', kebabCase: 'character-count', nhsukClass: 'nhsuk-character-count', type: 'form' },
  { name: 'Fieldset', kebabCase: 'fieldset', nhsukClass: 'nhsuk-fieldset', type: 'form' },
  { name: 'Label', kebabCase: 'label', nhsukClass: 'nhsuk-label', type: 'form' },
  { name: 'Hint', kebabCase: 'hint', nhsukClass: 'nhsuk-hint', type: 'simple' },
  
  // Error & Validation Components
  { name: 'Error Message', kebabCase: 'error-message', nhsukClass: 'nhsuk-error-message', type: 'simple' },
  { name: 'Error Summary', kebabCase: 'error-summary', nhsukClass: 'nhsuk-error-summary', type: 'content' },
  
  // Information Components
  { name: 'Inset Text', kebabCase: 'inset-text', nhsukClass: 'nhsuk-inset-text', type: 'content' },
  { name: 'Warning Callout', kebabCase: 'warning-callout', nhsukClass: 'nhsuk-warning-callout', type: 'content' },
  { name: 'Do Dont List', kebabCase: 'do-dont-list', nhsukClass: 'nhsuk-do-dont-list', type: 'content' },
  { name: 'Images', kebabCase: 'images', nhsukClass: 'nhsuk-image', type: 'content' },
  
  // Task & Progress Components
  { name: 'Task List', kebabCase: 'task-list', nhsukClass: 'nhsuk-task-list', type: 'content' },
];

// Generate component-specific HTML content
function generateComponentHTML(component: any): string {
  const { name, kebabCase, nhsukClass, isSimple, isForm, needsContent, needsNavigation, needsLinks, needsData } = component;
  
  if (isSimple) {
    return generateSimpleComponent(kebabCase, nhsukClass);
  } else if (isForm) {
    return generateFormComponent(kebabCase, nhsukClass);
  } else if (needsNavigation) {
    return generateNavigationComponent(kebabCase, nhsukClass);
  } else if (needsLinks) {
    return generateLinksComponent(kebabCase, nhsukClass);
  } else if (needsData) {
    return generateDataComponent(kebabCase, nhsukClass);
  } else if (needsContent) {
    return generateContentComponent(kebabCase, nhsukClass);
  } else {
    return generateDefaultComponent(kebabCase, nhsukClass);
  }
}

function generateSimpleComponent(kebabCase: string, nhsukClass: string): string {
  const templates: Record<string, string> = {
    'button': `<button class="nhsuk-button" data-module="nhsuk-button" type="submit">Save and continue</button>`,
    'tag': `<strong class="nhsuk-tag">New</strong>`,
    'skip-link': `<a class="nhsuk-skip-link" href="#maincontent">Skip to main content</a>`,
    'back-link': `<a class="nhsuk-back-link" href="#"><span class="nhsuk-u-visually-hidden">Go back</span></a>`,
    'action-link': `<a class="nhsuk-action-link" href="#"><span class="nhsuk-action-link__text">Find a minor injuries unit</span></a>`,
    'hint': `<div class="nhsuk-hint" id="example-hint">It's on your National Insurance card, benefit letter, payslip or P60. For example, 'QQ 12 34 56 C'.</div>`,
    'error-message': `<span class="nhsuk-error-message" id="example-error"><span class="nhsuk-u-visually-hidden">Error:</span> Enter a valid email address</span>`,
  };
  
  return templates[kebabCase] || `<div class="\${nhsukClass}">Sample \${kebabCase} component</div>`;
}

function generateFormComponent(kebabCase: string, nhsukClass: string): string {
  const templates: Record<string, string> = {
    'input': `<div class="nhsuk-form-group">
      <label class="nhsuk-label" for="example">Email address</label>
      <input class="nhsuk-input" id="example" name="example" type="email">
    </div>`,
    'textarea': `<div class="nhsuk-form-group">
      <label class="nhsuk-label" for="example">Can you provide more detail?</label>
      <textarea class="nhsuk-textarea" id="example" name="example" rows="5"></textarea>
    </div>`,
    'select': `<div class="nhsuk-form-group">
      <label class="nhsuk-label" for="select-1">Choose an option</label>
      <select class="nhsuk-select" id="select-1" name="select-1">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
    </div>`,
    'checkboxes': `<div class="nhsuk-form-group">
      <fieldset class="nhsuk-fieldset">
        <legend class="nhsuk-fieldset__legend">Which of these apply to you?</legend>
        <div class="nhsuk-checkboxes">
          <div class="nhsuk-checkboxes__item">
            <input class="nhsuk-checkboxes__input" id="example" name="example" type="checkbox" value="email">
            <label class="nhsuk-label nhsuk-checkboxes__label" for="example">Email</label>
          </div>
        </div>
      </fieldset>
    </div>`,
    'radios': `<div class="nhsuk-form-group">
      <fieldset class="nhsuk-fieldset">
        <legend class="nhsuk-fieldset__legend">Where do you live?</legend>
        <div class="nhsuk-radios">
          <div class="nhsuk-radios__item">
            <input class="nhsuk-radios__input" id="example" name="example" type="radio" value="england">
            <label class="nhsuk-label nhsuk-radios__label" for="example">England</label>
          </div>
        </div>
      </fieldset>
    </div>`,
    'date-input': `<div class="nhsuk-form-group">
      <fieldset class="nhsuk-fieldset">
        <legend class="nhsuk-fieldset__legend">What is your date of birth?</legend>
        <div class="nhsuk-date-input" id="example">
          <div class="nhsuk-date-input__item">
            <div class="nhsuk-form-group">
              <label class="nhsuk-label nhsuk-date-input__label" for="example-day">Day</label>
              <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2" id="example-day" name="example-day" type="text" pattern="[0-9]*" inputmode="numeric">
            </div>
          </div>
        </div>
      </fieldset>
    </div>`,
    'character-count': `<div class="nhsuk-form-group">
      <label class="nhsuk-label" for="example">Can you provide more detail?</label>
      <div class="nhsuk-character-count" data-module="nhsuk-character-count" data-maxlength="200">
        <textarea class="nhsuk-textarea nhsuk-character-count__input" id="example" name="example" rows="5"></textarea>
        <div class="nhsuk-character-count__message">You can enter up to 200 characters</div>
      </div>
    </div>`,
    'fieldset': `<fieldset class="nhsuk-fieldset">
      <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--l">
        <h1 class="nhsuk-fieldset__heading">What is your address?</h1>
      </legend>
    </fieldset>`,
    'label': `<label class="nhsuk-label" for="example">National Insurance number</label>`,
  };
  
  return templates[kebabCase] || `<div class="\${nhsukClass}">Sample \${kebabCase} form component</div>`;
}

function generateNavigationComponent(kebabCase: string, nhsukClass: string): string {
  const templates: Record<string, string> = {
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
        <div class="nhsuk-header__content" id="content-header">
          <div class="nhsuk-header__menu">
            <button class="nhsuk-header__menu-toggle" id="toggle-menu" aria-controls="header-navigation" aria-label="Open menu">Menu</button>
          </div>
        </div>
      </div>
    </header>`,
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
    'contents-list': `<nav class="nhsuk-contents-list" role="navigation" aria-labelledby="contents-list">
      <h2 class="nhsuk-u-visually-hidden" id="contents-list">Contents</h2>
      <ol class="nhsuk-contents-list__list">
        <li class="nhsuk-contents-list__item">
          <a class="nhsuk-contents-list__link" href="#item1">Item 1</a>
        </li>
        <li class="nhsuk-contents-list__item">
          <a class="nhsuk-contents-list__link" href="#item2">Item 2</a>
        </li>
      </ol>
    </nav>`,
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
  };
  
  return templates[kebabCase] || `<nav class="\${nhsukClass}">Sample \${kebabCase} navigation component</nav>`;
}

function generateLinksComponent(kebabCase: string, nhsukClass: string): string {
  if (kebabCase === 'footer') {
    return `<footer class="nhsuk-footer" id="nhsuk-footer">
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
    </footer>`;
  }
  
  return `<div class="\${nhsukClass}">Sample \${kebabCase} component with links</div>`;
}

function generateDataComponent(kebabCase: string, nhsukClass: string): string {
  const templates: Record<string, string> = {
    'summary-list': `<dl class="nhsuk-summary-list">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">Name</dt>
        <dd class="nhsuk-summary-list__value">Sarah Philips</dd>
      </div>
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">Date of birth</dt>
        <dd class="nhsuk-summary-list__value">5 January 1978</dd>
      </div>
    </dl>`,
    'table': `<div class="nhsuk-table-container">
      <table class="nhsuk-table">
        <caption class="nhsuk-table__caption">Skin symptoms and possible causes</caption>
        <thead class="nhsuk-table__head">
          <tr class="nhsuk-table__row">
            <th class="nhsuk-table__header" scope="col">Skin symptoms</th>
            <th class="nhsuk-table__header" scope="col">Possible cause</th>
          </tr>
        </thead>
        <tbody class="nhsuk-table__body">
          <tr class="nhsuk-table__row">
            <td class="nhsuk-table__cell">Blisters on lips or around the mouth</td>
            <td class="nhsuk-table__cell">cold sores</td>
          </tr>
        </tbody>
      </table>
    </div>`,
  };
  
  return templates[kebabCase] || `<div class="\${nhsukClass}">Sample \${kebabCase} data component</div>`;
}

function generateContentComponent(kebabCase: string, nhsukClass: string): string {
  const templates: Record<string, string> = {
    'hero': `<section class="nhsuk-hero">
      <div class="nhsuk-width-container nhsuk-hero--border">
        <div class="nhsuk-grid-row">
          <div class="nhsuk-grid-column-two-thirds">
            <div class="nhsuk-hero__wrapper">
              <h1 class="nhsuk-u-margin-bottom-3">We're here for you</h1>
              <p class="nhsuk-body-l nhsuk-u-margin-bottom-0">Helping you take control of your health and wellbeing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>`,
    'panel': `<div class="nhsuk-panel">
      <h3>If you need help now, but it's not an emergency</h3>
      <p>Go to <a href="#">111.nhs.uk</a> or call 111.</p>
    </div>`,
    'card': `<div class="nhsuk-card">
      <div class="nhsuk-card__content">
        <h3 class="nhsuk-card__heading">If you need help now, but it's not an emergency</h3>
        <p class="nhsuk-card__description">Go to 111.nhs.uk or call 111.</p>
      </div>
    </div>`,
    'tabs': `<div class="nhsuk-tabs" data-module="nhsuk-tabs">
      <h2 class="nhsuk-tabs__title">Contents</h2>
      <ul class="nhsuk-tabs__list">
        <li class="nhsuk-tabs__list-item nhsuk-tabs__list-item--selected">
          <a class="nhsuk-tabs__tab" href="#past-day">Past day</a>
        </li>
        <li class="nhsuk-tabs__list-item">
          <a class="nhsuk-tabs__tab" href="#past-week">Past week</a>
        </li>
      </ul>
      <div class="nhsuk-tabs__panel" id="past-day">
        <h3>Past day</h3>
        <p>Content for past day.</p>
      </div>
    </div>`,
    'details': `<details class="nhsuk-details">
      <summary class="nhsuk-details__summary">
        <span class="nhsuk-details__summary-text">Where to find your NHS number</span>
      </summary>
      <div class="nhsuk-details__text">
        <p>You can find your NHS number on any document sent to you by the NHS.</p>
      </div>
    </details>`,
    'inset-text': `<div class="nhsuk-inset-text">
      <span class="nhsuk-u-visually-hidden">Information: </span>
      <p>You can report any suspected side effect to the <a href="#">UK Safety Scheme</a>.</p>
    </div>`,
    'warning-callout': `<div class="nhsuk-warning-callout">
      <h3 class="nhsuk-warning-callout__label">
        <span role="text">
          <span class="nhsuk-u-visually-hidden">Important: </span>
          School, nursery or work
        </span>
      </h3>
      <p>Stay away from school, nursery or work until all the spots have crusted over.</p>
    </div>`,
    'do-dont-list': `<div class="nhsuk-do-dont-list">
      <h3 class="nhsuk-do-dont-list__label">Do</h3>
      <ul class="nhsuk-list nhsuk-do-dont-list__list">
        <li>
          <svg class="nhsuk-icon nhsuk-icon__tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" width="34" height="34">
            <path stroke-width="4" stroke-linecap="round" d="m6 12 2 2 8-8"></path>
          </svg>
          cover blisters that are likely to burst with a soft plaster or dressing
        </li>
      </ul>
    </div>`,
    'images': `<figure class="nhsuk-image">
      <img class="nhsuk-image__img" src="/placeholder-320x240.png" alt="Picture of eczema">
      <figcaption class="nhsuk-image__caption">
        Eczema usually causes red, itchy, dry, cracked skin.
      </figcaption>
    </figure>`,
    'task-list': `<ul class="nhsuk-task-list">
      <li class="nhsuk-task-list__item nhsuk-task-list__item--with-link">
        <div class="nhsuk-task-list__name-and-hint">
          <a class="nhsuk-task-list__link" href="#" aria-describedby="eligibility-completed">
            Check eligibility
          </a>
        </div>
        <div class="nhsuk-task-list__status nhsuk-task-list__status--completed" id="eligibility-completed">
          <span class="nhsuk-u-visually-hidden">Check eligibility </span>Completed
        </div>
      </li>
    </ul>`,
    'error-summary': `<div class="nhsuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1">
      <h2 class="nhsuk-error-summary__title" id="error-summary-title">There is a problem</h2>
      <div class="nhsuk-error-summary__body">
        <ul class="nhsuk-list nhsuk-error-summary__list">
          <li><a href="#example-error-1">Enter a valid email address</a></li>
        </ul>
      </div>
    </div>`,
  };
  
  return templates[kebabCase] || `<div class="\${nhsukClass}">Sample \${kebabCase} content component</div>`;
}

function generateDefaultComponent(kebabCase: string, nhsukClass: string): string {
  return `<div class="\${nhsukClass}">Sample \${kebabCase} component</div>`;
}

// Base HTML template
function createHTMLTemplate(title: string, componentHTML: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>\${title} - NHS UK Reference</title>
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
        
        /* Responsive adjustments for visual testing */
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
        <h1>NHS UK \${title} Component</h1>
        <div class="component-example">
            \${componentHTML}
        </div>
    </div>
    
    <!-- NHS UK Frontend JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/nhsuk-frontend@8.3.0/packages/nhsuk.min.js"></script>
    <script>
        // Initialize NHS UK components
        window.NHSFrontend.initAll();
    </script>
</body>
</html>`;
}

// Main generation function
async function generateAllComponents() {
  const baseDir = './tests/visual/reference';
  
  console.log(`🏗️ Generating NHS UK reference files for \${components.length} components...`);
  
  for (const component of components) {
    const { name, kebabCase } = component;
    const componentDir = path.join(baseDir, kebabCase);
    
    // Create component directory
    await fs.mkdir(componentDir, { recursive: true });
    
    // Generate component HTML
    const componentHTML = generateComponentHTML(component);
    const fullHTML = createHTMLTemplate(name, componentHTML);
    
    // Write default variant
    const defaultFile = path.join(componentDir, `\${kebabCase}-default.html`);
    await fs.writeFile(defaultFile, fullHTML, 'utf8');
    
    console.log(`✅ Generated: \${defaultFile}`);
    
    // Generate additional variants for some components
    if (kebabCase === 'button') {
      const secondaryHTML = createHTMLTemplate(`\${name} Secondary`, 
        `<button class="nhsuk-button nhsuk-button--secondary" data-module="nhsuk-button" type="button">Secondary button</button>`);
      await fs.writeFile(path.join(componentDir, `\${kebabCase}-secondary.html`), secondaryHTML, 'utf8');
    }
    
    if (kebabCase === 'tag') {
      const variantHTML = createHTMLTemplate(`\${name} Variants`,
        `<strong class="nhsuk-tag">New</strong>
         <strong class="nhsuk-tag nhsuk-tag--red">Urgent</strong>
         <strong class="nhsuk-tag nhsuk-tag--green">Active</strong>`);
      await fs.writeFile(path.join(componentDir, `\${kebabCase}-variants.html`), variantHTML, 'utf8');
    }
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
        <p>Complete reference library for visual testing comparison.</p>
        
        <h2>Available Components (${components.length} total)</h2>
        <ul class="nhsuk-list">
            ${components.map(c => `<li><a href="/${c.kebabCase}/${c.kebabCase}-default.html">${c.name}</a></li>`).join('\n            ')}
        </ul>
    </div>
</body>
</html>`;
  
  await fs.writeFile(path.join(baseDir, 'index.html'), indexHTML, 'utf8');
  
  console.log(`🎉 Generated \${components.length} NHS UK reference components successfully!`);
  console.log(`📁 Files saved to: \${baseDir}`);
  console.log(`🌐 Start server with: npx http-server \${baseDir} -p 3002 --cors`);
}

// Run the generator
generateAllComponents().catch(console.error);
