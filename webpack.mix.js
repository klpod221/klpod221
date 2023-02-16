let mix = require('laravel-mix');
require('dotenv').config();

mix.disableNotifications();

mix.setPublicPath('public');

mix.js('app/resources/js/main.js', 'public/js');

mix.sass('app/resources/sass/main.scss', 'public/css');

mix.copy('app/resources/images', 'public/images');

mix.copy('app/resources/lib', 'public/lib');

mix.browserSync({
    proxy: process.env.APP_URL,
    host: 'klpod221.local',
    open: false,
    files: [
        '*.php',
        'app/resources/js/*.js',
        'app/resources/sass/*.scss',
        'app/resources/images/*',
        'app/resources/lib/*',
        'app/**/*.php'
    ]
});