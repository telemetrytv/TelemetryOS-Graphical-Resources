# TelemetryOS Graphical Resources

Complete brand asset library for TelemetryOS, optimized for modern web and mobile platforms (2025 standards).

> **🌐 [View Interactive Asset Browser](https://telemetrytv.github.io/TelemetryOS-Graphical-Resources/)**
> Browse, preview, and download all brand assets through our GitHub Pages site with interactive galleries, code examples, and platform-specific guidelines.

## 🎨 What's Inside

- **Core Brand Marks** - Master logomarks and wordmarks in SVG, PNG, and WebP
- **Web Icons** - Modern favicon implementation with PWA support
- **Mobile Assets** - iOS and Android app icons
- **Social Media** - OpenGraph images for Twitter, Facebook, LinkedIn, Instagram
- **Print Ready** - High-resolution 300 DPI assets for professional printing

## 📁 Structure

```
brandmarks/
├── core/           # Source of truth - master brand files
│   ├── logomarks/  # Square TelemetryOS logomark (amber, black, white)
│   └── wordmarks/  # Horizontal wordmark (4:1 aspect ratio)
├── web/            # Favicon and web icons
├── mobile/         # iOS and Android app icons
│   ├── ios/        # Apple App Store assets
│   └── android/    # Google Play Store assets
├── social/         # Social media OpenGraph images
│   ├── twitter/    # Twitter cards
│   ├── facebook/   # Facebook Open Graph
│   ├── linkedin/   # LinkedIn covers
│   └── instagram/  # Instagram posts
└── print/          # High-res assets for printing
    ├── high-res/   # 2048px and 4096px at 300 DPI
    └── business-cards/
```

## 🚀 Quick Start

### For Developers

**Web Implementation**:
```html
<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/brandmarks/web/favicon.svg">
<link rel="icon" type="image/x-icon" href="/brandmarks/web/favicon.ico">
<link rel="apple-touch-icon" href="/brandmarks/web/apple-touch-icon.png">

<!-- PWA Manifest -->
<link rel="manifest" href="/site.webmanifest">

<!-- Logomark (responsive with WebP) -->
<picture>
  <source srcset="/brandmarks/core/logomarks/telemetryos-logomark-amber-256.webp" type="image/webp">
  <img src="/brandmarks/core/logomarks/telemetryos-logomark-amber-256.png" alt="TelemetryOS" width="256">
</picture>
```

**Social Media Meta Tags**:
```html
<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="/brandmarks/social/twitter/card-1200x675.png">

<!-- Facebook/OpenGraph -->
<meta property="og:image" content="/brandmarks/social/facebook/og-1200x630.png">
```

### For Designers

**Core Assets** (`brandmarks/core/`):
- **Logomarks**: 32px, 64px, 128px, 256px, 512px, 1024px (square)
- **Wordmarks**: 64px, 128px, 256px, 512px (4:1 ratio)
- **Colors**: Amber (#F8B334), Black (#000000), White (#FFFFFF)
- **Formats**: SVG (scalable), PNG (universal), WebP (optimized)

**Use SVG when possible** - scalable, smallest file size, 97%+ browser support

## 🎨 Brand Colors

| Color | HEX | RGB | CMYK | Usage |
|-------|-----|-----|------|-------|
| **Amber** (Primary) | `#F8B334` | 248, 179, 52 | C:0 M:28 Y:79 K:3 | Primary brand color, light backgrounds |
| **Black** | `#000000` | 0, 0, 0 | C:0 M:0 Y:0 K:100 | Professional contexts, monochrome |
| **White** | `#FFFFFF` | 255, 255, 255 | C:0 M:0 Y:0 K:0 | Dark backgrounds, overlays |

## 📱 Platform Guidelines

### iOS Apps
- Use `brandmarks/mobile/ios/app-icon-1024x1024.png`
- Required by Apple App Store (PNG only)
- Follow Apple Human Interface Guidelines

### Android Apps
- Use `brandmarks/mobile/android/adaptive-icon-*.png`
- Supports adaptive icons (foreground + background)
- Follow Material Design guidelines

### Progressive Web Apps (PWA)
- Include `site.webmanifest` in your root directory
- Reference icons from `brandmarks/web/`
- Theme color: `#F8B334` (amber)

### Print Materials
- Use `brandmarks/print/high-res/` for professional printing
- 300 DPI quality for sharp reproduction
- Monochrome variants available for B&W printing

## 📐 File Naming

### Logomarks (Square)
```
telemetryos-logomark-{color}-{size}.{format}
```
- **Colors**: amber, black, white
- **Sizes**: 32, 64, 128, 256, 512, 1024 (pixels)
- **Formats**: png, webp, svg

### Wordmarks (4:1 Aspect Ratio)
```
telemetryos-wordmark-{color}-{width}.{format}
```
- **Colors**: amber, black, white
- **Widths**: 64, 128, 256, 512 (height = width / 4)
- **Formats**: png, webp, svg

## 📚 Documentation

- **[AGENTS.md](./AGENTS.md)** - Complete technical documentation for LLM agents
- **[CLAUDE.md](./CLAUDE.md)** - Quick reference for AI assistants
- **[site.webmanifest](./site.webmanifest)** - PWA configuration

## 🔧 Generating Assets

### From SVG (Best Quality)
```bash
sips -Z 256 brandmarks/core/logomarks/telemetryos-logomark-amber.svg --out output-256.png
cwebp -q 90 output-256.png -o output-256.webp
```

### Maintaining Aspect Ratio
```bash
# Use -Z (uppercase) to maintain aspect ratio
sips -Z 512 source.png --out output-512.png

# Never stretch - wordmarks are 4:1 ratio
```

## 📊 Asset Summary

- **Total Files**: ~120 (down from 250+ after rationalization)
- **Core Assets**: 66 files (source of truth)
- **Web/Mobile**: 22 files (favicons + app icons)
- **Social Media**: 16 files (4 major platforms)
- **Print**: 10 files (high-resolution)

## ✨ 2025 Optimizations

This repository has been modernized for 2025 standards:

✅ WebP + PNG fallback for optimal performance
✅ Removed legacy formats (Windows tiles, mstiles)
✅ Eliminated duplicate assets across directories
✅ Modern favicon implementation (SVG + ICO)
✅ Essential platforms only (no YouTube, TikTok, Discord assets)
✅ Clean structure with single source of truth

## 📝 License

All assets are proprietary to TelemetryOS. Unauthorized use is prohibited.

## 🤝 Contributing

When adding new assets:
1. Start with `brandmarks/core/` (source of truth)
2. Generate platform-specific variants as needed
3. Include both PNG and WebP for raster images
4. Follow existing naming conventions
5. Update documentation

---

**Questions?** See [AGENTS.md](./AGENTS.md) for detailed technical documentation.
