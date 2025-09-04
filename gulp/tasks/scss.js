// gulp/tasks/scss.js
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
// import groupCssMediaQueries from 'gulp-group-css-media-queries'; // временно выключим
import gulpIf from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';

const sass = gulpSass(dartSass);
const isProd = process.env.NODE_ENV === 'production';
const isCI = !!process.env.CI;

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: !isProd })
    // в CI лучше без notify, чтобы не падать на notify-send
    .pipe(app.plugins.plumber(isCI ? undefined : app.plugins.notify.onError({
      title: 'SCSS',
      message: 'Error: <%= error.message %>'
    })))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(sass.sync({ outputStyle: 'expanded' }).on('error', function(err) {
      console.error('[SASS ERROR]\n', err.formatted || err.message);
      this.emit('end'); // чтобы gulp показал лог и не «умирал» молча
    }))
    // .pipe(groupCssMediaQueries()) // ← отключено для диагностики
    .pipe(autoprefixer({ grid: true, overrideBrowserslist: ['last 3 versions'], cascade: false }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(app.gulp.dest(app.path.build.css));
    // .pipe(app.plugins.browsersync.stream()) // в CI не нужен
};
