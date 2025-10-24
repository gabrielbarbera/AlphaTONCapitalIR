const gulp = require("gulp");
const purgecss = require("gulp-purgecss");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const watch = require("gulp-watch");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileinclude = require("gulp-file-include");
const browserSync = require("browser-sync").create();
const path = require("path");

// Configuration
const config = {
  src: {
    css: "../src/assets/css/style.css",
    html: ["../src/*.html", "../src/components/*.html"],
    js: "../src/assets/js/**/*.js",
  },
  dist: {
    css: "../dist/assets/css/",
    js: "../dist/assets/js/",
    root: "../dist/",
  },
  // Files to watch for CSS purging
  content: [
    "../src/*.html",
    "../src/components/*.html",
    "../src/assets/js/mobile-menu.js",
  ],
  // Browser-sync configuration
  server: {
    baseDir: path.resolve(__dirname, "../dist"),
    port: 3000,
    open: true,
    notify: false,
  },
  // CSS classes to always keep (even if not detected)
  safelist: [
    // Tailwind CSS classes that might be dynamically added
    "animate-spin",
    "animate-slide-down",
    "hidden",
    "block",
    "flex",
    "grid",
    "sr-only",
    "focus:not-sr-only",
    "focus:absolute",
    "focus:top-4",
    "focus:left-4",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-inset",
    "focus:ring-white",
    "focus:border-alphaton-primary",
    "focus:ring-1",
    "focus:ring-alphaton-primary",
    "focus:border-transparent",
    "hover:bg-alphaton-primary",
    "hover:text-white",
    "hover:text-blue-400",
    "hover:bg-blue-600",
    "hover:bg-white/10",
    "hover:border-alphaton-primary/50",
    "hover:scale-105",
    "hover:scale-110",
    "hover:underline",
    "hover:transform",
    "group-hover:text-alphaton-primary",
    "group-hover:scale-105",
    // Custom AlphaTON classes
    "bg-alphaton-dark",
    "bg-alphaton-gray",
    "bg-alphaton-primary",
    "text-alphaton-primary",
    "text-alphaton-accent",
    "border-alphaton-primary",
    "font-redhat",
    "blob-background",
    "blob-svg",
    "blob-path",
    "nav-link",
    "newsletter-form",
    // Chart.js classes
    "chart-container",
    "chart-loading",
    "chart-error",
    // Form classes
    "form-input",
    "form-textarea",
    "form-select",
    "form-checkbox",
    "form-button",
    // Utility classes that might be added dynamically
    "transition-colors",
    "transition-all",
    "transition-transform",
    "duration-200",
    "duration-300",
    "ease-in-out",
    "transform",
    "scale-105",
    "scale-110",
    "rotate-180",
    "rotate-0",
  ],
  // Regex patterns for dynamic classes
  safelistPatterns: [
    /^bg-gradient-to-/,
    /^from-/,
    /^via-/,
    /^to-/,
    /^text-/,
    /^bg-/,
    /^border-/,
    /^p-/,
    /^px-/,
    /^py-/,
    /^pt-/,
    /^pb-/,
    /^pl-/,
    /^pr-/,
    /^m-/,
    /^mx-/,
    /^my-/,
    /^mt-/,
    /^mb-/,
    /^ml-/,
    /^mr-/,
    /^w-/,
    /^h-/,
    /^max-w-/,
    /^min-h-/,
    /^flex-/,
    /^grid-cols-/,
    /^gap-/,
    /^space-/,
    /^rounded-/,
    /^shadow-/,
    /^opacity-/,
    /^backdrop-/,
    /^z-/,
    /^top-/,
    /^left-/,
    /^right-/,
    /^bottom-/,
    /^inset-/,
    /^overflow-/,
    /^object-/,
    /^cursor-/,
    /^select-/,
    /^resize-/,
    /^appearance-/,
    /^outline-/,
    /^ring-/,
    /^ring-offset-/,
    /^placeholder-/,
    /^caret-/,
    /^accent-/,
    /^scroll-/,
    /^snap-/,
    /^touch-/,
    /^will-change-/,
    /^content-/,
    /^before:/,
    /^after:/,
    /^first:/,
    /^last:/,
    /^odd:/,
    /^even:/,
    /^visited:/,
    /^target:/,
    /^open:/,
    /^default:/,
    /^checked:/,
    /^indeterminate:/,
    /^placeholder:/,
    /^autofill:/,
    /^required:/,
    /^valid:/,
    /^invalid:/,
    /^in-range:/,
    /^out-of-range:/,
    /^read-only:/,
    /^read-write:/,
    /^empty:/,
    /^focus-within:/,
    /^hover:/,
    /^focus:/,
    /^focus-visible:/,
    /^active:/,
    /^enabled:/,
    /^disabled:/,
    /^group-hover:/,
    /^group-focus:/,
    /^group-active:/,
    /^group-disabled:/,
    /^group-visited:/,
    /^group-checked:/,
    /^group-focus-within:/,
    /^peer-hover:/,
    /^peer-focus:/,
    /^peer-active:/,
    /^peer-disabled:/,
    /^peer-visited:/,
    /^peer-checked:/,
    /^peer-focus-within:/,
    /^dark:/,
    /^motion-safe:/,
    /^motion-reduce:/,
    /^print:/,
    /^supports-/,
  ],
};

// Error handler
const onError = function (err) {
  notify.onError({
    title: "Gulp Error",
    message: "Error: <%= error.message %>",
    sound: "Beep",
  })(err);
  this.emit("end");
};

// Clean dist directory
gulp.task("clean", function () {
  const fs = require("fs");
  const path = require("path");

  function deleteRecursive(dir) {
    if (fs.existsSync(dir)) {
      fs.readdirSync(dir).forEach((file) => {
        const curPath = path.join(dir, file);
        if (fs.lstatSync(curPath).isDirectory()) {
          deleteRecursive(curPath);
        } else {
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(dir);
    }
  }

  deleteRecursive(config.dist.root);
  return Promise.resolve();
});

// Process CSS with autoprefixing and optimization (without purging for now)
gulp.task("css", function () {
  return gulp
    .src(config.src.css)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(
      autoprefixer({
        cascade: false,
        grid: "autoplace",
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
        format: "beautify",
      })
    )
    .pipe(rename("style.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.dist.css))
    .pipe(
      notify({
        message: "CSS processed successfully!",
        title: "Gulp CSS",
      })
    );
});

// Process CSS for production (minified)
gulp.task("css:production", function () {
  return gulp
    .src(config.src.css)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(
      purgecss({
        content: config.content,
        safelist: config.safelist,
        safelistPatterns: config.safelistPatterns,
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        variables: true,
        keyframes: true,
        fontFace: true,
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
        grid: "autoplace",
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
        format: "minify",
      })
    )
    .pipe(rename({ basename: "style", extname: ".css" }))
    .pipe(gulp.dest(config.dist.css))
    .pipe(
      notify({
        message: "Production CSS processed successfully!",
        title: "Gulp CSS Production",
      })
    );
});

// Copy JavaScript files (excluding components.js)
gulp.task("js", function () {
  return gulp
    .src(["../src/assets/js/**/*.js", "!../src/assets/js/components.js"])
    .pipe(gulp.dest(config.dist.js))
    .pipe(
      notify({
        message: "JavaScript files copied!",
        title: "Gulp JS",
      })
    );
});

// Process HTML files with includes
gulp.task("html", function () {
  return gulp
    .src("../src/*.html")
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "../src",
        context: {
          // Add any global variables here if needed
        },
      })
    )
    .pipe(gulp.dest(config.dist.root))
    .pipe(
      notify({
        message: "HTML files processed with includes!",
        title: "Gulp HTML",
      })
    );
});

// Copy assets (images, fonts, etc.)
gulp.task("assets", function () {
  return gulp
    .src(
      [
        "../src/assets/img/**/*",
        "../src/assets/fonts/**/*",
        "../src/assets/icons/**/*",
        "../src/assets/pdf/**/*",
      ],
      { base: "../src/assets" }
    )
    .pipe(gulp.dest(config.dist.root + "assets"))
    .pipe(
      notify({
        message: "Assets copied!",
        title: "Gulp Assets",
      })
    );
});

// Browser-sync server
gulp.task("serve", function () {
  browserSync.init({
    server: {
      baseDir: "C:/www/AlphaTonIR/dist",
      index: "index.html",
      directory: false,
    },
    port: 3000,
    open: true,
    notify: false,
  });
});

// Watch for changes with browser-sync
gulp.task("watch", function () {
  // Start browser-sync server
  browserSync.init({
    server: {
      baseDir: "C:/www/AlphaTonIR/dist",
      index: "index.html",
      directory: false,
    },
    port: 3000,
    open: true,
    notify: false,
  });

  // Watch CSS
  watch(config.src.css, gulp.series("css")).on("change", browserSync.reload);

  // Watch HTML files
  watch(
    ["../src/*.html", "../src/components/*.html"],
    gulp.series("html", "css")
  ).on("change", browserSync.reload);

  // Watch JavaScript files
  watch(config.src.js, gulp.series("js", "css")).on(
    "change",
    browserSync.reload
  );

  // Watch assets
  watch(
    [
      "../src/assets/img/**/*",
      "../src/assets/fonts/**/*",
      "../src/assets/icons/**/*",
      "../src/assets/pdf/**/*",
    ],
    gulp.series("assets")
  ).on("change", browserSync.reload);

  console.log("👀 Watching for changes...");
  console.log("🌐 Local development server: http://localhost:3000");
});

// Development build
gulp.task("dev", gulp.series("clean", "css", "js", "html", "assets"));

// Development build with server
gulp.task("dev:serve", gulp.series("dev", "serve"));

// Production build
gulp.task(
  "build",
  gulp.series("clean", "css:production", "js", "html", "assets")
);

// Build for Notified compliance (production + additional optimizations)
gulp.task(
  "build:production",
  gulp.series("build", function (done) {
    console.log("🚀 Production build completed for Notified compliance!");
    console.log("📁 Output directory: " + config.dist.root);
    console.log("📋 Next steps:");
    console.log("   1. Test the dist/ folder locally");
    console.log("   2. Zip the dist/ folder for Notified upload");
    console.log("   3. Verify all functionality works");
    console.log("   4. Pure static HTML with Gulp HTML includes");
    done();
  })
);

// Default task
gulp.task("default", gulp.series("dev"));

// Export tasks for external use
module.exports = {
  config,
  tasks: {
    clean: "clean",
    css: "css",
    cssProduction: "css:production",
    js: "js",
    html: "html",
    assets: "assets",
    watch: "watch",
    dev: "dev",
    build: "build",
    buildProduction: "build:production",
  },
};
