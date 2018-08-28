module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.js'),
    require('postcss-to-css-vars')({
      theme: './tailwind.js',
      exclude: ['options', 'modules', 'plugins'],
      prefix: 'KF',
    }),
  ],
};
