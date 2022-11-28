/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,png}'],
  theme: {
    extend: {
			backgroundImage: {
        'main': "url('/src/rm378-09.jpg')",
      }
		},
  },
  plugins: [],
}
