/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,png}',
		'node_modules/flowbite-react/lib/esm/**/*.js',
	],
	theme: {
		extend: {
			backgroundImage: {
				'main': "url('/src/rm378-09.jpg')",
			}
		},
	},
	plugins: [
		require('flowbite/plugin'),
	],
  }