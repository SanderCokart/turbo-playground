/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@repo/ui/preset")],
  content: ["../../packages/ui/src/**/*.tsx", "./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
};
