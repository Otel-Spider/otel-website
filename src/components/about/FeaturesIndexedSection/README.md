# FeaturesIndexedSection

A React component that displays four feature blocks in a row with large indexed numbers, titles, and descriptions. Includes scroll animations and optional count-up effects.

## Features

- **Responsive Layout**: 4 columns on desktop, 2 on tablet, 1 on mobile
- **Large Index Numbers**: Big, light gray numbers (01, 02, 03, 04+) above each title
- **Scroll Animations**: Fade-up animation when elements come into view
- **Count-up Effect**: Optional animation that counts up from 0 to target number
- **Vertical Dividers**: Subtle dividers between columns on large screens
- **Customizable**: Configurable colors, dividers, and animation settings

## Props

| Prop         | Type        | Default     | Description                                   |
| ------------ | ----------- | ----------- | --------------------------------------------- |
| `items`      | `Feature[]` | `[]`        | Array of 4 feature items                      |
| `mutedColor` | `string`    | `'#d9d9d9'` | Color for the large index numbers             |
| `divider`    | `boolean`   | `true`      | Show vertical dividers between columns        |
| `animate`    | `boolean`   | `true`      | Enable scroll animations and count-up effects |

## Feature Type

```typescript
type Feature = {
  id: string; // unique key
  index: number; // 1-based; if you pass 4 and want plus sign show "04+"
  title: string;
  text: string;
  plus?: boolean; // if true appends '+' to index (for the 04+ case)
};
```

## Usage

```jsx
import FeaturesIndexedSection from "./components/FeaturesIndexedSection";

const FEATURES = [
  {
    id: "f1",
    index: 1,
    title: "I am creative",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "f2",
    index: 2,
    title: "I am naughty",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "f3",
    index: 3,
    title: "I am business men",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "f4",
    index: 4,
    plus: true,
    title: "I am hungry",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

<FeaturesIndexedSection
  items={FEATURES}
  mutedColor="#d9d9d9"
  divider={true}
  animate={true}
/>;
```

## Styling

The component uses Bootstrap 5 classes for layout and minimal custom CSS for:

- Large index numbers with responsive sizing
- Vertical dividers between columns
- Scroll reveal animations
- Typography adjustments

## Browser Support

- Modern browsers with IntersectionObserver support
- Graceful fallback for older browsers (animations disabled)
