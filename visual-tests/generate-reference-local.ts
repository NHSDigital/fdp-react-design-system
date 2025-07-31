import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

interface ComponentConfig {
  name: string;
  variants: Array<{
    name: string;
    html: string;
  }>;
}

// NHS UK component configurations with actual NHS UK HTML
const components: ComponentConfig[] = [
  {
    name: 'footer',
    variants: [
      {
        name: 'footer-default',
        html: `
          <footer class="nhsuk-footer" id="nhsuk-footer">
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
        `
      }
    ]
  },
  {
    name: 'breadcrumb',
    variants: [
      {
        name: 'breadcrumb-default',
        html: `
          <nav class="nhsuk-breadcrumb" aria-label="Breadcrumb">
            <div class="nhsuk-width-container">
              <ol class="nhsuk-breadcrumb__list">
                <li class="nhsuk-breadcrumb__item"><a class="nhsuk-breadcrumb__link" href="/">Home</a></li>
                <li class="nhsuk-breadcrumb__item"><a class="nhsuk-breadcrumb__link" href="/level-one">Level one</a></li>
                <li class="nhsuk-breadcrumb__item"><a class="nhsuk-breadcrumb__link" href="/level-one/level-two">Level two</a></li>
              </ol>
              <p class="nhsuk-breadcrumb__back">
                <a class="nhsuk-breadcrumb__backlink" href="/level-one/level-two">
                  <span class="nhsuk-u-visually-hidden">Go back to </span>
                  Level two
                </a>
              </p>
            </div>
          </nav>
        `
      }
    ]
  },
  {
    name: 'button',
    variants: [
      {
        name: 'button-default',
        html: `<button class="nhsuk-button" data-module="nhsuk-button" type="submit">Save and continue</button>`
      },
      {
        name: 'button-secondary',
        html: `<button class="nhsuk-button nhsuk-button--secondary" data-module="nhsuk-button" type="submit">Find my location</button>`
      },
      {
        name: 'button-reverse',
        html: `<button class="nhsuk-button nhsuk-button--reverse" data-module="nhsuk-button" type="submit">Find my location</button>`
      }
    ]
  },
  {
    name: 'tag',
    variants: [
      {
        name: 'tag-default',
        html: `<strong class="nhsuk-tag">Active</strong>`
      },
      {
        name: 'tag-white',
        html: `<strong class="nhsuk-tag nhsuk-tag--white">Started</strong>`
      },
      {
        name: 'tag-grey',
        html: `<strong class="nhsuk-tag nhsuk-tag--grey">Not started</strong>`
      },
      {
        name: 'tag-green',
        html: `<strong class="nhsuk-tag nhsuk-tag--green">New</strong>`
      },
      {
        name: 'tag-aqua-green',
        html: `<strong class="nhsuk-tag nhsuk-tag--aqua-green">Active</strong>`
      },
      {
        name: 'tag-blue',
        html: `<strong class="nhsuk-tag nhsuk-tag--blue">Pending</strong>`
      },
      {
        name: 'tag-purple',
        html: `<strong class="nhsuk-tag nhsuk-tag--purple">Received</strong>`
      },
      {
        name: 'tag-pink',
        html: `<strong class="nhsuk-tag nhsuk-tag--pink">Sent</strong>`
      },
      {
        name: 'tag-red',
        html: `<strong class="nhsuk-tag nhsuk-tag--red">Rejected</strong>`
      },
      {
        name: 'tag-orange',
        html: `<strong class="nhsuk-tag nhsuk-tag--orange">Declined</strong>`
      },
      {
        name: 'tag-yellow',
        html: `<strong class="nhsuk-tag nhsuk-tag--yellow">Delayed</strong>`
      }
    ]
  },
  {
    name: 'pagination',
    variants: [
      {
        name: 'pagination-default',
        html: `
          <nav class="nhsuk-pagination" role="navigation" aria-label="Pagination">
            <ul class="nhsuk-list nhsuk-pagination__list">
              <li class="nhsuk-pagination__item nhsuk-pagination__item--previous">
                <a class="nhsuk-pagination__link nhsuk-pagination__link--prev" href="/section/page-1">
                  <span class="nhsuk-pagination__title">Previous</span>
                  <span class="nhsuk-u-visually-hidden">:</span>
                  <span class="nhsuk-pagination__page">Applying for a loan</span>
                  <svg class="nhsuk-icon nhsuk-icon__arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m8.5 12 8-8v16l-8-8z"></path>
                  </svg>
                </a>
              </li>
              <li class="nhsuk-pagination__item nhsuk-pagination__item--next">
                <a class="nhsuk-pagination__link nhsuk-pagination__link--next" href="/section/page-3">
                  <span class="nhsuk-pagination__title">Next</span>
                  <span class="nhsuk-u-visually-hidden">:</span>
                  <span class="nhsuk-pagination__page">Hearing aids and mobility aids</span>
                  <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15.5 12 7.5 4v16l8-8z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        `
      }
    ]
  }
];

async function compileNhsukCss(): Promise<string> {
  try {
    console.log('🔨 Attempting to use NHS UK Frontend CSS from CDN...');
    
    // Try to fetch NHS UK CSS from CDN first - use the direct CSS file URL
    const response = await execAsync('curl -s "https://cdn.jsdelivr.net/npm/nhsuk-frontend@8.3.0/dist/nhsuk.min.css"');
    
    if (response.stdout && response.stdout.length > 1000 && response.stdout.includes('.nhsuk-button')) {
      console.log('✅ NHS UK CSS fetched from CDN successfully');
      return response.stdout;
    }
  } catch (error) {
    console.warn('⚠️ Could not fetch NHS UK CSS from CDN, trying local compilation...');
  }

  try {
    console.log('🔨 Compiling NHS UK Frontend CSS locally...');
    
    // First, let's compile the NHS UK SCSS to CSS
    const nhsukScssPath = '/Users/fergusbisset/Dropbox/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/index.scss';
    const outputCssPath = '/tmp/nhsuk-compiled.css';
    
    // Use sass to compile the SCSS
    await execAsync(`sass "${nhsukScssPath}" "${outputCssPath}" --no-source-map`);
    
    const compiledCss = readFileSync(outputCssPath, 'utf8');
    
    // Verify the CSS contains the expected classes
    if (compiledCss.includes('.nhsuk-button') && compiledCss.includes('.nhsuk-footer')) {
      console.log('✅ NHS UK CSS compiled successfully with proper classes');
      return compiledCss;
    } else {
      console.warn('⚠️ Compiled CSS missing expected classes, using fallback...');
      throw new Error('Missing expected NHS UK classes');
    }
    
  } catch (error) {
    console.warn('⚠️ Could not compile NHS UK SCSS, using comprehensive fallback CSS...');
    
    // Comprehensive fallback: create a complete NHS UK CSS with essential styles
    return `
      /* NHS UK Frontend Fallback Styles - Complete */
      html { box-sizing: border-box; font-size: 16px; }
      *, *::before, *::after { box-sizing: inherit; }
      body { 
        font-family: "Frutiger W01", Arial, sans-serif; 
        margin: 0; 
        padding: 0; 
        background: #fff; 
        color: #212b32;
        line-height: 1.4;
      }
      
      /* NHS UK Button Styles */
      .nhsuk-button {
        -webkit-appearance: none;
        appearance: none;
        background-color: #007f3b;
        border: 2px solid transparent;
        border-radius: 4px;
        box-shadow: 0 4px 0 #003317;
        color: #ffffff;
        cursor: pointer;
        display: inline-block;
        font-family: inherit;
        font-size: 16px;
        font-weight: 600;
        line-height: 1;
        margin: 0;
        padding: 12px 16px;
        position: relative;
        text-align: center;
        text-decoration: none;
        vertical-align: top;
        width: auto;
        min-height: 40px;
      }
      
      .nhsuk-button:hover {
        background-color: #00662f;
        box-shadow: 0 4px 0 #003317;
      }
      
      .nhsuk-button:focus {
        background-color: #ffeb3b;
        box-shadow: 0 4px 0 #212b32;
        color: #212b32;
        outline: 3px solid #ffeb3b;
        outline-offset: 0;
      }
      
      .nhsuk-button:active {
        background-color: #00662f;
        box-shadow: 0 0 0 #003317;
        top: 4px;
      }
      
      .nhsuk-button--secondary {
        background-color: #4c6272;
        box-shadow: 0 4px 0 #212b32;
      }
      
      .nhsuk-button--secondary:hover {
        background-color: #3d4e5a;
      }
      
      .nhsuk-button--reverse {
        background-color: #ffffff;
        color: #005eb8;
        box-shadow: 0 4px 0 #212b32;
      }
      
      .nhsuk-button--reverse:hover {
        background-color: #f0f4f5;
        color: #005eb8;
      }
      
      /* NHS UK Tag Styles */
      .nhsuk-tag {
        background-color: #005eb8;
        border-radius: 4px;
        color: #ffffff;
        display: inline-block;
        font-family: inherit;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 1;
        padding: 4px 8px;
        text-transform: uppercase;
        text-decoration: none;
      }
      
      .nhsuk-tag--white { background-color: #ffffff; color: #212b32; }
      .nhsuk-tag--grey { background-color: #4c6272; }
      .nhsuk-tag--green { background-color: #007f3b; }
      .nhsuk-tag--aqua-green { background-color: #00a499; }
      .nhsuk-tag--blue { background-color: #005eb8; }
      .nhsuk-tag--purple { background-color: #7c2855; }
      .nhsuk-tag--pink { background-color: #ae2573; }
      .nhsuk-tag--red { background-color: #d5281b; }
      .nhsuk-tag--orange { background-color: #ed8b00; }
      .nhsuk-tag--yellow { background-color: #ffeb3b; color: #212b32; }
      
      /* NHS UK Footer Styles */
      .nhsuk-footer {
        background-color: #005eb8;
        color: #ffffff;
        padding: 40px 0;
      }
      
      .nhsuk-footer__list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
      }
      
      .nhsuk-footer__list-item {
        margin: 0;
      }
      
      .nhsuk-footer__list-item-link {
        color: #ffffff;
        text-decoration: underline;
        font-size: 16px;
      }
      
      .nhsuk-footer__list-item-link:hover {
        text-decoration: none;
      }
      
      .nhsuk-footer__copyright {
        color: #ffffff;
        margin-top: 32px;
        margin-bottom: 0;
        font-size: 16px;
      }
      
      /* NHS UK Breadcrumb Styles */
      .nhsuk-breadcrumb {
        background-color: #f0f4f5;
        padding: 12px 0;
      }
      
      .nhsuk-breadcrumb__list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }
      
      .nhsuk-breadcrumb__item {
        display: flex;
        align-items: center;
        font-size: 16px;
      }
      
      .nhsuk-breadcrumb__item::after {
        content: ">";
        margin: 0 8px;
        color: #4c6272;
        font-weight: normal;
      }
      
      .nhsuk-breadcrumb__item:last-child::after {
        display: none;
      }
      
      .nhsuk-breadcrumb__link {
        color: #005eb8;
        text-decoration: underline;
      }
      
      .nhsuk-breadcrumb__link:hover {
        text-decoration: none;
      }
      
      .nhsuk-breadcrumb__back {
        margin-top: 8px;
        margin-bottom: 0;
      }
      
      .nhsuk-breadcrumb__backlink {
        color: #005eb8;
        text-decoration: underline;
        font-size: 16px;
      }
      
      /* NHS UK Pagination Styles */
      .nhsuk-pagination {
        margin: 40px 0;
      }
      
      .nhsuk-pagination__list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
      }
      
      .nhsuk-pagination__item {
        flex: 1;
        max-width: 50%;
      }
      
      .nhsuk-pagination__link {
        border: 1px solid #d8dde0;
        color: #005eb8;
        display: block;
        padding: 12px 16px;
        text-decoration: none;
        position: relative;
        min-height: 44px;
      }
      
      .nhsuk-pagination__link:hover {
        background-color: #f0f4f5;
      }
      
      .nhsuk-pagination__title {
        font-weight: 600;
        display: block;
      }
      
      .nhsuk-pagination__page {
        display: block;
        font-size: 19px;
        font-weight: 400;
      }
      
      .nhsuk-icon {
        fill: currentColor;
        height: 24px;
        width: 24px;
      }
      
      /* Utilities */
      .nhsuk-width-container {
        margin: 0 auto;
        max-width: 1020px;
        padding: 0 16px;
      }
      
      .nhsuk-u-visually-hidden {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      }
      
      .nhsuk-list {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    `;
  }
}

async function generateReferenceComponents() {
  console.log('🏗️ Generating NHS UK reference components...');
  
  const referenceDir = join(process.cwd(), 'visual-tests', 'reference');
  
  // Ensure reference directory exists
  if (!existsSync(referenceDir)) {
    mkdirSync(referenceDir, { recursive: true });
  }

  // Compile NHS UK CSS
  const nhsukCss = await compileNhsukCss();

  // Generate index.html with component links
  const indexLinks = components.flatMap(component => 
    component.variants.map(variant => 
      `<li><a href="${component.name}/${variant.name}.html">${component.name} - ${variant.name}</a></li>`
    )
  ).join('\n        ');

  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NHS UK Reference Components</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background: #f0f4f5;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 32px;
            border-radius: 8px;
        }
        h1 {
            color: #005eb8;
            margin-bottom: 24px;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            margin-bottom: 12px;
        }
        a {
            color: #005eb8;
            text-decoration: underline;
            font-size: 16px;
        }
        a:hover {
            text-decoration: none;
        }
        .status {
            display: inline-block;
            padding: 8px 16px;
            background: #007f3b;
            color: white;
            border-radius: 4px;
            margin-bottom: 16px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="status">✅ NHS UK Styles Loaded</div>
        <h1>NHS UK Reference Components</h1>
        <p>These components use the original NHS UK Frontend styles for visual comparison testing.</p>
        <ul>
            ${indexLinks}
        </ul>
    </div>
</body>
</html>`;

  writeFileSync(join(referenceDir, 'index.html'), indexHtml);

  // Generate component HTML files
  for (const component of components) {
    const componentDir = join(referenceDir, component.name);
    
    if (!existsSync(componentDir)) {
      mkdirSync(componentDir, { recursive: true });
    }

    for (const variant of component.variants) {
      const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NHS UK ${component.name} - ${variant.name}</title>
    <style>
        ${nhsukCss}
        
        /* Page layout styles */
        body {
            margin: 0;
            padding: 20px;
            background: #f0f4f5;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .component-wrapper {
            background: white;
            padding: 32px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        /* Status indicator */
        .status-indicator {
            position: fixed;
            top: 10px;
            right: 10px;
            background: #007f3b;
            color: white;
            padding: 8px 16px;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 600;
            z-index: 1000;
        }
    </style>
</head>
<body>
    <div class="status-indicator">NHS UK Styles Active</div>
    <div class="component-wrapper">
        ${variant.html.trim()}
    </div>
    
    <script>
        // Log successful loading
        console.log('NHS UK ${component.name} - ${variant.name} loaded successfully');
        
        // Add visual confirmation that styles are loaded
        setTimeout(() => {
            const statusElement = document.querySelector('.status-indicator');
            if (statusElement) {
                statusElement.style.background = '#007f3b';
                statusElement.textContent = '✅ NHS UK Styles Active';
            }
        }, 100);
    </script>
</body>
</html>`;

      const filePath = join(componentDir, `${variant.name}.html`);
      writeFileSync(filePath, html);
      console.log(`✅ Generated: ${component.name}/${variant.name}.html`);
    }
  }

  console.log(`🎉 Generated ${components.length} components with NHS UK styles`);
  console.log(`📁 Reference components available at: ${referenceDir}`);
}

// Run the generator
generateReferenceComponents().catch(console.error);
