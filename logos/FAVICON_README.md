# Favicon Resources

This directory contains all the favicon and icon files needed for comprehensive web and mobile support.

## Web Favicons
- `favicon.ico` - Multi-resolution ICO file (16x16, 32x32, 48x48) for legacy browser support
- `favicon-16x16.png` - Standard 16x16 favicon
- `favicon-32x32.png` - Standard 32x32 favicon  
- `favicon-48x48.png` - Standard 48x48 favicon

## Mobile & App Icons
- `apple-touch-icon.png` - 180x180 Apple touch icon for iOS devices
- `android-chrome-192x192.png` - 192x192 Android Chrome icon
- `android-chrome-512x512.png` - 512x512 Android Chrome icon (maskable)

## Microsoft Tiles
- `mstile-150x150.png` - 150x150 Microsoft tile icon for Windows

## WebP Versions
All PNG files also have corresponding `.webp` versions for modern browsers that support WebP format.

## Source File
- `favicon-source-768x768.png` - High-resolution source file (768x768) used to generate all other sizes

## HTML Implementation
Add these to your `<head>` section:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
```

## Web App Manifest
You may also want to create a `site.webmanifest` file:

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
            "type": "image/png"
        }
    ],
    "theme_color": "#ffffff",
    "background_color": "#ffffff",
    "display": "standalone"
}
```