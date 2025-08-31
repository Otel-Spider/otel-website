# ServicesGrid Component

A React component that displays a 2-row 3×2 services grid with outlined icons, titles, and descriptions.

## Features

- **2-row 3×2 Grid**: 6 service items arranged in a responsive grid
- **Outlined Icons**: Pink outlined SVG icons with hover effects
- **Responsive Layout**: 1 column on mobile, 3 columns on desktop
- **Hover Effects**: Cards lift and icons scale on hover
- **Accessible**: Semantic headings and proper ARIA attributes

## Usage

```jsx
import ServicesGrid from '../components/about/ServicesGrid';

// Basic usage with default props
<ServicesGrid />

// With custom data
<ServicesGrid
  heading="Our Services"
  subtitle="Comprehensive solutions for your digital needs"
  items={[
    {
      id: "web-development",
      title: "Web Development",
      text: "Custom websites and web applications built with modern technologies.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    },
    // ... more items
  ]}
/>
```

## Props

### `heading` (string, optional)

Section heading text. If not provided, no heading is displayed.

### `subtitle` (string, optional)

Section subtitle text. Only displayed if heading is provided.

### `items` (array, optional)

Array of 6 service items, each containing:

- `id` (string): Unique identifier
- `title` (string): Service title
- `text` (string): Service description
- `icon` (ReactNode): SVG icon element

## Default Services

The component comes with 6 default services:

1. **Web Development** - Custom websites and web applications
2. **Logo & Identity** - Professional logo design and branding
3. **Graphics Design** - Creative graphic design solutions
4. **App Development** - Native and cross-platform mobile apps
5. **Social Marketing** - Strategic social media campaigns
6. **Content Creation** - High-quality content creation services

## Styling

The component uses Bootstrap 5 classes and custom CSS in `services-grid.css`:

- `.sg-card`: Service card container with hover effects
- `.sg-icon`: Icon styling with pink color (#ff2f68)
- Hover animations: Card lift and icon scale

## Responsive Behavior

- **Desktop (≥md)**: 3 columns, generous spacing
- **Mobile (<md)**: 1 column, reduced spacing
- **Icons**: Scale down on smaller screens

## Dependencies

- React
- Bootstrap 5
- Custom CSS for hover effects and styling
