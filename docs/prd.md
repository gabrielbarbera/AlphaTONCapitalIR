# 📄 **Product Requirements Document (PRD)**

## Project: AlphaTON Capital Investor Relations Website

## Platform: Notified IR Hosting

## Delivery: Fully functional HTML + CSS + JS Template

## Dev Environment: Cursor IDE with AI Agent

---

## 1. 🏗 Project Overview

AlphaTON Capital Corp. is launching its **public Investor Relations site** to provide transparent, accessible, and compliant investor information as a Nasdaq-listed digital asset company focused on the TON ecosystem.

The site must:

* Comply with **Notified HTML Guidelines** (no SPA frameworks, no React/Angular, no server-side code).
* Be built as  **static responsive HTML/CSS/JS** , mobile-friendly, and accessibility-compliant.
* Use **locally hosted assets** (fonts, CSS, JS, icons, images).
* Support **vanity URL** configuration (`ir.alphatoncapital.com`).
* Include functional navigation, accordion, modals, forms, and responsive layouts.

---

## 2. 📑 Final Site Map & IA

<pre class="overflow-visible!" data-start="1237" data-end="1348"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>Home</span><span>
News & Events
Financials & Filings
Corporate Governance
Leadership
Board of Directors
FAQs
Contact
</span></span></code></div></div></pre>

* **Newsletter signup** in footer (replaces separate “Email Alerts” page)
* No dropdown menus except mobile hamburger
* Clean breadcrumb structure
* Responsive 2nd/3rd tier nav available but not used at launch

---

## 3. 🧭 Page-by-Page Requirements

### 3.1 Home (Overview + Stock)

* Company overview content
* Key metrics section with placeholders (TON tokens, validators, yield)
* Stock ticker block with link to Nasdaq
* Hero banner (company name, tagline)
* Quick links to Filings and News
* Responsive grid for KPIs

---

### 3.2 News & Events

* Press release list (static HTML placeholders)
* Event listing block (future calendar)
* Filterable list (optional)
* Accordion or card layout

---

### 3.3 Financials & Filings

* SEC Filings link
* Placeholder table for earnings and reports
* Optional tabs or accordion for reports by year

---

### 3.4 Corporate Governance

* Governance text content
* List of policies with download icon links (PDF placeholder)
* Accordion for committees and risk framework
* Simple grid or list layout

---

### 3.5 Leadership

* Executive team names, titles, short bios
* Grid or card layout
* Modal popup with extended bios (optional)

---

### 3.6 Board of Directors

* Board member list
* Independent director labeling
* Optional committee icons

---

### 3.7 FAQs

* Simple accordion structure for common questions (provided text)

---

### 3.8 Contact

* Contact details + form
* Form fields: Full Name, Email, Subject, Message
* reCAPTCHA placeholder
* Static confirmation message

---

## 4. 🧩 Components & HTML Elements Required (per Notified guidelines)

* Headings (H1–H4)
* Paragraph & disclaimer text
* Unordered and ordered lists
* HTML tables (for filings & metrics)
* Accordion
* Tabs (optional for Filings)
* Modal windows (Leadership bios)
* Contact & Newsletter forms
* Icon placeholders (PDF, XLS, etc.)
* Responsive nav & hamburger menu
* Footer with newsletter input

---

## 5. 🧠 Technical Requirements

### General

* **No frameworks** like React or Angular
* HTML and CSS must render without client-side JS injection
* All assets must be **locally hosted**
* Responsive design using clean breakpoints (mobile / tablet / desktop)

### Fonts

* Use Google Fonts via local hosting (`@font-face`)
* Acceptable formats: EOT, TTF/OTF, WOFF, SVG
* Font stack example: `Inter` (body), `Cormorant Garamond` (headings)

### JavaScript

* Vanilla JS only (for accordion, modal, nav toggle)
* No external dependencies (jQuery optional but not required)
* CORS-enabled API call structure supported (e.g., for stock ticker integration)

### Accessibility

* Follow WCAG 2.1 A & AA
* Semantic HTML structure
* Proper `aria-*` attributes on accordion and modal elements

---

## 6. 📡 Hosting & Integration Notes (Per Notified)

* All assets hosted on Notified secure environment
* Paths must be absolute if pulled via Publishing Engine
* No server-side execution (PHP, ASP, etc.)
* If APIs used (e.g., stock quote), must be CORS-enabled
* Site must remain functional even if corporate domain is down

---

## 7. 📬 Footer & Global Elements

* **Global Footer:**
  * Newsletter form (email only + consent text)
  * Privacy Policy | Safe Harbor | Terms | SEC Filings | Contact
* **Safe Harbor Disclaimer** block site-wide
* **Header / Nav:** sticky on scroll, supports mobile menu

---

## 8. 🧪 Testing & QA

* Test local HTML file in Chrome, Firefox, Safari, Edge
* Test responsive behavior on mobile/tablet/desktop
* Validate accessibility (keyboard nav, aria labels)
* Check fonts render locally
* Test form functionality (static action for now)
* Confirm all icons display correctly

---

## 9. 🧭 AI Agent Instructions (Cursor IDE)

**Objective:**

Build a fully functional, responsive, Notified-compliant HTML/CSS/JS template for AlphaTON Capital’s IR site using the PRD above.

**Instructions to AI Agent:**

1. Create a `/src` folder with:
   * `index.html` (Home)
   * `news.html`
   * `financials.html`
   * `governance.html`
   * `leadership.html`
   * `board.html`
   * `faqs.html`
   * `contact.html`
2. Create a `/assets` folder:
   * `/css/style.css` (base + responsive)
   * `/js/main.js` (accordion, modal, menu toggle)
   * `/fonts/` (locally hosted font files)
   * `/img/` (placeholders)
3. Use semantic HTML and responsive layout.
4. Build accordion and modal interactions in vanilla JS.
5. Integrate stock ticker block as a placeholder `<iframe>` or `<div>` with mock API call structure.
6. Include sample newsletter and contact forms with accessible labels.
7. Ensure all navigation works across pages (relative links).
8. Ensure the output matches Notified HTML guidelines for deployment.

---

## 10. 🗓 Timeline

| Phase                    | Deliverable                               | Owner             | Due   |
| ------------------------ | ----------------------------------------- | ----------------- | ----- |
| 1. Base Template Build   | HTML/CSS skeleton                         | AI Agent (Cursor) | Day 1 |
| 2. Component Integration | Accordion, Modal, Forms, Navigation       | AI Agent          | Day 2 |
| 3. Content Insertion     | Final page content                        | Manual/AI         | Day 3 |
| 4. QA & Validation       | Accessibility, responsiveness, compliance | Manual            | Day 4 |
| 5. Delivery to Notified  | Packaged zip of final assets              | Manual            | Day 5 |

---

## 11. 📦 Final Deliverables

* Complete static HTML template (8 pages)
* CSS and JS files (no external dependencies)
* Fonts and images locally hosted
* Functional responsive navigation
* Accordion, modal, forms fully working
* Newsletter in footer
* Tested and ready for Notified deployment
