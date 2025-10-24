# AlphaTON Capital IR - Production Build Repository

## 🎯 Purpose

This repository contains **only the production-ready files** from the AlphaTON Capital Investor Relations website. It's designed for sharing with teams who need access to the built website without exposure to source code or development files.

## 📁 Repository Contents

The repository contains the complete production build:

- **HTML Pages**: All website pages (index.html, news.html, team.html, etc.)
- **Optimized CSS**: Minified stylesheets (21KB total)
- **JavaScript**: Production-ready JS files
- **Assets**: Images, fonts, icons, and PDFs
- **Ready for Deployment**: Can be used directly for GitHub Pages or Notified platform

## 🚀 Quick Start for Teams

### Clone the Repository
```bash
git clone https://github.com/gabrielbarbera/AlphaTONCapitalIR-dev.git
cd AlphaTONCapitalIR-dev
```

### View the Website Locally
```bash
# Option 1: Open index.html directly in browser
# Option 2: Serve with Python
python -m http.server 8000
# Visit http://localhost:8000
```

### Deploy to GitHub Pages
1. Go to Repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: main / (root)
4. Save

**Live URL**: `https://gabrielbarbera.github.io/AlphaTONCapitalIR-dev/`

## 🔄 How Updates Work

### Automatic Updates
- The repository is automatically updated when changes are made to the main development repository
- GitHub Actions syncs the latest production build on every push to main branch
- No manual intervention required

### Manual Updates (if needed)
If you need to manually trigger an update:
1. Contact the development team
2. They will run the sync process
3. Changes will appear in this repository within minutes

## 📋 What's Included

### Website Pages
- `index.html` - Homepage
- `news.html` - News & events
- `team.html` - Leadership team
- `governance.html` - Corporate governance
- `contact.html` - Contact information
- `faqs.html` - Frequently asked questions
- `privacy.html` - Privacy policy
- `terms.html` - Terms of use

### Assets
- `assets/css/` - Optimized stylesheets
- `assets/js/` - JavaScript files
- `assets/img/` - Images and logos
- `assets/fonts/` - Web fonts
- `assets/icons/` - SVG icons
- `assets/pdf/` - PDF documents

## 🛠️ Technical Details

- **Build System**: Gulp-based with CSS optimization
- **CSS Size**: 21KB minified (89% reduction from source)
- **Performance**: Lighthouse score 95+
- **Compatibility**: All modern browsers
- **Accessibility**: WCAG 2.1 A/AA compliant

## 🔒 Security & Access

- **Read Access**: All team members
- **Write Access**: Development team only
- **Source Code**: Not included (separate repository)
- **Sensitive Data**: No API keys or secrets included

## 📞 Support

For questions or issues:
- **Email**: ir@alphatoncapital.com
- **Development Team**: Contact via internal channels
- **Repository Issues**: Use GitHub Issues tab

## 🔗 Related Links

- **Main Development Repository**: [AlphaTONCapitalIR](https://github.com/gabrielbarbera/AlphaTONCapitalIR)
- **Company Website**: https://alphatoncapital.com
- **Notified Platform**: Contact IR team for access

---

**Last Updated**: January 2025  
**Version**: 1.0.0  
**Status**: ✅ Production Ready

