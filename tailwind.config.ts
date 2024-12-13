import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    prefix: 'nextui',
    defaultTheme: 'dark',
    defaultExtendTheme: 'dark',
    layout: {
      borderWidth:{
        medium:'1px'
      },
      fontSize:{
        tiny: '14px',
        small:'14px',
      },
    },
    themes: {
      dark: {
        layout: {},
        colors: {
          foreground:{
            // 500:'#FFF',
            DEFAULT:'#000000',
          },
          background:{
            DEFAULT:'#F4F4F4',
          },
          
          default: {
            // 100: '#fff',
            // 200: '#fff',
            //  300: '#3b9',
            // 400: '#3bb',
            // 500: '#cd1',
            // 600: '#3ca1',
            // 700: '#3cb9',
            // 800: '#3ad9',
            // 900: '#cd9',
            // DEFAULT:'#0075CD',
          },
          
          content1:{
            // 50: '#3af',
            // 100: '#acb',
            // 200: '#3b1',
            // 300: '#3b9',
            // 400: '#3bb',
            // 500: '#cd1',
            // 600: '#3ca1',
            // 700: '#3cb9',
            // 800: '#3ad9',
            // 900: '#cd9',
            DEFAULT: '#FFFFFF', 
          },
        },
      },
    },
  })],
};
export default config;
