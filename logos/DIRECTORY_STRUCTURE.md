# TelemetryX Brand Assets - Directory Organization

## 📁 Recommended Best Practice Structure

This directory follows industry best practices for brand asset organization, making it easy for developers, designers, and marketers to find the right assets quickly.

## 🗂️ Directory Structure

```
logos/
├── 📋 Documentation
│   ├── README.md                    # Complete usage guide
│   ├── BRAND_GUIDELINES.md         # Official brand standards
│   ├── FAVICON_README.md           # Technical favicon guide
│   └── DIRECTORY_STRUCTURE.md      # This organization guide
│
├── 🎨 Core Brand Assets
│   ├── core/
│   │   ├── logos/                   # Primary brand logos
│   │   │   ├── telemetryx-logo-amber.*
│   │   │   ├── telemetryx-logo-black.*
│   │   │   └── telemetryx-logo-white.*
│   │   └── wordmarks/               # Typography-focused versions
│   │       ├── telemetryx-wordmark-amber.*
│   │       ├── telemetryx-wordmark-black.*
│   │       └── telemetryx-wordmark-white.*
│   │
│   └── favicon-source-768x768.png   # High-res source file
│
├── 🌐 Web Assets
│   ├── web/
│   │   ├── favicons/                # Complete favicon set
│   │   │   ├── favicon.ico
│   │   │   ├── favicon-*.png/webp
│   │   │   ├── apple-touch-icon.*
│   │   │   ├── android-chrome-*.*
│   │   │   └── mstile-*.*
│   │   ├── banners/                 # Website headers/banners
│   │   └── email-signatures/        # Email signature assets
│   │
│   └── site.webmanifest             # PWA manifest
│
├── 📱 Mobile Platforms
│   ├── mobile/
│   │   ├── ios/                     # Apple iOS assets
│   │   │   ├── apple-touch-icon.*
│   │   │   └── app-icon-1024x1024.*
│   │   └── android/                 # Google Android assets
│   │       ├── android-chrome-*.*
│   │       ├── adaptive-icon-foreground.*
│   │       └── adaptive-icon-background.*
│   │
│   └── app-store/                   # App store submissions
│       ├── ios/
│       ├── android/
│       └── microsoft/
│
├── 🖥️ Desktop Platforms
│   └── desktop/
│       └── windows/                 # Windows-specific assets
│           ├── favicon.ico
│           ├── mstile-*.*
│           └── store-logo-*.*
│
├── 🌍 Social Media
│   └── social/
│       ├── twitter/                 # Twitter/X cards
│       ├── facebook/               # Facebook OG images
│       ├── linkedin/               # LinkedIn covers
│       ├── instagram/              # Instagram posts
│       └── youtube/                # YouTube thumbnails
│
├── 👨‍💻 Developer Resources
│   └── developer/
│       ├── github/                 # GitHub banners
│       └── npm/                    # Package manager icons
│
└── 🖨️ Print Materials
    └── print/
        ├── business-cards/         # Business card layouts
        └── high-res/              # 300 DPI print assets
```

## 🎯 Organization Benefits

### **For Developers**
- **Quick access**: Platform-specific directories (`mobile/ios/`, `web/favicons/`)
- **Clear separation**: Core assets vs. platform implementations
- **Copy-ready**: Each directory contains complete asset sets
- **No guesswork**: Obvious file organization and naming

### **For Designers**
- **Source files**: High-resolution masters in obvious locations
- **Brand consistency**: Core assets separated from implementations
- **Print-ready**: Dedicated high-resolution directory
- **Format variety**: SVG, PNG, WebP in logical groups

### **For Marketing**
- **Social media**: Platform-specific sizes ready to use
- **Email campaigns**: Dedicated signature assets
- **Print materials**: Professional 300 DPI versions
- **Brand compliance**: Guidelines and standards documentation

## 🚀 Usage Patterns

### Quick File Access
```bash
# Web development
logos/web/favicons/          # Complete favicon implementation
logos/core/logos/            # Brand logos for general web use

# Mobile app development  
logos/mobile/ios/            # All iOS-specific assets
logos/mobile/android/        # All Android-specific assets

# Social media marketing
logos/social/twitter/        # Twitter-optimized images
logos/social/facebook/       # Facebook OG images

# Print design
logos/print/high-res/        # 300 DPI print assets
logos/core/logos/*.svg       # Vector files for infinite scaling
```

### Platform-Specific Workflows
| Platform | Primary Directory | Secondary Resources |
|----------|------------------|-------------------|
| **Website** | `web/favicons/` | `core/logos/` |
| **iOS App** | `mobile/ios/` | `app-store/ios/` |
| **Android App** | `mobile/android/` | `app-store/android/` |
| **Windows App** | `desktop/windows/` | `app-store/microsoft/` |
| **Social Media** | `social/[platform]/` | `core/logos/` |
| **Print Design** | `print/high-res/` | `core/logos/*.svg` |
| **Email Marketing** | `web/email-signatures/` | `core/wordmarks/` |

## 💡 Best Practices

### **File Organization**
1. **Duplicates are intentional** - Platform directories contain copies for convenience
2. **Source files in core/** - Always use these for new derivations
3. **Platform-specific sizing** - Each directory contains optimized dimensions
4. **Consistent naming** - Follows `brand-variant-size-format.ext` pattern

### **Development Workflow**
1. **Start with core assets** for new implementations
2. **Check platform directories** before creating new versions
3. **Follow brand guidelines** for color and usage rules
4. **Test implementations** using provided examples

### **Maintenance**
1. **Update core first** when brand changes occur
2. **Regenerate platform assets** from updated core files
3. **Keep documentation current** with any structural changes
4. **Version control friendly** - organized structure reduces conflicts

## 🔄 Migration Notes

If you're updating from a flat directory structure:
- Core brand assets moved to `core/logos/` and `core/wordmarks/`
- Web assets organized into `web/favicons/`
- Platform-specific copies created for developer convenience
- All original files preserved - no data loss
- Documentation updated to reflect new structure

## 📞 Support

- **Structure questions**: Reference this guide and `README.md`
- **Asset requests**: Check existing directories before requesting new files
- **Implementation help**: See platform-specific examples in `README.md`
- **Brand guidelines**: Always consult `BRAND_GUIDELINES.md`

---

**Organization Version**: 2.0  
**Last Updated**: May 2025  
**Structure Type**: Platform-centric with core asset separation