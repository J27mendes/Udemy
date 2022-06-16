const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('ts.config.json')

function transformacaoTS(){
    return ts.tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)