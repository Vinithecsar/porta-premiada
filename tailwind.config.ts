import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      lightgreen: '#7aa944',
      darkgreen: '#5c7e32',
    },
    extend: {
      width: {
        '100': '6.25 rem',
        '25': '1.563 rem',
        '90': '5.625 rem',
        '60': '3.75 rem',
      },
      height: {
        '100': '6.25 rem',
        '25': '1.563 rem',
        '90': '5.625 rem',
        '60': '3.75 rem',
      },
    },
    corePlugins: {
      preflight: false,
    },
  },
  plugins: [],
};
export default config;
