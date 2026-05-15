import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#1a1a1a',
          white: '#ffffff',
          offwhite: '#f8f7f4',
          accent: '#2c2c2c',
        },
      },
      maxWidth: {
        content: '1100px',
      },
    },
  },
  // Disable Tailwind's CSS reset so it doesn't override Squarespace's base styles
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}

export default config
