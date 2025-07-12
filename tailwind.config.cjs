/** @type {import('tailwindcss').Config} */
require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
    plugins: [require('flowbite/plugin'), require('@tailwindcss/typography')],
};
