const mix = require('laravel-mix');
require('laravel-mix-nunjucks')
require('laravel-mix-purgecss');

mix.sass('src/assets/scss/app.scss', 'assets/css')
    .sass('src/assets/scss/bootstrap.scss', 'assets/css')
    .js('src/assets/js/app.js', 'assets/js')
    .setPublicPath('dist')
    .options({
        processCssUrls: false
    }).purgeCss();;
   
mix.njk('src/', 'dist/', {
    ext: '.html',
    marked: null,
    watch: true,
    block: 'content',
    envOptions: {
        watch: true,
        noCache: true
     },
    manageEnv: (nunjucks) => {},
})

mix.browserSync('ps5-landing.test');