/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize:{
        'regular': 'clamp(20px, 4vw, 24px)',
        // 'heading': 'clamp(32px, 5vw, 50px)',
        'heading': 'clamp(42px, 6vw, 70px)',
        'para': 'clamp(16px, 1vw, 28px)',
      },
      fontFamily:{
        'custom':"'Arapey'",
        'custom2':"Arial",
      }
    },
  },
  plugins: [],
};
