// tailwind.config.js

/** @type {import('tailwindcss').Configuration} */
const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

export default config;
