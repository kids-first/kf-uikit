module.exports = {
    plugins: [
        require('postcss-easy-import'),
        require('postcss-for'),
        require('postcss-nested'),
        require('postcss-nested-props'),
        require('tailwindcss')('./tailwind.js'),
        require('autoprefixer')({grid: 'autplace'}),
        // require('postcss-to-css-vars')({
        //   theme: './tailwind.js',
        //   exclude: ['options', 'modules', 'plugins'],
        //   prefix: 'KF',
        //   vocab: {
        //     mt: 'margin',
        //     mr: 'margin',
        //     mb: 'margin',
        //     ml: 'margin',
        //     mx: 'margin',
        //     my: 'margin',

        //     pt: 'padding',
        //     pr: 'padding',
        //     pb: 'padding',
        //     pl: 'padding',
        //     px: 'padding',
        //     py: 'padding',
        //   },
        // },
    ],
};
