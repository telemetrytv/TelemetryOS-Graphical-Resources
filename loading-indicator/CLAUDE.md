# CLAUDE.md - Agent Hints for TelemetryOS Logo Animation Package

This document provides context and guidance for AI agents (like Claude) working with this codebase.

## Project Overview

This is a **complete animation package** for the TelemetryOS logo with four implementation formats:
1. **SMIL Animated SVG** (`telemetryos-logo-smil.svg`) - Self-contained SVG with SMIL declarative animations ✅ Production Ready (RECOMMENDED)
2. **Animated SVG** (`telemetryos-logo-animated.svg`) - Self-contained SVG with CSS animations ✅ Production Ready
3. **React Component** (`TelemetryOSLoader.jsx`) - Self-contained React component with inline CSS ✅ Production Ready
4. **SVG + External CSS** (`telemetryos-logo.svg` + `telemetryos-logo.css`) - For advanced use cases ✅ Production Ready

## File Structure

```
/private/tmp/scratch/
├── index.html                         # 🏠 Main landing page with implementation cards
├── react-demo.html                    # ⚛️ React component demo with light/dark theme
├── svg-demo.html                      # 🎨 SVG demo (animated + external CSS)
├── smil-demo.html                     # ✨ SMIL declarative animations demo
├── TelemetryOSLoader.jsx              # ✅ Production React component
├── TelemetryOSLoader.example.jsx      # React usage examples
├── telemetryos-logo-smil.svg          # ✅ Production SMIL animated SVG (RECOMMENDED)
├── telemetryos-logo-animated.svg      # ✅ Production animated SVG with CSS
├── telemetryos-logo.svg               # Base SVG (static, for external CSS)
├── telemetryos-logo.css               # External CSS animations (advanced)
├── README.md                          # User-facing documentation
├── CLAUDE.md                          # This file - agent hints
└── logo.html                          # Original prototype
```

## Navigation System

All demo pages (`react-demo.html`, `svg-demo.html`, `smil-demo.html`) include:
- **Fixed navigation bar** at the top with links to all demos
- **Theme toggle button** (☀️ Light / 🌙 Dark) in the navigation
- **Back to home** link to return to `index.html`
- Consistent styling and layout across all pages

## Key Design Decisions

### 1. React Component Architecture

**File:** `TelemetryOSLoader.jsx`

- **Inline CSS**: All styles are embedded in the component using `<style>` tags
- **Scoped Styles**: Uses `React.useId()` to generate unique class names preventing conflicts
- **No Dependencies**: Zero external dependencies beyond React 18+
- **Props**:
  - `size` (number, default: 200): Width/height in pixels
  - `color` (string, default: '#f7b434'): Logo color
  - `animationDuration` (number, default: 2): Animation duration in seconds
  - `className` (string): Additional CSS classes

**Why inline CSS?**
- Single-file distribution
- No build step required
- No CSS import issues
- Works in any React environment

### 2. SVG Approach (Two Options)

#### Option A: Animated SVG (RECOMMENDED) ✅

**File:** `telemetryos-logo-animated.svg`

- **Self-Contained**: All CSS animations embedded in the SVG
- **Simple Usage**: Works with `<img>` tag - no external CSS needed
- **Fully Scalable**: Scales perfectly to any size
- **Zero Dependencies**: No external files required
- **Universal Compatibility**: Works in all modern browsers

**Usage:**
```html
<img src="telemetryos-logo-animated.svg" alt="TelemetryOS" style="width: 200px;" />
```

**Why this is recommended:**
- Simplest implementation
- No CSS file to manage
- Works with standard `<img>` tags
- Perfect for most use cases

#### Option B: SVG + External CSS (Advanced)

**Files:** `telemetryos-logo.svg` + `telemetryos-logo.css`

- **Flexible Control**: Customize animation speed, sizes via CSS classes
- **Size Classes**: `.telemetry-logo-sm/md/lg/xl` (64px, 128px, 200px, 300px)
- **Speed Classes**: `.telemetry-logo-slow/fast` (3s, 1s)
- **Glow Effect**: Optional `.telemetry-logo-container` wrapper
- **Requires Inline SVG**: Must inline SVG in HTML or use `<object>` tag

**When to use:**
- Need variable animation speeds
- Want CSS class-based size control
- Building a component library with shared CSS

### 3. SMIL Animated SVG

**File:** `telemetryos-logo-smil.svg`

- **Self-Contained**: All animations defined in XML using `<animate>` and `<animateTransform>` tags
- **No CSS Required**: Pure declarative SVG with SMIL (Synchronized Multimedia Integration Language)
- **Simple Usage**: Works with `<img>` tag - no external CSS needed
- **Fully Scalable**: Scales perfectly to any size
- **Zero Dependencies**: No external files required
- **Universal Compatibility**: Works in all modern browsers (Chrome, Firefox, Safari, Edge)

**Usage:**
```html
<img src="telemetryos-logo-smil.svg" alt="TelemetryOS" style="width: 200px;" />
```

**Why this is recommended:**
- Most declarative and easy to understand
- No CSS file to manage
- Works with standard `<img>` tags
- Perfect for most use cases
- Easier animation syntax than CSS keyframes

### 4. Animation Design

All formats replicate the same animation:

**Main T Shape (Primary):**
- Scale: 1.0 → 1.15 → 0.95 → 1.0
- Opacity: 0.75 → 1.0 → 0.85 → 0.75
- Duration: 2 seconds
- Delay: 0s

**Top Dot:**
- Scale: 1.0 → 1.25 → 0.9 → 1.0
- TranslateY: 0 → -8px → 3px → 0
- Opacity: 0.7 → 1.0 → 0.8 → 0.7
- Duration: 2 seconds
- Delay: 0.25s

**Bottom Dot:**
- Scale: 1.0 → 1.25 → 0.9 → 1.0
- TranslateY: 0 → -8px → 3px → 0
- Opacity: 0.7 → 1.0 → 0.8 → 0.7
- Duration: 2 seconds
- Delay: 0.5s

**Glow Effect (Optional):**
- Radial gradient pulse
- Duration: 2 seconds
- Scale: 1.0 → 1.12 → 1.0

### 6. TelemetryOS Brand Colors

**Official Color Palette** (from original logo.html):

**Primary Colors:**
- **Logo Gold**: `#f7b434` - Primary brand color, used for logo and accents
- **Dark Background**: `#0a0a0a` - Almost black, main dark theme background
- **Dark UI Elements**: `#1a1a1a` - Cards and sections in dark theme
- **Dark Borders**: `#333` - Borders and dividers in dark theme

**Light Theme:**
- **Light Background**: `#f5f5f5` - Light gray, main light theme background
- **Light UI Elements**: `#fff` - White cards and sections
- **Light Borders**: `#ddd` - Borders in light theme
- **Light Text**: `#1a1a1a` - Dark gray text on light backgrounds

**Neutral:**
- **Medium Gray**: `#888` - Secondary text, subtle elements
- **Button Hover**: `#ffc14d` - Lighter gold for hover states

### 7. Theme Toggle System

All demo pages include a theme toggle in the navigation bar:

**HTML Structure:**
```html
<button id="theme-toggle-nav">
  <span id="theme-icon">☀️</span> <span id="theme-text">Light</span>
</button>
```

**JavaScript Implementation:**
```javascript
let currentTheme = 'dark';
document.body.className = 'dark-theme';

themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.className = `${currentTheme}-theme`;

  // Update button
  themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  themeText.textContent = currentTheme === 'dark' ? 'Light' : 'Dark';
});
```

**React Integration:**
- React demo uses `useState` and `useEffect` to sync nav button with React state
- Theme state controls body className
- Button updates automatically via effect

## Common Tasks

### Adding a New Demo Page

1. Create new HTML file
2. Add navigation HTML at top of `<body>`:
```html
<nav class="demo-nav">
  <a href="index.html" class="demo-nav-brand">← TelemetryOS Logo</a>
  <div class="demo-nav-links">
    <a href="react-demo.html" class="demo-nav-link">React</a>
    <a href="svg-demo.html" class="demo-nav-link">SVG + CSS</a>
    <a href="smil-demo.html" class="demo-nav-link">SMIL</a>
    <a href="new-demo.html" class="demo-nav-link active">New Demo</a>
    <button id="theme-toggle-nav" style="padding: 8px 16px; background: #333; color: #f7b434; border: 1px solid #555; border-radius: 6px; cursor: pointer; font-size: 0.9rem;">
      <span id="theme-icon">☀️</span> <span id="theme-text">Light</span>
    </button>
  </div>
</nav>
```
3. Add navigation CSS and theme styles (see existing demo files)
4. Add theme toggle JavaScript at end of body
5. Update `index.html` to link to new demo

### Modifying Animations

**Animated SVG:**
- Edit the `<style>` block inside `telemetryos-logo-animated.svg`
- Animation names: `mainTPulse`, `dotBounce`
- Modify duration by changing `animation` property values

**React Component:**
- Edit keyframes in the `<style>` block within `TelemetryOSLoader.jsx`
- Animation names: `telemetryMainTPulse`, `telemetryDotBounce`, `telemetryGlow`
- Can be controlled via `animationDuration` prop

**SVG + External CSS:**
- Edit `telemetryos-logo.css` keyframes
- Animation names: `telemetryMainTPulse`, `telemetryDotBounce`, `telemetryGlow`

**Lottie:**
- Not recommended - use After Effects instead
- If necessary: Edit keyframe arrays in JSON (`"k"` arrays)

### Changing Colors

**Animated SVG:**
- Edit `fill` attribute in SVG paths inside `telemetryos-logo-animated.svg`
- Example: Change `fill="#f7b434"` to `fill="#00ffff"`

**React Component:**
- User can pass `color` prop: `<TelemetryOSLoader color="#00ffff" />`
- Default is `#f7b434` (TelemetryOS Gold)

**Base SVG (for external CSS):**
- Edit `fill` attribute in `telemetryos-logo.svg` paths
- Or use CSS: `.telemetry-logo-part { fill: #newcolor; }`

**SMIL Animated SVG:**
- Edit `fill` attribute in SVG paths within `telemetryos-logo-smil.svg`
- Color changes require editing the SVG file directly

## Troubleshooting

### Animated SVG Not Animating

**Check:**
1. Using `telemetryos-logo-animated.svg` (not the base `telemetryos-logo.svg`)
2. Browser supports CSS animations (all modern browsers)
3. SVG file is fully loaded (check network tab)
4. No conflicting CSS that might disable animations

**Note:** The animated SVG works with `<img>` tags - no special requirements!

### React Component Not Animating

**Check:**
1. React 18+ installed (needs `useId` hook)
2. Babel transform is working (for JSX)
3. Browser console for errors
4. Component is properly imported

### SVG + External CSS Not Working

**Check:**
1. Using base `telemetryos-logo.svg` (not animated version)
2. Must inline SVG in HTML or use `<object>` tag
3. CSS file `telemetryos-logo.css` is loaded
4. SVG has correct class names matching CSS selectors

### SMIL Animated SVG Not Animating

**Check:**
1. Using `telemetryos-logo-smil.svg` (not other SVG versions)
2. Browser supports SMIL (all modern browsers: Chrome, Firefox, Safari, Edge)
3. SVG file is fully loaded (check network tab)
4. File path is correct

**Note:** SMIL animations work with standard `<img>` tags - no special setup needed!

## Best Practices

### For Users
1. **Start Simple**: Use `telemetryos-logo-smil.svg` for simplest, most declarative implementation - **RECOMMENDED for most use cases**
2. **React Apps**: Use `TelemetryOSLoader` component for React/Next.js projects
3. **Test Responsively**: All vector formats (SVG, SMIL, React) scale perfectly
4. **Consider Performance**: CSS and SMIL animations are hardware-accelerated
5. **Accessibility**: Add appropriate ARIA labels and alt text
6. **SMIL vs CSS**: Both work identically - SMIL is more declarative and easier to understand

### For Maintainers
1. **Keep Formats Synchronized**: Animation timing should match across all formats
2. **Document Changes**: Update README.md and this file
3. **Test All Demos**: Verify navigation and animations work
4. **Version Consistency**: File sizes and metrics in README should be accurate

## Common Modifications

### Faster/Slower Animation

**CSS (React & SVG):**
```css
.telemetry-main-t {
  animation-duration: 1s; /* Faster */
}
```

**Via Props (React only):**
```jsx
<TelemetryOSLoader animationDuration={1} />
```

### Disable Animation

**CSS:**
```css
.telemetry-logo-part {
  animation: none !important;
}
```

**React:**
- Can't disable via props currently
- Would need to add `animated` boolean prop

### Add New Size Variant (SVG+CSS)

In `telemetryos-logo.css`:
```css
.telemetry-logo-xxl {
  width: 400px;
  height: 400px;
}
```

## Architecture Notes

### Why Four Formats?

1. **SMIL Animated SVG**: Most declarative, easiest to understand, zero dependencies (RECOMMENDED)
2. **Animated SVG with CSS**: Alternative with CSS keyframes, slightly smaller file size
3. **React Component**: Best developer experience for React apps, prop-based control
4. **SVG + External CSS**: Advanced use cases requiring CSS customization and class-based control

### Why Not WebGL/Canvas?

- Overkill for simple 2D animations
- Larger bundle size
- Not necessary for this use case
- CSS animations are GPU-accelerated

### Why No Animation Library (GSAP, Anime.js)?

- CSS animations sufficient for this complexity
- No external dependencies = easier distribution
- Better performance (hardware acceleration)
- Simpler to understand and modify

## Testing Checklist

When making changes, verify:

- [ ] `index.html` loads and navigation works
- [ ] `react-demo.html` displays all size variants correctly
- [ ] `svg-demo.html` shows animated SVG examples
- [ ] `smil-demo.html` shows SMIL animated SVG examples
- [ ] Light/dark theme toggle works on all demo pages
- [ ] Navigation links work on all demo pages
- [ ] `TelemetryOSLoader.jsx` can be imported in React projects
- [ ] `telemetryos-logo-animated.svg` animates in browser
- [ ] `telemetryos-logo-smil.svg` animates in browser
- [ ] `telemetryos-logo.svg` + `.css` work when copied to new projects
- [ ] README.md is accurate and up-to-date
- [ ] File sizes in README match actual file sizes

## Future Enhancements

Potential improvements:

1. **TypeScript Definitions**: Add `.d.ts` for React component
2. **Vue/Svelte Components**: Port React component to other frameworks
3. **npm Package**: Publish React component to npm
4. **Animation Controls**: Add play/pause/speed props to React component
5. **Color Variants**: Predefined color schemes (blue, green, red)
6. **Accessibility**: ARIA attributes and reduced-motion support
7. **SMIL Variants**: Create SMIL versions with different animation styles

## Contact & Feedback

This package was created as a comprehensive animation solution for TelemetryOS branding. For questions or suggestions about the implementation, refer to the repository issues or documentation.

---

**Last Updated**: 2025-01-XX
**Maintainer**: TelemetryOS Team
**Status**: Production Ready (SMIL, React, SVG+CSS)
