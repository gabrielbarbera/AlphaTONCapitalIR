# AlphaTON Capital IR Website - Build System

## Overview

This Gulp-based build system automatically optimizes the AlphaTON Capital investor relations website for Notified HTML compliance while maintaining all functionality.

## Features

- ✅ **CSS Purging**: Removes unused CSS classes automatically
- ✅ **Autoprefixer**: Adds vendor prefixes for cross-browser compatibility
- ✅ **CSS Minification**: Optimizes CSS for production
- ✅ **Source Maps**: Enables debugging in development
- ✅ **File Watching**: Automatic rebuilds on file changes
- ✅ **Notified Compliance**: Outputs clean, optimized files ready for upload

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Mode

```bash
npm run dev
# or
gulp dev
```

This will:
- Clean the `dist/` directory
- Process CSS (purge unused classes, add prefixes)
- Copy all files to `dist/`
- Generate source maps for debugging

### 3. Watch Mode (Recommended for Development)

```bash
npm run watch
# or
gulp watch
```

This will:
- Watch for file changes
- Automatically rebuild when files are modified
- Perfect for active development

### 4. Production Build

```bash
npm run build:production
# or
gulp build:production
```

This will:
- Create optimized, minified CSS
- Remove source maps
- Prepare files for Notified upload

## Build Output

All processed files are output to the `dist/` directory:

```
dist/
├── assets/
│   ├── css/
│   │   └── unified.min.css    # Optimized CSS
│   ├── js/                    # JavaScript files
│   ├── img/                   # Images
│   ├── fonts/                 # Font files
│   ├── icons/                 # SVG icons
│   └── pdf/                   # PDF documents
├── components/                # HTML components
├── *.html                     # All HTML pages
└── README.md                  # This file
```

## CSS Optimization Details

### PurgeCSS Configuration

The build system uses PurgeCSS to remove unused CSS classes while preserving:

- **Safelist Classes**: Critical classes that might be added dynamically
- **Pattern Matching**: Regex patterns for dynamic class generation
- **Tailwind Utilities**: All Tailwind CSS utility classes
- **Custom Classes**: AlphaTON-specific classes and animations

### Safelist Includes

- Animation classes (`animate-spin`, `animate-slide-down`)
- Focus states (`focus:outline-none`, `focus:ring-2`)
- Hover states (`hover:bg-alphaton-primary`, `hover:scale-105`)
- Custom AlphaTON classes (`bg-alphaton-dark`, `text-alphaton-primary`)
- Form classes (`form-input`, `form-textarea`)
- Chart.js classes (`chart-container`, `chart-loading`)

### Autoprefixer Configuration

Automatically adds vendor prefixes for:
- CSS Grid (`display: grid`)
- Flexbox properties
- Transform properties
- Transition properties
- Modern CSS features

## Notified Compliance Features

### ✅ Static HTML Compliance
- Pure HTML, CSS, and vanilla JavaScript
- No server-side code
- All assets locally hosted
- Relative paths maintained

### ✅ WCAG 2.1 A/AA Accessibility
- Semantic HTML structure preserved
- ARIA attributes maintained
- Focus states optimized
- Color contrast ratios preserved

### ✅ Cross-Browser Compatibility
- Vendor prefixes added automatically
- Modern CSS features with fallbacks
- Progressive enhancement approach

### ✅ Performance Optimization
- Unused CSS removed (typically 60-80% reduction)
- Minified CSS for production
- Optimized file structure

## File Structure

```
AlphaTonIR/
├── gulpfile.js              # Gulp configuration
├── package.json             # Dependencies and scripts
├── assets/
│   ├── css/
│   │   └── unified.css      # Source CSS (6,734 lines)
│   └── js/                  # JavaScript files
├── components/              # HTML components
├── dist/                    # Build output (generated)
└── *.html                   # HTML pages
```

## Development Workflow

### 1. Make Changes
Edit files in the source directories:
- `assets/css/unified.css` - CSS changes
- `*.html` - HTML changes
- `components/*.html` - Component changes
- `assets/js/*.js` - JavaScript changes

### 2. Automatic Rebuild
If using `gulp watch`, changes are automatically processed.

### 3. Test Locally
Open `dist/index.html` in your browser to test changes.

### 4. Production Build
Run `npm run build:production` before deploying to Notified.

## Troubleshooting

### CSS Classes Missing After Build

If you notice missing CSS classes after building:

1. **Check Safelist**: Add the class to the `safelist` array in `gulpfile.js`
2. **Check Patterns**: Add a regex pattern to `safelistPatterns`
3. **Verify Content Files**: Ensure the class is used in watched files

### Build Errors

1. **Dependencies**: Run `npm install` to ensure all packages are installed
2. **Node Version**: Requires Node.js 14+ and npm 6+
3. **File Permissions**: Ensure write access to the `dist/` directory

### Performance Issues

1. **Large CSS File**: The source `unified.css` is 6,734 lines - this is normal
2. **Build Time**: First build may take 10-15 seconds
3. **Watch Mode**: Subsequent builds are much faster

## Advanced Configuration

### Customizing PurgeCSS

Edit the `config` object in `gulpfile.js`:

```javascript
const config = {
  // Add more content files to scan
  content: [
    '*.html',
    'components/*.html',
    'assets/js/**/*.js',
    'custom/**/*.html'  // Add custom paths
  ],
  
  // Add more classes to always keep
  safelist: [
    'my-custom-class',
    'another-class'
  ],
  
  // Add more regex patterns
  safelistPatterns: [
    /^my-prefix-/,
    /^custom-/
  ]
};
```

### Customizing Autoprefixer

Modify the autoprefixer options:

```javascript
.pipe(autoprefixer({
  cascade: false,
  grid: 'autoplace',
  overrideBrowserslist: [
    '> 1%',
    'last 2 versions',
    'not dead'
  ]
}))
```

## Deployment to Notified

### 1. Production Build
```bash
npm run build:production
```

### 2. Test Locally
Open `dist/index.html` and verify:
- All pages load correctly
- CSS styling is intact
- JavaScript functionality works
- All assets load properly

### 3. Create ZIP Package
Zip the entire `dist/` directory contents (not the `dist/` folder itself).

### 4. Upload to Notified
Upload the ZIP file through the Notified platform.

## Monitoring and Maintenance

### Regular Tasks

1. **Update Dependencies**: Run `npm update` monthly
2. **Test Builds**: Verify builds work after dependency updates
3. **Review Safelist**: Add new classes as needed
4. **Performance Check**: Monitor CSS file sizes

### File Size Monitoring

- **Source CSS**: ~6,734 lines (development)
- **Production CSS**: Typically 1,500-2,500 lines (60-70% reduction)
- **Minified CSS**: ~50-100KB (compressed)

## Support

For issues with the build system:

1. Check this documentation
2. Review the `gulpfile.js` configuration
3. Verify all dependencies are installed
4. Test with a clean `dist/` directory

---

**Last Updated**: January 2025  
**Version**: 1.0.0  
**Compatibility**: Node.js 14+, Notified HTML Guidelines
