# 🚀 Deployment Quick Start Guide

## GitHub Pages Deployment (Automated)

### One-Time Setup

1. **Enable GitHub Pages**:
   - Go to **Settings** → **Pages**
   - Source: Select **GitHub Actions**

2. **That's it!** The workflow is already configured.

### Every Deployment

```bash
# Make your changes in src/
# ...

# Commit and push
git add .
git commit -m "Your changes"
git push origin main

# Automatically deploys to:
# https://[username].github.io/AlphaTonIR/
```

### Monitor Deployment

- Go to **Actions** tab
- Watch "Deploy to GitHub Pages" workflow
- Wait ~2 minutes for deployment

---

## Notified Platform Deployment (Manual)

### Steps

```bash
# 1. Build production site
cd build
npm run build:production
cd ..

# 2. Test locally
# Open dist/index.html in browser
# Verify everything works

# 3. Create ZIP
# Zip the CONTENTS of dist/ folder
# (not the dist folder itself)

# 4. Upload to Notified
# Submit ZIP through Notified platform
```

### Pre-Upload Checklist

- [ ] All pages load correctly
- [ ] Images display properly
- [ ] CSS styling is intact
- [ ] JavaScript works (stock chart, forms)
- [ ] Navigation functions
- [ ] Mobile responsive
- [ ] PDFs download correctly

---

## Quick Commands

```bash
# Development with auto-rebuild
npm run watch

# Production build
npm run build:production

# Clean and rebuild
npm run clean
cd build && npm run dev

# Test locally
cd dist && python -m http.server 8000
```

---

## Deployment Workflow

```
1. Edit files in src/
2. Run: npm run watch (auto-builds on save)
3. Test in dist/
4. Commit changes
5. Push to GitHub (auto-deploys)
6. For Notified: Build → ZIP → Upload
```

---

## Troubleshooting

**Build fails?**
```bash
cd build
npm install
npm run build:production
```

**Assets not loading?**
- Check paths are relative (not absolute)
- Verify files exist in src/assets/
- Rebuild: `npm run build:production`

**GitHub Pages not updating?**
- Check Actions tab for errors
- Clear browser cache
- Wait 1-2 minutes

---

## Files That Get Deployed

✅ **Deployed to GitHub Pages / Notified**:
- dist/\*.html (all pages)
- dist/assets/css/ (optimized CSS)
- dist/assets/js/ (JavaScript)
- dist/assets/img/ (images)
- dist/assets/fonts/ (fonts)
- dist/assets/icons/ (icons)
- dist/assets/pdf/ (documents)

❌ **Not Deployed**:
- src/ (source files)
- build/ (build configuration)
- docs/ (documentation)
- node_modules/ (dependencies)

---

**For detailed instructions, see [GitHub Pages Deployment Guide](docs/GITHUB_PAGES_DEPLOYMENT.md)**
