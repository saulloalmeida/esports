/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        "nlw-gradient":
          "linear-gradient(89.86deg, #9572FC 5%, #43E7AD 90%, #E1D55D 5%)",
        "nlw-gradient-game":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
      },
    },
  },
  plugins: [],
};
