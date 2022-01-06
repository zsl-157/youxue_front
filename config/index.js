var path = require("path");

module.exports = {
  build:{
    env:{
      NODE_ENV:"production"
    },
    index:path.resolve(__dirname,'../elm/index.html'),
    assertRoot:path.resolve(__dirname,"../elm"),
    assertSubDirectory:path.resolve(__dirname,"static"),
    assertPublicPath:path.resolve(__dirname,"../elm/"),
    productionSourceMap:true,
    productionGzip:false,
    productionzipExtensions:['js','css'],
  },
  dev:{
    env:{
      NODE_ENV:'"development"'
    },
    port:8000,
    assertsSubDirectory:'static',
    assertPublicPath:'/',
    context:[
      '/course',
      '/v1',
    ],
    proxypath:'http://youxue365.com',
    cssSourceMap:false
  }
}