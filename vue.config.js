const { defineConfig } = require('@vue/cli-service')
module.exports = {
    pages: {
        index: {
            // entry for the page
            entry: 'src/main.js',
            title: '가계부'
        }
    },
    devServer:{
        port:9001,
        proxy:{
            '/api':{
                // target:'http://newkayak.iptime.org:50004/',
                target:'http://192.168.0.9:8080/',
                changeOrigin:true
            },
            '/admin':{
                // target:'http://newkayak.iptime.org:50004/',
                // target:'http://localhost:8080/',
                target:'http://192.168.0.9:8080/',
                changeOrigin:true
            }
        }
    },
}
