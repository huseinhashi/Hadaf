import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-light': 'radial-gradient(circle at center, rgba(242, 101, 34, 0.1) 15%, rgba(255, 255, 255, 1) 60%)',
        'gradient-dark': 'radial-gradient(circle at center,rgba(46, 49, 146, 0.8) 0%,rgba(30, 33, 102, 0.9) 100%)',
        'hadaf-gradient': 'linear-gradient(135deg, #F26522 0%, #2E3192 100%)',
        'hadaf-gradient-light': 'linear-gradient(135deg, #FF7A3D 0%, #4A4DB8 100%)',
      },
      colors: {
        // Hadaf Industrial Cup Theme - Orange & Dark Blue
        hadaf: {
          orange: '#F26522',           // Primary orange from logo
          'orange-light': '#FF7A3D',   // Lighter orange variant
          'orange-dark': '#D54A0F',   // Darker orange variant
          blue: '#2E3192',            // Primary dark blue from logo
          'blue-light': '#4A4DB8',    // Lighter blue variant
          'blue-dark': '#1E2166',     // Darker blue variant
          white: '#FFFFFF',           // White accents from logo
        },
        // Legacy theme colors updated to match Hadaf
        theme: {
          from: '#2E3192',            // hadaf blue
          via: '#F26522',             // hadaf orange
          to: '#1E2166',              // hadaf blue-dark
          hover: '#D54A0F',           // hadaf orange-dark
          border: '#E5E7EB',          // neutral border
          accent1: '#F26522',         // hadaf orange
          accent2: '#2E3192',         // hadaf blue
        },
        lightGray: 'rgba(242, 242, 242, 0.8)',
        lightred: '#f9e9e9',
        navbg: "#f2f2f2",
        ivory: '#FFFFF0',
        pearl: '#FCFCF7',
        marble: '#F2F8FC',
        aliceblue: '#F0F8FF',
        offwhite: '#FAF9F6',
        lavender: '#F4F1F8',
        eggwhite: '#FDFDFD',
        coldsteel: '#F8F7F4',
        parchment: '#FBF5DF',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [],
};

export default config;
