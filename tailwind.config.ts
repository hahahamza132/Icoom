import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./animation/**/*.{js,ts,jsx,tsx,mdx}",
    "./container/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f1f1f1",
        primary: "#f1f1f1",
        telecomBlue: "#0066cc",
        telecomDark: "#003366",
        telecomLight: "#e6f2ff",
        telecomAccent: "#00ccff",
        secondry: "#212121",
        marquee: "#0066cc",
        about: "#f1f1f1"
      },
      backgroundImage: {
        'telecom-gradient': 'linear-gradient(135deg, #0066cc 0%, #003366 100%)',
        'telecom-light': 'linear-gradient(135deg, #f1f1f1 0%, #e6f2ff 100%)',
      },
      boxShadow: {
        'telecom': '0 10px 40px rgba(0, 102, 204, 0.1)',
        'telecom-lg': '0 20px 60px rgba(0, 102, 204, 0.15)',
      }
    },
    fontFamily: {
      FoundersGrotesk: ["FoundersGrotesk", "sans-serif"],
      NeueMontreal: ["NeueMontreal", "sans-serif"],
    },
    screens: {
      xm: { max: "400px" },
      sm: { min: "401px", max: "768px" },
      md: { min: "769px", max: "1024px" },
      lg: { min: "1025px", max: "1490px" },
      xl: { min: "1491px" },
    }
  },
  plugins: [],
};
export default config;
