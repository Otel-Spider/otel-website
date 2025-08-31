# HeroAbout Component

A full-viewport hero component with a background image on the left and a white card with details on the right.

## Features

- Full-viewport hero layout (100vh on desktop, 80vh on mobile)
- Fixed transparent header that overlays the background image
- Responsive design with Bootstrap 5 utilities
- Background image on the left side
- White card with pink quote icon and details list on the right
- Small red dash bullets before each detail label

## Usage

```jsx
import HeroAbout from '../components/about/HeroAbout';

// Basic usage with default image
<HeroAbout />

// With custom image
<HeroAbout imageSrc="/path/to/your/image.jpg" />
```

## Props

- `imageSrc` (string, optional): Path to the background image. Defaults to `/images/about-me-2.jpg`

## Styling

The component uses Bootstrap 5 classes and minimal custom CSS in `hero-about.css`:

- `.header--transparent`: Fixed transparent header
- `.hero-about`: Main hero section wrapper
- `.quote-icon`: Pink quote icon styling
- `.detail-label`: Detail labels with red bullet points
- `.detail-value`: Detail values styling

## Responsive Behavior

- **Desktop (≥lg)**: Side-by-side layout with 7/5 column split
- **Tablet (md)**: Stacked layout with image on top
- **Mobile (sm)**: Stacked layout with reduced image height

## Dependencies

- React
- Bootstrap 5
- CSS custom properties for header height (`--header-h`)
