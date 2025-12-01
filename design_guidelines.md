# Design Guidelines for Cipet - Neubrutalism Landing Page

## Design Aesthetic: Neubrutalism

This project requires a strict **Neubrutalism** design approach with bold, unapologetic visual elements.

## Core Visual Identity

### Color Palette
- **Primary Yellow:** #FFDE00 (High-energy accent, CTAs)
- **Primary Pink:** #FF52A3 (Service cards, highlights)
- **Primary Cyan:** #00F0FF (Interactive elements, links)
- **Black:** #000000 (Borders, text)
- **White:** #FFFFFF (Backgrounds, contrast)

### Typography
- **Headers/Titles:** 'Clash Display' (Bold, impactful)
- **Body/Paragraphs:** 'Space Grotesk' (Clean, readable)
- **Font Weights:** Bold for headings (700-800), Regular for body (400-500)

### Neubrutalism Core Principles
- **Borders:** 3px solid black on ALL components (cards, buttons, inputs, images)
- **Shadows:** Hard, offset shadows without blur (e.g., `8px 8px 0 #000000`)
- **No Gradients:** Flat, solid colors only
- **Sharp Corners:** No border-radius or minimal (2-4px max)
- **High Contrast:** Black borders against vibrant backgrounds

## Layout Structure

### 1. Navigation Bar
- Fixed/sticky header with black border bottom
- Left: "CIPET" logo (bold, uppercase)
- Right: Language toggle (ID/EN) as a button with border + hard shadow
- Background: White or bright Yellow

### 2. Hero Section
- **Large Hero Image:** Use a vibrant, creative workspace image or abstract design graphics
- Image treatment: 3px black border with hard shadow
- Overlaid elements on blurred background boxes:
  - Large headline: "CREATIVE FREELANCER" or localized equivalent
  - Subheading describing services
  - Primary CTA button (vibrant color with black border + shadow)
- Height: 70-90vh on desktop, auto on mobile

### 3. Services Section (Bento Grid)
- Asymmetric grid layout (Pinterest-style)
- **Service Cards:**
  - Each card: 3px black border, hard shadow (6-8px offset)
  - Alternating background colors (Yellow, Pink, Cyan)
  - Bold service title + brief description
  - Icon (if used): Simple, bold line icons
- Two main categories visible:
  - **Graphic Design** (Flyer, Poster, Social Media, UI/UX)
  - **Academic Help** (Makalah/Essay, PPT, Resume/Summary)
- Helper text explaining service limitations

### 4. Portfolio Section
- Grid of work samples (2-3 columns desktop, 1 mobile)
- Each image: 3px black border with hard shadow
- Hover state: Lift shadow (increase offset), no blur
- Optional overlay with project name on hover (solid color background)

### 5. Order Form Section
- Large, prominent form container with thick border and shadow
- Form background: White or light color
- **Form Elements:**
  - All inputs: 3px black border, no rounded corners
  - Labels: Bold, uppercase, Space Grotesk
  - Dropdowns: Custom-styled with Neubrutalism treatment
  - Submit button: Vibrant color (Pink or Yellow) with black border + shadow
  - Loading state: Keep borders, show simple spinner
- Conditional helper text based on service selection
- Success message: Bold, bordered box with Cyan background

### 6. Footer
- Black border top
- Bright background (Yellow or Cyan)
- Social links, copyright, contact info
- All links with underline and bold on hover

## Component Specifications

### Buttons
- 3px solid black border
- Hard shadow (6px 6px 0 #000000)
- Vibrant background (Yellow/Pink/Cyan)
- Bold, uppercase text
- Hover: Reduce shadow offset (2px 2px 0)
- Active: No shadow (pressed effect)
- Disabled: 50% opacity, maintain borders

### Cards
- 3px black border on all sides
- 8px 8px 0 #000000 shadow
- Padding: 24-32px
- Background: Solid vibrant or white
- Stack on mobile, grid on desktop

### Inputs & Form Fields
- Height: 48-56px
- 3px black border
- No border-radius or 2px max
- Focus state: Thicker border (4px) or Cyan border
- Background: White

## Spacing System
Use Tailwind units: **4, 6, 8, 12, 16** for consistency
- Component padding: p-6 to p-8
- Section margins: my-12 to my-16
- Grid gaps: gap-6 to gap-8

## Responsive Breakpoints
- Mobile First approach
- sm: 640px (stack to 1 column)
- md: 768px (2 columns)
- lg: 1024px (3 columns, full layout)

## Images
- **Hero:** Large, vibrant creative workspace or design-focused image
- **Portfolio:** Work samples (graphic designs, presentations, etc.)
- All images: 3px black border with hard shadow
- No filters except brightness/contrast adjustments

## Language Toggle
- Button-style toggle (ID | EN)
- Active language: Vibrant background + black border
- Inactive: White background + black border
- Positioned in top-right of navbar

## Animations (Minimal)
- Avoid distracting animations
- Simple shadow transitions on hover (0.2s ease)
- Form submission: Simple loading spinner (no elaborate animations)

This design creates a bold, memorable, and highly functional landing page that stands out through its distinctive Neubrutalism aesthetic while maintaining excellent usability.