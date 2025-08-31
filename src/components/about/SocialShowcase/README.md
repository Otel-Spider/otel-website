# SocialShowcase

A React component that creates a social media showcase section with a sticky background image and circular social media buttons.

## Features

- **Sticky Background**: Full-width background image with parallax-like fixed effect
- **Faded Overlay**: Semi-transparent overlay for better content readability
- **Circular Social Buttons**: White circular buttons with social media icons
- **Hover Effects**: Icons change to brand colors on hover with smooth animations
- **Responsive Design**: Adapts to different screen sizes with proper spacing
- **Accessibility**: Proper ARIA labels and semantic HTML

## Props

| Prop          | Type           | Default                    | Description                 |
| ------------- | -------------- | -------------------------- | --------------------------- |
| `title`       | `string`       | `"ON SOCIAL NETWORKS"`     | Section title in uppercase  |
| `imageSrc`    | `string`       | `"/images/social-bg.jpg"`  | Background image URL        |
| `overlay`     | `string`       | `"rgba(255,255,255,0.85)"` | Overlay color and opacity   |
| `socialLinks` | `SocialLink[]` | `[...]`                    | Array of social media links |

## SocialLink Type

```typescript
type SocialLink = {
  id: string; // unique identifier
  name: string; // platform name
  url: string; // social media URL
  icon: React.ReactNode; // SVG icon component
  hoverColor: string; // brand color for hover effect
};
```

## Usage

```jsx
import SocialShowcase from './components/about/SocialShowcase';

// Basic usage with default social links
<SocialShowcase />

// Custom configuration
<SocialShowcase
  title="FOLLOW US"
  imageSrc="/images/custom-bg.jpg"
  overlay="rgba(0,0,0,0.7)"
  socialLinks={customSocialLinks}
/>
```

## Default Social Platforms

The component includes 5 default social media platforms:

- **Facebook** - Blue (#1877f2)
- **Twitter** - Light Blue (#1da1f2)
- **Google+** - Red (#db4437)
- **Dribbble** - Pink (#ea4c89)
- **LinkedIn** - Blue (#0077b5)

## Styling

- **Background**: Fixed attachment for parallax effect
- **Overlay**: Configurable opacity and color
- **Icons**: 60px circular buttons with white background
- **Hover Effects**: Scale, color change, and shadow enhancement
- **Responsive**: Smaller buttons on mobile devices

## Browser Support

- Modern browsers with CSS `background-attachment: fixed` support
- iOS Safari fallback to `scroll` attachment
- Graceful degradation for older browsers
