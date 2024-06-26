/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      serif: "Times New Roman",
    },
  },
  plugins: [require("flowbite/plugin")],
};
