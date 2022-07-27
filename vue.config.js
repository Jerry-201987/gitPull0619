let path = require('path')
function resolve(url){
    return path.resolve(__dirname, url)
}
module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                '~~': resolve('src/page'),
                '~': resolve('src/components')
            }
        }
    },
    // chainWebpack: config => {
    //     config.resolve.alias
    //         .set('@', resolve('src'))
    //         .set('~', resolve('src/components'))
    //         .set('~~', resolve('src/page'))
    // },
    devServer: {
        open: true,
        port: 8888,
        contentBase: path.join(__dirname, 'static')
    }
}