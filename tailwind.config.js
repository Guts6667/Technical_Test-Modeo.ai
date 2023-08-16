/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#ffffff",
      secondary: "#111111",
      tertiary: "#f54d27",
      bgModeo: "rgba(255, 255, 255, 0.1)",
    },
    backgroundColor: {
      primary: "#ffffff",
      secondary: "#111111",
      tertiary: "#f54d27",
      bgModeo: "rgba(255, 255, 255, 0.1)",
    },
    borderColor: {
      primary: "#ffffff",
      secondary: "#111111",
      tertiary: "#f54d27",
      bgModeo: "rgba(255, 255, 255, 0.1)",
    },
    plugins: [],
  },
};
