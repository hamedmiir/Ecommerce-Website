module.exports = (router, productsLoader) => {
    router.get('/', async ctx => {
        const products = await productsLoader.all()
        ctx.state.model = {
            products: products
        }
        await ctx.render('home');
    })
}