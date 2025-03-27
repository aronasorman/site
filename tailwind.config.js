module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md", "./layouts/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lora', 'Palatino Linotype', 'Book Antiqua', 'New York', 'DejaVu serif', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
