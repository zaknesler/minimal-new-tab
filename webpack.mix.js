require('laravel-mix-purgecss')

const mix = require('laravel-mix')
const tailwind = require('tailwindcss')

mix.setPublicPath('build')
  .less('src/less/app.less', 'build/css')
  .js('src/js/app.js', 'build/js')
  .options({
    postCss: [
      tailwind('./tailwind.js'),
    ]
  })

if (mix.inProduction()) {
  mix.purgeCss({
    folders: ['build', 'src']
  })
}
