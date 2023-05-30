/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  variants: {
    extend: {
      outline: ['focus'],
      tap: ['active'],
    },
  },
  theme: {
    screens: {
      'xs': '360px',   // Extra small devices (e.g., phones)
      'sm': '640px',   // Small devices (e.g., tablets)
      'md': '768px',   // Medium devices (e.g., small laptops)
      'lg': '1024px',  // Large devices (e.g., laptops)
      'xl': '1280px',  // Extra large devices (e.g., desktops)
      '2xl': '1536px', // 2X Extra large devices (e.g., large desktops)
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '10xl': '10rem', // Example custom text size
        '11xl': '11rem', // Example custom text size
        '12xl': '12rem',
      }
    },
  },
  plugins: [],
}
