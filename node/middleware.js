//middleware pattern (chain of responsability)
/*const passo1 = (ctx, next) => {
    ctx.valor1 = 'middl1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'middl2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'middl3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}
const ctx = {}
exec(ctx,  passo2, passo3)
console.log(ctx)*/