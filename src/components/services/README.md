# Services Components

This folder contains React components for the Services page of the OTEL website.

## Components

### HeroServicesHeader

A full-width hero/header section with a sticky (fixed) background image and centered text.

**Props:**

- `label` (string): Small upper label text (default: "We are awesome designer")
- `title` (string): Main heading (default: "Services simple")
- `bgImageUrl` (string): Background image URL (default: "/images/services-hero-bg.jpg")

**Features:**

- Sticky background image with dark overlay
- Responsive heights (60vh desktop, 40vh mobile)
- Centered text with Bootstrap utilities
- iOS Safari fallback for parallax effects

**Usage:**

```jsx
<HeroServicesHeader
  label="We are awesome designer"
  title="Services simple"
  bgImageUrl="/images/services-hero-bg.jpg"
/>
```

### ServicesWithImage

A section that displays a centered image above three service blocks in a responsive grid.

**Props:**

- `imageSrc` (string): Main image URL (default: "/images/services-main.jpg")
- `services` (array): Array of 3 service objects with:
  - `category` (string): Uppercase category text
  - `title` (string): Service title
  - `description` (string): Service description

**Features:**

- Centered image with rounded corners and shadow
- 3-column responsive grid (1 column on mobile, 3 on desktop)
- Hover effects on service cards
- Red line indicators under each service
- Bootstrap utilities for responsive design

**Usage:**

```jsx
const servicesData = [
  {
    category: "CREATIVE",
    title: "Creative thinking & design",
    description: "We create innovative and beautiful designs...",
  },
  // ... more services
];

<ServicesWithImage
  imageSrc="/images/services-main.jpg"
  services={servicesData}
/>;
```

## File Structure

```
src/
├── components/services/
│   ├── HeroServicesHeader/
│   │   ├── HeroServicesHeader.jsx
│   │   └── index.js
│   ├── ServicesWithImage/
│   │   ├── ServicesWithImage.jsx
│   │   └── index.js
│   ├── index.js
│   └── README.md
└── assets/css/services/
    ├── hero-services-header.css
    └── services-with-image.css
```

## Styling

Both components use minimal custom CSS with Bootstrap 5 utilities:

- Responsive design with mobile-first approach
- Smooth transitions and hover effects
- Consistent spacing using Bootstrap classes
- Custom CSS only for specific visual requirements

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy (h1 for main title, h3 for service titles)
- Alt text for images
- ARIA roles where appropriate
- High contrast text for readability
