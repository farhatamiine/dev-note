/** @type {import('tailwindcss').Config} */

module.exports = {
    mode: "jit",
    content: [
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "sans": ["Albert Sans", "sans-serif",]
            },
        },
    },
    plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
