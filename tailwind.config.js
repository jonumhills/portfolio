/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      width: {
        "2/5": "60%",
      },
    },
    fontFamily: {
      serif: "Times New Roman",
    },
  },
  plugins: [require("flowbite/plugin")],
};
