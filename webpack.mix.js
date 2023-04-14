const mix = require('laravel-mix');

mix.disableNotifications();

mix.setPublicPath('public');

mix.js('resources/js/main.js', 'public/js/script.js')
    .sass('resources/sass/main.scss', 'public/css/style.css');

mix.copyDirectory('resources/images', 'public/images');

mix.copyDirectory('shared', 'public/shared');

mix.copy('index.html', 'public/index.html');

mix.browserSync({
    proxy: 'http://klpod221.local',
    files: [
        '**/*.html',
        'public/js/*.js',
        'public/css/*.css',
        'public/images/**/*',
    ],
    open: false,
    notify: false
});

