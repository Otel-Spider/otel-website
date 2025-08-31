# QuoteEducation Component

A React component that displays a quote header block followed by an education section with a portrait image and education items in a grid layout.

## Features

- **Quote Header**: Centered quote with red icon, main headline, subheading, and author attribution
- **Content Layout**: Left column with portrait image, right column with education grid
- **Education Grid**: 2x2 grid on large screens, stacked on smaller screens
- **Responsive Design**: Adapts to different screen sizes with Bootstrap 5 utilities
- **Accessible**: Semantic headings, proper alt text, and good color contrast

## Usage

```jsx
import QuoteEducation from '../components/about/QuoteEducation';

// Basic usage with default props
<QuoteEducation />

// With custom data
<QuoteEducation
  quote={{
    lead: "Unity is strength... when there is teamwork and collaboration, wonderful things can be achieved.",
    sub: "When there is teamwork and collaboration, wonderful things can be achieved.",
    author: "Mattie Stepanek"
  }}
  image={{
    src: '/path/to/portrait.jpg',
    alt: 'Portrait of the person'
  }}
  items={[
    {
      number: "01",
      title: "University of Design",
      subtitle: "Bachelor of Arts 1990",
      text: "Studied graphic design and visual communication, focusing on user experience and digital media."
    },
    // ... more items
  ]}
/>
```

## Props

### `quote` (object, optional)

Quote section content:

- `lead` (string): Main headline text
- `sub` (string): Subheading text
- `author` (string): Author attribution

### `image` (object, optional)

Portrait image:

- `src` (string): Image source URL
- `alt` (string): Alt text for accessibility

### `items` (array, optional)

Array of 4 education items, each containing:

- `number` (string): Item number (e.g., "01", "02")
- `title` (string): Institution/degree title
- `subtitle` (string): Degree subtitle
- `text` (string): Description text

## Styling

The component uses Bootstrap 5 classes and custom CSS in `quote-education.css`:

- `.qe-quote-icon`: Red quote icon styling
- `.qe-lead`: Main headline styling
- `.qe-sub`: Subheading styling
- `.qe-author`: Author attribution styling
- `.qe-image`: Portrait image styling
- `.qe-number`: Large light number styling
- `.qe-item-title`: Education item title styling
- `.qe-item-sub`: Education item subtitle styling

## Responsive Behavior

- **Desktop (≥lg)**: Full layout with 6/6 column split, 2x2 education grid
- **Tablet (md)**: Stacked layout, 2x2 education grid
- **Mobile (sm)**: Stacked layout, single column education items

## Dependencies

- React
- Bootstrap 5
- Custom CSS for typography and layout
