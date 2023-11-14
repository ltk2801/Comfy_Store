/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        cupcake: {
          ...require("daisyui/src/theming/themes")["[data-theme=cupcake]"],
          neutral: "#97a2b2",
          ".btn-pagination-hover": {
            "background-color": "#65b6ba",
            "border-color": "#65b6ba",
          },
        },
      },
      {
        dracula: {
          ...require("daisyui/src/theming/themes")["[data-theme=dracula]"],
          ".btn-pagination-hover": {
            "background-color": "#d66da8",
            "border-color": "#d66da8",
          },
        },
      },
    ],
  },
};
