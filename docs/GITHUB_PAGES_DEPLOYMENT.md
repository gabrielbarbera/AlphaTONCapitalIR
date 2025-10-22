# 🚀 GitHub Pages Deployment Guide

## Overview

This guide explains how to deploy the AlphaTON Capital IR website to GitHub Pages using automated GitHub Actions workflows.

## 📁 Deployment Strategy

### **What Gets Deployed**
Only the **`dist/`** folder is deployed to GitHub Pages, containing:
- ✅ Optimized CSS (21KB, minified)
- ✅ HTML pages
- ✅ JavaScript files
- ✅ Images, fonts, icons
- ✅ PDF documents

### **What Doesn't Get Deployed**
- ❌ Source files (`src/` directory)
- ❌ Build configuration (`build/` directory)
- ❌ Documentation (`docs/` directory)
- ❌ Node modules
- ❌ Development files

## 🔧 GitHub Pages Setup

### **Step 1: Enable GitHub Pages**

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Source: **GitHub Actions**
4. Save the settings

### **Step 2: Verify Workflow File**

The workflow file is already created at `.github/workflows/deploy.yml`. It will:
1. Trigger on pushes to `main` branch
2. Install Node.js dependencies
3. Run production build
4. Deploy only the `dist/` folder to GitHub Pages

### **Step 3: Push to GitHub**

```bash
# Add all changes
git add .

# Commit changes
git commit -m "Configure GitHub Pages deployment"

# Push to main branch
git push origin main
```

### **Step 4: Monitor Deployment**

1. Go to **Actions** tab in your GitHub repository
2. Watch the "Deploy to GitHub Pages" workflow
3. Once complete, your site will be live at:
   ```
   https://[username].github.io/[repository-name]/
   ```

## 🔄 Automated Deployment Workflow

### **Workflow Overview**

```yaml
name: Deploy to GitHub Pages

Triggers:
  - Push to main branch
  - Manual workflow dispatch

Jobs:
  1. Build:
     - Checkout code
     - Setup Node.js 18
     - Install dependencies from build/
     - Run production build
     - Upload dist/ folder as artifact
  
  2. Deploy:
     - Deploy artifact to GitHub Pages
     - Get deployment URL
```

### **Build Process**

The automated workflow runs these commands:
```bash
cd build
npm ci                      # Install dependencies
npm run build:production    # Build production site
```

This creates optimized files in `dist/`:
- **CSS**: 21KB (89% reduction)
- **HTML**: All pages copied
- **Assets**: All images, fonts, icons, PDFs
- **JavaScript**: All JS files copied

## 🎯 Manual Deployment

If you prefer to deploy manually:

### **Option 1: Using GitHub CLI**

```bash
# Build production site
cd build
npm run build:production
cd ..

# Deploy dist/ folder
gh workflow run deploy.yml
```

### **Option 2: Using Git Subtree**

```bash
# Build production site
cd build
npm run build:production
cd ..

# Deploy dist/ folder to gh-pages branch
git subtree push --prefix dist origin gh-pages
```

Then in GitHub Settings → Pages:
- Source: **Deploy from a branch**
- Branch: **gh-pages** / **(root)**

## 🔍 Troubleshooting

### **Workflow Fails on Build**

**Problem**: Build fails with dependency errors

**Solution**:
```bash
# Ensure dependencies are installed locally
cd build
npm install
npm run build:production

# If successful, commit package-lock.json
git add build/package-lock.json
git commit -m "Update package-lock.json"
git push
```

### **Pages Not Updating**

**Problem**: Changes pushed but site not updating

**Solution**:
1. Check Actions tab for workflow status
2. Ensure workflow completed successfully
3. Clear browser cache
4. Wait 1-2 minutes for CDN propagation

### **404 Errors on Page Refresh**

**Problem**: Pages work when clicking links but 404 on refresh

**Solution**: GitHub Pages doesn't support client-side routing by default. For Notified deployment, this isn't an issue since all pages are static HTML.

### **Missing Assets**

**Problem**: Images, CSS, or JS not loading

**Solution**:
1. Check that assets exist in `dist/` after build
2. Verify paths in HTML are relative (not absolute)
3. Ensure all assets are in `src/assets/` before build

## 📋 Pre-Deployment Checklist

Before pushing to GitHub:

- [ ] Run production build locally: `cd build && npm run build:production`
- [ ] Test `dist/index.html` in browser
- [ ] Verify all pages load correctly
- [ ] Check all images load
- [ ] Test navigation links
- [ ] Verify CSS styling is correct
- [ ] Test mobile responsiveness
- [ ] Check form functionality (contact form)
- [ ] Verify stock chart displays
- [ ] Test PDF downloads

## 🎨 Custom Domain Setup

To use a custom domain with GitHub Pages:

### **Step 1: Add CNAME File**

Create a file named `CNAME` in the `src/` directory:
```
ir.alphatoncapital.com
```

### **Step 2: Update gulpfile.js**

Add CNAME to the files copied:

```javascript
gulp.task("html", function () {
  return gulp
    .src(["../src/*.html", "../src/components/*.html", "../src/CNAME"])
    .pipe(gulp.dest(config.dist.root))
    ...
});
```

### **Step 3: Configure DNS**

In your domain registrar (e.g., Cloudflare, GoDaddy):

For apex domain (alphatoncapital.com):
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

For subdomain (ir.alphatoncapital.com):
```
Type: CNAME
Name: ir
Value: [username].github.io
```

### **Step 4: Enable HTTPS**

In GitHub Settings → Pages:
- Check "Enforce HTTPS"

## 🔐 Environment-Specific Configuration

### **Development vs Production**

The build system automatically handles:
- **Development**: Source maps, beautified CSS
- **Production**: Minified CSS, no source maps

### **API Keys and Secrets**

For Alpha Vantage API key:

1. **Option 1: Environment Variables** (Recommended)
   ```yaml
   # In .github/workflows/deploy.yml
   - name: Build production site
     env:
       ALPHA_VANTAGE_API_KEY: ${{ secrets.ALPHA_VANTAGE_API_KEY }}
     run: |
       cd build
       npm run build:production
   ```

2. **Option 2: Placeholder Replacement**
   - Keep placeholder in `src/assets/js/api-config.js`
   - Replace during build with actual key
   - Add script to gulpfile.js

## 📊 Deployment Monitoring

### **Check Deployment Status**

```bash
# Using GitHub CLI
gh run list --workflow=deploy.yml

# View specific run
gh run view [run-id]

# View logs
gh run view [run-id] --log
```

### **Deployment Metrics**

- **Build Time**: ~1.5 seconds
- **Deploy Time**: ~30-60 seconds
- **Total Time**: ~2 minutes from push to live

## 🎯 Best Practices

### **Before Every Deploy**

1. ✅ Test locally first
2. ✅ Run production build
3. ✅ Check dist/ folder
4. ✅ Commit with clear message
5. ✅ Monitor workflow

### **Commit Messages**

Use clear, descriptive commit messages:
```bash
git commit -m "feat: Add new team member profile"
git commit -m "fix: Correct contact form validation"
git commit -m "style: Update homepage hero section"
git commit -m "docs: Update governance documents"
```

### **Branch Strategy**

- **main**: Production-ready code
- **develop**: Development branch (optional)
- **feature/***: Feature branches (optional)

## 🚀 Deployment Commands Reference

### **Full Deployment**
```bash
# From root directory
cd build
npm run build:production
cd ..
git add .
git commit -m "Deploy: [description]"
git push origin main
```

### **Quick Deploy**
```bash
# Using root package.json
npm run build:production
git add dist/
git commit -m "Update production build"
git push
```

### **Manual Workflow Trigger**
```bash
# Using GitHub CLI
gh workflow run deploy.yml

# Or via GitHub UI
# Actions → Deploy to GitHub Pages → Run workflow
```

## 📝 Notes for Notified Deployment

GitHub Pages deployment is separate from Notified deployment:

- **GitHub Pages**: Automatic deployment for testing/preview
- **Notified**: Manual ZIP upload for official IR site

Both use the same `dist/` folder, so testing on GitHub Pages ensures Notified deployment will work.

---

## 🎊 Summary

- ✅ **Automated deployment** on every push to main
- ✅ **Only dist/ deployed** - clean, optimized files
- ✅ **Fast builds** - ~2 minutes from push to live
- ✅ **Custom domain** - easy to configure
- ✅ **Secure** - HTTPS enforced
- ✅ **Notified-compatible** - same build for both platforms

**Live URL**: `https://[username].github.io/[repository-name]/`

---

**Last Updated**: January 2025  
**GitHub Pages Status**: ✅ Configured  
**Automated Deployment**: ✅ Enabled
