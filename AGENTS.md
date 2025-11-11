# TelemetryOS Graphical Resources - Agent Documentation

## Project Overview

This repository contains the complete TelemetryOS brand asset library, optimized for modern web and mobile platforms (2025 standards). Assets have been rationalized to eliminate duplication while maintaining all essential formats and sizes.

## Directory Structure

### brandmarks/core/
**Source of truth for all brand assets**

#### brandmarks/core/logomarks/
Primary TelemetryOS logomark (square format) in three color variants:
- `telemetryos-logomark-{amber|black|white}-{32|64|128|256|512|1024}.{png|webp}`
- `telemetryos-logomark-{amber|black|white}.svg`

**Total**: 39 files (3 colors × 6 sizes × 2 formats + 3 SVG)

#### brandmarks/core/wordmarks/
Full TelemetryOS wordmark (horizontal text logo, 4:1 aspect ratio):
- `telemetryos-wordmark-{amber|black|white}-{64|128|256|512}.{png|webp}`
- `telemetryos-wordmark-{amber|black|white}.svg`

**Total**: 27 files (3 colors × 4 sizes × 2 formats + 3 SVG)

### brandmarks/web/
**Modern web favicon implementation**

Essential favicon files for 2025 browsers:
- `favicon.svg` - Scalable, modern browsers (97%+ support)
- `favicon.ico` - Multi-resolution ICO (legacy support)
- `favicon-{16|32}x{16|32}.{png|webp}` - Standard sizes
- `apple-touch-icon.png` - iOS home screen (180x180)
- `android-chrome-512x512.{png|webp}` - Android PWA

**Total**: 10 files

**Usage**:
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

### brandmarks/mobile/
**Native mobile app icons**

#### brandmarks/mobile/ios/
- `app-icon-1024x1024.png` - Required by Apple App Store (PNG only, no WebP)
- `apple-touch-icon.{png|webp}` - iOS home screen (180x180)

**Total**: 4 files

#### brandmarks/mobile/android/
- `chrome-{192|512}x{192|512}.{png|webp}` - PWA manifest icons
- `adaptive-icon-{foreground|background}-512x512.{png|webp}` - Android adaptive icons

**Total**: 8 files

## File Naming Conventions

### Logomarks (Square Format)
```
telemetryos-logomark-{color}-{size}.{format}
```
- **color**: amber, black, white
- **size**: 32, 64, 128, 256, 512, 1024 (pixels, square)
- **format**: png, webp, svg

### Wordmarks (4:1 Aspect Ratio)
```
telemetryos-wordmark-{color}-{width}.{format}
```
- **color**: amber, black, white
- **width**: 64, 128, 256, 512 (pixels, height is width/4)
- **format**: png, webp, svg

### Platform-Specific Assets
Follow platform naming conventions:
- iOS: `app-icon-{size}x{size}.png`
- Android: `chrome-{size}x{size}.{png|webp}`, `adaptive-icon-{layer}-{size}x{size}.{png|webp}`

## Color Palette

### Amber (Primary)
- **HEX**: `#F8B334`
- **RGB**: 248, 179, 52
- **CMYK**: C:0% M:28% Y:79% K:3%
- **Usage**: Primary brand color, light backgrounds

### Black
- **HEX**: `#000000`
- **RGB**: 0, 0, 0
- **CMYK**: C:0% M:0% Y:0% K:100%
- **Usage**: Professional contexts, monochrome

### White
- **HEX**: `#FFFFFF`
- **RGB**: 255, 255, 255
- **CMYK**: C:0% M:0% Y:0% K:0%
- **Usage**: Dark backgrounds, overlays

## Format Guidelines

### When to use SVG
- Primary choice for web logos
- Scalable without quality loss
- Smallest file size for simple graphics
- Supported by 97%+ browsers

### When to use WebP
- Optimized raster images
- 60-80% smaller than PNG
- Modern browsers (97%+ support)
- Always provide PNG fallback

### When to use PNG
- Fallback for older browsers
- Required by some platforms (iOS App Store)
- Universal compatibility

### When to use ICO
- Multi-resolution favicon
- Legacy browser support
- Contains 16x16, 32x32, 48x48 in one file

## Common Operations

### Generating New Size Variant

```bash
# From SVG (best quality)
sips -Z {size} source.svg --out output-{size}.png

# From largest PNG (if SVG unavailable)
sips -Z {size} source-1024.png --out output-{size}.png

# Convert to WebP
cwebp -q 90 output-{size}.png -o output-{size}.webp
```

### Maintaining Aspect Ratio
- Use `-Z` flag (uppercase) in sips to maintain aspect ratio
- Never use `-z` with different width/height for non-square assets
- Wordmarks are 4:1 ratio (width = 4 × height)

### Creating Favicons
```bash
# Generate ICO with multiple sizes
# (Use external tool or keep existing favicon.ico)

# Generate standard web sizes
sips -Z 16 core/logo-32.png --out web/favicon-16x16.png
sips -Z 32 core/logo-32.png --out web/favicon-32x32.png
```

## Removed in 2025 Cleanup

The following were removed as no longer necessary:

- **desktop/windows/** - Windows 8/10 tiles (obsolete)
- **app-store/** - Duplicated mobile/ assets
- **web/banners/** - Generate on-demand from core
- **web/email-signatures/** - Generate on-demand from core
- **accessibility/** - CSS handles high-contrast modes
- **developer/{github,npm}/** - Generate on-demand as needed
- Legacy favicon sizes (48px, 192px in web/)
- YouTube, TikTok, Discord social assets (low priority)

## Best Practices

### Adding New Assets
1. Always create in `brandmarks/core/` first
2. Use existing SVG or largest PNG as source
3. Generate platform-specific variants from core
4. Include both PNG and WebP for raster images
5. Maintain consistent naming conventions

### Updating Branding
1. Update core assets first (`brandmarks/core/`)
2. Regenerate platform-specific assets
3. Test across target platforms
4. Update documentation if structure changes

### Quality Standards
- **Web images**: 90% quality for WebP, minimize file size
- **Aspect ratios**: Always maintain, never stretch
- **Transparency**: Maintain alpha channels where needed

## File Count Summary

- **Core assets**: 66 files (39 logomarks + 27 wordmarks)
- **Web favicons**: 10 files
- **Mobile assets**: 12 files (4 iOS + 8 Android)
- **Documentation**: 6 files (README, AGENTS.md, etc.)

**Total**: ~90 files

## Repository Maintenance

### Regular Tasks
- Audit for duplicate files
- Verify all platform assets work correctly
- Update documentation when structure changes
- Remove legacy/unused variants

### Version Control
- Core assets (`brandmarks/core/`) are source of truth
- Regenerate platform assets rather than editing directly
- Track major branding changes in git history
- Document reasons for structural changes

## References

- [BRAND_GUIDELINES.md](brandmarks/BRAND_GUIDELINES.md) - Official brand usage guidelines
- [README.md](README.md) - Repository overview and quick start
- [site.webmanifest](brandmarks/site.webmanifest) - PWA manifest configuration

## Questions?

For brand guidelines and usage rules, see `brandmarks/BRAND_GUIDELINES.md`.
For technical implementation, refer to this document.
For quick overview, see `README.md`.
