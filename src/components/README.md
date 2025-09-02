# Success Stories Page Components

This directory contains the components for the Success Stories page, featuring a PageHeader and TestimonialCarousel.

## Components

### PageHeader

A slim banner component that displays the page title, subtitle, and optional breadcrumbs.

**Props:**

- `title` (string, required): The main page title
- `subtitle` (string, optional): A subtitle below the main title
- `breadcrumbs` (array, optional): Array of breadcrumb objects with `label` and optional `href`
- `backgroundImageUrl` (string, optional): Background image URL with automatic dark overlay

**Example Usage:**

```jsx
<PageHeader
  title="Success Stories"
  subtitle="Customer stories & feedback that inspire"
  breadcrumbs={[{ label: "Home", href: "/" }, { label: "Success Stories" }]}
  backgroundImageUrl="/images/hero-bg.jpg"
/>
```

### TestimonialCarousel

A carousel component for displaying customer testimonials with navigation controls and auto-play functionality.

**Props:**

- `titleLabel` (string, optional): Small caption text above the carousel (default: "TESTIMONIAL CAROUSEL STYLE 02")
- `backgroundImageUrl` (string, optional): Background texture image
- `overlayOpacity` (number, optional): Dark overlay opacity (default: 0.5)
- `testimonials` (array, required): Array of testimonial objects
- `autoPlay` (boolean, optional): Enable auto-play (default: true)
- `autoPlayDelay` (number, optional): Auto-play delay in milliseconds (default: 6000)

**Testimonial Object Structure:**

```jsx
{
  id: string | number,
  avatarUrl: string,
  quote: string,
  author: string
}
```

**Example Usage:**

```jsx
<TestimonialCarousel
  titleLabel="TESTIMONIAL CAROUSEL STYLE 02"
  backgroundImageUrl="/images/wood-texture.jpg"
  overlayOpacity={0.7}
  testimonials={testimonials}
  autoPlay={true}
  autoPlayDelay={8000}
/>
```

## Features

### PageHeader

- Responsive design with mobile-first approach
- Dark background with optional image overlay
- Centered content layout
- Accessible breadcrumb navigation
- Smooth responsive typography scaling

### TestimonialCarousel

- Dark textured background with parallax effect (desktop)
- Centered testimonial layout with avatar and quote
- Navigation arrows and pagination dots
- Touch/swipe support for mobile devices
- Auto-play functionality with user interaction pause
- Keyboard accessible navigation
- Responsive design for all screen sizes

## File Structure

```
src/
├── components/
│   ├── PageHeader/
│   │   ├── PageHeader.jsx
│   │   ├── PageHeader.css
│   │   └── index.js
│   └── TestimonialCarousel/
│       ├── TestimonialCarousel.jsx
│       ├── TestimonialCarousel.css
│       └── index.js
├── pages/
│   ├── TestimonialsPage.jsx
│   └── TestimonialsPage.css
└── components/
    └── README.md
```

## Accessibility Features

- Proper ARIA labels for navigation buttons
- Keyboard navigation support
- Screen reader friendly structure
- High contrast design
- Focus indicators for interactive elements
- Semantic HTML structure (blockquote, cite, etc.)

## Responsive Behavior

- Mobile-first design approach
- Stacked layout on small screens
- Adjusted spacing and typography for different screen sizes
- Touch-friendly controls on mobile devices
- Optimized performance with background-attachment adjustments
