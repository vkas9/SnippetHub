import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  daisyui: {
    themes: ["black"],
  },
  plugins: [
    require("tailwindcss-animate"),
    require("daisyui"),
  ],
}

export default config
