# AlphaTON Capital - Minimal Tailwind-Inspired Utility Framework

## Overview

This is a custom-built utility framework inspired by Tailwind CSS, designed specifically for the AlphaTON Capital website. It provides essential utility classes for rapid development while maintaining consistency with your existing design system.

## Features

- **Lightweight**: Only essential utilities (~15KB minified)
- **Brand Consistent**: Uses AlphaTON's color palette and design tokens
- **Responsive**: Mobile-first approach with breakpoint utilities
- **Accessible**: Includes accessibility-focused utilities
- **No Dependencies**: Pure CSS, no JavaScript required

## Installation

1. Include the CSS file in your HTML:
```html
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="assets/css/global.css">
```

2. Start using utility classes in your HTML!

## Core Utilities

### Spacing

#### Margin
```html
<div class="m-4">Margin on all sides</div>
<div class="mx-auto">Center horizontally</div>
<div class="mt-8 mb-4">Different top/bottom margins</div>
```

#### Padding
```html
<div class="p-6">Padding on all sides</div>
<div class="px-4 py-2">Horizontal and vertical padding</div>
<div class="pt-8 pb-4">Different top/bottom padding</div>
```

### Typography

#### Font Sizes
```html
<h1 class="text-4xl font-bold">Large heading</h1>
<p class="text-lg">Large paragraph text</p>
<span class="text-sm text-gray-400">Small secondary text</span>
```

#### Font Weights
```html
<p class="font-normal">Normal weight</p>
<p class="font-medium">Medium weight</p>
<p class="font-semibold">Semi-bold</p>
<p class="font-bold">Bold</p>
```

#### Text Alignment
```html
<p class="text-left">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-right">Right aligned</p>
```

### Layout

#### Display
```html
<div class="block">Block element</div>
<div class="flex">Flexbox container</div>
<div class="grid">Grid container</div>
<div class="hidden">Hidden element</div>
```

#### Flexbox
```html
<div class="flex items-center justify-between">
  <span>Left item</span>
  <span>Right item</span>
</div>

<div class="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

#### Grid
```html
<div class="grid grid-cols-3 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Responsive grid -->
</div>
```

### Colors

#### Text Colors
```html
<p class="text-white">White text</p>
<p class="text-gray-400">Gray text</p>
<p class="text-primary">Primary brand color</p>
<p class="text-accent">Accent color</p>
```

#### Background Colors
```html
<div class="bg-black">Black background</div>
<div class="bg-gray-900">Dark gray background</div>
<div class="bg-primary">Primary background</div>
<div class="bg-transparent">Transparent background</div>
```

### Borders & Radius

```html
<div class="border border-gray-700">Border</div>
<div class="border-2 border-primary">Thick primary border</div>
<div class="rounded-lg">Rounded corners</div>
<div class="rounded-full">Fully rounded</div>
```

### Shadows & Effects

```html
<div class="shadow-lg">Large shadow</div>
<div class="opacity-50">50% opacity</div>
<div class="hover:opacity-80">Hover opacity change</div>
```

### Transitions & Animations

```html
<button class="transition-all duration-300 hover:scale-105">
  Hover to scale
</button>

<div class="transition-colors hover:bg-primary">
  Color transition on hover
</div>
```

## Responsive Design

The framework uses a mobile-first approach with these breakpoints:

- **sm**: 640px and up
- **md**: 768px and up  
- **lg**: 1024px and up
- **xl**: 1280px and up

### Responsive Examples

```html
<!-- Hide on mobile, show on desktop -->
<div class="hidden md:block">Desktop only</div>

<!-- Different text sizes per breakpoint -->
<h1 class="text-2xl md:text-4xl lg:text-5xl">
  Responsive heading
</h1>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Content -->
</div>

<!-- Responsive spacing -->
<div class="p-4 md:p-8 lg:p-12">
  Responsive padding
</div>
```

## AlphaTON Brand Colors

The framework includes your brand colors:

- **Primary**: `#3e7bfa` (Blue)
- **Secondary**: `#1e40af` (Dark Blue)
- **Accent**: `#06b6d4` (Cyan)
- **Success**: `#10b981` (Green)
- **Warning**: `#f59e0b` (Orange)
- **Error**: `#ef4444` (Red)

## Common Patterns

### Card Component
```html
<div class="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary transition-all duration-300">
  <h3 class="text-xl font-semibold text-white mb-3">Card Title</h3>
  <p class="text-gray-400 leading-relaxed">Card content goes here...</p>
</div>
```

### Button Variants
```html
<!-- Primary Button -->
<button class="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
  Primary Action
</button>

<!-- Secondary Button -->
<button class="border border-gray-400 text-gray-300 hover:text-white hover:border-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
  Secondary Action
</button>

<!-- Success Button -->
<button class="bg-success hover:opacity-80 text-white px-6 py-3 rounded-lg font-semibold transition-opacity">
  Success Action
</button>
```

### Navigation
```html
<nav class="flex items-center justify-between p-4">
  <div class="flex items-center space-x-8">
    <a href="#" class="text-white hover:text-primary transition-colors">Home</a>
    <a href="#" class="text-gray-400 hover:text-white transition-colors">About</a>
  </div>
</nav>
```

### Hero Section
```html
<section class="py-20 bg-gradient-to-br from-gray-900 to-black">
  <div class="container mx-auto px-4">
    <div class="text-center max-w-4xl mx-auto">
      <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
        Hero Title
      </h1>
      <p class="text-xl text-gray-300 mb-8 leading-relaxed">
        Hero description text
      </p>
      <button class="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
        Call to Action
      </button>
    </div>
  </div>
</section>
```

## Accessibility

The framework includes accessibility utilities:

```html
<!-- Screen reader only text -->
<span class="sr-only">Screen reader only content</span>

<!-- Focus states -->
<button class="focus:outline-none focus:outline-primary">
  Accessible button
</button>

<!-- Skip links -->
<a href="#main-content" class="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

## Best Practices

1. **Mobile First**: Always design for mobile first, then enhance for larger screens
2. **Consistent Spacing**: Use the spacing scale (0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20)
3. **Semantic HTML**: Use utility classes to enhance semantic HTML, not replace it
4. **Performance**: Only use the utilities you need
5. **Accessibility**: Always include proper ARIA labels and semantic markup

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## File Structure

```
assets/css/
├── style.css      # Your existing styles
└── global.css     # Utility framework
```

## Customization

To add new utilities or modify existing ones, edit `global.css`. The framework is designed to be easily extensible.

## Examples

See `utility-demo.html` for a complete example of the framework in action.

## Support

This utility framework is maintained as part of the AlphaTON Capital website project. For questions or modifications, refer to the project documentation.
