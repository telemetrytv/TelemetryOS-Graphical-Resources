# TelemetryOS Logo Animation Package

Complete animation package for the TelemetryOS logo with multiple formats for different use cases.

## 📦 Files Included

### Standalone Animated SVG (Recommended - Simplest)
- **telemetryos-logo-animated.svg** - Self-contained animated SVG with CSS animations (just use `<img>` tag!)
- **svg-demo.html** - Comprehensive demo showcasing animated SVG

### SMIL Animated SVG (Declarative Animations)
- **telemetryos-logo-smil.svg** - Self-contained animated SVG using SMIL declarative syntax (no CSS!)
- **smil-demo.html** - Interactive demo showcasing SMIL animations

### React Component
- **TelemetryOSLoader.jsx** - Self-contained React component with inline CSS
- **TelemetryOSLoader.example.jsx** - Usage examples and helper components
- **react-demo.html** - Interactive React demo with light/dark theme toggle

### Advanced: SVG + External CSS
- **telemetryos-logo.svg** - Base SVG logo (requires external CSS)
- **telemetryos-logo.css** - Animation stylesheet with size variants

### Original Source
- **logo.html** - Original HTML/CSS animation prototype

## 🚀 Quick Start

> **💡 Recommendation:** For most use cases, start with the **SMIL Animated SVG** - it's the simplest, most declarative, and self-contained option with zero dependencies.

### SMIL Animated SVG (Recommended - Simplest!)

```html
<!-- Pure SVG with no CSS - uses SMIL animation tags -->
<img src="telemetryos-logo-smil.svg" alt="TelemetryOS" style="width: 200px;" />

<!-- Or with object tag -->
<object data="telemetryos-logo-smil.svg" type="image/svg+xml" style="width: 200px;"></object>
```

**Why use this?**
- ✅ 100% declarative (no CSS, pure SVG)
- ✅ Works with simple `<img>` tags
- ✅ Self-contained (animations in XML tags)
- ✅ Easiest to understand animation syntax
- ✅ ~3.2KB file size
- ✅ **Recommended for most use cases**

### Animated SVG with CSS (Alternative)

```html
<!-- That's it! Just use an img tag -->
<img src="telemetryos-logo-animated.svg" alt="TelemetryOS" style="width: 200px;" />

<!-- Or with object tag for better control -->
<object data="telemetryos-logo-animated.svg" type="image/svg+xml" style="width: 200px;"></object>
```

**Why use this?**
- ✅ Zero dependencies
- ✅ Works with simple `<img>` tags
- ✅ Self-contained (CSS animations in `<style>` block)
- ✅ Scales perfectly to any size
- ✅ ~2KB file size

**SMIL vs CSS Animations:**
Both produce identical visual results. **SMIL is recommended** for its declarative XML syntax (`<animate>`, `<animateTransform>`) which is easier to understand than CSS `@keyframes`. Both work in all modern browsers.

### React Component (Best for React apps)

```jsx
import TelemetryOSLoader from './TelemetryOSLoader';

// Default usage
<TelemetryOSLoader />

// Custom size and color
<TelemetryOSLoader size={120} color="#00ffff" animationDuration={1.5} />
```

**Props:**
- `size` (number): Width/height in pixels (default: 200)
- `color` (string): Logo color (default: '#f7b434')
- `animationDuration` (number): Animation duration in seconds (default: 2)
- `className` (string): Additional CSS classes

### Advanced: SVG + External CSS (For CSS customization)

> **Note:** For most use cases, use the **Animated SVG** above instead. This approach is for advanced scenarios requiring CSS class-based control.

```html
<link rel="stylesheet" href="telemetryos-logo.css">

<!-- Basic usage (requires inline SVG or object tag) -->
<object data="telemetryos-logo.svg" type="image/svg+xml" class="telemetry-logo-lg"></object>

<!-- With glow effect -->
<div class="telemetry-logo-container">
  <object data="telemetryos-logo.svg" type="image/svg+xml" class="telemetry-logo-md"></object>
</div>
```

**Available Classes:**
- Size: `.telemetry-logo-sm` (64px), `.telemetry-logo-md` (128px), `.telemetry-logo-lg` (200px), `.telemetry-logo-xl` (300px)
- Speed: `.telemetry-logo-slow` (3s), `.telemetry-logo-fast` (1s)
- Container: `.telemetry-logo-container` (adds glow effect)

## 🎨 Animation Details

### Design
- **Main T**: Pulses and scales (1.0 → 1.15 → 0.95 → 1.0)
- **Top Dot**: Bounces up with scale animation (delay: 0.25s)
- **Bottom Dot**: Bounces up with scale animation (delay: 0.5s)
- **Glow Effect**: Optional radial gradient that pulses

### Technical Specs
- **Duration**: 2 seconds per cycle
- **Easing**: ease-in-out
- **Loop**: Infinite
- **Color**: #f7b434 (TelemetryOS gold)
- **Dimensions**: 295 x 292px (original SVG viewBox)

## 📊 Format Comparison

| Format | Best For | File Size | Platform Support | Production Ready |
|--------|----------|-----------|------------------|------------------|
| **SMIL Animated SVG** | Most use cases (simplest, most declarative) | ~3.2KB | Web (all browsers) | ✅ Yes - **RECOMMENDED** |
| **Animated SVG (CSS)** | Alternative to SMIL with CSS keyframes | ~2KB | Web (all browsers) | ✅ Yes |
| **React Component** | React/Next.js apps | ~5KB | Web (React) | ✅ Yes |
| **SVG + External CSS** | Advanced CSS customization | ~3KB | Web (all browsers) | ✅ Yes |

## 🎯 Use Cases

### Loading Indicators
```html
<!-- Simple HTML (Animated SVG) -->
<div class="loading-overlay">
  <img src="telemetryos-logo-animated.svg" alt="Loading..." style="width: 200px;" />
</div>
```

```jsx
// React Component
{isLoading && <TelemetryOSLoader size={64} />}
```

### Button States
```jsx
<button disabled={loading}>
  {loading && <TelemetryOSLoader size={24} color="#0a0a0a" />}
  {loading ? 'Loading...' : 'Submit'}
</button>
```

### Full Page Loaders
```jsx
<div className="full-page-loader">
  <TelemetryOSLoader size={200} />
  <p>Loading your content...</p>
</div>
```

### Inline Text
```html
<div class="inline-loader">
  <span>Processing</span>
  <img src="telemetryos-logo-animated.svg" alt="Loading" style="width: 48px; vertical-align: middle;" />
</div>
```

## 🎨 Customization

### Animated SVG
```html
<!-- Any size (scales perfectly) -->
<img src="telemetryos-logo-animated.svg" style="width: 150px;" />

<!-- For color/speed changes, edit the SVG file directly -->
<!-- Change fill="#f7b434" to your color -->
<!-- Change animation duration in the <style> block -->
```

### SMIL Animated SVG
```html
<!-- Any size (scales perfectly) -->
<img src="telemetryos-logo-smil.svg" style="width: 150px;" />

<!-- For customization, edit the SVG file directly -->
<!-- Change fill="#f7b434" to your color -->
<!-- Change dur="2s" in <animate> and <animateTransform> tags -->
<!-- Modify values attribute to change animation keyframes -->
```

### React Component
```jsx
// Custom color
<TelemetryOSLoader color="#00ffff" />

// Faster animation
<TelemetryOSLoader animationDuration={1} />

// Larger size
<TelemetryOSLoader size={300} />
```

### SVG + External CSS
```css
/* Override via CSS classes */
.telemetry-logo-container {
  --logo-color: #ff00ff; /* Change color */
}
```

## 📱 Responsive Design

All formats are fully scalable and work at any size without quality loss.

**CSS Media Queries Example:**
```css
.logo-container {
  width: 200px;
}

@media (max-width: 768px) {
  .logo-container {
    width: 120px;
  }
}

@media (max-width: 480px) {
  .logo-container {
    width: 80px;
  }
}
```

## 🔧 Browser Support

- **React Component**: All modern browsers (ES6+)
- **SVG + CSS**: All browsers supporting CSS animations (IE10+)
- **SMIL Animated SVG**: All modern browsers (Chrome, Firefox, Safari, Edge)

## 📄 License

TelemetryOS brand assets - All rights reserved.

## 💡 Tips

1. **Start Simple**: Use the **SMIL Animated SVG** for the easiest, most declarative implementation (just an `<img>` tag!) - **Recommended for most use cases**
2. **React Apps**: Use the React component for optimal integration and prop-based control
3. **File Size**: SMIL is compact at ~3.2KB with zero dependencies and no CSS required
4. **Accessibility**: Add appropriate ARIA labels and alt text for screen readers
5. **Color Contrast**: Ensure sufficient contrast for accessibility (especially in light mode)
6. **SMIL vs CSS**: Both animated SVGs work identically - SMIL is recommended for clearer, more declarative syntax

## 🐛 Troubleshooting

**Animated SVG not animating:**
- Ensure you're using `telemetryos-logo-animated.svg` (not the base `telemetryos-logo.svg`)
- Check browser console for loading errors
- Verify the SVG file path is correct
- The animated SVG works with standard `<img>` tags - no special setup needed!

**SMIL Animated SVG not animating:**
- Ensure you're using `telemetryos-logo-smil.svg`
- Check browser console for loading errors
- Verify the SVG file path is correct
- SMIL is supported in all modern browsers (Chrome, Firefox, Safari, Edge)
- Works with standard `<img>` tags - no special setup needed!

**React component not animating:**
- Ensure React 18+ (useId hook requirement)
- Check that CSS is being injected (should see `<style>` tags in DOM)
- Verify component is properly imported

**SVG + External CSS not working:**
- Must use base `telemetryos-logo.svg` (not the animated version)
- Requires `<object>` tag or inline SVG for external CSS to work
- Ensure `telemetryos-logo.css` is loaded
- Check that CSS classes match SVG class names

## 📚 Additional Resources

- [SVG Animation Guide](https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL)
- [React Animation Best Practices](https://react.dev/learn/adding-interactivity)
- [CSS Animations Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

---

**Created for TelemetryOS** - A comprehensive animation package supporting React and vanilla JavaScript.
