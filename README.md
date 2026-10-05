# Padhai Mantra — Website UI/UX Redesign

Official public pages redesign project for **Padhai Mantra**, Nepal's ed-tech platform for SEE (Class 10) and NEB Class 11–12 students.

## 🎯 Project Overview
This repository contains the front-end redesign for the public, logged-out website of Padhai Mantra, built following the official **October 2026 Redesign Brief**.

### Key Design Foundations:
- **Brand Identity:** Preserved Padhai Mantra core brand blue (`#125BCC`) with high-contrast slate neutrals and academic warmth.
- **Typography:** Google Fonts pairing of **Poppins** (Headings), **Inter** (Body text & tabular figures), and **Mukta** (Devanagari / Nepali language support).
- **Responsive Frames:**
  - Desktop: `1440px` frame, `1240px` container, 12-column grid, 24px gutters.
  - Mobile: `390px` (iPhone 14/15) + tested at `360px` (standard Android), 4-column structure, 16px side padding.
  - 8-point vertical spacing rhythm.
- **Strictly Authentic Content:** Built using real course names (`Apex Batch 2083`, `Ignite 2083`, `Project 4.0`), real student testimonials (Saujan Rai, Ishreya Manandhar, Abhyudit Bikram Shah, Deepson Simkhada), verified stats (`33K+`, `8+`, `230+`, `80%`), and real contact details.

## 🚀 Live Preview & Interactive Viewport Switcher
Open `index.html` in any modern web browser or run:
```bash
python -m http.server 8080
```
Then visit `http://localhost:8080/index.html`.

The page includes a top preview toolbar that lets you toggle between:
- **Desktop 1440px Frame**
- **Mobile 390px Frame**
- **Android 360px Frame**
- **Fluid Responsive View**
- **Promotional Popup Preview**

## 📁 Project Structure
```
padhai-mantra/
├── index.html              # Home page template with interactive viewport toolbar
├── css/
│   ├── design-system.css   # Core tokens, color palette, typography scale, reusable components
│   └── home.css            # Home-specific layouts, hero, stats, news, and footer
├── js/
│   └── main.js             # Viewport switcher, mobile drawer, testimonial clamping, FAQ accordion
└── README.md
```

## 📄 License & Ownership
Design concepts and assets property of **Padhai Mantra Pvt. Ltd.**, Kathmandu, Nepal.
