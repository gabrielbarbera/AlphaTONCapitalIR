# 🌐 Local Development Server Setup

## ✅ Browser-Sync Integration Complete!

### 🚀 Available Development Commands

**From Root Directory:**
```bash
# Watch files and serve with live reload
npm run watch

# Build and serve (one-time)
npm run dev:serve

# Serve existing dist folder
npm run serve

# Build only (no server)
npm run dev
```

**From Build Directory:**
```bash
cd build

# Watch files and serve with live reload
npm run watch

# Build and serve (one-time)
npm run dev:serve

# Serve existing dist folder
npm run serve

# Build only (no server)
npm run dev
```

### 🌐 Local Development URLs

**Primary Development Server:**
- **URL**: `http://localhost:3000`
- **Command**: `npm run watch`
- **Features**: 
  - ✅ Live reload on file changes
  - ✅ Auto-opens browser
  - ✅ Watches all source files
  - ✅ Rebuilds automatically

**Alternative Server Options:**
- **Serve Only**: `npm run serve` (serves existing dist folder)
- **Build + Serve**: `npm run dev:serve` (builds then serves)

### 🔄 How It Works

**Watch Mode (`npm run watch`):**
1. **Starts Browser-Sync server** on port 3000
2. **Opens browser** automatically to `http://localhost:3000`
3. **Watches source files** for changes:
   - CSS files → Rebuilds CSS
   - HTML files → Rebuilds HTML with includes
   - JavaScript files → Rebuilds JS
   - Assets → Copies assets
4. **Auto-reloads browser** when files change
5. **Shows console messages** for build status

### 📁 File Watching

**Watched Files:**
- `src/assets/css/unified.css` → CSS processing
- `src/*.html` → HTML includes processing
- `src/components/*.html` → Component updates
- `src/assets/js/**/*.js` → JavaScript copying
- `src/assets/img/**/*` → Image copying
- `src/assets/fonts/**/*` → Font copying
- `src/assets/icons/**/*` → Icon copying
- `src/assets/pdf/**/*` → PDF copying

### 🎯 Development Workflow

**Recommended Development Process:**
1. **Start watch server**: `npm run watch`
2. **Browser opens**: `http://localhost:3000`
3. **Edit files** in `src/` directory
4. **See changes instantly** in browser
5. **Test functionality** across all pages
6. **Build for production**: `npm run build:production`

### 🔧 Browser-Sync Features

**Live Reload:**
- ✅ **CSS changes** → Instant reload
- ✅ **HTML changes** → Instant reload
- ✅ **JavaScript changes** → Instant reload
- ✅ **Asset changes** → Instant reload

**Development Tools:**
- ✅ **Auto-open browser**
- ✅ **Console notifications**
- ✅ **File change detection**
- ✅ **Cross-device testing** (network URL provided)

### 📱 Cross-Device Testing

**Browser-Sync provides:**
- **Local URL**: `http://localhost:3000`
- **Network URL**: `http://192.168.x.x:3000` (for mobile testing)
- **Synchronized scrolling** across devices
- **Form input synchronization**

### 🛠️ Troubleshooting

**Port Already in Use:**
- Browser-Sync will automatically find next available port
- Check console for actual URL used

**Files Not Updating:**
- Ensure you're editing files in `src/` directory
- Check console for build errors
- Restart watch command if needed

**Browser Not Opening:**
- Manually navigate to `http://localhost:3000`
- Check console for server status

### 🎊 Benefits

**Development Experience:**
- ✅ **Instant feedback** on changes
- ✅ **No manual refresh** needed
- ✅ **Automatic browser opening**
- ✅ **Cross-device testing**
- ✅ **Real-time synchronization**

**Productivity:**
- ✅ **Faster development** cycle
- ✅ **Better testing** workflow
- ✅ **Immediate error detection**
- ✅ **Seamless file watching**

---

**🎉 Local development server successfully configured!**

**Start developing with**: `npm run watch`  
**Access your site at**: `http://localhost:3000`

**Last Updated**: January 2025  
**Server Status**: ✅ Ready  
**Port**: 3000 (auto-adjusts if busy)
