import type { Config } from "tailwindcss";

export default <Config>{
  content: ["./components/**/*.{vue,js,ts}", "./pages/**/*.vue"],
  theme: {
    extend: {
        colors: {
            darkslate: "#2C3E50", 
            warmgray: "#6E7A8A", 
            background: "#F9F9F9", 
            accent1: "#F3C1C6",
            accent2: "#C1DFF0",
          },
    },
  },
  plugins: [],
};
