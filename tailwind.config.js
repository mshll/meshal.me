/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data.json',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0E0E10',
        secondary: '#1B1B1B',
        accent: '#0D47A1',
        text: '#E5E5E5',
        muted: '#71717A',
        background: '#050505',
      },
      // LIGHT THEME
      // colors: {
      //   primary: '#F9F9F9',
      //   secondary: '#E5E5E5',
      //   accent: '#0D47A1',
      //   text: '#101010',
      //   muted: '#A0A0A0',
      //   background: '#F2F2F2',
      // },

      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
