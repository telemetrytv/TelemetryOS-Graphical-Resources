# TelemetryX Brand Guidelines

## 🎨 Logo Usage

### Primary Logo
- Use **amber** version on light backgrounds as the primary choice
- Ensure sufficient contrast (minimum 4.5:1 ratio for accessibility)
- Maintain clear space around logo equal to the height of the "X" in TelemetryX

### Color Variants
| Variant | Background | Usage |
|---------|------------|-------|
| **Amber** (`#fbbf24`) | Light/white backgrounds | Primary brand color, most applications |
| **Black** (`#000000`) | Light backgrounds | Professional contexts, monochrome needs |
| **White** (`#ffffff`) | Dark/colored backgrounds | Dark themes, photography overlays |

### Minimum Sizes
- **Web/Digital**: 32px minimum height
- **Print**: 0.5 inch (12.7mm) minimum height
- **App Icons**: Follow platform guidelines (16px-1024px)

### Don'ts
❌ Don't stretch or distort the logo  
❌ Don't use on backgrounds with insufficient contrast  
❌ Don't add effects, shadows, or outlines  
❌ Don't use outdated versions  
❌ Don't place too close to other elements  

## 📐 Clear Space Requirements

Maintain clear space around the logo equal to the height of the "X" character:
```
    [clear space]
[clear space] LOGO [clear space]
    [clear space]
```

## 🌈 Color Palette

### Primary Colors
- **Amber**: `#fbbf24` (RGB: 251, 191, 36)
- **White**: `#ffffff` (RGB: 255, 255, 255)  
- **Black**: `#000000` (RGB: 0, 0, 0)

### Usage Guidelines
- Amber is the primary brand color
- Use high contrast combinations for accessibility
- Test legibility on all target devices/media

## 📱 Platform-Specific Guidelines

### Web Applications
- Use SVG format when possible for scalability
- Provide WebP with PNG fallback for optimal performance
- Include proper alt text: "TelemetryX"

### Mobile Apps
- **iOS**: Use rounded corners as per Apple guidelines
- **Android**: Support adaptive icons with separate foreground/background
- **PWA**: Include maskable icons for home screen

### Social Media
- **Consistent sizing**: Use provided templates for each platform
- **Profile images**: Use square versions (Instagram, Twitter, etc.)
- **Cover images**: Use horizontal layouts with proper safe zones

### Print Materials
- Use vector formats (SVG) or high-resolution (300 DPI) images
- Consider printing costs - provide monochrome versions when needed
- Test print quality at actual size before final production

## 🔤 Typography Pairing

The wordmark includes custom typography. When using separate text:
- **Headers**: Sans-serif fonts (Arial, Helvetica, system fonts)
- **Body**: Clean, readable fonts with good web support
- **Avoid**: Script fonts, decorative fonts that compete with logo

## ✅ File Format Selection

| Use Case | Recommended Format | Alternative |
|----------|-------------------|-------------|
| **Web logos** | SVG | PNG + WebP |
| **Favicons** | ICO + PNG | WebP |
| **Social media** | PNG | WebP |
| **Print** | SVG | High-res PNG (300 DPI) |
| **App stores** | PNG | Per platform requirements |
| **Email** | PNG | JPG (if size matters) |

## 📋 Implementation Checklist

### For Developers
- [ ] Include favicon set (ICO + PNG + WebP)
- [ ] Add web manifest for PWA support
- [ ] Use semantic HTML with proper alt text
- [ ] Test logo visibility in both light/dark themes
- [ ] Optimize images for web delivery
- [ ] Validate markup and accessibility

### For Designers  
- [ ] Maintain proper clear space
- [ ] Use approved color variants only
- [ ] Test contrast ratios (minimum 4.5:1)
- [ ] Provide source files to developers
- [ ] Document any custom implementations
- [ ] Review final implementation

## 🎯 Asset Quick Reference

| Need | File Path | Notes |
|------|-----------|-------|
| **Web favicon** | `favicon.ico` | Multi-resolution |
| **Social sharing** | `social/` directory | Platform-specific sizes |
| **App store** | `app-store/` directory | Platform requirements |
| **Email signature** | `web/email-signatures/` | Horizontal layout |
| **GitHub banner** | `developer/github/` | Repository social preview |
| **Print materials** | `print/` directory | 300 DPI versions |
| **General web use** | Root SVG files | Scalable, preferred |

## 🆘 Questions & Support

- **File requests**: Check existing assets first, then contact design team
- **Technical issues**: Validate markup, check file paths, test browser support  
- **Brand questions**: Refer to these guidelines or contact brand management
- **Performance**: Use WebP with PNG fallback, optimize file sizes

---

**Last updated**: May 2025  
**Version**: 1.0  
**Next review**: Quarterly or when brand updates occur