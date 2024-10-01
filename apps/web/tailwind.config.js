/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@repo/ui/preset")],
  content: ["../../packages/ui/src/**/*.tsx", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--geist-sans)"],
        mono: ["var(--geist-mono)"],
      },
    },
  },
  plugins: [],
};
