let mix = require('laravel-mix');
require('dotenv').config();

mix.disableNotifications();

mix.setPublicPath('public');

mix.js('resources/js/main.js', 'public/js');

mix.sass('resources/sass/main.scss', 'public/css');

mix.copy('resources/images', 'public/images');

mix.browserSync({
    proxy: process.env.APP_URL,
    host: 'klpod221.local',
    open: false,
    files: [
        '*.php',
        'resources/js/*.js',
        'resources/sass/*.scss',
        'resources/images/*'
    ]
});