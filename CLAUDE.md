# TelemetryOS Graphical Resources - Agent Guide

This repository contains the complete TelemetryOS brand assets optimized for 2025 standards.

## For LLM Agents

**Primary Documentation**: See [AGENTS.md](./AGENTS.md) for detailed project structure and usage guidelines.

## Quick Context

This repository maintains:
- **Core brand assets** (logos, wordmarks) in multiple formats and colors
- **Web/mobile icons** optimized for modern browsers and PWAs
- **Social media assets** for major platforms
- **Print-ready** high-resolution files

## Key Principles

1. **Modern First**: Optimized for 2025 web standards (WebP + PNG fallback)
2. **Minimal Duplication**: Each asset exists in one canonical location
3. **Platform Essentials Only**: No legacy formats or redundant variants
4. **Source of Truth**: `brandmarks/core/` contains master files - all others derive from these

## Structure Overview

```
brandmarks/
├── core/           # Master brand files (SVG, PNG, WebP)
├── web/            # Favicon and web icons
├── mobile/         # iOS and Android app icons
├── social/         # OpenGraph images (Twitter, Facebook, LinkedIn, Instagram)
└── print/          # High-res 300dpi assets
```

## Common Tasks

### Adding a new size variant
Generate from `brandmarks/core/brandmarks/` or `brandmarks/core/wordmarks/` using the existing SVG or largest PNG as source.

### Updating branding
Replace files in `brandmarks/core/` first, then regenerate platform-specific assets as needed.

### Generating platform assets
Use core assets as source material. Maintain aspect ratios and avoid stretching.

## Technical Notes

- **Colors**: amber (primary), black, white
- **Formats**: SVG (vector), PNG (raster), WebP (optimized raster)
- **Logo sizes**: 32, 64, 128, 256, 512, 1024px
- **Wordmark sizes**: 64, 128, 256, 512px (4:1 aspect ratio)

See [AGENTS.md](./AGENTS.md) for complete documentation.
