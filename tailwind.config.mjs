/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#666666",
        border: "#333333",
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333333",
        success: "#0070F3",
        error: "#FF0000",
        warning: "#F5A623",
        violet: "#7928CA",
        cyan: "#79FFE1",
      },
      boxShadow: {
        vercel: "0 4px 14px 0 rgb(0 0 0 / 10%)",
      },
    },
  },
  plugins: [],
};
