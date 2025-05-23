# TelemetryX Logo Resources

This directory contains the complete TelemetryX brand asset toolkit including logos, wordmarks, favicons, social media assets, app store icons, and print materials in various formats and sizes.

## 📁 Directory Structure

*See `DIRECTORY_STRUCTURE.md` for complete organization details*

### 🎨 Core Brand Assets (`core/`)

#### Logos (`core/logos/`)
**Primary brand logo in three color variants:**
- **Amber** - `telemetryx-logo-amber.*` (Primary brand color)
- **Black** - `telemetryx-logo-black.*` (Professional/monochrome)  
- **White** - `telemetryx-logo-white.*` (Dark backgrounds)

**Available formats:** SVG, PNG (32px-1024px), WebP

#### Wordmarks (`core/wordmarks/`)
**Typography-focused brand marks:**
- **Amber/Black/White** variants in SVG, PNG, WebP formats

### 🌐 Platform-Organized Assets

#### Web Development (`web/`)
- **`favicons/`** - Complete favicon implementation (ICO, PNG, WebP)
- **`banners/`** - Website headers and blog images
- **`email-signatures/`** - Email signature assets
- **`site.webmanifest`** - PWA configuration

#### Mobile Platforms (`mobile/`)
- **`ios/`** - Apple touch icons and App Store assets
- **`android/`** - Chrome icons and adaptive icon layers

#### Desktop Platforms (`desktop/`)
- **`windows/`** - ICO files and Microsoft Store tiles

#### Social Media (`social/`)
- **Platform-specific directories** with optimized dimensions
- Twitter, Facebook, LinkedIn, Instagram, YouTube, TikTok, Discord

#### Developer Tools (`developer/`)
- **`github/`** - Repository banners and previews
- **`npm/`** - Package manager icons

#### Print Materials (`print/`)
- **`high-res/`** - 300 DPI professional printing assets
- **`business-cards/`** - Business card optimized layouts

#### Accessibility (`accessibility/`)
- **High-contrast versions** for WCAG compliance and visual accessibility

### 📋 Documentation
- `README.md` - This comprehensive guide
- `DIRECTORY_STRUCTURE.md` - Detailed organization explanation
- `FAVICON_README.md` - Technical favicon implementation
- `BRAND_GUIDELINES.md` - Official brand usage guidelines

## 🚀 Usage Guidelines

### Web Development
```html
<!-- Standard favicons -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

<!-- For modern browsers supporting WebP -->
<link rel="icon" type="image/webp" sizes="32x32" href="/favicon-32x32.webp">
```

### Logo Implementation
```html
<!-- Use SVG when possible for scalability -->
<img src="telemetryx-logo-amber.svg" alt="TelemetryX" width="200">

<!-- Use PNG with appropriate size for raster needs -->
<img src="telemetryx-logo-amber-256.png" alt="TelemetryX" width="256">

<!-- Use WebP with PNG fallback for optimization -->
<picture>
  <source srcset="telemetryx-logo-amber-256.webp" type="image/webp">
  <img src="telemetryx-logo-amber-256.png" alt="TelemetryX" width="256">
</picture>
```

### Print & High-DPI Displays
- Use SVG files for infinite scalability
- For raster images, use the highest resolution available (1024px)
- Consider 2x/3x versions for Retina displays

## 🎨 Color Usage

### Amber (Primary)
- Use on white or light backgrounds
- Primary brand color for most applications

### Black
- Use on white or very light backgrounds
- Professional contexts, monochrome applications

### White
- Use on dark or colored backgrounds
- Ensure sufficient contrast for accessibility

## 📱 Mobile & App Usage

### iOS Apps
- Use `apple-touch-icon.png` (180x180)
- Consider creating app icon variants following Apple's guidelines

### Android Apps
- Use `android-chrome-512x512.png` as base
- Follow Material Design icon guidelines
- The 512px version supports adaptive/maskable icons

### Progressive Web Apps
Create a `site.webmanifest`:
```json
{
    "name": "TelemetryX",
    "short_name": "TelemetryX",
    "icons": [
        {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable any"
        }
    ],
    "theme_color": "#fbbf24",
    "background_color": "#ffffff",
    "display": "standalone"
}
```

## 🔧 File Format Guide

### When to use SVG
- Web logos and icons
- Scalable graphics
- Print materials
- When file size and scalability matter

### When to use PNG
- Favicons and small icons
- When SVG support is uncertain
- Raster image requirements
- Social media assets

### When to use WebP
- Modern web applications
- When optimizing for performance
- Progressive enhancement with PNG fallback

### When to use ICO
- Legacy browser support
- Windows applications
- When multiple sizes in one file are needed

## 🎯 Quick Asset Reference

| Need | File/Directory | Best Format | Notes |
|------|----------------|-------------|-------|
| **Website logo** | `core/logos/` | SVG | Scalable, preferred |
| **Web favicons** | `web/favicons/` | ICO + PNG + WebP | Complete implementation |
| **iOS app** | `mobile/ios/` | PNG | Apple touch icons |
| **Android app** | `mobile/android/` | PNG | Adaptive icons included |
| **Windows app** | `desktop/windows/` | ICO + PNG | Microsoft tiles |
| **Social sharing** | `social/[platform]/` | PNG + WebP | Platform-specific sizes |
| **Email signature** | `web/email-signatures/` | PNG | Horizontal layout |
| **GitHub banner** | `developer/github/` | PNG + WebP | Repository preview |
| **Print materials** | `print/high-res/` | PNG + SVG | 300 DPI for quality |
| **PWA manifest** | `site.webmanifest` | JSON | Include in web projects |

## 💡 Best Practices

1. **Always use vector (SVG) when possible** for scalability
2. **Provide WebP with PNG fallback** for optimal performance
3. **Use appropriate sizing** - don't scale small images up
4. **Follow brand guidelines** - see `BRAND_GUIDELINES.md`
5. **Test contrast ratios** for accessibility compliance
6. **Optimize images** before deployment
7. **Use semantic HTML** with proper alt text
8. **Organize by use case** - assets are categorized by platform/purpose

## 📊 File Sizes & Performance

All images are optimized for delivery:
- **WebP files**: ~60-80% smaller than PNG equivalents
- **SVG files**: 2-5KB each (vector graphics)
- **Favicon PNGs**: 700B (16px) to 20KB (512px)
- **Social media assets**: 5-25KB (optimized for platforms)
- **Print assets**: 50KB-130KB (high-resolution for quality)

## 🔧 Implementation Examples

### Complete Favicon Setup
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```

### Social Media Meta Tags
```html
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="/social/twitter/twitter-card-1200x675.png">

<!-- Facebook Open Graph -->
<meta property="og:image" content="/social/facebook/facebook-og-1200x630.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

### Responsive Logo Implementation
```html
<picture>
  <source srcset="telemetryx-logo-amber-256.webp" type="image/webp">
  <img src="telemetryx-logo-amber-256.png" alt="TelemetryX" 
       width="256" height="256" loading="lazy">
</picture>
```

## 🆘 Need Help?

### Documentation
- **Brand usage**: See `BRAND_GUIDELINES.md` for official guidelines
- **Favicon setup**: Check `FAVICON_README.md` for detailed implementation
- **File organization**: Assets are categorized by platform and use case

### Technical Support
- **Validate markup**: Use W3C validator for HTML compliance
- **Test performance**: Check image optimization and loading speeds
- **Browser compatibility**: Test favicon loading across browsers
- **Accessibility**: Verify contrast ratios and alt text

### Asset Requests
- **Missing sizes**: Check existing directories first
- **New platforms**: Follow established naming conventions
- **Custom needs**: Contact design team for brand-compliant assets

---

**Last updated:** May 2025  
**Asset count:** 100+ files across all platforms  
**Brand version:** 1.0  
**Next review:** Quarterly or when brand updates occur