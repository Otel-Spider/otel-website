import React from 'react';

// Person/Client Icon
export const PersonIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    aria-hidden="true" 
    focusable="false"
  >
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

// Target/Bullseye Icon
export const TargetIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    aria-hidden="true" 
    focusable="false"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

// Trophy/Cup Icon
export const TrophyIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    aria-hidden="true" 
    focusable="false"
  >
    <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5V7C21 9.76 18.76 12 16 12H8C5.24 12 3 9.76 3 7V5C3 4.45 3.45 4 4 4H7ZM5 7V5H7V8C7 8.55 7.45 9 8 9H16C16.55 9 17 8.55 17 8V5H19V7C19 8.66 17.66 10 16 10H8C6.34 10 5 8.66 5 7Z" />
    <path d="M9 13V15H15V13H17V17C17 18.1 16.1 19 15 19H9C7.9 19 7 18.1 7 17V13H9Z" />
  </svg>
);
