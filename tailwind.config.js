/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'sheep': "url('/images/sheep.webp')",
        'cat': "url('/images/cat.jpeg')",
        'lemur': "url('/images/lemurs.jpeg')",
        'penguin': "url('/images/penguins.jpeg')",
        'puppy': "url('/images/puppy.jpeg')"
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
