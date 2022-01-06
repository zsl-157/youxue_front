var path = require("path");
var config = require("../config")
var projectRoot = path.resolve(__dirname,"../")

module.exports = {
  entry:{
    app:'./src/main.js'
  },
  output:{
    path:config.build.assertRoot,
    publicPath:process.env.NODE_ENV=="production"?config.build.assertPublicPath:config.dev.assertPublicPath,
    filename:'[name].js'
  },
  resolve:{
    extensions:['','.js','.vue','.less','.css','scss'],
    fallback:path.resolve(__dirname,'../node_modules'),
    alias:{
      "vue$":"vue/dist/vue.common.js",
      "src":path.resolve(__dirname,"../src"),
      "assets":path.resolve(__dirname,"../src/assets"),
      "components":path.resolve(__dirname,"../src/components")
    }
  },
  resolveLoaders:{
    fallback:path.resolve(__dirname,"../node_modules")
  },
  module:{
    loaders:[
      {
        test:/\.vue$/,
        loader:"vue"
      },
      {
        test:/\.js$/,
        loader:"babel",
        include:projectRoot,
        exclude:/node_modules/
      },
      {
        test:/\.json$/,
        loader:"json"
      },
      {

      }
    ]
  }
}