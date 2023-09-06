import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        clr1: '#e4a816',
        clr2: '#1994da',
        clr3: '#e86352',
        clr4: '#8f8f8f',
        clr5: '#5bb544',
      },
    },
  },
  plugins: [],
};
export default config;
