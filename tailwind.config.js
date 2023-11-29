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
            'onError': '#000000'
        }
    },
    plugins: [],
}
