const CopyWebpackPlugin = require('copy-webpack-plugin')
const ZipPlugin = require('zip-webpack-plugin')
const path = require('path')

// Generate pages object
//生成页面对象
const pagesObj = {};
['popup', 'options'].forEach(name => {
	pagesObj[name] = {
		entry: `src/${name}/index.js`,
		template: 'public/index.html',
		filename: `html/${name}.html`
	}
})
const assets = ['assets', 'api','utils'].map(v => {
	return {
		from: path.resolve(`src/${v}`),
		to: path.resolve(`dist/${v}`)
	}
})
// 生成manifest文件
const manifest = {
		from: path.resolve('src/manifest.production.json'),
		to: `${path.resolve('dist')}/manifest.json`
	}

const plugins = [
	CopyWebpackPlugin([manifest, ...assets])
]

// 开发环境将热加载文件复制到dist文件夹
// if (process.env.NODE_ENV !== 'production') {
//   plugins.push(
//     CopyWebpackPlugin([{
//       from: path.resolve("src/utils/hot-reload.js"),
//       to: path.resolve("dist")
//     }])
//   )
// }

// 生产环境打包dist为zip
if (process.env.NODE_ENV === 'production') {
	plugins.push(
		new ZipPlugin({
			path: path.resolve('dist'),
			filename: 'dist.zip'
		})
	)
}

module.exports = {
	pages: { //新增popup、options页面，照着格式抄
		"popup":{ entry: `src/popup/index.js`, template: 'src/popup/index.html', filename: `html/popup.html` },
		"music":{ entry: `src/options/music/index.js`, template: 'src/options/juejin/index.html', filename: `html/music.html` },
	},
	// // 生产环境是否生成 sourceMap 文件
	productionSourceMap: false,

	configureWebpack: {
		devtool: 'inline-source-map', // 不启用sourceMap
		entry: { //新增content页面，照着格式抄
			'juejin': path.resolve('src', 'content/juejin/index.js'),
			'background': path.resolve('src', 'background/background.js')
		},
		output: {
			filename: 'js/[name].js'
		},
		plugins: plugins
	},
	css: {
		extract: {
			filename: 'css/[name].css'
			// chunkFilename: 'css/[name].css'
		}
	},

	chainWebpack: config => {
		// 处理字体文件名，去除hash值
		const fontsRule = config.module.rule('fonts')

		// 清除已有的所有 loader。
		// 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
		fontsRule.uses.clear()
		fontsRule.test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i).use('url').loader('url-loader').options({
			limit: 1000,
			name: 'fonts/[name].[ext]'
		})

		// 查看打包组件大小情况
		if (process.env.npm_config_report) {
			config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
		}
	}
}