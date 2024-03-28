module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: '#FF782D',
        gray: '#555555',
        lightgray: '#EAEAEA',
        footer: '#F5F5F5',
    },
    fontWeight: {
        med: '550',
}
    },
  },
  plugins: [
    require('flowbite/plugin')
]
};
