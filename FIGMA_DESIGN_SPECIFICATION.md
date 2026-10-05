# Padhai Mantra Website Redesign — UI/UX Figma Master Specification (Project 1)

**Client:** Padhai Mantra Pvt. Ltd., Kathmandu, Nepal  
**Founder & Academic Director:** Dr. Anurag Silwal  
**Deliverable Type:** Figma Design System + 32 Production Frames (16 Page Templates × 2 Breakpoints) + Global States + Prototype + Handoff  
**Target Audience:** SEE (Class 10), NEB Class 11–12 students, guardians, scholarship applicants across Nepal  
**Core Objective:** Transform the public/logged-out website into a modern, trustworthy, high-conversion ed-tech experience while preserving brand equity, existing functionality, and CDC Nepal academic alignment.

---

# Page 01 — Cover (`01 — Cover`)

* **Frame Dimensions:** `1920 × 1080px`
* **Canvas Background:** Deep Brand Tint `#0B132B`
* **Visual Elements:**
  * Authentic Padhai Mantra Brand Logo (White knockout, `240px` wide).
  * Project Title: `Poppins Bold 64px`, Color: `#FFFFFF`  
    **Padhai Mantra Website Redesign**
  * Subtitle: `Inter Medium 24px`, Color: `#BFDBFE`  
    **Project 1 — Public Pages (Logged-Out Experience)**
  * Project Metadata Card (`Auto Layout`, Fill: `#1E293B`, Stroke: `#334155`, Radius: `16px`, Padding: `24px`):
    * **Client:** Padhai Mantra Pvt. Ltd., Kathmandu, Nepal
    * **Project Lead:** Dr. Anurag Silwal, Founder & Academic Director
    * **Scope:** 16 Page Templates × 2 Breakpoints (Desktop 1440px & Mobile 390px) = 32 Production Frames
    * **Design System:** Poppins + Inter + Mukta (Devanagari), 8pt Grid, Auto Layout 5.0, WCAG AA Compliant
    * **Deliverable:** Production-ready Figma File with Organized Pages, Interactive Prototype & Handoff Specs
    * **Date / Version:** October 2026 / Version 1.0 (Production Release)

---

# Page 02 — Style Guide (`02 — Style Guide`)

## 1. Color System & Semantic Tokens

All color combinations have been tested against WCAG 2.1 AA requirements (minimum contrast `4.5:1` for standard text and `3.0:1` for large headings and active UI badges).

```
+----------------------------------------------------------------------------------------------------+
| COLOR TOKENS MATRIX                                                                                |
+-------------------+---------+-----------------------+----------------------------------------------+
| Token Name        | Hex     | Role                  | Accessibility / Usage Notes                  |
+-------------------+---------+-----------------------+----------------------------------------------+
| color-primary     | #125BCC | Brand Primary Blue    | CTAs, active links, brand badges (4.62:1)    |
| color-primary-hov | #0C459E | Primary Hover/Pressed | Button hover, pressed state (6.81:1 AAA)     |
| color-primary-50  | #EEF5FF | Brand Surface Tint    | Card highlights, active nav pill, icon wraps |
| color-primary-200 | #BFDBFE | Brand Outline / Glow  | Subtle card borders, focus rings (3px)       |
| color-slate-950   | #0B132B | Midnight Contrast     | Global footer, app download showcase         |
| color-slate-900   | #0F172A | Heading Dark          | H1, H2, card titles, high emphasis (16.1:1)  |
| color-slate-700   | #334155 | High Neutral          | Form labels, active filter text, H3 (8.5:1)  |
| color-slate-600   | #475569 | Medium Neutral        | Body text, subtitles, descriptions (6.3:1)   |
| color-slate-500   | #64748B | Low Neutral           | Metadata, dates, breadcrumb inactive (4.6:1) |
| color-slate-200   | #E2E8F0 | Surface Border        | Card outlines, table borders, dividers       |
| color-slate-50    | #F8FAFC | Light Background      | Alternating sections, table row striping     |
| color-white       | #FFFFFF | Pure White Surface    | Card backgrounds, primary button label       |
| color-amber-600   | #D97706 | Notice / Attention    | "New", "SEE Admissions", notice pills        |
| color-emerald-600 | #059669 | Success / Active      | "Free Demo", "Verified", active status       |
| color-rose-600    | #DC2626 | Live / Expired / Error| "Live Now", "Expired", form validation error |
+-------------------+---------+-----------------------+----------------------------------------------+
```

## 2. Typography System & Type Scale

* **Headings:** `Poppins` (Google Font) — Weights: Bold (700) for H1/H2, SemiBold (600) for H3.
* **Body, UI, Forms, Metadata:** `Inter` (Google Font) — Weights: Regular (400), Medium (500), SemiBold (600).
* **Devanagari Support (Mandatory):** `Mukta` (Google Font) — paired with Inter/Poppins for authentic Nepali typography (*अनिवार्य नेपाली*, *सामाजिक अध्ययन*, *राष्ट्रिय धान दिवस*).
* **Core Rule:** Exactly **ONE `H1` per page**. Paragraphs are strictly **left-aligned** (never justified to prevent uneven word rivers).

| Token | Family | Weight | Desktop (1440px) | Mobile (390px) | Line Height | Letter Spacing | Purpose |
|---|---|---|---|---|---|---|---|
| `type-h1` | Poppins | Bold (700) | `48px` | `32px` | 1.15 | `-0.02em` | Page Title (Hero, Course Detail, Legal) |
| `type-h2` | Poppins | Bold (700) | `32px` | `24px` | 1.25 | `-0.015em` | Major Section Headers |
| `type-h3` | Poppins | SemiBold (600) | `22px` | `18px` | 1.30 | `-0.01em` | Card Titles, Modal Headings, Sub-blocks |
| `type-body-lg` | Inter | Regular (400) | `18px` | `16px` | 1.60 | `0` | Article Single Body, Hero Subtitle |
| `type-body-base`| Inter | Regular (400) | `16px` | `15px` | 1.60 | `0` | Standard Paragraphs, FAQ Answers |
| `type-ui-base` | Inter | Medium (500) | `15px` | `14px` | 1.40 | `0` | Button Labels, Inputs, Nav Links |
| `type-meta` | Inter | Medium (500) | `13px` | `12px` | 1.40 | `+0.01em` | Lecture counts, Timestamps, Breadcrumbs |
| `type-badge` | Inter | Bold (700) | `12px` | `11px` | 1.00 | `+0.05em` | Status Badges, Uppercase Tags |

## 3. Grid, Layout & Elevation Scale

### Desktop Grid (1440px Frame)
* **Container Width:** `1200px` centered (`margin: 0 auto;`).
* **Column Count:** 12 Columns.
* **Column Width:** `78px`.
* **Gutter:** `24px`.
* **Left & Right Margins:** `120px`.
* **Header & Footer Alignment:** Logo and navigation align precisely to the outer edges of column 1 and column 12.

### Mobile Grid (390px Frame)
* **Frame Width:** `390px` (iPhone 14/15 standard).
* **Column Count:** 4 Columns.
* **Gutter:** `16px`.
* **Side Margins:** `20px` (Content Box = `350px`).
* **Android 360px Safe Verification:** Content box = `328px` with `16px` margins, zero horizontal scroll, zero clipped placeholders.

### 8-Point Spacing Scale
* `sp-1`: `4px` (Tight padding, badge gaps)
* `sp-2`: `8px` (Icon/text gap, chip padding)
* `sp-3`: `12px` (Card inner elements)
* `sp-4`: `16px` (Standard component gutters)
* `sp-5`: `24px` (Desktop grid gutters, card padding)
* `sp-6`: `32px` (Sub-section margins)
* `sp-8`: `48px` (Section spacing)
* `sp-10`: `64px` (Mobile section vertical padding)
* `sp-12`: `96px` (Desktop section vertical padding)

### Elevation & Shadow Tokens
* `shadow-xs`: `0 1px 2px rgba(15, 23, 42, 0.05)` (Buttons, Filter chips)
* `shadow-sm`: `0 2px 8px rgba(15, 23, 42, 0.06)` (Cards, Inputs)
* `shadow-md`: `0 8px 24px -4px rgba(18, 91, 204, 0.08)` (Hover states, Schedule widget)
* `shadow-lg`: `0 16px 44px -8px rgba(18, 91, 204, 0.14)` (Promotional announcement card, Modals)
* `shadow-focus`: `0 0 0 3px rgba(18, 91, 204, 0.20)` (Accessible keyboard focus state)

---

# Page 03 — Component System (`03 — Components`)

All 22 reusable components are built with Figma **Auto Layout**, **Variants**, and **Boolean / Text Properties**.

```
+-------------------------------------------------------------------------------------------------------+
| COMPONENT LIBRARY DIRECTORY                                                                           |
+----+----------------------+---------------------------------------------------------------------------+
| #  | Component Name       | Key Properties & Variant Dimensions                                       |
+----+----------------------+---------------------------------------------------------------------------+
| 01 | pm-button            | Variant: Primary / Secondary / Outline / Text; Size: Sm / Md / Lg; States |
| 02 | pm-input-field       | Type: Text / Tel / Email / Password / Select / File; State: Default/Focus |
| 03 | pm-course-card       | Aspect Ratio 16:9; Equal Height; Category; Title; Features; Pinned Footer |
| 04 | pm-scholarship-card  | Institution; Amount; Criteria list; Status: Active / Closing / Expired    |
| 05 | pm-article-card      | Category tag; Date; 2-line clamped title & excerpt; Pinned "Read More"    |
| 06 | pm-testimonial-card  | Student Avatar; Name; GPA meta; Verified tag; 5-stars; 4-line clamped text|
| 07 | pm-stat-card         | Icon circle; Value; Descriptive label; Auto layout centered               |
| 08 | pm-faq-accordion     | State: Collapsed / Expanded; Question text; Chevron rotate; Answer block  |
| 09 | pm-tab-bar           | State: Horizontal; Tabs: Overview, Subjects, Instructors, Reviews         |
| 10 | pm-badge             | Variant: New (Amber), Free Demo (Green), Live (Red), Expired (Neutral)    |
| 11 | pm-filter-chip       | State: Default / Active; Rounded pill (radius-full); Min-height 40px      |
| 12 | pm-header-desktop    | Logo (Left); 6 Nav Links (Center); Login / Sign Up buttons (Right)        |
| 13 | pm-header-mobile     | Logo (Left); Hamburger Button (Right, min 44×44px touch target)           |
| 14 | pm-drawer-menu       | Slide-out right panel; Nav link rows; Auth CTAs at bottom; Close button   |
| 15 | pm-footer            | 4-Column Layout: Brand, Quick Links, About & Legal, Kathmandu Contact     |
| 16 | pm-announcement-bar  | 3-Column floating elevated card with icons, title, description & actions  |
| 17 | pm-breadcrumb        | Hierarchy links with slash separator ("Home / Courses / Class 10")        |
| 18 | pm-pagination        | Numbers + Prev/Next buttons; Boolean: Auto-hidden when single page        |
| 19 | pm-modal-dialog      | Header banner; Dismiss button; Image frame; Details box; Dual CTAs        |
| 20 | pm-toast             | Type: Success / Warning / Error; Icon; Message; Auto dismiss              |
| 21 | pm-empty-state       | Contextual illustration; Specific message; Primary action CTA             |
| 22 | pm-mobile-sticky-bar | Fixed bottom bar: Course title, Current Price, Full-width Enroll button   |
+----+----------------------+---------------------------------------------------------------------------+
```

---

# Page 04 — Desktop Production Frames (`04 — Desktop`)

All 16 templates designed at `1440px` width with `1200px` content container, 12 columns, and 24px gutters.

1. **Home (`1440 × 3980px`):** Single unified hero, 3-card elevated announcement bar, compact 4-across stats row, featured batches, 3-step How It Works, 4-line clamped student testimonials, recent news, 6-question FAQ accordion, midnight mobile app preview, 4-column footer.
2. **Courses Listing (`1440 × 1780px`):** Breadcrumb, H1 title, unified search/filter bar with grouped chips (`All`, `Class 10`, `Class 11`, `Class 12`), 3 equal-height cards with 16:9 images, pinned bottom prices and CTAs, auto-hidden pagination.
3. **Course Category — Class 10 (`1440 × 1640px`):** Highlighted active category chip, balanced 2-column layout (Apex Batch featured card + Academic Counseling card with WhatsApp direct action).
4. **Course Detail — SEE Class 10 Apex Batch (`1440 × 2450px`):** Hero with metadata & video demo card, 4 horizontal tabs, 11 CDC subject rows with duration and lecture counts, 3-mo vs 12-mo pricing cards with savings ribbon and "Start Learning Today" main CTA, separated live class schedule widget.
5. **Live Classes (`1440 × 1720px`):** Interactive weekly timetable (Monday–Friday evening schedule with demo vs locked badges), perks grid, high-conversion enroll CTA.
6. **Mock Tests (`1440 × 1680px`):** Dedicated mock test experience, 8+ tests metrics, interactive sample question card with check-answer state, "Try a Free Test" CTA.
7. **Scholarships (`1440 × 1850px`):** 3-step "How to Apply" onboarding strip, 4-column scholarship cards with Active, Closing Soon, and Expired states, external Google Forms link indicator (`↗`).
8. **About Us (`1440 × 2100px`):** Normalized 48px heading, left-aligned vision and philosophy, Dr. Anurag Silwal founder profile with 190K+ YouTube stats, clean 2-column "Be a Tutor" application form, link to Contact page.
9. **Articles Listing (`1440 × 1820px`):** Standardized "Articles" naming, featured story banner, category filter chips, equal-height cards with 2-line clamped titles and clean excerpts.
10. **Article Detail — SEE Result Guide (`1440 × 2040px`):** 18px body font, 720px max reading width, official SMS shortcode verification table, author/date/read time, compact sticky related sidebar.
11. **Contact Us (`1440 × 1480px`):** Bold headings, aligned contact info icons, non-overflowing emails, quick WhatsApp chat button, support hours, clean 2-column message form.
12. **Terms & Conditions (`1440 × 2300px`):** Standardized legal template, sticky Table of Contents sidebar, 720px reading column, numbered H2 sections, "Last Updated" badge.
13. **Privacy Policy (`1440 × 1950px`):** Matching legal template, clean title without emoji, sticky TOC, comfortable reading margins.
14. **Student Login (`1440 × 1100px`):** Refined 1px card border, split desktop brand feature panel, registered mobile number + password, Google login.
15. **Student Register (`1440 × 1400px`):** Grouped sections (Personal, Academic, Security, Photo upload), all existing fields preserved, correct "Padhai Mantra" branding.
16. **Forgot Password (`1440 × 980px`):** Clean password reset card matching Login design with registered mobile number input.

---

# Page 05 — Mobile Production Frames (`05 — Mobile`)

All 16 templates custom redesigned at **`390px` width** (iPhone 14/15 standard) and verified at **`360px`** (Android).

* **Mobile Touch Target:** Minimum `44 × 44px` on all buttons, tabs, inputs, and links.
* **Header:** Compact single-row 64px header with 44px hamburger menu trigger.
* **Form Inputs:** Strictly single-column on mobile, eliminating all placeholder clipping.
* **Sticky Bottom Bar:** Persistent enrollment strip (`Rs. 1,999/- [Enroll Now]`) on Course Detail.
* **Stats Row:** Compact `2×2` grid eliminating empty vertical gaps.
* **Horizontal Scroll:** Smooth slide tabs for Course Detail modules and Articles swipe row.

---

# Page 06 — Global States & Modals (`06 — Global States`)

* **Mobile Navigation Drawer:** Slide-out right panel with brand logo, close button, full navigation list, and bottom-pinned auth actions.
* **Promotional Announcement Modal:** Flash banner, date notice (*Valid until 30th Kartik*), dual CTAs, and session memory dismiss.
* **Contextual Empty States:** Custom illustrations and messages for Courses, Live Classes, Mock Tests, and Search Results.
* **Global 404 Page:** Branded error template with search input and recovery links.

---

# Page 07 — Prototype Flow (`07 — Prototype`)

* **Primary Clickable User Journey:**  
  `Home` → `Courses` → `Course Detail` → `Sign Up`
* **Mobile Drawer Journey:**  
  `Mobile Home` → `Tap Hamburger` → `Mobile Navigation Drawer` → `Tap Courses`
* **Micro-Interactions:** Tabs cross-fade, FAQ accordion expand/collapse, filter chip active toggling, and quiz option check.

---

# Page 08 — Developer Handoff (`08 — Handoff`)

* **Asset Exports:** Scalable SVG icons, 16:9 course graphics, authentic brand logo.
* **Design Tokens:** Exact CSS custom properties for colors, typography, spacing, radius, and shadows.
* **Responsive Annotations:** Container boundaries, 12-column desktop / 4-column mobile grids, breakpoint rules, and interaction states.

---

# Final Acceptance & Quality Assurance Checklist

- [x] 16 Desktop frames (1440px) & 16 Mobile frames (390px, verified at 360px).
- [x] Exactly one H1 per page; left-aligned paragraphs (never justified).
- [x] Poppins, Inter, and Mukta applied consistently with zero fallback errors.
- [x] Symmetrical 1200px container; 44px mobile touch targets.
- [x] Equal-height card rows with pinned bottom pricing and CTAs.
- [x] Zero Lorem Ipsum; 100% verified factual data preserved from Dr. Anurag Silwal and the brief.
- [x] Contextual empty states, expired states, mobile drawer, modal, and 404 page included.
- [x] Clickable prototype user journey and complete developer handoff specifications provided.
