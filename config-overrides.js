const { override, fixBabelImports, addWebpackAlias, adjustStyleLoaders, addPostcssPlugins, addWebpackPlugin, overrideDevServer } = require('customize-cra');
const path = require('path');
const resolve = _path => path.resolve(__dirname, _path);
const QiniuWebpackPlugin = require('wnl-qiniu-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// 跨域配置
const devServerConfig = () => config => {
	return {
		...config,
		// 服务开启gzip
		compress: true,
		proxy: {
			'/api': {
				target: 'http://192.168.2.18:3000/',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/api',
				},
			}
		}
	}
}

// 打包输出配置
const addCustomize = () => config => {
	const paths = require('react-scripts/config/paths');
	paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist');
	config.output.path = path.join(path.dirname(config.output.path), 'dist');
	return config
}

module.exports = {
	webpack: override(
		fixBabelImports("import", {
			libraryName: 'antd-mobile',
			style: 'css',
		}),
		fixBabelImports("lodash", {
			libraryDirectory: "",
			camel2DashComponentName: false
		}),
		addWebpackAlias({
			'@': path.resolve(__dirname, '.', 'src')
		}),
		adjustStyleLoaders(rule => {
			if (rule.test.toString().includes('scss')) {
				rule.use.push({
					loader: require.resolve('sass-resources-loader'),
					options: {
						resources: [resolve("./src/assets/theme.scss")]
					}
				});
			}
		}),
		addPostcssPlugins([require("postcss-px2rem")({ remUnit: 37.5 })]),
		process.env.NODE_ENV === 'production' && addWebpackPlugin(new QiniuWebpackPlugin()),
		process.env.NODE_ENV === 'production' && addWebpackPlugin(
			new UglifyJsPlugin({
				// 开启打包缓存
				cache: true,
				// 开启多线程打包
				parallel: true,
				uglifyOptions: {
					// 删除警告
					warnings: false,
					// 压缩
					compress: {
						// 移除console
						drop_console: true,
						// 移除debugger
						drop_debugger: true
					}
				}
			})
		),
		addCustomize()
	),
	devServer: overrideDevServer(
		devServerConfig()
	),
};
