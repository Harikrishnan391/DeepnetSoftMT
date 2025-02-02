import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        kelly: ['Kelly Slab', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
