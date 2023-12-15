/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            'background': '#171717',
            'primary': '#ffff00',
            'surface': '#1a1a1a',
            'secondary': '#063e88',
            'error': '#f73131',
            'onBackground': '#f5f5f5',
            'onPrimary': '#171717',
            'onSecondary': '#f5f5f5',
            'onSurface': '#f5f5f5',
            'onError': '#000000',
            'blanche': '#ffffff'
        },
        borderRadius: {
            DEFAULT: '15px',
            FULL: '9999px'
        },
        screens: {
            'sm': {'min': '320px', 'max': '767px'},
            'md': {'min': '768px', 'max': '1023px'},
            'lg': {'min': '1024px', 'max': '1279px'},
            'xl': {'min': '1280px', 'max': '1535px'},
            '2xl': {'min': '1536px'},
        }
    },
    plugins: [],
}
