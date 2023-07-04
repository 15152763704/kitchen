// const CompressionWebpackPlugin = require('compression-webpack-plugin')  
// const productionGzipExtensions = ['js', 'css']  

// module.exports = {
// 	configureWebpack: {
// 	    plugins: [  
// 	        new CompressionWebpackPlugin({  
// 	            filename: '[path].gz[query]',  
// 	            algorithm: 'gzip',  
// 	            test: /\.(js|css|html)?$/,//匹配文件名  
// 	            threshold: 10240,//对10K以上的数据进行压缩  
// 	            minRatio: 0.8,  
// 	            deleteOriginalAssets:false,//是否删除源文件  
// 	        })  
// 	    ],
// 	} 
// }
module.exports = {
	pluginOptions: {  
	    webpackBundleAnalyzer: {  
	      openAnalyzer: true
	    }  
	},
	/* configureWebpack: () => {
		if (isDev && isMp) {
			return {
				optimization: {
					minimize: true,
				},
			}
		}
	} */
}