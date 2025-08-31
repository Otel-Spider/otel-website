# SkillsDonutSection Component

A React component that displays 4 skill items with animated circular progress rings, featuring a parallax background with dark overlay.

## Features

- **Animated Progress Rings**: Circular progress indicators with smooth animations
- **Scroll-Triggered Animation**: Progress animates when items come into view
- **Parallax Background**: Sticky background image with dark overlay
- **Responsive Layout**: 4 columns on desktop, 2x2 on tablet, 1x4 on mobile
- **Customizable**: Configurable colors, sizes, and overlay opacity

## Usage

```jsx
import SkillsDonutSection from '../components/about/SkillsDonutSection';

// Basic usage with default props
<SkillsDonutSection bgImage="/images/skills-bg.jpg" />

// With custom data and styling
<SkillsDonutSection
  items={[
    {
      id: "graphic-design",
      title: "Graphic Design",
      percent: 90,
      description: "Creative visual solutions with attention to detail."
    },
    // ... more items
  ]}
  bgImage="/path/to/background.jpg"
  pink="#ff2f68"
  ringSize={170}
  ringStroke={4}
  overlay="rgba(0,0,0,.65)"
/>
```

## Props

### `items` (array, optional)

Array of 4 skill items, each containing:

- `id` (string): Unique identifier
- `title` (string): Skill title
- `percent` (number): Progress percentage (0-100)
- `description` (string): Skill description

### `bgImage` (string, required)

Background image URL for the parallax effect.

### `pink` (string, optional)

Accent color for progress rings. Default: `#ff2f68`

### `ringSize` (number, optional)

Size of the progress rings in pixels. Default: `170`

### `ringStroke` (number, optional)

Stroke width of the progress rings. Default: `4`

### `overlay` (string, optional)

CSS rgba value for the dark overlay. Default: `rgba(0,0,0,.65)`

## Default Skills

The component comes with 4 default skills:

1. **Graphic Design** - 90%
2. **Web Design** - 96%
3. **Photography** - 95%
4. **Branding** - 90%

## Animation Details

- **Intersection Observer**: Triggers animation when 40% of item is visible
- **Smooth Animation**: 1.5-second duration with ease-out timing
- **One-time Animation**: Each ring animates only once per session
- **Performance Optimized**: Uses requestAnimationFrame for smooth 60fps animation

## Technical Implementation

### SVG Progress Ring

- **ViewBox**: 122x122 for crisp rendering
- **Radius**: 54px for optimal proportions
- **Gap**: 30° gap at the top for visual appeal
- **Stroke**: Rounded caps with pink accent color

### Parallax Background

- **Fixed Attachment**: Creates parallax effect
- **iOS Fallback**: Switches to scroll on iOS Safari
- **Dark Overlay**: Ensures text readability
- **Full Height**: Minimum 100vh for impact

## Styling

The component uses Bootstrap 5 classes and custom CSS in `skills-donut.css`:

- `.skills-section`: Main container with parallax background
- `.skills-overlay`: Dark overlay for text contrast
- `.skills-donut-container`: Progress ring wrapper
- `.skills-badge`: White center badge with percentage
- `.skills-donut`: SVG progress ring styling

## Responsive Behavior

- **Desktop (≥lg)**: 4 columns in a row
- **Tablet (md)**: 2x2 grid layout
- **Mobile (sm)**: Single column stack
- **Ring Sizing**: Scales down on smaller screens
- **Badge Sizing**: Responsive badge dimensions

## Dependencies

- React (with hooks: useEffect, useRef, useState)
- Bootstrap 5
- Intersection Observer API
- Custom CSS for animations and styling

## Browser Support

- Modern browsers with Intersection Observer support
- iOS Safari with parallax fallback
- Graceful degradation for older browsers
