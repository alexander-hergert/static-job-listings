/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(180, 29%, 50%)",
        neutral: {
          background: "hsl(180, 52%, 96%)",
          "filter-tablets": "hsl(180, 31%, 95%)",
          dark: "hsl(180, 8%, 52%)",
          "very-dark": "hsl(180, 14%, 20%)",
        },
      },
    },
  },
  plugins: [],
};
