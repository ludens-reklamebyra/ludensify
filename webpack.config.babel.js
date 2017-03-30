import webpack from 'webpack'
import path from 'path'

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080')
    sources.push('webpack/hot/only-dev-server')
  }
  return sources
}

module.exports = {
	entry: {
    main: getEntrySources([
      './src/demo.js'
    ])
  },
	module: {
		rules: [{
			test: /\.js?$/,
			loader: 'babel-loader',
			include: [
				path.resolve(__dirname, "src")
			]
		}]
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'demo'),
		publicPath: 'http://localhost:8080/'
	},
	devServer: {
		contentBase: "./demo",
		noInfo: true,
		hot: true,
		inline: true
	}
}
