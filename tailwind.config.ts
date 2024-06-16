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
        'color-black': '#0F0F0F',
        'color-dark-grey': '#303030',
        'color-ligh-grey': '#999999',
        'color-white': '#F5F5F5',
      },
    },
  },
  plugins: [],
};
export default config;
