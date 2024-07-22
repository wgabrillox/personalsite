module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        b: "box-shadow: 0px 15px 10px -20px rgb(17, 17, 17)",
      },
      colors: {
        customBlue: "#4047f0",
      },
    },
  },
  plugins: [],
};
