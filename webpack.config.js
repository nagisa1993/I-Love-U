const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/index.js',
    devtool: 'source-map',
	output: {
		filename: './dist/i-love-u.js'
        //,
		//libraryTarget: 'umd',
		//library: 'love'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader", // Do not use "use" here
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader?sourceMap', 
                        'sass-loader?sourceMap',
                        'postcss-loader'
                    ]
                })
            }
		]
	},
    plugins: [
        new ExtractTextPlugin("./dist/style.css")
    ]
}