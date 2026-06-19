/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "forest-green": "#166534",
        "lime-green": "#22c55e",
        amber: "#f59e0b",
        "slate-light": "#f8fafc",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #166534 0%, #22c55e 100%)",
        "gradient-card":
          "linear-gradient(135deg, rgba(22, 101, 52, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
