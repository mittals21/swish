/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: { primary: "#F9F9F9", secondary: "#DB3022" },
      fontFamily: {
        mb: ["mb", "sans-serif"],
        mbi: ["mbi", "sans-serif"],
        meb: ["meb", "sans-serif"],
        mel: ["mel", "sans-serif"],
        ml: ["ml", "sans-serif"],
        mm: ["mm", "sans-serif"],
        m: ["m", "sans-serif"],
        msb: ["msb", "sans-serif"],
        msbi: ["msbi", "sans-serif"],
      },
    },
  },
  plugins: [],
}
