# Font Files Setup

This directory should contain the following font files for the OTEL Website:

## Current Font Files

### Nexa Font Family
- ✅ `NexaBold.otf` - Nexa Bold in OpenType format

### Gordita Font Family
- ✅ `Gordita-Medium.otf` - Gordita Medium in OpenType format

## Font Usage

The current setup uses:
- **Nexa Bold** for headlines, titles, and bold text
- **Gordita Medium** for body text, descriptions, and regular content
- **Fallback fonts** (Inter, Roboto, system fonts) when custom fonts aren't available

## Optional Additional Fonts

If you want to add more font weights/styles, consider adding:

### Nexa Font Family
- `Nexa-Regular.otf` - Nexa Regular weight
- `Nexa-Light.otf` - Nexa Light weight

### Gordita Font Family
- `Gordita-Regular.otf` - Gordita Regular weight
- `Gordita-Bold.otf` - Gordita Bold weight
- `Gordita-Light.otf` - Gordita Light weight

## Font Sources

### Nexa Font

- **Commercial License Required**: Nexa is a commercial font
- **Purchase from**: Fontfabric (https://fontfabric.com/fonts/nexa/)
- **Alternative**: Consider using Inter or Roboto as a free alternative

### Gordita Font

- **Commercial License Required**: Gordita is a commercial font
- **Purchase from**: Fontshare (https://www.fontshare.com/fonts/gordita)
- **Alternative**: Consider using Inter or Roboto as a free alternative

## Fallback System

The website is configured with a robust fallback system:

1. **Primary**: Custom Nexa/Gordita fonts
2. **Secondary**: Inter (Google Fonts - free)
3. **Tertiary**: System fonts (Apple, Windows, Linux)

## Implementation Notes

- Font files are loaded using `@font-face` declarations in `public/index.html`
- CSS variables are defined in `src/assets/css/shared/fonts.css`
- Fallback fonts ensure the website looks good even without custom fonts
- Font loading is optimized with `font-display: swap`

## Testing

To test font loading:

1. Add the font files to this directory
2. Run the development server: `npm start`
3. Check browser developer tools > Network tab to verify font loading
4. Test with font files removed to ensure fallbacks work

## Performance Optimization

- WOFF2 format is preferred for best compression
- Font files are loaded with `font-display: swap` for better performance
- Preconnect links are added for Google Fonts
- Font loading is optimized to prevent layout shifts
