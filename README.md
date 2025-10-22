# AlphaTON Capital - Investor Relations Website

A modern, responsive investor relations website for AlphaTON Capital Corp., showcasing investment opportunities, team, corporate governance, and company information. Built with pure static HTML, CSS, and vanilla JavaScript for compliance with Notified HTML guidelines.

## ✨ Features

- 🎨 **Modern Design**: Glassmorphism theme with animated blob background
- 📱 **Responsive**: Mobile, tablet, and desktop optimized
- ♿ **Accessible**: WCAG 2.1 A/AA compliant
- 📊 **Stock Chart**: Real-time stock data integration with Alpha Vantage API
- 📰 **News Feed**: RSS feed integration for company updates
- 🔒 **Secure**: Static site with no server-side code
- ⚡ **Fast**: Optimized CSS (21KB), lazy-loaded images
- 🌐 **Cross-Browser**: Autoprefixed CSS for compatibility

## 🏗️ Project Structure

```
AlphaTonIR/
├── src/                    # Source files
│   ├── index.html         # Homepage
│   ├── news.html          # News & events
│   ├── team.html          # Leadership team
│   ├── governance.html    # Corporate governance
│   ├── contact.html       # Contact information
│   ├── faqs.html          # Frequently asked questions
│   ├── privacy.html       # Privacy policy
│   ├── terms.html         # Terms of use
│   ├── components/        # Reusable HTML components
│   │   ├── header.html    # Navigation header
│   │   └── footer.html    # Site footer
│   └── assets/            # All assets
│       ├── css/           # Stylesheets
│       ├── js/            # JavaScript files
│       ├── img/           # Images
│       ├── fonts/         # Web fonts
│       ├── icons/         # SVG icons
│       └── pdf/           # PDF documents
├── build/                 # Build configuration
│   ├── gulpfile.js       # Gulp build tasks
│   ├── package.json      # Dependencies
│   └── setup scripts     # Installation scripts
├── docs/                  # Documentation
└── dist/                  # Build output (generated)
```

## 🚀 Quick Start

### Prerequisites

- Node.js 14+ and npm 6+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/[username]/AlphaTonIR.git
cd AlphaTonIR

# Install dependencies
npm run install-deps
# or
cd build && npm install
```

### Development

```bash
# Development build
npm run dev

# Watch mode (auto-rebuild on changes)
npm run watch

# Production build
npm run build:production
```

### Testing Locally

```bash
# After building, open in browser
open dist/index.html
# or
cd dist && python -m http.server 8000
```

## 📦 Build System

### Available Commands

From **root directory**:
```bash
npm run install-deps          # Install build dependencies
npm run dev                   # Development build
npm run watch                 # Watch mode
npm run build:production      # Production build
npm run clean                 # Clean dist/ directory
```

From **build directory**:
```bash
cd build
npm run dev                   # Development build
npm run watch                 # Watch mode
npm run build:production      # Production build
```

### Build Features

- ✅ **CSS Optimization**: 89% size reduction (6,734 lines → 21KB)
- ✅ **Autoprefixer**: Cross-browser compatibility
- ✅ **Minification**: Production-ready files
- ✅ **Source Maps**: Development debugging
- ✅ **Asset Management**: Automatic copying
- ✅ **File Watching**: Auto-rebuild on changes

## 🌐 Deployment

### GitHub Pages (Automated)

The site automatically deploys to GitHub Pages on every push to `main`:

1. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Update site"
   git push origin main
   ```

2. **Monitor deployment**:
   - Go to **Actions** tab
   - Watch "Deploy to GitHub Pages" workflow

3. **Live site**:
   ```
   https://[username].github.io/AlphaTonIR/
   ```

See [GitHub Pages Deployment Guide](docs/GITHUB_PAGES_DEPLOYMENT.md) for details.

### Notified Platform

For official IR website deployment:

1. **Build production site**:
   ```bash
   npm run build:production
   ```

2. **Test locally**:
   - Open `dist/index.html`
   - Verify all functionality

3. **Create ZIP**:
   - Zip contents of `dist/` folder (not the folder itself)

4. **Upload to Notified**:
   - Submit ZIP through Notified platform

See [Build System Documentation](docs/BUILD_SYSTEM.md) for details.

## 🛠️ Technologies

### Core
- **HTML5**: Semantic markup
- **CSS3**: Custom framework with Tailwind-inspired utilities
- **JavaScript**: Vanilla ES6+

### Build Tools
- **Gulp**: Task automation
- **Autoprefixer**: CSS vendor prefixes
- **CleanCSS**: CSS minification
- **PurgeCSS**: Unused CSS removal

### APIs
- **Alpha Vantage**: Stock market data
- **RSS Feeds**: Company news

### Fonts & Icons
- **Red Hat Display**: Primary typeface
- **Tabler Icons**: SVG icon set

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- WCAG 2.1 Level A/AA compliant
- Semantic HTML structure
- ARIA attributes
- Keyboard navigation
- Screen reader friendly
- Color contrast ratios meet standards

## 📊 Performance

- **CSS**: 21KB (minified)
- **First Paint**: < 1s
- **Time to Interactive**: < 2s
- **Lighthouse Score**: 95+

## 🔧 Development

### File Organization

- **Source files**: Edit files in `src/`
- **Build config**: Modify files in `build/`
- **Documentation**: Update files in `docs/`
- **Build output**: Generated in `dist/`

### Adding New Pages

1. Create HTML file in `src/`
2. Use components: `header.html`, `footer.html`
3. Run build: `npm run dev`
4. Test in browser: `dist/[page].html`

### Customizing Styles

1. Edit `src/assets/css/unified.css`
2. Run watch mode: `npm run watch`
3. Changes auto-rebuild

### Adding Assets

- **Images**: `src/assets/img/`
- **Icons**: `src/assets/icons/`
- **Fonts**: `src/assets/fonts/`
- **PDFs**: `src/assets/pdf/`

## 📚 Documentation

- [Build System Guide](docs/BUILD_SYSTEM.md)
- [GitHub Pages Deployment](docs/GITHUB_PAGES_DEPLOYMENT.md)
- [Development Guide](docs/DEVELOPMENT.md)
- [Stock Chart Setup](docs/STOCK_CHART_README.md)
- [Notified HTML Guidelines](docs/notified_html_guidelines.md)

## 🤝 Contributing

This is a proprietary project for AlphaTON Capital Corp. For internal team members:

1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes in `src/` directory
3. Test locally: `npm run dev`
4. Commit changes: `git commit -m "feat: your feature"`
5. Push branch: `git push origin feature/your-feature`
6. Create pull request

## 📄 License

This project is proprietary to AlphaTON Capital Corp. All rights reserved.

## 🔗 Links

- **Live Site**: [GitHub Pages URL]
- **Official IR**: [Notified URL]
- **Company Website**: https://alphatoncapital.com

## 📞 Support

For questions or issues:
- **Email**: ir@alphatoncapital.com
- **Internal**: Contact development team

---

**Built with ❤️ for AlphaTON Capital Corp.**

**Last Updated**: January 2025  
**Version**: 1.0.0  
**Status**: ✅ Production Ready