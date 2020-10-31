// webpack的配置表
module.exports = {
    lintOnSave: false,

    devServer: {

        overlay: {

            warning: false,

            errors: false

        }

    },
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'http://mall-pre.springboot.cn',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    },

    lintOnSave: false
}