# 🏛 AlphaTON Capital – Brand Guidelines

*The bridge between institutional capital and Telegram’s financial layer.*

---

## 🧭 Brand Positioning

- **One-liner:** Institutional access to Telegram’s financial layer.
- **Public identity:** NASDAQ-listed digital asset company on TON.
- **Proof:** We build and acquire yield-generating TON infrastructure and translate onchain value to public markets.
- **Brand attributes:** Institutional · Precise · Crypto-native · Composed · Forward-looking.

---

## 🪙 Logo System

The AlphaTON logo reflects trust, clarity, and technical precision. It must always be used consistently.

### Variants

- **Primary Logo** (Horizontal) — *Preferred for most applications*
- **Primary Vertical** — For constrained spaces
- **Secondary Logo** (Horizontal & Vertical) — Alternate layout when needed
- **Wordmark Only** — Minimal, digital, or monochrome contexts

### Usage Rules

- Maintain **clear space** equal to the “A” height on all sides.
- Use only in **black (#000000)** or **white (#FFFFFF)**.
- Place on clean, contrasting backgrounds.
- Do not add shadows, outlines, or effects.
- Do not place over photos unless a **scrim or solid backing** is used.

### Minimum Sizes

- **Wordmark:** 120px digital / 30mm print
- **Badge:** 48px digital / 12mm print
- **Ticker pill:** 140px digital

---

## 🎨 Color System

Institutional monochrome base with a **single gradient accent** for emphasis.

| Name    | Hex         | Usage                  |
| ------- | ----------- | ---------------------- |
| Black   | `#0A0A0A` | Primary background     |
| White   | `#FFFFFF` | Text, negative logo    |
| Ink Mid | `#E6E6E6` | Secondary background   |
| Ink Dim | `#9CA3AF` | Body text              |
| Indigo  | `#6E45E2` | Brand gradient (dark)  |
| Azure   | `#3E7BFA` | Brand gradient (light) |

**Primary Gradient:** Black → Indigo**Secondary Gradient:** Indigo → Azure

> ⚠️ Gradients should be used as **accents only**, not as backgrounds for text blocks.

---

## ✍️ Typography System

**Typeface:** `Red Hat Display` — a modern institutional voice.
Use locally hosted fonts in EOT, TTF, WOFF, SVG formats.

| Weight | Usage                |
| ------ | -------------------- |
| 700    | H1–H3 (Bold)        |
| 600    | Subheads (SemiBold)  |
| 400    | Body text, UI labels |

Aa Bb Cc Dd Ee Ff Gg
Hh Ii Jj Kk Ll Mm Nn
Oo Pp Qq Rr Ss Tt Uu
Vv Ww Xx Yy Zz

yaml
Copy code

**Hierarchy:**

- H1: 48–64px / bold / line-height 1.2
- H2: 36–48px / bold
- H3: 24–32px / bold or semibold
- Body: 16–20px / regular / line-height 1.6

> ⚠️ Always use high contrast (black or white on solid backgrounds).

---

## 🖼 Background & Imagery

- Base: **black** or **deep blue gradient** backgrounds.
- Style: **high-contrast**, minimal, geometric, subtle light effects.
- Symbolic / crypto-native visual language.
- Partner logos must be displayed in **monochrome**.
- Avoid: excessive illustration, meme-style imagery, busy textures.

✅ Do:

- Use subtle gradient overlays
- Use high contrast
- Keep imagery architectural, technical, or symbolic

❌ Don’t:

- Overuse color or effects
- Overlay logos on complex backgrounds

---

## 🧩 Brand Application

- Use monochrome logo only.
- Limit gradients to accent elements.
- Always maintain minimum clear space.
- Typography and color should remain consistent across web, print, and merch.

**Applications:**

- Apparel & Merch
- Event Banners
- Investor Decks
- Websites & Dashboards
- Press & Partner Collateral

---

## 🌐 Web & UI Guidelines

- Primary background: `#0A0A0A` (Black)
- Default text color: `#FFFFFF`
- Body text: `#9CA3AF`
- Accent elements: Gradient Indigo → Azure
- Hover states: subtle gradient border or underline

### Buttons

- **Primary:** Gradient background, white text
- **Secondary:** Transparent with gradient border
- **Hover:** subtle glow or underline

### Forms

- Minimal input styling
- Dark mode default
- Thin gradient accent borders

### Icons

- SVG monochrome
- Line-based or minimal solid

---

## 🧱 Layout Principles

- Generous whitespace, centered content
- Grid-based alignment
- Sections divided by **contrast** (not borders)
- Gradient accents used sparingly for hierarchy
- Avoid skeuomorphic effects

**Recommended max width:** 1280px
**Content width:** 1140px
**Gutter spacing:** 20–32px
**Section padding:** 80px desktop / 40px mobile

---

## 🧭 Tone & Voice

- **Tone:** Institutional, confident, clear.
- **Voice:** Forward-looking, direct, composed.
- Avoid marketing hype or jargon.

✅ Say:

> “AlphaTON Capital provides institutional access to Telegram’s financial layer.”

❌ Don’t say:

> “We’re revolutionizing finance forever.”

---

## 📝 Boilerplate Language

> AlphaTON Capital Corp. (Nasdaq: ATON) is a NASDAQ-listed digital asset company building the infrastructure that connects traditional finance with TON — Telegram’s blockchain ecosystem. AlphaTON provides institutional investors with regulated exposure to TON-based assets and infrastructure through validator operations, treasury management, and ecosystem investments.

---

## 📐 Implementation Snippets

### Example Gradient Text (CSS)

```css
.gradient-text {
  background: linear-gradient(90deg, #6E45E2, #3E7BFA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
Button Styles
css
Copy code
.btn-primary {
  background: linear-gradient(90deg, #6E45E2, #3E7BFA);
  color: #fff;
  padding: 12px 24px;
  border-radius: 6px;
}

.btn-secondary {
  background: transparent;
  border: 1px solid #3E7BFA;
  color: #fff;
}
Section Background
css
Copy code
.section-dark {
  background-color: #0A0A0A;
  color: #FFFFFF;
  padding: 80px 0;
}
🪄 Quick Reference
Element	Style
Background	Black (#0A0A0A)
Accent	Gradient Indigo → Azure
Body Text	Ink Dim (#9CA3AF)
Font	Red Hat Display
Primary Button	Gradient + white text
Footer	Black background, dim text, legal links
Hero Banner	Black base, gradient accent, bold type

📦 Deliverables for Dev
logo-primary.svg, logo-wordmark.svg, monochrome only

Local webfont files (Red Hat Display)

Gradient color variables in CSS

Component library (buttons, typography, forms)

Design tokens documented as variables
```
