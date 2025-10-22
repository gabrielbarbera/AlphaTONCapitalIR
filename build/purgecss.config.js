// PurgeCSS Configuration for AlphaTON Capital IR Website
// This file provides detailed configuration for CSS purging

module.exports = {
  // Content files to scan for CSS class usage
  content: [
    "../src/*.html",
    "../src/components/*.html",
    "../src/assets/js/**/*.js",
  ],

  // CSS classes to always keep (even if not detected)
  safelist: [
    // Animation classes
    "animate-spin",
    "animate-slide-down",
    "animate-pulse",
    "animate-bounce",

    // Visibility classes
    "hidden",
    "block",
    "flex",
    "grid",
    "inline",
    "inline-block",
    "inline-flex",

    // Screen reader classes
    "sr-only",
    "focus:not-sr-only",

    // Focus states
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-inset",
    "focus:ring-white",
    "focus:border-alphaton-primary",
    "focus:ring-1",
    "focus:ring-alphaton-primary",
    "focus:border-transparent",

    // Hover states
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

    // Group hover states
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

    // Background animation classes
    "blob-background",
    "blob-svg",
    "blob-path",

    // Navigation classes
    "nav-link",

    // Form classes
    "newsletter-form",
    "form-input",
    "form-textarea",
    "form-select",
    "form-checkbox",
    "form-button",

    // Chart classes
    "chart-container",
    "chart-loading",
    "chart-error",

    // Transition classes
    "transition-colors",
    "transition-all",
    "transition-transform",
    "duration-200",
    "duration-300",
    "ease-in-out",

    // Transform classes
    "transform",
    "scale-105",
    "scale-110",
    "rotate-180",
    "rotate-0",
  ],

  // Regex patterns for dynamic classes
  safelistPatterns: [
    // Tailwind utility patterns
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

    // Pseudo-class patterns
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

  // Additional PurgeCSS options
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  variables: true,
  keyframes: true,
  fontFace: true,
  extractors: [
    {
      extractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      extensions: ["html", "js"],
    },
  ],
};
