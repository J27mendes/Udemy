const gulp = require('gulp')
//const series = gulp.series
const GulpClient = require('gulp')
const {series, parallel} = require('gulp')

const antes1 = cb => {
    console.log('Tarefa antes1')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa antes2')
    return cb()
}


function copiar(cb){
    //gulp.src(['pastaA/arquivos1.txt', 'pastaA/arquivos2.txt'])
    gulp.src('pastaA/**/*.txt')
    .pipe(gulp.dest('pastaB'))
    //.pipe(imagempelametade()) apenas um exemplo que é possivel transformar
    //console.log('tarefa de copiar')
    return cb()
}

const fim = cb => {
    console.log('Tarefa final')
    return cb()
}

module.exports.default = series(
    //parallel(antes1, antes2),
    antes1,
    copiar,
    fim
    )