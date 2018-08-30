module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.js'),
    require('postcss-to-css-vars')({
      theme: './tailwind.js',
      exclude: ['options', 'modules', 'plugins'],
      prefix: 'KF',
      vocab: {
        mt: 'margin',
        mr: 'margin',
        mb: 'margin',
        ml: 'margin',
        mx: 'margin',
        my: 'margin',

        pt: 'padding',
        pr: 'padding',
        pb: 'padding',
        pl: 'padding',
        px: 'padding',
        py: 'padding',
      },
    }),
  ],
};
